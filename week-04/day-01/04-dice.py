# You have a Dice class which has 6 dice
# You can roll all of them with roll()
# Check the current rolled numbers with get_current()
# You can reroll with reroll()
# Your task is to get where all dice is a 6

import random

class Dice():

    def __init__(self):
        self.dice = [0, 0, 0, 0, 0, 0] # 6 elements in this list

    def roll(self):
        for i in range(len(self.dice)): # loop in length of the list 0-5
            self.dice[i] = random.randint(1,6) # in every loop the actual index get a random number from 1 to 6
        return self.dice  # return with a fillef list with new numbers

    def getCurrent(self, index=None): 
        if index != None:
            return self.dice[index]
        else:
            return self.dice

    def reroll(self, index=None):
        if index != None:
            self.dice[index] = random.randint(1,6)
        else:
            self.roll()


dice = Dice()

print(dice.getCurrent())
# dice.roll()
# print(dice.getCurrent())

# dice.reroll(3)
# print(dice.getCurrent(3))
# print(dice.getCurrent())


for i in range(0,6):
    while dice.getCurrent(i) != 6:
        dice.reroll(i)
    print(dice.getCurrent())













