# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = ""
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = [
    {7: "run around and desert you"},
    {50: "tell a lie and hurt you"},
    {49: "make you cry,"},
    {2: "let you down"},
    {12: "give you up,"},
    {1: "Never gonna"},
    {11: "\n"},
    {3: "say goodbye"}
]

for i in notSoCrypticMessage:
    for a in hashmap:
        print(a)


# hassh = ""

# # print(len(notSoCrypticMessage))

# # for i in range(len(notSoCrypticMessage) - 1):
# for i in range(0, len(hashmap)):
#     hassh = (hashmap[i])
#     # print(hassh)

#     for part in range(len(notSoCrypticMessage)):
#     # #     # print(notSoCrypticMessage[part])

#         if notSoCrypticMessage[part] == hassh.items():
#             print(key)

#     # for key, value in hassh.items():
#     #     if key in hassh.items() == notSoCrypticMessage[i]:
#     #         out += value 
#         # print(key,value)
#         # out += value 

# print(out)
#     # print(key[hassh.items()]
    
#     # if notSoCrypticMessage[i] == hassh(items()):
    #     print(hassh)

