from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.

canvas.create_rectangle(50, 50, 250, 250, fill='red')
canvas.create_rectangle(100, 100, 200, 200, fill='green')
canvas.create_rectangle(120, 120, 180, 180, fill='blue')
canvas.create_rectangle(140, 140, 160, 160, fill='yellow')

root.mainloop()