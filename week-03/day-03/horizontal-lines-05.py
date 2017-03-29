
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
    

def drawing():

    x, y = input("Type two integer for the starting points with space: ").split()

    x_int = int(x)
    y_int = int(y)


    canvas.create_line(x_int, y_int, x_int + 50, y_int, fill='red', width=3)

    root.mainloop()

drawing()