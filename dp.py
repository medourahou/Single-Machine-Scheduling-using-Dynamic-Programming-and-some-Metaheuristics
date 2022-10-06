import itertools


def checkDelay1(lst, currentTime):
    if (lst[1] + currentTime) > lst[2]:
        return 1
    else:
        return 0

def checkDelay2(lst, currentTime):
    e = max(0,lst[2]-(currentTime+lst[1]))
    t = max(0,(currentTime+lst[1]) - lst[2])
    return lst[3]*e+lst[4]*t


def dynamicAlgo1(lst,results,sequence):
    min = 177272
    identifier = ",".join("'%s'" % a[0] for a in lst)
    if len(lst) != 0:
        for element in range(0, len(lst), 1):
            currentTime = 0
            modifiedList = lst[:element]+lst[element+1:]
            for index in range(0, len(modifiedList)):
                currentTime += list(modifiedList)[index][1]
            # claculating currentTime done
            identifierTemp = ",".join("'%s'" % a[0] for a in list(modifiedList))
            if identifierTemp in results.keys():
                res = checkDelay1(lst[element], currentTime) + results[identifierTemp]
            else:
                res = checkDelay1(lst[element], currentTime) + 0
            if res < min:
                min = res
                if identifierTemp in sequence.keys():
                    # print(sequence[identifierTemp])
                    sequence[identifier] = list(sequence[identifierTemp])+[lst[element]]
                else:
                    # print(modifiedList+lst[element])
                    sequence[identifier] = list(modifiedList)+[list(lst[element])]
        return min
    else:
        return 0


def dynamicAlgo2(lst,results,sequence):
    min = 177272
    identifier = ",".join("'%s'" % a[0] for a in lst)
    if len(lst) != 0:
        for element in range(0, len(lst), 1):
            currentTime = 0
            modifiedList = lst[:element]+lst[element+1:]
            for index in range(0, len(modifiedList)):
                currentTime += list(modifiedList)[index][1]
            # claculating currentTime done
            identifierTemp = ",".join("'%s'" % a[0] for a in list(modifiedList))
            if identifierTemp in results.keys():
                res = checkDelay2(lst[element], currentTime) + results[identifierTemp]
            else:
                res = checkDelay2(lst[element], currentTime) + 0
            if res < min:
                min = res
                if identifierTemp in sequence.keys():
                    # print(sequence[identifierTemp])
                    sequence[identifier] = list(sequence[identifierTemp])+[lst[element]]
                else:
                    # print(modifiedList+lst[element])
                    sequence[identifier] = list(modifiedList)+[list(lst[element])]
        return min
    else:
        return 0




def dynamicAlgoWrapper(probleme,data):
    if probleme==1:
        identifier = "" 
        results ={}
        sequence = {}
        for i in range(1, len(data) + 1, 1):
            sample = list(itertools.combinations(data, i))
            results = {k: v for k, v in results.items() if len(k.split(',')) ==i-1}
            sequence  = {k: v for k, v in sequence.items() if len(k.split(',')) ==i-1}
            for iteam in sample:
                identifier = ",".join("'%s'" % a[0] for a in iteam)
                results[identifier] = dynamicAlgo1(list(iteam),results,sequence)
        return {"min":results[identifier],"sequence":sequence[identifier]}
    elif probleme==2:
        identifier = "" 
        results ={}
        sequence = {}
        for i in range(1, len(data) + 1, 1):
            sample = list(itertools.combinations(data, i))
            results = {k: v for k, v in results.items() if len(k.split(',')) ==i-1}
            sequence  = {k: v for k, v in sequence.items() if len(k.split(',')) ==i-1}
            for iteam in sample:
                identifier = ",".join("'%s'" % a[0] for a in iteam)
                results[identifier] = dynamicAlgo2(list(iteam),results,sequence)
        return {"min":results[identifier],"sequence":sequence[identifier]}