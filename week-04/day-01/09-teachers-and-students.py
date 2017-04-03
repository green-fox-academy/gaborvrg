# Create Student and Teacher classes
# Student
    # learn()
    # question(teacher) -> calls the teachers answer method
# Teacher
    # teach(student) -> calls the students learn method
    # answer()

class Student:

    def learn(self):
        print('learn')

    def question(self, teacher):
        teacher.answer()
        

class Teacher:

    # def __init__(self, hair):
    #     self.hair = hair

    def teach(self, student):
        student.learn()

    def answer(self):
        print('answer') #   print(self.hair)

Sanyi = Student()
Bela = Teacher()     #   Bela = Teacher('black') 
Gabor = Teacher()    #   Gabor = Teacher('brown')

Sanyi.question(Bela)
Sanyi.question(Gabor)

Bela.teach(Sanyi)




