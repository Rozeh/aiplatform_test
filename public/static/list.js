$(document).ready(function(){
  function parseJSON(data){console.log(data)
       $.each(data.list, function(i, item) {
           var divMarkup = 	'<tr>'+
               '<td><a href='+ item.link +'><img src="'+item.iconsrc+'" height="50px"></a></td>' +
               '<td>'+item.proname+'</td>'+
               '<td>'+item.title+'</td>'+
               '<td>'+item.regdate+'</td>'+
               '<td>'+item.content+'</td></tr>';
           $(divMarkup).appendTo('#list');
       });
}
   $.ajax({
      dataType:"json",
       url:"../static/data/list.json",
       success: parseJSON
   });
});
