from pyserini.search.lucene import LuceneSearcher
import sys
lucene_bm25_searcher = LuceneSearcher.from_prebuilt_index('msmarco-v1-passage')
hits = lucene_bm25_searcher.search(sys.argv[1])
indexList = []
for i in range(10):
    indexList.append(hits[i].docid)
results = [""]*10
with open("../collection.tsv","r", errors='ignore') as infile:
        line = infile.readline()
        count = 0
        while line:
            id = line.split()[0]
            for i in range(10):
                if indexList[i] == id:
                    line = line[(len(id)+1):(len(line)-1)]
                    results[i] = line
                    count+=1
                    if count == 10:
                         break
            line = infile.readline()
ReturnValue = ""
for i in range(10):
        ReturnValue+=results[i]
        ReturnValue+="|"
print("{\"result\" :\""+ReturnValue+"\"}")