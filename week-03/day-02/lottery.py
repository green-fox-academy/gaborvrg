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

# print(type(line_list))

# print(sorted(lottery_dict.values()))

# def mysort(inlist):
#     return inlist[1]

# print(sorted(lottery_dict.items(), key=mysort )[ -5:: ])
print(sorted(lottery_dict.items(), key=lambda x:x[1] )[ -5:: ])

my_file.close()








# print(sorted(lottery_dict.items(), key=lambda x:x[1] )[ -5:: ])



# lottery_dict[sorted(lottery_dict.values())[55]]

# print(sorted(lottery_dict, key=lottery_dict.__getitem__)[85:])


# print(sorted(lottery_dict.items(), key=lambda x:x[1])[:5])


# a = list(lottery_dict.values())
# a.sort()
# print(a)

# for i in a[85:]:
#     print(lottery_dict.values())





# five_most_frequent = dict()


# for key, value in lottery_dict.items():
#     print(key, value)
#     if value >

# item = lottery_dict.pop(max(lottery_dict.values())
# print(item)








# (max(lottery_dict, key=lottery_dict.get))


# print(max(lottery_dict.values()))
# # lottery_dict.pop('c', 0)

# del lottery_dict[max(lottery_dict.keys())]

# print(max(lottery_dict.values()))



# del(lottery_dict[max(lottery_dict.values())])

# print(max(zip(lottery_dict.values(), lottery_dict.keys())))




# for key in lottery_dict:
#     # x = int(lottery_dict[key])

#     if lottery_dict[key] not in five_most_frequent:
#         print(key, five_most_frequent[key])

    # if lottery_dict[value] > 190:
    #     print(value, lottery_dict[value])




# lst = list(lottery_dict.keys())
# # print(lst)
# lst.sort()
# # print(lst)
# for key in lst:
#     print(key, lottery_dict[key])
    


# for key in lottery_dict:
#     print(key, lottery_dict[key])








