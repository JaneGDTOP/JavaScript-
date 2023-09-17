## Script标签中的defer和async之间的区别
- 参考：https://blog.csdn.net/qq_27674439/article/details/101316754
1. 默认引用 script:<script type="text/javascript" src="x.min.js"></script>
当浏览器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。

2. async模式 <script type="text/javascript" src="x.min.js" async="async"></script>
当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。

3. defer模式 <script type="text/javascript" src="x.min.js" defer="defer"></script>
当浏览器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。

--主要就是async异步下载并立即执行，之后在执行脚本，defer异步加载后解析文档，然后在执行脚本--
## 应用场景
- defer
  - 如果你的脚本代码依赖于页面中的DOM元素（文档是否解析完毕），或者被其他脚本文件依赖。
- async
  - 如果你的脚本并不关心页面中的DOM元素（文档是否解析完毕），并且也不会产生其他脚本需要的数据。
一句话，defer是“渲染完再执行”，async是“下载完就执行”。
