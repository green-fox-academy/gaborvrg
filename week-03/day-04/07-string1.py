# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

text = "The xxx to yyy"


def string_change(input):
    print(input)

    if input == "":
        return input

    if input[0] == 'x':
        # print(input)
        return "y" + string_change(input[1:]) 

    else:
        # print(input)
        # print(input[0])
        return input[0] + string_change(input[1:]) 

print(string_change(text))