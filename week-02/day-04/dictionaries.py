pirate = {"name": "Jack", "gold": 7, "has_wooden_legs": True}

# print(pirate["name"])

# pirate["gold"] = 8

# print(pirate["gold"])


for key in pirate:
    print(key)
    print(pirate[key])


# vagy

for key, value in pirate.items():
    print(key)
    print(key + ":" + str(value))