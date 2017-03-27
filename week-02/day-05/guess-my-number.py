# Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.

# Make the range customizable (ask for it before starting the guessing).
# You can add lives. (optional)


import random
number = int(input("Choose a number between 1 and 100: "))
rand_int= random.randint(0, number) 
guess = 0
lives = 0

while rand_int!= guess:

    if lives == 3:
        print("Too much tries. You lost!")
        break
    else:

        guess = int(input("Guess a new number: "))

        if rand_int< guess:
            lives += 1
            print("Too high")
        elif rand_int> guess:
            lives += 1
            print("Too low")
        else:
            print("You win")
            break
