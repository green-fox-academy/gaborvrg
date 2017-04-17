# Petrol Station

# Create Station and Car classes

# Station
    # gas_amount
    # refill(car) -> decreases the gasAmount by the capacity of the car 
    # and increases the cars gas_amount
# Car
    # gas_amount
    # capacity
    # create constructor for Car where:
    # initialize gas_amount -> 0
    # initialize capacity -> 100

class Station:

    def __init__(self, station_gas_amount = 0):
        self.station_gas_amount = station_gas_amount

    def refill(self, car):
        self.station_gas_amount -= car.capacity
        car.car_gas_amount += car.capacity
        print(car.car_gas_amount)
        print(self.station_gas_amount)

class Car:
    def __init__(self, car_gas_amount = 0, capacity = 100):
        self.car_gas_amount = car_gas_amount
        self.capacity = capacity

car1 = Car()
mol = Station(500)

mol.refill(car1)


        