# - Create a variable named `ai`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Print the sum of the elements in `ai`

ai = [3, 4, 5, 6, 7]
sum = 0

for x in range(0, len(ai)):
    sum = ai[x] + sum

print(sum)