# Create a method that decrypts the texts/duplicated_chars.txt



my_file = open("duplicated-chars.txt", "r")

def decrypt(file_name):
    text = file_name.read()[::2]
    my_file.close()
    return(text)

print(decrypt(my_file))



# my_file = open("duplicated-chars.txt", "r")

# print(my_file.read()[::2])