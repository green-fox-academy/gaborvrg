# - Write a function called `sum` that sum all the numbers
#   until the given parameter



def summ(number):
    for x in range(1,number):
        number = x + number
    print(number)


summ(5)