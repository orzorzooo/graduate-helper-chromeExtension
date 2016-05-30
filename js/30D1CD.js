// 30D1CD 校外實習
// http://portal.stust.edu.tw/StudentPortfolio/Pages/Manager/Student_Intern_data.aspx

$(document).ready(function(){
  var id = '校外實習'
  var str = '未通過'

  if( document.documentElement.innerHTML.indexOf(str) > 0 ){ // 代表未通過
    chrome.runtime.sendMessage({update: { name: id, status: 'fail' } }, function(resp) {
    // console.log(resp)
    })
  }else{
    chrome.runtime.sendMessage({update: { name: id, status: 'ok' } }, function(resp) {
    // console.log(resp)
    })
  }
})