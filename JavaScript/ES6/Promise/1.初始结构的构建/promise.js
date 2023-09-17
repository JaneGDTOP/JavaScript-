/**
 * promise 都有什么？
 * PromiseState: 返回promise的状态 pending fullfilled rejected
 * PromiseResult: promise返回的结果
 */
/* promise接收一个参数是一个函数
  函数中有两个参数
  resolve 修改promise状态为fullfilled 
  reject 修改promise状态为rejected
*/
function Promise(executor) {
    // 添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;
    // 有两个函数 resolve 接收参数是结果信息
    // 因为是普通函数，所以这里面有个this指向的问题，如有疑问，可自行解决，或评论
    function resolve(data) {
        // 1. 修改对象的状态 (PromiseState)
        self.PromiseState = 'fulfilled';
        // 2. 设置对象的结果值 (PromiseResult)
        self.PromiseResult = data;
    }

        // reject 接收参数是结果信息
    function reject(data) {
      // 1. 修改对象的状态 (PromiseState)
      self.PromiseState = 'rejected';
      // 2. 设置对象的结果值 (PromiseResult)
      self.PromiseResult = data;
    
    }

      // 同步调用执行器函数
    executor(resolve, reject);
}