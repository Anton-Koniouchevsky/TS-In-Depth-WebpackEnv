import { Confirmable } from '../decorators';

export class ViewController {
  @Confirmable('Are you sure?')
  @Confirmable('Are you super sure?')
  clickButton() {
    console.log('button clicked');
  }
}
