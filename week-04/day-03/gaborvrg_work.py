class Apple():


    def get_apple(self):
        return 'apple'


    def sum(self, sum_list = []):
        number = 0
        for i in sum_list:
            number += i
        return number

    def anagram(self, string1 = '', string2 = ''):
        lst_1 = list(string1)
        lst_2 = list(string2)
        lst_1.sort()
        lst_2.sort()

        if lst_1 == lst_2:
            return True
        else:
            return False

    def count_letters(self, string_for_dict = ''):

        dct = dict()

        for i in string_for_dict:
            if i not in dct:
                dct[i] = 1
            else:
                dct[i] += 1

        return dct





# apple = Apple()

# # # apple.get_apple()
# # # print(apple.get_apple())

# # # apple.sum()
# # print(apple.sum([1,2,3,4]))

# # apple.anagram()
# print(apple.anagram('laca','alack'))

# apple.count_letters()
# print(apple.count_letters('alma'))

