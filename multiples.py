count=0
for count in range (0,1001):
	if count %2 != 0:
		print count


fives = 5
for fives in range (5,1000000):
	if fives % 5 == 0:
		print fives



a = [1, 2, 5, 10, 255, 3]
a.sort()

print a
b = 0

for a in a:
	b+=a
print b


a = [1, 2, 5, 10, 255, 3]
a.sort()

print a
b = 0
count=0
for a in a:
	b+=a
	count+=1
print b/count