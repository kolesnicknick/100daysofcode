class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }
    receive(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    };
}


const Chatroom = function(){
    let users = [];

    return{
        register: function(user){
            users[user.name] = user;
            user.chatroom = this; 
        },
        send: function(message, from, to){
                if(to){
                    to.receive(message, from)
                } else {
                    for(key in users){
                       if(users[key] !== from){ users[key].receive(message, from) }
                    }
                }
        }

    }
}

const niko = new User('Niko');
const ivgan = new User('Ivgan');
const pita = new User('Pita');
const masha = new User('Masha');

const chatroom = new Chatroom();


chatroom.register(niko);
chatroom.register(ivgan);
chatroom.register(pita);
chatroom.register(masha);

niko.send('Hello masha', masha);
masha.send('Hello Niko', niko);
ivgan.send('Hello ALLLLLLLL');