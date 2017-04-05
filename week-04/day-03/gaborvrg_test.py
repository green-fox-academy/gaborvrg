import unittest
from gaborvrg_work import Apple

class TestApple(unittest.TestCase):

    def test_get_apple(self):
        apple = Apple()
        apple.get_apple()
        self.assertEqual(apple.get_apple(),'apple')


    def test_sum(self):
        summary = Apple()
        self.assertEqual(summary.sum([1,2,3]), 6)

    def test_sum_empty(self):
        summary = Apple()
        self.assertEqual(summary.sum([]), 0)

    def test_sum_one_element(self):
        summary = Apple()
        self.assertEqual(summary.sum([2]), 2)


    def test_anagram_true(self):
        anag = Apple()
        self.assertEqual(anag.anagram('laca', 'laac'), True)

    def test_anagram_false(self):
        anag = Apple()
        self.assertEqual(anag.anagram('lacaka', 'laac'), False)

    def test_count_letters(self):
        pass





if __name__ == '__main__':
    unittest.main()