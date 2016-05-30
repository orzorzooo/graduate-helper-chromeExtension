var firstresult = {}

$(document).ready(function(){
  // 獲取每行資料 (各個類別門檻)
  $('#ctl00_ContentPlaceHolder1_pan_Graduate tbody tr').each(function(){

    // 獲取每格資料 (詳細資料)
    var re = {}
    $(this).find('td').each(function(index, value){
      if( index==0 ){
        //expect total
        if($(this).find('span').text()=='畢業規則審核結果')
          return false
        // check passing or not
        $(this).find('img').attr('src')=='../pic/CourseMap/result_N.jpg' ? re.passing = 0 : re.passing = 1
        re.rule = $(this).find('span').text()
      }

      if( index==1 ){
        re.info = $(this).find('span').text()
      }
    })
    // if re not be {}
    if( re.rule ){
      firstresult[re.rule] = re
    }

  });
  // console.log(JSON.stringify(firstresult, undefined ,2))
  chrome.runtime.sendMessage({post: {firstScan: firstresult} }, function(resp) {
    // console.log(resp)
  })
})