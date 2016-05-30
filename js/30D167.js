// 30D167 專業證照
// http://portal.stust.edu.tw/StudentPortfolio/Pages/LicenseStudent/LicenseStudentPage.aspx

$(document).ready(function(){
  var id = '專業證照'
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