import time
import random



def sortNodes(arr):
    # buble Sort methode
    length = len(arr)
    j = 0
    while j < length - 1:
        if (arr[j][2] > arr[j + 1][2]):
            temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            j = -1
        j += 1
    return arr


#__________________________ les structures de voisinage_________________

#twopt
def swap(li):
    I=0
    J = 0

    while I==J :
        I = random.randint(0, len(li) - 1)
        J = random.randint(0, len(li) - 1)
    i=min(I,J)
    j=max(I,J)
    
    t=li.copy()
    tmp=t[i]
    t[i]=t[j]
    t[j]=tmp
    return t

#N2
def insertion(li):
    I=0
    J = 0

    while I==J :
        I = random.randint(0, len(li) - 1)
        J = random.randint(0, len(li) - 1)
    i=min(I,J)
    j=max(I,J)
    print(" je suis insertion")

    l=li.copy()

    b=l.pop(i-1)
    l.insert(j,b)
    return l
#N3 2-opts
def twopt(li):
    I=0
    J = 0
    m=[]
    while I==J :
        I = random.randint(0, len(li) - 1)
        J = random.randint(0, len(li) - 1)
    i=min(I,J)
    j=max(I,J)
    

    m = m + li[:i]
    n = li[i:j].copy()
    n.reverse()
    m = m + n
    m = m + li[j:]
    
    
    return m

#------------fonction objectif--------------------
def f(x):
   
    c=0
    E=0
    T=0             
    alpha=0
    beta=0
    p=0
    for i in range(len(x)):
        c=c+x[i][1]
        E=max(0,x[i][2]-c)
        T=max(0,c-x[i][2])
        alpha=x[i][3]
        beta=x[i][4]
        p = p + alpha*E+beta*T
        
        
    
    return p


N=[twopt,swap,twopt]

def VND(li,N):
    x0=li.copy()
    
   
    timelimit=0.1
    start=time.time()
    stop2=True
    while stop2:
        l=0
        while l<len(N):
            
            if (time.time()-start)>timelimit :  
                stop2=False
                break
            x1=N[l](x0)
            if f(x1)<f(x0):
                x0=x1.copy()
                l=0
            else:
                l+=1
           
            
    return x0  

def VNS(li,N,temps):
    vx=[]
    vx=li.copy()
   
   
    timelimit2=temps
    start2=time.time()
    x2=[]
    stop1=True
    while stop1:
        k=0
        while k<len(N):    
            
            if (time.time()-start2)>timelimit2 :  
                stop1=False
                break
            x2=N[k](li)
            vndx=VND(x2,N)
            if f(vndx)<f(vx):
                vx=vndx.copy()
               
                k=0
            else:
                k=k+1
            
    return vx

def MetaAlgo2(data):
        process=sortNodes(data)
        v=VNS(process,N,1)
        return {"min":f(v),"sequence":v}

