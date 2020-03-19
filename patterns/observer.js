class EventObserver{
    constructor() {
        this.observers = [];
    }

    subscribe(func){
        this.observers.push(func);
    }

    unsubscribe(func){
        this.observers =  this.observers.filter(f => f !==func);
    }

    fire(){
        this.observers.forEach(f => f.call());
    }
}


observer = new EventObserver();
const logDate = function (){console.log(new Date)};
observer.subscribe(logDate);
observer.unsubscribe(logDate);
observer.fire();

