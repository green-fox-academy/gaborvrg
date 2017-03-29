from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_line(100, 100, 200, 100, fill='red', width=3)
canvas.create_line(200, 100, 200, 200, fill='green', width=3)
canvas.create_line(200, 200, 100, 200, fill='yellow', width=3)
canvas.create_line(100, 200, 100, 100, fill='blue', width=3)

# draw a box that has different colored lines on each edge.

root.mainloop()