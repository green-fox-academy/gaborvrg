# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

text = "The axa to yay xoxo"


def string_change(input):
    # print(input)

    if input == "":
        return input

    # if input[0] :
    #     # print(input)
    #     return "" + string_change(input[1:]) 

    else:
        #print(input)
        # print(input[0])
        return input[0] + " * " + string_change(input[1:]) 

print(string_change(text))