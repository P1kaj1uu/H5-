$(function () {
  // 页面一加载默认隐藏输入框后面的删除叉叉
  $('.i-ops').hide()

  // 监听输入框键盘抬起事件
  $('.field').keyup(function () {
    $(this).css('outline', 'auto')
    if ($(this).val() === '') {
      $('.i-ops').hide()
    } else {
      $('.i-ops').show()
    }
  })

  // 当输入框获得焦点时
  $('.field').on('focus', function () {
    $(this).css('outline', 'auto')
    if ($(this).val() === '') {
      $('.i-ops').hide()
    } else {
      $('.i-ops').show()
    }
  })
})