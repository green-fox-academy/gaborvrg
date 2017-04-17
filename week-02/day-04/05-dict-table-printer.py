# Create a function that prints the ingredient list of dictionaries to the console in the following format:
#
# +--------------------+---------------+----------+
# | Ingredient         | Needs cooling | In stock |
# +--------------------+---------------+----------+
# | vodka              | Yes           | 1        |
# | coffee_liqueur     | Yes           | -        |
# | fresh_cream        | Yes           | 1        |
# | captain_morgan_rum | Yes           | 2        |
# | mint_leaves        | No            | -        |
# +--------------------+---------------+----------+
#
# The frist columns should be automatically as wide as the longest key

ingredients = [
    { 'vodka': 1, 'needs_cooling': True },
    { 'coffee_liqueur': 0, 'needs_cooling': True },
    { 'fresh_cream': 1, 'needs_cooling': True },
    { 'captain_morgan_rum': 2, 'needs_cooling': True },
    { 'mint_leaves': 0, 'needs_cooling': False },
    { 'sugar': 100, 'needs_cooling': False },
    { 'lime juice': 10, 'needs_cooling': True },
    { 'soda': 100, 'needs_cooling': True }
]

def table_printer():
    print('+--------------------+---------------+----------+')
    print('| Ingredients       ', '| Needs cooling', '| In stock |')
    print('+--------------------+---------------+----------+')

    lista = list()
    num = 0

    for lst in ingredients:
        for key,value in lst.items():
            if num % 2 == 0:
                print('| {0:19}| {1:13} | {2:8} |'.format(key, str(lst['needs_cooling']), value))
            num += 1
    print('+--------------------+---------------+----------+')


table_printer()



# table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
# for name, phone in table.items():
#     print('{0:10} ==> {1:10d}'.format(name, phone))


        # lista.append(lst)
        # print(lst)
        # print(lst.keys())
        # for k in lst.keys():
            
        # print(lst[key])
            # print(lst.keysprint(k))
            # print(lst.keys())
