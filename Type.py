a= ['magical unicorns',19,'hello',98.98,'world']


newsum = 0
newstring = ""

if type(a)==int or type(a)==float or type(a)==str:
	for index in a:
		if type(index)==int or type(index)==float:
			newsum+=index
			
		elif type(index)==str:
			newstring+=" "+index
		

	print "Sum:", newsum
	print  "New String:", newstring



newsum2=0
if type(a)==int:
	for index in l:
		newsum2+=index
	print "the list you entered is of integer type"
	print "Sum:", newsum2



newstring2=0
if type(a)==str:
	for index in m:
		newstring2+=index
	print "the list you entered is of string type"
	pring "Sting:", newstring2