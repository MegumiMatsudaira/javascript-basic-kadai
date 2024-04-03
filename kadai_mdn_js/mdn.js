// 目標　コンソールに「2023年8月22日」形式で今日の日付を表示させる

const today = new Date();

const [month, day, year] = [
  today.getMonth(),
  today.getDate(),
  today.getFullYear(),
];

console.log(year + '年' + (month + 1) + '月' + day + '日');
