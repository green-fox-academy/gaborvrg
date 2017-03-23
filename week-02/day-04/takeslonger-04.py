# When saving this quote a disk error has occured. Please fix it.
# Add "always takes longer than" to the StringBuilder (quote) between the words "It" and "you"

quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote_ext = "always takes longer than"

listq = quote.split()
listq.insert(3, "always takes longer than")

quote = ""
for i in range(len(listq)):
    quote += listq[i] + " "

print(quote)
