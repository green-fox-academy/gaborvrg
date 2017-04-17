class Texts():   # 

  def __init__(self):
    self.status = "empty". # statusz
    self.texts = []. # lista szovegekkel majd

  def add_new_text(self, new_text):  # hozzaadni szoveget
    self.texts.append(new_text)
    self.status = "length of list: " + str(len(self.texts))
    return self.texts

  def check_state(self):  # hozzaadni sztatuszt
    print(self.status)

  def check_text(self):  # 
    print(self.texts)




my_texts = Texts()      # instantiate my own texts (osztaly peldanyositasa)
my_texts.check_state()  # check its state

my_texts.add_new_text('alma')   # add some new text
my_texts.check_state()          # then check the class's state
my_texts.check_text()           # and its content

my_texts.add_new_text('korte')  # and another one
my_texts.check_state()
my_texts.check_text()