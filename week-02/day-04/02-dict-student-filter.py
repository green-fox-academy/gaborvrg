students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 6},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def moreCandiesThen4(studentsList):

    listOfStudents = ""

    for dicts in studentsList:
        if dicts['candies'] > 4:
            listOfStudents += dicts['name'] + " "
    return listOfStudents

def averageCandies(studentsList):
    candies = 0
    for dicts in studentsList:
        candies += dicts['candies'] 
    return candies / len(studentsList)


print("They have more than 4 candies: ", moreCandiesThen4(students))
print("They have on average: ", averageCandies(students), " candies")