// 01D12Q 資訊基本能力檢核
// http://portal.stust.edu.tw/StudentPortfolio/Pages/InfoAbility/InfoAbility.aspx

$(document).ready(function(){
  var id = '資訊基本能力檢核'
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