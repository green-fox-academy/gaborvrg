# Create a method that decrypts texts/reversed_zen_lines.txt

# def decrypt(file_name):
#     pass

my_file = open("reversed-lines.txt", "r")

print(my_file.read()[::-1])