class Person():

    
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female'):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm " + self.name + " a " + str(self.age) + "year old " + self.gender)

    def get_goal(self):
            print("My goal is: Live for the moment!")

# jane = Person()
# jane.introduce()
# jane.get_goal()


class Student(Person):

    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', previous_organization = "The School of Life", skipped_days = 0):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        print("Be a junior software developer.")

    def introduce(self):
        print("Hi, I'm", self.name, " a ",self.age, " year old ", self.gender, "from ", self.previous_organization, "who skipped",  self.skipped_days, "days from the course already.")

    def skip_days(self, number_of_days):
        self.skipped_days += number_of_days
        
# jane = Student()
# jane.get_goal()
# jane.introduce()
# jane.skipped_days(3)
# print(jane.skipped_days)



class Mentor(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate'):
        super().__init__(name, age, gender)
        self.level = level
        
    def get_goal(self):
            print("Educate brilliant junior software developers.")

    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + " " + self.level + " mentor.")


# jane = Mentor()
# jane.get_goal()
# jane.introduce()


class Sponsor(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hired_students = 0):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = hired_students

    def introduce(self):
        print("Hi, I'm " + self.name + ", a " + str(self.age) + " year old " + self.gender + ", who represents " + self.company + " and hired " + str(self.hired_students) + " students so far.")

    def get_goal(self):
            print("Hire brilliant junior software developers.")

    def hire(self):
        self.hired_students += 1


# jane = Sponsor()
# jane.hire()
# jane.introduce()
# jane.get_goal()
# print(jane.hired_students)




class LagopusClass():
    
    def __init__(self, class_name = '', students = [], mentors = []):
        # super(LagoplusClass, self).__init__()
        self.class_name = class_name
        self.students = students
        self.mentors = mentors


    def add_student(self, student):
        self.students.append(student)


    def add_mentor(self, mentor):
        self.mentors.append(mentor)


    def info(self):
        print("Lagopus ", self.class_name ," class has ", len(self.students), " students and " ,len(self.mentors) ," mentors.")
        






people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
people.append(elon)
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()

badass = LagopusClass('BADA55')
badass.add_student(student);
badass.add_student(john);
badass.add_mentor(mentor);
badass.add_mentor(gandhi);
badass.info();
