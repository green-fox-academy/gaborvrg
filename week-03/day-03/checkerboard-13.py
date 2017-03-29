from tkinter import *

# fill the canvas with a checkerboard pattern.

root = Tk()

canvas = Canvas(root, width='320', height='320') # 40px negyzetek
canvas.pack()

x0 = 0
y0 = 0
xx = 40
yy = 40

for a in range(4):
    for b in range(4):
        canvas.create_rectangle(x0 + a*80, y0, xx + a*80, yy, fill='black')

root.mainloop()