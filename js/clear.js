// 点击输入框后面的叉叉清空内容

// 获取输入框
let field = document.querySelector('.field')
// 获取叉叉
let clear = document.querySelector('.i-ops')
clear.addEventListener('click', function () {
  field.value = ''
  field.style.outline = 'none'
  clear.style.display = 'none'
})