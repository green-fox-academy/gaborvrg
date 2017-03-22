# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

size = 5
matrix = []


for y in range(0,size):
    col = []
    for x in range(0,size):
        col.append(0)
    col[y] = 1

    matrix.append(col)
print(matrix)