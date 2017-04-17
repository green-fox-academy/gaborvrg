# Create Counter class
    # which has an integer field value
    # when creating it should have a default value 0 or we can specify it when creating
    # we can add(number) to this counter another whole number
    # or we can add() without parameters just increasing the counter's value by one
    # and we can get() the current value
    # also we can reset() the value to the initial value

# Check if everything is working fine with the proper test
    # Download test_counter.py and place it next to your solution
    # Run the test file as a usual python program


class Counter():
    def __init__(self, start = 0):
        self.current = start

    def get(self):
        return self.current

    def add(self):
        self.current += 1

    def reset(self):
        self.current = 0
        # self.current = self.start



# class Counter():
#     def __init__(self, start = 0):
#         self.current = start
#         self.start = start


#     def add(self, amount = 1):
#         self.current += amount

#     def get(self):
#         return self.current

#     def reset(self):
#         self.current = self.start









# counter = Counter(7)

# counter.add(6)
# print(counter.get())


























# class Counter:

#     def __init__(self, value = 0):
#         self.value = value
#         self.value_basic = value

#     def add(self, number = 1):
#         self.number = number
#         self.value += number 

#     def get(self):
#         print(self.value)
#         return self.value

#     def reset(self):
#         self.value = self.value_basic



