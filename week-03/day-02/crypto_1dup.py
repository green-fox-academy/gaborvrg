# Create a method that decrypts the texts/duplicated_chars.txt

# def decrypt(file_name):
#     pass

my_file = open("duplicated-chars.txt", "r")

print(my_file.read()[::2])