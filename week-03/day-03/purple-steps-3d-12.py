from tkinter import *

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps-3d/r4.png]

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

x = 0
y = 0
xx = 0
yy = 0

for a in range(10, 70, 10):
 
    print(a)

    

    canvas.create_rectangle(x + a, y + a, xx + a, yy + a, width = 1)

    x = a
    y = a

root.mainloop()