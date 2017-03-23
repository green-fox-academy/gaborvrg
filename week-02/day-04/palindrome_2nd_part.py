# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']

def create_palindrome(text):
    print(text[::-1])


create_palindrome(input())