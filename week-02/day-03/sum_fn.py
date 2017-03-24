# - Write a function called `sum` that sum all the numbers
#   until the given parameter



# def summ(number):
#     for x in range(1,number):
#         number = x + number
#     print(number)


# summ(5)


# Tojas megoldasai

# n = 5

# out = 0

# for i in range(1, number + 1):
#     out += i

# print(out)

# fuggvenyben

number = 6

def sum(n):
    out = 0
    for i in range(1, n + 1):
        out += i
    return(out)  # amit visszatereskent behelyettesiti a number helyebe a 
                 # print(sum(number)) parancsba

print(sum(number))