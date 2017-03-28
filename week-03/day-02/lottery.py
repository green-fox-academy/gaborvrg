# Create a method that returns the five most frequent 
# lottery number in a pretty table format

# def five_most_frequent():
#     pass


my_file = open("otos.txt", "r")

lottery_dict = {}

for line in my_file:

    line_list = my_file.readline().rstrip().split(";")
    # print(type(line_list[12:16]))
    print(line_list[11:16])



# for key in range(1, 90):
#         lottery_dict.setdefault(key, []).append(value

# print(lottery_dict)



# for key, value in range:

# line_list.append(my_file.readline().split(";"))










