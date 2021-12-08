var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for(var i=0;i<navMenuAnchorTags.length;i++){
	navMenuAnchorTags[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetSectionId=this.textContent.trim().toLowerCase();
		console.log(targetSectionId)
		var targetSection=document.getElementById(targetSectionId);
		
		var interval=setInterval(function(){
			var targetSectionCordinates=targetSection.getBoundingClientRect();
			if(targetSectionCordinates.top<=0){
				clearInterval(interval);
				return;
			}
           window.scrollBy(0,50);


		},60)
	})
}
