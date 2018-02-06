word_list = ['hello','world','my','name','is','Anna']
char = 'o'

# print word_list.count('hello')

# x = "hello World"
# print x.find("hello")

# for index in word_list


new_list= " "
for index in word_list:
	if index.count('o')>=1:
		new_list+=" "+ index
		print " ", new_list
