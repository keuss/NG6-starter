class AboutController {
  constructor(User) {
    Object.assign(this, { User });
    this.name = 'about';
  }

  $onInit() {
    // must use this here !
    console.log("AboutController onInit", this.User.getUser());
    console.log("AboutController onInit", this.User.hello());
  }
}

AboutController.$inject = ['User'];

export default AboutController;
