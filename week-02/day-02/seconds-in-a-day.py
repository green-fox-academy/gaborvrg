current_hours = 14;
current_minutes = 34;
current_seconds = 42;

# Write a program that prints the remaining seconds (as an integer) from a
# day if the current time is represented bt the variables

sec_in_a_days = 86400;

remaining_seconds = sec_in_a_days - (current_seconds + (current_minutes * 60) + (current_hours * 60 *60))

print('Remaining seconds of day: ', int(remaining_seconds))