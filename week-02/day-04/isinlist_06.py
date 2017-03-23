# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

test = [4, 8, 12, 16]

def numbercheck(lisst, find):
    out = False
    test_len = 0

    for l in lisst:
        for f in find:
            if l == f:
                test_len += 1               
                if test_len == len(find):
                    out = True
    return out

it_contains_all = numbercheck(listOfNumbers,test)

print(it_contains_all)

