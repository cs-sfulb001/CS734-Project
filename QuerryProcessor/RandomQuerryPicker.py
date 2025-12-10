import random
numList = []
while len(numList) < 5:
    newNum = random.randint(1, 101093)
    repeat = False
    for x in numList:
        if x == newNum:
            repeat = True
    if not repeat:
        numList.append(newNum)

QuerryList = []
index = 0
with open("../queries.dev.tsv","r", errors='ignore') as infile:
        line = infile.readline()
        index+=1
        while line:
            for x in numList:
                 if x == index:
                    id = line.split()[0]
                    line = line[(len(id)+1):(len(line)-1)]
                    QuerryList.append(line)
            line = infile.readline()
            index += 1

for querry in QuerryList:
     print(querry)