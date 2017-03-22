# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

print('Number, please: ')
number = int(input())

for x in range(0, number):
    print(" " * (number - x - 1) + "*" * (2 * x + 1))


