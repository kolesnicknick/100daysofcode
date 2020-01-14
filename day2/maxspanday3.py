def maxSpan(list):
    stri = ''.join(str(x) for x in list)
    span = 1
    for i in list:
        ispan = stri.rindex(str(i)) - stri.index(str(i)) + 1 
        if(ispan > span): span = ispan
    print(span)


maxSpan([1, 2, 1, 1, 3]) #→ 4
maxSpan([1, 4, 2, 1, 4, 1, 4]) #→ 6
maxSpan([1, 4, 2, 1, 4, 4, 4]) #→ 6