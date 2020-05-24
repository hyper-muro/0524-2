import { Who } from './Who.js';

export class Doraemon extends Who {
  doraemon() {
    this.who();
    console.log('ぼくドラえもん！');
  }
}