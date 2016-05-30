// var link = document.getElementById("start");

// link.addEventListener("click", function(){
//   chrome.tabs.create({'url': 'http://120.117.2.135/CourSel/Pages/CourseMap/CourseMap.aspx?helper=1'});
// }, false);


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
// });
// $('.secondscan').text(JSON.stringify(data, undefined ,2))


chrome.runtime.sendMessage({get: "firstscan"}, function(res) {
  dumpdata('first',res.status)
})

chrome.runtime.sendMessage({get: "secondscan"}, function(res) {
  dumpdata('second',res.status)
})

setInterval(function(){
  chrome.runtime.sendMessage({get: "secondscan"}, function(res) {
    dumpdata('second',res.status)
  })
},500)

function dumpdata (id, data){
  $('table .a .'+id).html(data.專業學程門檻.info.done)
  $('table .b .'+id).html('已通過<br />' + data.分類通識審查.info.done.join('<br>'))
  if(data.分類通識審查.info.undone){
    $('table .b .'+id).html('未通過<br />' + data.分類通識審查.info.undone.join('<br>') + '<br />' + $('table .b .'+id).html() )
  }
  $('table .c .'+id).html(data.必修科目審查.info.undone.join('<br>'))
  $('table .d .'+id).html('(' + data.必修學分審查.info.done + '/' + data.必修學分審查.info.all + ')')
  $('table .e .'+id).html('(' + data.選修學分審查.info.done + '/' + data.選修學分審查.info.all + ')' + '不承認:' + data.選修學分審查.info.deny)
  $('table .f .'+id).html('(' + data.總學分審查.info.done + '/' + data.總學分審查.info.all + ')')
}