import {EventEmitter} from 'events';

let productsEvents=new EventEmitter(); 
// в потоке productsEvents будут все события, связанные с products
// событие "EProductClicked" - выбран вариант ответа, его сэмиттирует Product и примет Products
// событие "EProductDeleted" - выбран вариант ответа, его сэмиттирует Product и примет Products
// событие "ENewWorkMode" - выбран вариант ответа, его сэмиттирует Product и примет Products

// событие "EProductEdit" - выбран вариант ответа, его сэмиттирует Product и примет Products

export {productsEvents};