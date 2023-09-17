/**
 * call，apply，bind都是为了改变this的指向问题
 * call，apply是临时改变this指向
 * 且call除了第一个参数外，接收一个参数列表。而apply接收一个参数数组。
 * call和apply是改变后页面加载之后就立即执行，是同步代码
 * 
 * 
 * bind也是接收一个参数列表，但是返回一个新的函数，永久改变this指向.
 * bind是异步代码，改变之后不会立即执行，而是返回一个新的函数
 */
// 举一个例子
// 比如Math的max函数，我们想要在数组对象上使用

//apply 第一个参数是对象，第二个参数是max函数所需要的参数
console.log(Math.max.apply("", [1,2,3]));
console.log(Math.max.call('', 1,2,3));
// let fun = Math.max.bind("",1,2,3,4);
// console.log(fun());

// 简单实现一个bind函数
Function.prototype.bind = function(ctx) {
  var fn = this;
  return function() {
      fn.apply(ctx, arguments);
  };
};
