# Write a program that asks for 5 integers in a row,
# then it should print the sum and the average of these numbers like:
#
# Sum: 22, Average: 4.4

summ = 0
num_ints = 5


for x in range(num_ints):
    numbers = int(input())
    summ = numbers + summ


print('Sum: ', summ)
print('Average', summ / num_ints)

