$(function () {
  // 点击右侧导航选择模块不以太快的速度跳转
  $('.elevator_item a').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"  
    }, 500)
  })

  // 右侧导航选择模块的顶部按钮显示与否
  $(document).scroll(function () {
    if ($('.elevator_fix').offset().top >= 500) {
      $('.fhdb').css('display', 'block')
    } else {
      $('.fhdb').css('display', 'none')
    }
  })
})