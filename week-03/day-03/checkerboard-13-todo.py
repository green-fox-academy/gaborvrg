from tkinter import *

# fill the canvas with a checkerboard pattern.

root = Tk()

canvas = Canvas(root, width='400', height='400') # 40px negyzetek
canvas.pack()

# x = 0
y = 0
xx = 0
yy = 0

for a in range(0,400,100):
    print(a)
    canvas.create_rectangle(x + a, y + a, x + a, y + a, fill='black')



root.mainloop()


#   Tibi megoldasa
#
#
# import time
# from tkinter import *

# root = Tk()
# canvas = Canvas(root, width='600', height='600')
# size = 600//8
# canvas.pack()
# row = -1
# color = ''

# for c in range(64):
#     cell_num = c % 8
#     if cell_num == 0:
#         row += 1

#     if cell_num % 2 == 0:
#         if row % 2 == 0:
#             color = 'black'
#         else:
#             color = 'white'
#     else: 
#         if row % 2 == 0:
#             color = 'white'
#         else:
#             color = 'black'

#     canvas.create_rectangle(size*cell_num, row * size, size*cell_num + size, row * size + size, fill=color, width=0 )

# root.mainloop()