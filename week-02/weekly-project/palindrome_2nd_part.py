# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']

text = "dog goat dad duck doodle nemeremen" #   add some input

# def pali()

alist = ""      #   make an empty variable
fullist = []    #   make an empty list


for i in range(0, len(text)):   #   for loop on length of the input and increase the size of the palindrome we're looking for
    for a in range(0,len(text)):    #   another loop for
        alist = (text[a : a + 3 + i])
        if alist == alist[::-1] and len(alist) >= i + 3:
            fullist.append(alist)


print(fullist)


#   otletek
#   a bemeneti listat ciklusba tenni es a teljes hosszara nezve 
#   3-asaval elkezdeni vizsgalni, majd tovabb lepni a kovetkezo harmasra
#   majd aztan emelni a vizsgalando string hosszat 4, 5, 6, stb hosszra
#   egeszen a megadott string hosszaig
#
#   atalakitani fugvennye!!!
#
#
#