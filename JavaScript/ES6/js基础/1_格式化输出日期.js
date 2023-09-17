function clock() {
  // 实例化时间
  let time = new Date();

  //获取年月日周
  let y = time.getFullYear(),
  m = time.getMonth() + 1,
  d = time.getDate();
  week = toWeek(time.getDay());

  // 时分秒
  let h = time.getHours(),
  miu = time.getMinutes(),
  s = time.getSeconds(),
  ms = time.getMilliseconds();

  var  result = `今天是${y}年${m}月${d}日 ${week} ${h}时${miu}分${s}秒${ms}毫秒`;
  console.log(result);
}

function toWeek (week) {
  let resuleWeek = '';
  switch (week) {
    case 0:
      resuleWeek = '日';
    case 1:
      resuleWeek = '一';
    case 2:
      resuleWeek = '二';
    case 3:
      resuleWeek = '三';
    case 4:
      resuleWeek = '四';
    case 5:
      resuleWeek = '五';
    case 6:
      resuleWeek = '六';
  }
  return '星期' + resuleWeek;
}
clock();