// DRAGGING ELEMENTS

var dragDialog = null;
var dragOffset = {x:0, y:0};
var scrollOffset = {x:0, y:0};
var dragPosition = {x:0, y:0};


document.addEventListener("mousemove", moveDrag);
document.addEventListener("mouseup", endDrag);

document.addEventListener("touchmove", function(e){moveDrag(e, true);});
document.addEventListener("touchend", function(e){endDrag(e, true);});

var topZ = 2;

var activeElements;


window.onload = init;
function init()
{
	/* document.getElementById("noscript").remove(); */
	activeElements = document.getElementById("bucket").children;
	
	// randomize icon positions on load
	randomCouchPos();
}



function startDrag(e, touch = false)
{
    e=e || window.event;
    pauseEvent(e);

	//window.alert(elementMouseIsOver.className);
	
	if (dragDialog != null) return;
	
	if(e.target.classList.contains("couch-icon") || e.target.classList.contains("couch-text") ) dragDialog = e.target.parentElement.parentElement;
	else if(e.target.classList.contains("couch-link")) dragDialog = e.target.parentElement;
	else if(e.target.type = "span") dragDialog = e.target.parentElement.parentElement.parentElement;
	else dragDialog = e.target;
	
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
	
	/*var iframes = document.getElementsByTagName("iframe");
	for (var k = 0; k < iframes.length; k++) {
	  iframes[k].style.pointerEvents = "none";
	} */
	
	bringToTop(dragDialog);
}

function moveDrag(e, touch = false)
{
	if (dragDialog == null) return;
	if (dragOffset.x == dragPosition.x && dragOffset.y == dragPosition.y) return;
	
	dragDialog.children[0].style.pointerEvents = "none";
	
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
	
	clampInWindowRect(dragDialog);
}

function endDrag(e, touch = false)
{
	if (dragDialog == null) return;
	
	/*var iframes = document.getElementsByTagName("iframe");
	for (var k = 0; k < iframes.length; k++) {
	  iframes[k].style.pointerEvents = "initial";
	} */
	
	dragDialog.children[0].style.pointerEvents = "initial"

	dragDialog = null;
}



function randomCouchPos()
{
	
	for (var i = 0; i < activeElements.length; i++)
	{
		var x = 100 + ((window.innerWidth - 200) * (i/activeElements.length)) + ((Math.random()*300) - 150);
		var y = Math.random() * (window.innerHeight - 200);
		
		if (x < 0) x = 0; if (y < 0) y = 0;
		if (x > window.innerWidth - 250) x = window.innerWidth - 250;
		
		activeElements[i].style.left = x + "px";
		activeElements[i].style.top = y + "px";
	}
}

function clampInWindowRect(dialog)
{

	var dialogRect = dialog.getBoundingClientRect();
	
	//console.log(dialogRect)
	
	if (dialogRect.left < dialogRect.left - dialogRect.right + 100) dialog.style.left = dialogRect.left - dialogRect.right + 100 + "px";
	if (dialogRect.top < 0)  dialog.style.top = "0px";
	
	if (dialogRect.top > window.innerHeight  - 100)  dialog.style.top = window.innerHeight - 100 + "px";
	if (dialogRect.left > window.innerWidth - 100) dialog.style.left =  window.innerWidth - 100+ "px";	
	
}

function clampAll()
{
	for (var i = 0; i < activeElements.length; i++)
	{
		//this references the activeElements var from un_time.js
		clampInWindowRect(activeElements[i])
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