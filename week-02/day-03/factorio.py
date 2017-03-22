# - Create a function called `factorio`
#   that returns it's input's factorial


def factorio(fac):
    result = 1
    for x in range(1,fac):
        result *= x
    print(result)

factorio(5)