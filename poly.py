from operator import itemgetter

def checkDelay(lst, currentTime):
        return (currentTime) > lst[2]

# def sortNodes(arr):
#     # buble Sort methode
#     length = len(arr)
#     j = 0
#     while j < length - 1:
#         if (arr[j][2] > arr[j + 1][2]):
#             temp = arr[j]
#             arr[j] = arr[j + 1]
#             arr[j + 1] = temp
#             j = -1
#         j += 1
#     return arr

def polynomialAlgo(lst):
    currentTime = 0
    removedProcesss = []
    solution = [None]*len(lst)
    sortedNodes = sorted(lst,key=itemgetter(2))
    for i in range(0, len(sortedNodes)):
        solution[i] = sortedNodes[i]
        currentTime += sortedNodes[i][1]
        if not checkDelay(sortedNodes[i],currentTime):
            pass
        else:
            max = 0
            maxId = 0
            for j in range(0, i+1, 1):
                if solution[j] != None:
                    if solution[j][1] > max:
                        max = solution[j][1]
                        maxId = j
            removedProcesss.append(solution[maxId])
            currentTime -= solution[maxId][1]
            solution[maxId] = None

    solution = list(filter(lambda a: a != None, solution))
    return {"min":len(removedProcesss),"sequence":solution+removedProcesss}