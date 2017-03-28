# Create a method that returns the five most frequent 
# lottery number in a pretty table format

# def five_most_frequent():
#     pass

my_file = open("otos.txt", "r")

lottery_dict = dict()

# print(lottery_dict)

for line in my_file:

    line_list = my_file.readline().rstrip().split(";")
    # print(line_list[12:16])
    for number in line_list[12:16]:
        # print(number)
        if number not in lottery_dict:
            lottery_dict[number] = 1 
        else:
            lottery_dict[number] += 1


print(sorted(lottery_dict.values()))

# print(lottery_dict)
my_file.close()



# for key in range(1, 90):
#         lottery_dict.setdefault(key, []).append(value

# print(lottery_dict)



# for key, value in range:

# line_list.append(my_file.readline().split(";"))










