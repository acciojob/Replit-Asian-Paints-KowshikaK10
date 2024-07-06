//your JS code here. If required.
document.getElementById('change_btn').addEventListener('click',()=>{
	const blockId=document.getElementById('input-id').value;
	const colorId=document.getElementById('color-id').value;
	document.getElementById(blockId).style.backgroundColor=colorId;
});

document.getElementById('reset').addEventListener('click',()=>{
	const allBlocks=document.getElementsByClassName('grid-item');
	for(var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.backgroundColor = 'transparent';
    }
});
