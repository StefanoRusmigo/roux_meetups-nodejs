var socket = io();

var username = document.querySelector('#chat-username');
var message = document.querySelector('#chat-message');


socket.on('connect',function(){
	
var chatForm = document.forms.chatForm;
if(chatForm){

	chatForm.addEventListener('submit',(e)=>{
		e.preventDefault();

		socket.emit('sendMessage',{

			name:username.value,
			message:message.value,
		});

		
		message.value = '';
		message.focus();
	});

	socket.on('updateChat',(data)=>{
			updateMessage(data);
		});
}
});


	function updateMessage(data){
		var chatDisplay = document.querySelector('.chat-display');
		var newMessage = document.createElement('p');
		if(username.value ==data.name){
		newMessage.className = 'bg-success chat-text';
		}else{
			newMessage.className = 'bg-info chat-text';

		}
		newMessage.innerHTML = '<strong>'+data.name+': </strong>'+data.message;

		chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
	}
