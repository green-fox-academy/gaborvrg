from tkinter import *


class GameLogic():

    def __init__(self, width, height):
        self.root = Tk()
        self.width = width
        self.height = height
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.draw_tiles()
        self.root.mainloop()
        
    # def draw_tile(self):
    #     self.new_img = PhotoImage(file="floor.png")
    #     for row in range(10):
    #         for col in range(10):
    #             self.canvas.create_image(row*60, col*60, anchor=NW, image=self.new_img)
                
    def draw_tiles(self):
        map = [
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
        ]
        self.floor_img = PhotoImage(file="floor.gif")
        self.wall_img = PhotoImage(file="wall.gif")
        for row in range(len(map)):
            for cell in range(len(map[row])):
                if map[cell][row] == 0:
                    self.canvas.create_image(row*self.width/10, cell*self.height/10, anchor=NW, image=self.floor_img)
                else:
                    self.canvas.create_image(row*self.width/10, cell*self.height/10, anchor=NW, image=self.wall_img)


class Box():
    def __init__(self):
        self.testBoxX = 0 # initial coordinates
        self.testBoxY = 0

    # gl = GameLogic()

    def draw(self, canvas):

        # canvas.create_rectangle(0, 0, 800, 800, fill='grey')    # canvas size
        # canvas.create_rectangle(self.testBoxX, self.testBoxY, self.testBoxX+80, self.testBoxY+80, fill='red')   #rectangngle size
        # self.gif1 = PhotoImage(file = 'floor.gif')
        # for row in range(10):
        #     for col in range(10):
        #         canvas.create_image(col*74,row*74, image = self.gif1, anchor = NW)

        self.gif2 = PhotoImage(file = 'hero-down.gif')
        canvas.create_image(self.testBoxX, self.testBoxY, image = self.gif2, anchor = NW)
                    


# Creating a box that can draw itself in a certain position
game = GameLogic(600, 600)
box = Box()

def on_key_press(e):
    # When the keycode is 111 (up arrow) we move the position of our box higher
    if e.keycode == 8320768:
        if box.testBoxY > 0:
            box.testBoxY = box.testBoxY - 74
        else:
            box.testBoxY = box.testBoxY
            
    elif e.keycode == 8255233:
        if box.testBoxY < 666:
            box.testBoxY = box.testBoxY + 74
        else:
            box.testBoxY = box.testBoxY


    elif e.keycode == 8189699:
        if box.testBoxX < 666:
            box.testBoxX = box.testBoxX + 74
        else:
            box.testBoxX = box.testBoxX


    elif e.keycode == 8124162:
        if box.testBoxX > 0:
            box.testBoxX = box.testBoxX - 74
        else:
            box.testBoxX = box.testBoxX
    # and lower if the key that was pressed the down arrow
    # draw the box again in the new position
    box.draw(canvas)
    # print(e.keycode)

# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
box.draw(canvas)

