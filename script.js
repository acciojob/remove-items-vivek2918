//your JS code here. If required.

function removeItem() {
	let selectedValue = document.getElementById('colorSelect').value;
	let selectedItem = document.getElementById(selectedValue);
	selectedItem.remove();
}