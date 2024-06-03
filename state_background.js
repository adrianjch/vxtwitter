// Change state on clicked
chrome.action.onClicked.addListener((tab) => {
	chrome.storage.sync.get('state', function(data) {
		if (data.state == 'on') {
			chrome.storage.sync.set({'state': 'off'});
			chrome.action.setIcon({ path: "off.png" });
		}
		else {
			chrome.storage.sync.set({'state': 'on'});
			chrome.action.setIcon({ path: "on.png" });
		}
	});
});

// Try loading the correct icon when browser opens
chrome.storage.sync.get('state', function(data) {
	if(data.state == 'on') {
		chrome.action.setIcon({ path: "on.png" });
	}
	else {
		chrome.action.setIcon({ path: "off.png" });
	}
});
console.log("loaded");