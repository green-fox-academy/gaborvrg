# Write a recursive function that takes one parameter: n and counts down from n.

def count_down(number):
    if number == 0:
        return 0
    else:
        print(number)
        return count_down(number - 1)

count_down(10)

