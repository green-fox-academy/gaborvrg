# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def number_adder(number):

    if number == 0:
        return 0
    else:
        return number_adder(number -1) + number

print(number_adder(6))