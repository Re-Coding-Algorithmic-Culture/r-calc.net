// DRAGGING ELEMENTS

var dragDialog = null;
var dragOffset = {x:0, y:0};
var scrollOffset = {x:0, y:0};
var dragPosition = {x:0, y:0};



document.addEventListener("mousemove", moveDrag);
document.addEventListener("mouseup", endDrag);

document.addEventListener("touchmove", function(e){moveDrag(e, true);});
document.addEventListener("touchend", function(e){endDrag(e, true);});

var topZ = 1;

function startDrag(e, touch = false)
{
    e=e || window.event;
    pauseEvent(e);

	//window.alert(elementMouseIsOver.className);
	
	if (dragDialog != null) return;
	
	if(e.target.classList.contains("icon") == true) dragDialog = e.target;
	else dragDialog = e.target.parentElement;
	
	
	
	if(touch)
	{
		dragOffset.x = e.touches[0].screenX - dragDialog.offsetLeft;
		dragOffset.y = e.touches[0].screenY - dragDialog.offsetTop;
	}
	else
	{
		dragOffset.x = e.screenX - dragDialog.offsetLeft;
		dragOffset.y = e.screenY - dragDialog.offsetTop;
	}
	
	var iframes = document.getElementsByTagName("iframe");
	for (var k = 0; k < iframes.length; k++) {
	  iframes[k].style.pointerEvents = "none";
	} 
	
	bringToTop(dragDialog);
	
	moveDrag(e, touch);
}

function moveDrag(e, touch = false)
{
	if (dragDialog == null) return;
	
	
	if(touch)
	{
		dragPosition.x = e.touches[0].screenX - dragOffset.x;
		dragPosition.y = e.touches[0].screenY - dragOffset.y;
	}
	else
	{
		dragPosition.x = e.screenX - dragOffset.x;
		dragPosition.y = e.screenY - dragOffset.y;
	}
	
	if(dragPosition.y < 0) dragPosition.y = 0;
	
	dragDialog.style.left = dragPosition.x + "px";
	dragDialog.style.top = dragPosition.y + "px";
}

function endDrag(e, touch = false)
{
	//window.alert("sometext");
	
	if (dragDialog == null) return;
	
		
	dragDialog.style.left = dragPosition.x + "px";
	dragDialog.style.top = dragPosition.y + "px";
	
	clampInWindowRect(dragDialog);
	
	var iframes = document.getElementsByTagName("iframe");
	for (var k = 0; k < iframes.length; k++) {
	  iframes[k].style.pointerEvents = "initial";
	} 

	dragDialog = null;
}


function setLayout(roomTile, roomPosition)
{
	roomLayout[roomTile.dataset.room] = [roomPosition.x, roomPosition.y]
	roomLayout[roomTile.dataset.room] = [roomPosition.x, roomPosition.y]
}



function clampInWindowRect(dialog)
{

	var dialogRect = dialog.getBoundingClientRect();
	
	//console.log(dialogRect)
	
	if (dialogRect.left < dialogRect.left - dialogRect.right + 50) dialog.style.left = dialogRect.left - dialogRect.right + 50 + "px";
	if (dialogRect.top < 0)  dialog.style.top = "0px";
	
	if (dialogRect.top > window.innerHeight  - 50)  dialog.style.top = window.innerHeight - 50 + "px";
	if (dialogRect.left > window.innerWidth - 70) dialog.style.left =  window.innerWidth - 70+ "px";	
	
}

function clampAll()
{
	for (var i = 0; i < activeElements.length; i++)
	{
		//this references the activeElements var from un_time.js
		clampInWindowRect(document.getElementById("couch"+activeElements[i]))
	}
}

//via https://stackoverflow.com/a/5432363
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

function bringToTop(item)
{
	topZ += 1;
	item.style.zIndex = topZ;
}
	

window.addEventListener("resize", clampAll);