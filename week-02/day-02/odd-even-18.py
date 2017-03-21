# Write a program that reads a number form the standard input,
# Than prints "Odd" if the number is odd, or "Even" it it is even.

print ('Please, write a number:')
number = int(input())

if number % 2 == 0:
    print('This is an even number: ', number)
else:
    print('This is an odd number: ', number)
