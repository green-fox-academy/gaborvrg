import unittest
from counter import Counter

class TestCounter(unittest.TestCase):
    
    def test_get_initial(self):
        counter = Counter()
        self.assertEqual(counter.get(), 0)


    def test_get_specified_initial(self):
        counter = Counter(7)
        self.assertEqual(counter.get(), 7)

    def test_add_one(self):
        counter = Counter()
        counter.add()
        self.assertEqual(counter.get(), 1)

    def add_more_then_one(self):
        counter = Counter()
        counter.add(7)
        self.assertEqual(counter.get(), 7)

    def test_reset(self):
        counter = Counter()
        counter.add()
        counter.reset()
        self.assertEqual(counter.get(), 0)

if __name__ == '__main__':
    unittest.main()

# import unittest
# from counter import Counter

# class TestCounter(unittest.TestCase):
#     def test_add_one(self):
#         counter = Counter()
#         counter.add()
#         self.assertEqual(counter.get(), 1)

#     def test_add_more(self):
#         counter = Counter()
#         counter.add(7)
#         self.assertEqual(counter.get(), 7)

#     def test_start_value(self):
#         counter = Counter(5)
#         self.assertEqual(counter.get(), 5)

#     def test_reset(self):
#         counter = Counter(4)
#         counter.add()
#         counter.reset()
#         self.assertEqual(counter.get(), 4)



# if __name__ == '__main__':
#     unittest.main()