$(document).on('DOMSubtreeModified',xau_addCopyLossAddressButton);
function xau_addCopyLossAddressButton()
{
	// This is the body of the "Client/Policy" tab content.
	var div = $('#dcp_instructions_val');

	// If the copy button already exists OR the body of the "Client/Policy" tab doesn't exist, abort.
	if(document.getElementById('copyCLA') || !document.getElementById('dcp_instructions_val'))
		return;

	var block = $(div).html();
	var button = ' <button id="copyCLA">Copy</button>';

	var pattern = /(Loss Email Address: )(\w+@claims\.usaa\.com)/;
	var match = block.match(pattern);

	// Check for the loss address in the page. If it doesn't exist (non-USAA claims won't have it), abort.
	if(match === null)
		return;

	// Insert the button.
	var newtext = block.replace(pattern,match[0] + button);
	$(div).html(newtext);

	// Bind the clipboard action to the button.
	$('#copyCLA').click(function()
	{
		navigator.clipboard.writeText(match[2]);
		$('#copyCLA').css('color','#00FF00');
	});
}