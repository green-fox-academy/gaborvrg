from tkinter import *

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x):

    a = 120

    color_list = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000']

    for color in color_list:
        a -= 15
        canvas.create_rectangle(150 - x / 2 - a, 150 - x / 2 - a, 150 + x / 2 + a, 150 + x / 2 + a, fill = color)


drawing(50)

root.mainloop()
