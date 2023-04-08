var navMenuAnchorTags = doucment.querySelectorAll('.nav-menu a');
var interval;
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID =this.textContent.trim().toLowerCase();
        var targetSection =document.getElementById(targetSectionID);
        interval=setInterval(function(){
            scroll vertically(targetSection);
        },20);
    });
}
function scroll vertically (targetSection){
    var targetsectionCo-ordinate = targetsectionCo.getBoundingclientRect();
    if(targets)
}