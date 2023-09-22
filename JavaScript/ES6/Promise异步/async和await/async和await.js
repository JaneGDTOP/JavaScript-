/**
 * async和await是优势在于处理then的调用链
 * 缺点：滥用await可能会导致性能问 题，
 * 因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，
 * 但仍然 需要等待前者完成，导致代码失去了并发性
 * 
 * 所以这里的执行过程和事件循环一样
 */
var a = 0
var b = async () => {
    a = a + await 10
    console.log('2', a) // -> '2' 10
    a = (await 10) + a
    console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1