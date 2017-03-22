# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

matr = 4
row = []


for y in range(0,matr):
    col = []
    for x in range(0,matr):
        col.append(0)
    col[y] = 1
    row.append(col)

print(row)