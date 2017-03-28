# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0

# try:
#     f = open(arg, 'r')
# except IOError:
#     print('cannot open', arg)

while True:
    try:
        number = int(input("Type an integer: "))
        print(10 / number)
        break

    except ZeroDivisionError:
        print("Don't type 0(zero), pls. Try again!")

    except ValueError:
        print("Don't type string, pls.  Try again!")




