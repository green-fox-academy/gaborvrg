from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]

root.mainloop()



#az elozo program(16) kimenete
#
# x, y, xx, yy = 0,0,0,0

# for a in range(20, 300, 20):
#     print(a)
#     x = a
#     yy = a
#     canvas.create_line(x, y, xx + 300, yy, fill='red')
#     canvas.create_line(x - a, y + a, xx + a, yy - a + 300, fill='green')