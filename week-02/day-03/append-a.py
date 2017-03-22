# - Create a variable named `nimals`
#   with the following content: `["kuty", "macs", "cic"]`
# - Add all elements an `"a"` at the end

nimals = ["kuty", "macs", "cic"]

for x in range(0,len(nimals)):
    nimals[x] = nimals[x] + 'a'

print(nimals)