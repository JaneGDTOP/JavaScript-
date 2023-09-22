参考这个作者的这篇博文：https://blog.csdn.net/Ulrica_Amaris/article/details/108617810
Ajax处理服务端返回的JSON数据，服务端大多数情况下会以JSON对象作为响应数据的格式。
所以如果是Ajax的话客户端拿到响应数据时，要将JSON数据和HTML字符串进行拼接，然后将拼接的结果展示在页面中。
- 也就是说ajax还要自己去转换
- promise的封装
问题：发送一次请求代码过多，冗余且重复
解决方案：将请求代码封装到函数中，我们只需要传参数。axios
- axios对ajax的封装