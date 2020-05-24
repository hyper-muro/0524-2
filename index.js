import { Where } from './Where.js'; //➀で作った➁で使用していないクラスのインポート
import { Doraemon } from './Doraemon.js'; //➁で作ったクラスのインポート

//インポートしたクラスのインスタンス化
const nobita = new Where();
const sayHello = new Doraemon();

//作成したクラスメソッドの実行
sayHello.doraemon();
nobita.where();