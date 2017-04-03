# Create a BlogPost class that has
# an authorName
# a title
# a text
# a publicationDate

# Create a few blog post objects:
# "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
# Lorem ipsum dolor sit amet.
# "Wait but why" titled by Tim Urban posted at "2010.10.10."
# A popular long-form, stick-figure-illustrated blog about almost everything.
# "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
# Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.

class BlogPost:
    authorName = ''
    title = ''
    text = ''
    publicationDate = ''

blogPost_1 = BlogPost()
blogPost_2 = BlogPost()
blogPost_3 = BlogPost()

blogPost_1.authorName = 'John Doe'
blogPost_1.title = 'Lorem Ipsum'
blogPost_1.text = 'Lorem ipsum dolor sit amet.'
blogPost_1.publicationDate = '2000.05.04.'

blogPost_2.authorName = 'Tim Urban'
blogPost_2.title = 'Wait but why'
blogPost_2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
blogPost_2.publicationDate = '2010.10.10.'

blogPost_3.authorName = 'William Turton'
blogPost_3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump'
blogPost_3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, \n doesn’t want to be the center of attention. \n When I asked to take his picture outside one of IBM’s New York City offices,\n he told me that he wasn’t really into the whole organizer profile thing.'
blogPost_3.publicationDate = '2017.03.28.'

print(blogPost_1.title + ' at ' + blogPost_1.publicationDate + ', by ' + blogPost_1.authorName + ': \n' + blogPost_1.text + '\n') 
print(blogPost_2.title + ' at ' + blogPost_2.publicationDate + ', by ' + blogPost_2.authorName + ': \n' + blogPost_2.text + '\n')
print(blogPost_3.title + ' at ' + blogPost_3.publicationDate + ', by ' + blogPost_3.authorName + ': \n' + blogPost_3.text + '\n')


