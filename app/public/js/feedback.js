

$(function(){
	$.getJSON('api',updateFeedback);
	$('.feedback-form').submit(function(e){
		e.preventDefault();
		$.post('api',{
			name:$('#feedback-form-name').val(),
			title:$('#feedback-form-title').val(),
			message:$('#feedback-form-message').val(),
		},updateFeedback);
	});

	$('.feedback-messages').on('click', function(e){

		if(e.target.className=="feedback-delete btn btn-xs btn-danger"){
			$.ajax({
				url:'api/'+ e.target.id,
				type:'DELETE',
				success:updateFeedback
			});
		}
	});
	function updateFeedback(data){
		var output ='';
		$.each(data,function(key,item){
output+='     		<div class="feedback-item item-list media-list">'
output+='     			  <div class="feedback-item media">'
output+='     			  <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"id="'+key+'"><span  class="glyphicon glyphicon-remove"></span></button> </div>'
output+='     			    <div class="feedback-info media-body">'
output+='     			      <div class="feedback-head">'
output+='     			        <div class="feedback-title">'+item.title+'<small class="feedback-name label label-info">'+item.name+'</small></div>'
output+='    				      </div>'
output+='     			      <div class="feedback-message">'+item.message+'</div>'
output+='     			    </div>'
output+='     			  </div>'
output+='     			</div>'

		});

$('.feedback-messages').html(output);
	}
});