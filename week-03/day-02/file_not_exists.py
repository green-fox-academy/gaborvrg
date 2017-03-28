# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.

def file_opener():

    try:   
        count = 0
        filename = input('Enter a filename :')
        my_file = open(filename)
        count = len(my_file.readlines())
        return(count)

    except FileNotFoundError:
        return(0)

print(file_opener())



# FileNotFoundError

# reversed-order.txt
