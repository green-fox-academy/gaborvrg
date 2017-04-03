from fleet import Fleet
from thing import Thing

fleet = Fleet()

# Create a fleet of things to have this output:
# 1. [ ] Get milk
# 2. [ ] Remove the obstacles
# 3. [x] Stand up
# 4. [x] Eat lunch


get_milk = Thing("Get milk")
obstacles = Thing("Remove the obstacles")
stand_up = Thing("Stand up")
eat_lunch = Thing("Eat lunch")

fleet.add(get_milk)
fleet.add(obstacles)
fleet.add(stand_up)
stand_up.complete()
fleet.add(eat_lunch)
eat_lunch.complete()

print(fleet)