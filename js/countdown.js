// 获取手机号输入框
let telInp = document.querySelector('#tel')
// 手机号的正则表达式
let TelReg =
  /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

// 验证码倒计时
let djs = 60
// 获取验证码按钮
let btn = document.querySelector('.getBtn')
btn.addEventListener('click', function () {
  // 当手机号码格式正确时
  if (TelReg.test(telInp.value)) {
    btn.style.disabled = true
    let timer1 = setInterval(function () {
      djs--
      btn.innerHTML = `${djs}s后重新获取`
      if (djs === 0) {
        clearInterval(timer1)
        btn.style.disabled = false
        btn.innerHTML = `重新获取验证码`
        djs = 60
      }
    }, 1000)
  } else {
    // 当手机号码格式错误时
    btn.style.disabled = true
  }
})
