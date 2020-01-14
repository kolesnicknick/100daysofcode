def work_on_images(images):
    minutes = 0
    worker1 = 1;
    worker2 = 1;
    worker3 = 1
    while images - 3 >= 0:
        minutes+=1
        if(minutes%2 == 0): 
            images -= 1
            worker1 += 1

        if(minutes%3 == 0):
            images -= 1
            worker2 += 1

        if(minutes%4 == 0):
            images -= 1
            worker3 += 1
    
    print(f'minutes {minutes}, worker1: {worker1}, worker2: {worker2}, worker3: {worker3}')


work_on_images(1000)