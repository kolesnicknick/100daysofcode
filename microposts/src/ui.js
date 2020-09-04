class UI {
  constructor() {
    this.posts = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.postSubmitBtn = document.querySelector('.post-submit');
    this.idInput = document.querySelector('#id');
    this.forState = 'add';
  }

  showPosts(posts) {

  }
}

export const ui = new UI();
