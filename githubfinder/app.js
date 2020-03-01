const github = new Github;
const ui = new UI;

class Events {
    searchUserKeyUP(e) {
        const text = e.target.value;
        if (text !== '') {
            github.getUser(text)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        ui.showAlert(`User ${text} is not found`, 'alert alert-danger');
                    } else {
                        ui.showProfile(data.profile);
                    }
                })
        }
        else {
            ui.clearProfile();
        }
    }
}

function addEventListeners() {
    const events = new Events();
    document.getElementById('searchUser').addEventListener('keyup', events.searchUserKeyUP);
}

addEventListeners();