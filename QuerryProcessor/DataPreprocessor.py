import sys
with open("Data/JsonCollection.json", "w") as outfile:
    outfile.write("[\n")
    with open("../collection.tsv","r", errors='ignore') as infile:
        line = infile.readline()
        while line:
            id = line.split()[0]        
            line = line[(len(id)+1):(len(line)-1)]
            outfile.write(" {\n")
            outfile.write(f"     \"id:\": \"{id}\",\n")
            outfile.write(f"     \"contents:\": \"{line}\",\n")
            nextLine = infile.readline()
            if nextLine:
                outfile.write(" },\n")
            else:
                outfile.write(" }\n")
            line = nextLine
    outfile.write("]")
