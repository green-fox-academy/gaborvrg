from tkinter import *

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x):


    canvas.create_rectangle(150 - x / 2, 150 - x / 2, 150 + x / 2, 150 + x / 2, width = 3, fill='red')
    
drawing(150)
drawing(100)
drawing(50)


root.mainloop()