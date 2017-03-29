
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing():

    x_coordinates, y_coordinates = input("Type two integer for the starting points with space: ").split()

    canvas.create_line(x_coordinates, y_coordinates, 150, 150, fill='red', width=3)

drawing()

root.mainloop()
