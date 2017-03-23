

# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

example = "In a dishwasher far far away"
example_new = ""
example_list = example.split()
example_list[2] = "galaxy"

for i in range(len(example_list)):
    example_new += example_list[i] + " "

print(example_new)
