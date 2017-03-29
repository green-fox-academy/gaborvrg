from tkinter import *

# fill the canvas with a checkerboard pattern.

root = Tk()

canvas = Canvas(root, width='400', height='400') # 40px negyzetek
canvas.pack()

x = 0
y = 0
xx = 0
yy = 0

for a in range(0,400,100):
    print(a)
    canvas.create_rectangle(x + a, y + a, x + a, y + a, fill='black')



root.mainloop()