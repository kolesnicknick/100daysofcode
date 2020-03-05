const fdata = [
    {
        name: 'Niko Kole',
        age: '27',
        gender: 'male',
        lookingFor: 'female',
        location: 'Dnipro',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },

    {
        name: 'Anna Tru',
        age: '26',
        gender: 'female',
        lookingFor: 'male',
        location: 'Dnipro',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },

    {
        name: 'Tanya Grey',
        age: '26',
        gender: 'female',
        lookingFor: 'male',
        location: 'Dnipro',
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
    },

    {
        name: 'Kari Bru',
        age: '21',
        gender: 'female',
        lookingFor: 'male',
        location: 'Dnipro',
        image: 'https://randomuser.me/api/portraits/women/21.jpg'
    }
];

const profiles = profileIterator(fdata);



//Next event
document.getElementById('next').addEventListener('click', function () {
    let profile = profiles.next().value;

    if (profile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${profile.name}</li>
                <li class="list-group-item">Age: ${profile.age}</li>
                <li class="list-group-item">City: ${profile.location}</li>
                <li class="list-group-item">LookingFor: ${profile.lookingFor}</li>
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML =
            `<img src="${profile.image}">`
    } else {
        window.location.reload();
    }
});

document.getElementById('next').click();


//Profile iterator
function profileIterator(data) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < data.length ?
                {value: data[nextIndex++], done: false} :
                {done: true}
        }
    }
}
