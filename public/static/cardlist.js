$(document).ready(function(){
  function parseJSON(data){console.log(data)
       $.each(data.card, function(i, item) {
           var divMarkup = 	'<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">' +
						'<div class="card card-hover">' +
							'<div class="card-img">' +
								'<img src="'+item.imgsrc +'" alt="">' +
								'<div class="category"><span class="label label-danger">'+item.category+'</span></div>' +
								'<div class="meta"><a href="'+item.link+'"><i class="fa fa-heart-o"></i> <span>'+item.count+'</span></a></div></div>' +
							'<div class="caption">' +
								'<h3 class="card-title"><a href="'+item.link+'">'+item.title+'</a></h3>' +
								'<ul>' +
									'<li>'+item.regdate+'</li>' +
								'</ul>' +
								'<p>'+item.content+'</p></div></div></div>';

           $(divMarkup).appendTo('#cardlist');
       });
}
   $.ajax({
      dataType:"json",
       url:"../static/data/card.json",
       success: parseJSON
   });
});