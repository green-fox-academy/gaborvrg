# Write a program that reads a number from the standard input, then draws a
# diamond like this:
#
#
#    *
#   ***
#  *****
# *******
#  *****
#   ***
#    *
#
# The diamond should have as many lines as the number was

print('Number, please: ')
number = int(input())

for x in range(0, number):
    print(" " * (number - x - 1) + "*" * (2 * x + 1))


for x in range(0, number):
    print(" " * (number - x - 1) + "*" * (2 * x + 1))