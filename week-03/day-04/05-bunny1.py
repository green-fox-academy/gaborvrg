# We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the 
# bunnies recursively (without loops or multiplication).

def bunnies_ear(numbers):

    if numbers == 1:
        return 2
    else:
        return bunnies_ear(numbers - 1) + 2

print(bunnies_ear(5))