# output = create_palindrome('pear')

# # print(output) # it prints: pearraep

# def create_palindrome(text):
#     print(text[::-1])


# create_palindrome(input())

# def create_palindrome(text):

text = "akarmi"
alist = ""

for i in range(1, len(text) + 1):
    alist += text[(len(text) - i)]
print(text + alist)


# create_palindrome(input())

# print()