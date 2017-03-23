# Reverse the string 

# reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

# reversed = "valami akarmi"
reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
word = ""

for i in range(len(reversed)):
    word += reversed[-i-1]

print(word)