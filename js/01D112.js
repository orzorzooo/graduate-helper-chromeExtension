// 01D112 外語能力檢定
// http://portal.stust.edu.tw/StudentPortfolio/Pages/stud_lang_grad/stud_lang_grad.aspx

$(document).ready(function(){
  var id = '外語能力檢定'
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