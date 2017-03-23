# Check if the list contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

numbers = [1,2,3,4,5,6,7,8]

for i in numbers:
    # print(i)
    if numbers[i-1] == 7:
        print("Hoooray!!!!!!")
    else:
        print("Noooooo!!")
