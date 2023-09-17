/**
 * typeof 可以判断出基本上数据类型，除了null 
 * null typeof null 得到object
 * 
 * instanceof 可以判断出对象， 是通过原型链来判断
 * A instanceof B：a是一个对象 B是一个函数 判断B的prototype的原型对象是否在A对象
 * 的原型链上
 *  */
function myinstanceof(left, right) {
    // left 对象A  right 函数B
    // 要获取right的显示原型
    let rp = right.prototype;
    // 获取对象的隐式原型
    left = left.__proto__;
    // 判断对象的（隐式）原型是否等于构造函数的显式原型
    while(true) {
      if (left === null) {
        return false;
      }
      if (left === rp) {
        return true;
      }
      // 如果不在 继续读取隐式原型属性 直到读取null
      left = left.__proto__;
    }
}

let a = /1/;
let b = "123";
console.log(a,b);
console.log(a instanceof RegExp, myinstanceof(a, RegExp));
console.log(b instanceof RegExp, myinstanceof(b, RegExp));
