// 点击nav导航栏右侧部分
// 获取元素
let sk_cons = document.querySelectorAll('.sk_con li a')
for (let i = 0; i < sk_cons.length; i++) {
  sk_cons[i].addEventListener('click', function () {
    // 排他思想
    document.querySelector('.sk_con .style_red').classList.remove('style_red')
    this.classList.add('style_red')
  })
}