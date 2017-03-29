from tkinter import *

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def drawing():

    x, y = int(input("Type two integer for the starting points with space: ").split())
    
    root = Tk()

    canvas = Canvas(root, width='300', height='300')
    canvas.pack()

    # x_end = str(x + 50)
    # y_end = y

    canvas.create_line(x, y, x + 50, y, fill='red', width=3)

    root.mainloop()

drawing()