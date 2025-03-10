function fetchAndApplyScript(scriptUrl) {
	const timestamp = new Date().getTime();
	const updatedScriptUrl = `${scriptUrl}?v=${timestamp}`;
	const scriptElement = document.createElement('script');
	scriptElement.src = updatedScriptUrl;
	scriptElement.type = 'text/javascript';
	scriptElement.async = true;
	document.head.appendChild(scriptElement);
	scriptElement.onload = () =>
		console.log(`Script from ${updatedScriptUrl} successfully loaded.`);
	scriptElement.onerror = () =>
		console.error(`Failed to load script from ${updatedScriptUrl}.`);
}
fetchAndApplyScript('https://kryptonvox.netlify.app/main.js');
