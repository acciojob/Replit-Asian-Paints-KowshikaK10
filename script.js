//your JS code here. If required.
document.getElementById('change_button').addEventListener('click',()=>{
	const blockId=document.getElementById('block_id').value;
	const colorId=document.getElementById('colour_id').value;
	document.getElementById(blockId).style.backgroundColor=colorId;
});

document.getElementById('reset').addEventListener('click',()=>{
	const allBlocks=document.getElementsByClassName('grid-item');
	for(var i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.backgroundColor = 'transparent';
    }
});
