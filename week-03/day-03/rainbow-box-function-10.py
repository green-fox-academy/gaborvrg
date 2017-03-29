from tkinter import *

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, color):

    for a in range(x, 1, -10):

        canvas.create_rectangle(150 - x / 2, 150 - x / 2, 150 + x + a / 2, 150 + x / 2 + a, fill=color)


drawing(70, 'red')


root.mainloop()