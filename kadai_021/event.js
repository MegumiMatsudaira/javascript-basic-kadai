const chengeBtn = document.getElementById('btn');
const text = document.getElementById('text');

chengeBtn.addEventListener('click' , ()=> {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000)
});
