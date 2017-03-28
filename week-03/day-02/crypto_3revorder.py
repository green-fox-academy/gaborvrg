# Create a method that decrypts texts/reversed_zen_order.txt
# def decrypt(file_name):
#     pass

my_file = open("reversed-order.txt", "r")

reversed_text = ""
reversed_list = []
rev_list = []

for i in my_file:
    reversed_list.append(i)
rev_list = reversed_list[::-1]

print(' '.join(rev_list))

my_file.close()



