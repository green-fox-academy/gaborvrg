# Create a method that returns the five most frequent 
# lottery number in a pretty table format

# def five_most_frequent():
#     pass

my_file = open("otos.txt", "r")

lottery_dict = dict()

for line in my_file:
    line_list = line.rstrip().split(";")
    for number in line_list[11:16]:
        if number not in lottery_dict:
            lottery_dict[number] = 1 
        else:
            lottery_dict[number] += 1
print(lottery_dict)

# print(sorted(lottery_dict.items(), key=lambda x:x[1] )[ -20:: ])
# print(sorted(lottery_dict.items(), key=lambda x:x[1])[:5])


my_file.close()






