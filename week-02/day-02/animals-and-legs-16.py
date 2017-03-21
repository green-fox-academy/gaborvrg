# Write a program that asks for two integers
# The first represents the number of chickens the farmer has
# The seconf represents the number of pigs the farmer has
# It should print how many legs all the animals have

print ('How many chicken has the farmer')
chicken_number = int(input())

print ('How many pigs has the farmer')
pigs_number = int(input())

legs = chicken_number * 2 + pigs_number * 4

print (legs, 'legs has all the animals')