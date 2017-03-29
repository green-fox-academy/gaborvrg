from tkinter import *

# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps-3d/r4.png]

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

x = 10
y = 10
xx = 20
yy = 20


for a in range(10, 70, 10):
    print(x, y, xx, yy)
    x = x + a
    y = y + a
    xx = x + a + 10
    yy = y + a + 10


    canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')
    


# canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')
# canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')
# canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')
# canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')
# canvas.create_rectangle(x , y, xx, yy, width = 1, fill = 'purple')



root.mainloop()