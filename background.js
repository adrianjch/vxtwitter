// Modify clipboard data if extension is enabled
window.addEventListener('copy', function(e){
	var text = window.getSelection().toString().replace(/(x|twitter).com/, 'vxtwitter.com');
	//e.clipboardData.setData('text/plain', text); // This works
	//e.preventDefault();
	chrome.storage.sync.get('state', function(data) {
		if(data.state == 'on') {
			navigator.clipboard.writeText(text);
		}
	});
});