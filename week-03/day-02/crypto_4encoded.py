# Create a method that decrypts texts/encoded__lines.txt
# def decrypt(file_name):
#     pass

my_file = open("encoded-lines.txt", "r")

text = ""

for line in my_file: # Uif [fo pg Qzuipo
    row = ""
    for number in range(len(line)):
        if ord(line[number]) == 32:
            row += chr(ord(line[number]))
        else:
            row += chr(ord(line[number]) - 1)

    text += row + "\n"
    
print(text)
my_file.close()


