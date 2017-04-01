# create a function that takes a list of students and prints: 
# - how many candies are owned by students

# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies

students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

def students_own_candies(students_dict):
 
    candies = 0
    ages = 0

    for dicts in students_dict:
        print(dicts['name'], "has", dicts['candies'], "candies")
        candies += dicts['candies']
    return candies

def sum_of_the_ages(students_ages):

    ages = 0
    for dicts in students_ages:
        if dicts['candies'] < 5:
            ages += dicts['age']
    return ages

print("All numbers of candies: ", students_own_candies(students))
print("Sum of ages: ", sum_of_the_ages(students))
