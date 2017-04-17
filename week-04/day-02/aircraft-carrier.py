# Aircrafts

# Create a class that represents an aircraft
# There are 2 types of aircrafts: F16 and F35
# Both aircraft should track how many ammo it has

# F16
    # Max ammo: 8
    # Base damage: 30

# F35
    # Max ammo: 12
    # Base damage: 50

# All the aircrafts should be created with empty ammo store

# Methods:

# fight
    # It should use all the ammos (set it to 0) and it should return the damage it took
    # The damage is the multiplication of the base damage and the ammos

# refill
    # It should take a number as parameter and substract as much ammo as possibe
    # It can't have more ammo than the number or the max ammo
    # It should return the remaining ammo
    # Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288

# get_type
    # It should return it's type as a string

# get_status
    # It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500



# class Aircraft():
#     """docstring for Aircraft"""
#     def __init__(self, current_ammo = 0, max_ammo = 0, damage = 30):
#         # super(Aircraft, self).__init__()
#         self.current_ammo = current_ammo
#         self.max_ammo = max_ammo
#         self.damage = damage


#     def fight(self):
#         pass



#     def refill(self):
#         pass

#     def get_type(self):
#         pass



#     def get_status(self):
#         pass



class Aircraft()

    def __init__ (self)
         max_ammo, 
         ammo, 
         base_damage, 
         ac_type


    def fight(self):
        damage = self.base_damage
        self.ammo = 0
        return damage



    def refill:
        pass

class f1(Aircraft):
    def __init__(self):
        self.ammo = 8
        satobbi...s


class Carrier():
    def  __init__ (self,..., A, H)
    self.aircraft = []
    self.ammostore = A
    self.hp = H

    def fight(self)


for aircraft in self.aircraft:
    aircraft.fight()

    
