(() => {
    //Module pattern
    return {
        some: "value",
        object: "data"
    }
})();
//MODULE PATTERN

//UI Controller
const UIctrl = (() => {
    let text = 'hello world';
    const changeText = function () {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function () {
            changeText;
        }
    }
})();

UIctrl.callChangeText();

//REVEALING MODULE PATTERN
const ItemCtrl = (function () {
    let _data = [];
    function add(item) {
        _data.push(item);
    }

    function get(name) {
        return _data.find(item => item.name === name);
    }

    return {
        add,
        get
    }
})();

ItemCtrl.add({ name: 'Niko', age: '22' });
ItemCtrl.get('Niko');


const Singleton = (() => {
    let instance;
    function createInstance() { return new Object(); }

    return instance = instance ? instance : createInstance();
})();


class MemberFactory {
    createMember(name, type) {
        let member;

        if (type === 'simple') { member = new SimpleMembership(name) }
        else if (type === 'advanced') { member = new AdvancedMembership(name) }
        else if (type === 'super') { member = new SuperMembership(name) }

        member.type = type;

        member.define = function(){
            console.log(`${this.name}, ${this.type}, ${this.cost},`);
        }
    }
}