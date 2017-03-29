from tkinter import *

# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing():

    x, y = input("Type top left corner coordinates with space: ").split()
    x_int = int(x)
    y_int = int(y)

    canvas.create_rectangle(x_int, y_int, x_int + 50, y_int + 50, fill='red')
    canvas.create_rectangle(x_int * 2, y_int * 2, x_int + 50 * 2, y_int + 50 * 2, fill='green')
    canvas.create_rectangle(x_int * 3, y_int * 3, x_int + 50 * 3, y_int + 50 * 3, fill='blue')


drawing()

root.mainloop()