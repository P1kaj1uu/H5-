$(function () {
  // 当点击扫码登录时
  $('.login-tab-l').on('click', function () {
    // 展示扫码登录主体部分，隐藏账户登录主体部分
    $('.qrcode-login').css('display', 'block')
    $('.login-box').css('display', 'none')
    $('.login-tab-l a').addClass('active')
    $('.login-tab-r a').removeClass('active')
  })

  // 当点击账户登录时
  $('.login-tab-r').on('click', function () {
    // 展示扫码登录主体部分，隐藏账户登录主体部分
    $('.login-box').css('display', 'block')
    $('.qrcode-login').css('display', 'none')
    $('.login-tab-r a').addClass('active')
    $('.login-tab-l a').removeClass('active')
  })
})

// 获取隐藏密码
let noShow = document.querySelector('.noShow')
// 获取显示密码
let okShow = document.querySelector('.okShow')
// 切换显示与隐藏
let flag = true
// 获取密码输入框
let psd = document.querySelector('#password')
psd.addEventListener('input', function () {
  if (this.value.length > 0) {
    noShow.style.display = 'block'
  }
  if (this.value.length === 0) {
    noShow.style.display = 'none'
  }
})
noShow.addEventListener('click', function () {
  this.classList.toggle('okShow')
  if (flag) {
    psd.type = 'text'
    flag = false
  } else {
    psd.type = 'password'
    flag = true
  }
})