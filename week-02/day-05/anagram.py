# Create a function named is anagram following your current language's style  zguide. It should take two strings and return a boolean value depending on whether its an anagram or not. #

print('First text: ')
first_text = input()
print('Second text: ')
second_text= input()


def anagram(text1, text2):

    if text1 == text2[::-1]:
        return True
    else:
        return False

print(anagram(first_text,second_text))


