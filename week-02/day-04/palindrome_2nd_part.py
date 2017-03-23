# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']

text = "akarmi"
alist = ""

for i in range(1, len(text) + 1):
    alist += text[(len(text) - i)]
print(text + alist)


#   otletek
#   a bemeneti listat ciklusba tenni es a teljes hosszara nezve 
#   3-asaval elkeydeni vizsgalni, majd tovabb lepni a kovetkezo harmasra
#   majd aztan emelni a vizsgalando string hosszt 4, 5, 6, stb hosszra
#   egeszen a megadott string hosszaig
#
#
#
#
#