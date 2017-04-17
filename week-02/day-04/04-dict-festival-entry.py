watchlist = []

security_alchol_loot = 0

queue = [
    { 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
    { 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
    { 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
    { 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
    { 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
    { 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
    { 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
]

# Queue of festivalgoers at entry
# no. of alcohol units 
# no. of guns

# Create a security_check function that returns a list of festivalgoers 
# who can enter the festival

# If guns are found, remove them and put them on the watchlist (only the names)
# If alcohol is found confiscate it (set it to zero and add it 
# to security_alchol_loot) and let them enter the festival

def queueOfFestGoers(security_check):

    for dicts in security_check:
        # print(dicts)
        if dicts['guns'] > 0:
            dicts['guns'] = 0
            watchlist.append(dicts['name'])

        elif dicts['alcohol'] > 0:
            security_alchol_loot =+ dicts['alcohol']
            dicts['alcohol']

        else:



    return watchlist, security_alchol_loot

print(queueOfFestGoers(queue))