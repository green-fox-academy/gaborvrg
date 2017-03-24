# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']



text = "dog goat Dad duck doodle nemEremen Avid diva"    #   add some input


def palindrome_searcher(text_input):    #    start the function


    checker = ""      #   make an empty variable
    palindrome_list = []    #   make an empty list


    for i in range(0, len(text_input)):                             #   1.
        for a in range(0,len(text_input)):                          #   2. 
            checker = text_input.lower()[a : a + 3 + i]             #   3.
            if checker == checker[::-1] and len(checker) >= i + 3:  #   4.
                palindrome_list.append(checker)                     #   5.
    return palindrome_list


result = palindrome_searcher(text)     #   call the function and put into the result variable
print(result)                          #   display the result





#   1.  for loop on length of the input 
#   2.  another loop to look for the palindrome
#   3.  we start with 3 character, and put the first 3,4,5,etc. character of the text in 'checker' and check every next 3,4,5,etc character in the next 'a' loops
#   4.  the comparison part of the code. if 'checker' equal with reverse 'checker' AND 'checker' bigger or equal with 3(it's because we talk about palindrome if the text is min. 3 character) 
#   5.  here we append the 'checker' string to last position of the 'palindrome_list' list




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