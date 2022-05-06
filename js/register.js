$(function () {
  // 手机号码的正则表达式
  var TelReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
  // QQ号码的正则表达式
  var QQReg = /[1-9][0-9]{4,}/
  // 密码的正则表达式
  var PsdReg = /^[a-zA-Z]\w{5,17}$/

  // 校验手机号码
  $('#tel').on('blur', function () {
    if ($(this).val().trim().length !== 0) {
      if (TelReg.test($(this).val())) {
        $('.sj_succ').show()
        $('.sj_err').hide()
        $('.sj_null').hide()
      } else {
        $('.sj_succ').hide()
        $('.sj_null').hide()
        $('.sj_err').show()
      }
    } else {
      $('.sj_succ').hide()
      $('.sj_err').hide()
      $('.sj_null').show()
    }
  })

  // 校验QQ号码
  $('#qq').on('blur', function () {
    if ($(this).val().trim().length !== 0) {
      if (QQReg.test($(this).val())) {
        $('.qq_succ').show()
        $('.qq_err').hide()
        $('.qq_null').hide()
      } else {
        $('.qq_succ').hide()
        $('.qq_null').hide()
        $('.qq_err').show()
      }
    } else {
      $('.qq_succ').hide()
      $('.qq_err').hide()
      $('.qq_null').show()
    }
  })

  // 校验登录密码
  $('#psd').on('blur', function () {
    if ($(this).val().trim().length !== 0) {
      if (PsdReg.test($(this).val())) {
        $('.psd_succ').show()
        $('.psd_err').hide()
        $('.psd_null').hide()
      } else {
        $('.psd_succ').hide()
        $('.psd_null').hide()
        $('.psd_err').show()
      }
    } else {
      $('.psd_succ').hide()
      $('.psd_err').hide()
      $('.psd_null').show()
    }
  })

  // 校验确认密码
  $('#repsd').on('blur', function () {
    if ($(this).val().trim().length !== 0) {
      if (PsdReg.test($(this).val())) {
        if ($(this).val() == $('#psd').val()) {
          $('.repsd_succ').show()
          $('.repsd_err').hide()
          $('.repsd_null').hide()
        } else {
          $('.repsd_succ').hide()
          $('.repsd_err').show()
          $('.repsd_null').hide()
        }
      }
    } else {
      $('.repsd_succ').hide()
      $('.repsd_err').hide()
      $('.repsd_null').show()
    }
  })
})

// 获取同意协议并注册按钮
let agree = document.querySelector('.agree input')
// 获取完成注册按钮
let submit = document.querySelector('input[type=submit]')
agree.addEventListener('click', function () {
  // 当复选框选中时
  if (agree.checked) {
    // 取消完成注册按钮的禁用
    submit.disabled = false
    submit.style.backgroundColor = '#c81623'
  } else {
    submit.disabled = true
    submit.style.backgroundColor = '#666'
  }
})

// 获取隐藏密码
let noShow = document.querySelector('.noShow')
// 获取显示密码
let okShow = document.querySelector('.okShow')
// 切换显示与隐藏
let flag = true
// 获取密码输入框
let psd = document.querySelector('#psd')
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