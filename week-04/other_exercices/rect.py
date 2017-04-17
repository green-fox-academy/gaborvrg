from shape import Shape

class Rectangle(Shape):  # alaprajz, blueprint

    def __init__(self, x, y, width, height):
        super().__init__(x, y)
        # print('inited')
        self.width = width
        self.height = height