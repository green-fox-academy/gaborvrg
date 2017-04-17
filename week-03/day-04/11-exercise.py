from tkinter import *
import time

root = Tk()

canvas = Canvas(root, width='600', height='600', bg = "#FEF935")
canvas.pack()



def drawing(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size, outline="black", width=1)

def recursive_calling(x, y, size):

    drawing(x, y, size)
    # time.sleep(0.02)
    # canvas.update()
    if size > 5:
        recursive_calling(x + 1/3 * size, y, size/3)
        recursive_calling(x, y + 1/3 * size, size/3)
        recursive_calling(x + 2/3 * size, y + 1/3 * size, size/3)
        recursive_calling(x + 1/3 * size, y + 2/3 * size, size/3)

    
recursive_calling(10, 10, 600)

root.mainloop()