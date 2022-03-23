def getLinesOfFile(file):
    f = open(file, "r")
    listOfLines = []
    for line in f:
        listOfLines.append(line.strip())

    f.close()
    return listOfLines

def getNewLines(possZip, sanDiegoZip):
    correctZips = []
    for sdZip in sanDiegoZip:
        for pZip in possZip:
            if (sdZip == pZip[0:5]):
                correctZips.append(pZip)

    return correctZips

def formatCorrectZips(correctZips):
    formattedZips = []
    for cZip in correctZips:
        parts = cZip.split(',')
        zipCode = parts[0]
        long = parts[1]
        lat = parts[2]
        newEntry = zipCode + ": " + "[" + long + "," + lat + "],"
        formattedZips.append(newEntry)

    return formattedZips

def main():
    possZip = getLinesOfFile("./possibleZip.txt")
    sanDiegoZip = getLinesOfFile("./sanDiegoZip.txt")
    correctZips = getNewLines(possZip, sanDiegoZip)
    formattedZips = formatCorrectZips(correctZips)
    formattedZips = sorted(formattedZips)
    for line in formattedZips:
        print(line)

main()
