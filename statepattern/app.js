class PageState {
    constructor() {
        this.currentState = new homeState(this);

    }

    init() {
        this.change(new homeState);
    }

    change(state) {
        this.currentState = state;

    }
}


class homeState {
    constructor(page) {
        document.querySelector('#heading').textContent = null;
        document.querySelector('#content').innerHTML = `
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>`;
    }
}

class aboutState {
    constructor(page) {
        document.querySelector('#heading').textContent = 'About Us';
        document.querySelector('#content').innerHTML = `
        <p>This is an about page</p>`;
    }
}

class contactState {
    constructor(page) {
        document.querySelector('#heading').textContent = 'Contact Us';
        document.querySelector('#content').innerHTML = `
        <p>Contact us</p>`;
    }

}

const page = new PageState();
page.init();

const home = document.getElementById('home'),
    about = document.getElementById('about');
contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new homeState)
});
about.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new aboutState)
});

contact.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new contactState)
});


