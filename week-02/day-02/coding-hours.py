# An average Green Fox attendee codes 6 hours daily
# The semester is 17 weeks long
#
# Print how many hours is spent with coding in a semester by an attendee,
# if the attendee only codes on workdays.
#
# Print the percentage of the coding hours in the semester if the average
# work hours weekly is 52

print ('An average Green Fox attendee codes 6 hours daily')
print ('The semester is 17 weeks long')

daily_coding = 6
days = 5
weeks = 17
avcodhopweek = 52

coding_hours = daily_coding * days * weeks

per_centage = 100 * daily_coding * days / avcodhopweek

print ('Coding hours are in a semester by an attendee(assuming 7 days in a week with coding): ' , coding_hours)

print ('the percentage of the coding hours in the semester: ', int(per_centage), '%')

