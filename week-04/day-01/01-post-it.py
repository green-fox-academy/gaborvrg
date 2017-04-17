# Create a PostIt class that has
# a backgroundColor
# a text on it
# a textColor
# Create a few example post-it objects:
# an orange with blue text: "Idea 1"
# a pink with black text: "Awesome"
# a yellow with green text: "Superb!"


class PostIt:
    bgColor = ''
    text_on_it = ''
    textColor = ''

postIt_1 = PostIt() # instantiation in 3 different instance
postIt_2 = PostIt()
postIt_3 = PostIt()

postIt_1.bgColor = 'orange'   # 
postIt_1.text_on_it = "Idea 1"
postIt_1.textColor = 'blue'

postIt_2.bgColor = 'pink'
postIt_2.text_on_it = "Awesome"
postIt_2.textColor = 'black'

postIt_3.bgColor = 'yellow'
postIt_3.text_on_it = "Superb!"
postIt_3.textColor = 'green'


print('Post it color: ' + postIt_1.bgColor + ', with ' + postIt_1.textColor + ' color text: ' + postIt_1.text_on_it)
print('Post it color: ' + postIt_2.bgColor + ', with ' + postIt_2.textColor + ' color text: ' + postIt_2.text_on_it)
print('Post it color: ' + postIt_3.bgColor + ', with ' + postIt_3.textColor + ' color text: ' + postIt_3.text_on_it)

