// 放大镜效果
// 获取元素
let box = document.querySelector('.prev-box')
let mask = document.querySelector('.mask')
let big = document.querySelector('.big')

// 当鼠标移到到预览图片上时
box.addEventListener('mouseover', function (e) {
  // 显示遮罩层和大图片
  mask.style.display = 'block'
  big.style.display = 'block'
  let x = e.pageX - box.offsetLeft
  let y = e.pageY - box.offsetTop
  let width = x - mask.offsetWidth / 2
  let height = y - mask.offsetHeight / 2
  if (width <= 0) {
    width = 0
  } else if (width >= box.offsetWidth - mask.offsetWidth) {
    width = 100
  }
  if (height <= 0) {
    height = 0
  } else if (height >= box.offsetHeight - mask.offsetHeight) {
    height = box.offsetHeight - mask.offsetHeight
  }
  mask.style.left = width + 'px'
  mask.style.top = height + 'px'
  let bigImg = document.querySelector('.big>img')
  // 大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
  let bigX =
    (width * (bigImg.offsetWidth - big.offsetWidth)) /
    (box.offsetWidth - mask.offsetWidth)
  let bigY =
    (height * (bigImg.offsetHeight - big.offsetHeight)) /
    (box.offsetHeight - mask.offsetHeight)
  bigImg.style.left = -bigX + 'px'
  bigImg.style.top = -bigY + 'px'
})

// 当鼠标离开预览图片时
box.addEventListener('mouseout', function () {
  // 隐藏遮罩层和大图片
  mask.style.display = 'none'
  big.style.display = 'none'
})

// 获取元素
let pre_sms = document.querySelectorAll('.detailSlide ul li')
let small = document.querySelector('.small')
for (let i = 0; i < pre_sms.length; i++) {
  pre_sms[i].addEventListener('mouseenter', function () {
    // 排他思想
    document.querySelector('.sms_active').classList.remove('sms_active')
    this.children[0].classList.add('sms_active')
    // 显示对应的小图片
    small.src = this.children[0].src
  })
}
