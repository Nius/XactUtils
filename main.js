$(document).ready(function()
{
	window.setTimeout(function()
	{
		$('button.xa-side-panel-header-close-icon').click();
	},500);

	xau_resolveRank();
	xau_addSnippets();
	xau_addUSAANoteRules();
	xau_addLocalAddresses();
	xau_checkForAdjuster();
});