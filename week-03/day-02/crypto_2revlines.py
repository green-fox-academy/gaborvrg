# Create a method that decrypts texts/reversed_zen_lines.txt

# def decrypt(file_name):
#     pass

my_file = open("reversed-lines.txt", "r")

for line in my_file:

    rev_file = line[::-1]

    print(rev_file.lstrip())


my_file.close()