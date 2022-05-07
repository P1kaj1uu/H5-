// 获取元素
let li = document.querySelector('.fl ul li:last-child')
let loginName = document.querySelector('.fl ul li:last-child a:first-child')
let register = document.querySelector('.fl ul li:last-child a:last-child')
// 读取本地存储中的数据
let obj = JSON.parse(localStorage.getItem('user'))
// 如果有数据
if (obj) {
  loginName.innerHTML = `欢迎您，${obj.uname}`
  register.style.display = 'none'
  loginName.classList.add('style_red')
  loginName.href = 'javascript:;'
  // 创建元素
  let a = document.createElement('a')
  a.innerHTML = '退出登录'
  a.classList.add('exit')
  li.appendChild(a)
}

// 当页面中存在退出登录时
if (register.nextElementSibling) {
  // 获取退出登录元素
  let exit = register.nextElementSibling
  // 当点击退出登录时
  exit.addEventListener('click', function () {
    // 清除本地存储中的数据
    localStorage.removeItem('user')
    // 重新渲染页面
    exit.style.display = 'none'
    register.style.display = 'inline-block'
    loginName.innerHTML = `请登录`
    loginName.href = '../login.html'
    loginName.classList.remove('style_red')
  })
}
