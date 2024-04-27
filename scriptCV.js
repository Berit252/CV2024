document.addEventListener('DOMContentLoaded', function() {
  let isBgChanged = false; // 用于跟踪背景颜色是否已更改
  let switchImg = document.getElementById('switch'); // 获取开关图片元素
  let body = document.body; // 获取body元素，以便稍后更改背景颜色
  let content = document.querySelectorAll('p');
  let title = document.querySelectorAll('.title');
  const arrowImgBlack = document.getElementById('backBlack');
  const arrowImgWhite = document.getElementById('backWhite');

  switchImg.addEventListener('click', function() {

    this.style.transition = 'transform 0.25s ease';
    this.style.transform = 'translateY(16px)';
    setTimeout(() => {
      this.style.transform = 'translateY(0)';
    }, 250);

    if (!isBgChanged) {
      body.style.backgroundColor = '#333';
      content.forEach(function(p) {
        p.style.color = '#f1f1f1';
      });
      title.forEach(function(element) {
        element.style.color = '#f1f1f1';
      })
      arrowImgBlack.style.display = 'none'
      arrowImgWhite.style.display = 'block'
      isBgChanged = true;
    } else {
      body.style.backgroundColor = '#f1f1f1';
      content.forEach(function(p) {
        p.style.color = '#333';
      });
      title.forEach(function(element) {
        element.style.color = '#333';
      })
      arrowImgWhite.style.display = 'none'
      arrowImgBlack.style.display = 'block'
      isBgChanged = false;
    }
  });
});

document.getElementById('backBlack').addEventListener('click', function(){
  window.location.href = 'http://127.0.0.1:5500/index.html';
})
document.getElementById('backWhite').addEventListener('click', function(){
  window.location.href = 'http://127.0.0.1:5500/index.html';
})