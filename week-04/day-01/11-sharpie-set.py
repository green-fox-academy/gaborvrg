# Reuse your Sharpie class
# Create SharpieSet class
    # it contains a list of Sharpie
    # count_usable() -> sharpie is usable if it has ink in it
    # remove_trash() -> removes all unusable sharpies

class Sharpie:

    ink_amount = 100

    def __init__(self, color, width):
        self.color = str(color)
        self.width = float(width)

    def use(self):
        self.ink_amount -= 1


greenSharpie = Sharpie('green', 0.5)
redSharpie = Sharpie('red', 1.5)
redSharpie.use()
print(redSharpie.ink_amount)