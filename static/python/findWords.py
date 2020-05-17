import sys


file = open("static/python/scrabble.txt")
dictionary = []
for line in file:
    dictionary.append(line.strip())

letterInput = sys.argv[1].upper()
letters = {}
for char in letterInput:
    if(char in letters): letters[char]+=1
    else: letters[char] = 1

wordDict = {}
for word in dictionary:
    possibleWord = True
    tempLetters = letters.copy()
    for char in word:
        if(char not in tempLetters or tempLetters[char]==0):
            possibleWord = False
            break
        tempLetters[char]-=1
    if(possibleWord):
        wordLen = str(len(word))
        if(wordLen in wordDict):
            count = 1
            while(True):
                if(str(count) not in wordDict[wordLen]):
                    wordDict[wordLen][str(count)] = word
                    break
                count+=1
        else:
            wordDict[wordLen] = {"1":word}


print(wordDict)
sys.stdout.flush()
