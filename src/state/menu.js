import {action, makeObservable, observable} from 'mobx';

class Menu {
  show = false;

  constructor() {
    makeObservable(this, {
      show: observable,
      change: action,
    });
  }

  change() {
    this.show = !this.show;
  }
}

const menu = new Menu();

export default menu;
