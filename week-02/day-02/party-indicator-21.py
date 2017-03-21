# Write a program that asks for two numbers
# Thw first number represents the number of girls that comes to a party, the
# second the boys

# It should print: The party is exellent!
# If the the number of girls and boys are equal and there are more people coming than 20
#
# It should print: Quite cool party!
# It there are more than 20 people coming but the girl - boy ratio is not 1-1
#
# It should print: Average party...
# If there are less people coming than 20
#
# It should print: Sausage party
# If no girls are coming, regardless the count of the people


print('Girls come to party: ')
girls_come_to_party = int(input())
print('Boys come to party: ')
boys_come_to_party = int(input())


if girls_come_to_party == boys_come_to_party and girls_come_to_party + boys_come_to_party > 20:
	print('The party is exellent!')
elif girls_come_to_party + boys_come_to_party > 20 and girls_come_to_party / boys_come_to_party > 1:
	print ('Quite cool party! ')
elif girls_come_to_party + boys_come_to_party < 20:
	print ('Average party... ')
elif girls_come_to_party == 0:
	print ('Sausage party ')



