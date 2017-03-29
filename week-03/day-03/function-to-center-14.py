from tkinter import *

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def starshine(x, y):

    for i in range(0, 300, 20):

        canvas.create_line(x + i, y, 150, 150, fill='red', width=3)
        canvas.create_line(x, y + i, 150, 150, fill='red', width=3)
        canvas.create_line(x + i, y + 300, 150, 150, fill='red', width=3)
        canvas.create_line(x + 300, y + i, 150, 150, fill='red', width=3)



starshine(5,5)

root.mainloop()