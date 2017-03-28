# Create a method that decrypts texts/reversed_zen_lines.txt



my_file = open("reversed-lines.txt", "r")

def decrypt(file_name):

    text = ""
    for line in file_name:
        rev_file = line[::-1]
        text += rev_file
    my_file.close()
    return(text)

print(decrypt(my_file))






# my_file = open("reversed-lines.txt", "r")

# for line in my_file:

#     rev_file = line[::-1]

#     print(rev_file.lstrip())


# my_file.close()