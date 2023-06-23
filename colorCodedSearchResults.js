// Pattern identifying the contractor using this extension.
var XAU_CONTRACTOR_PATTERN_COLORSEARCH = '@CONTRACTORDOMAIN\.COM';

// Variable requires global scope.
var xau_username = '';

$(document).ready(function()
{
	// The header spawns without a username; the username is populated
	// later for some reason. Listen for the name and grab it when available.
	$('header').on('DOMSubtreeModified',xau_getUserName);

	// The search results are populated after page load, so listen for them.
	$(document).on('DOMSubtreeModified',xau_addColorCodedSearch);
});

function xau_getUserName()
{
	// If the username hasn't been populated yet, abort.
	if($('#user-menu-name').length < 1 || $('#user-menu-name').html().length < 1)
		return;

	// Grab the username and then unbind this function from the DOM modified event to preven needless calls.
	xau_username = $('#user-menu-name').html().toUpperCase().match('(\\w+'+XAU_CONTRACTOR_PATTERN_COLORSEARCH+')')[1];
	$('header').off('DOMSubtreeModified',xau_getUserName);
}

// This function is called whenever the DOM tree is changed because search results are not loaded with the
// page; they are dynamically added later. Because this function also modifies the DOM it needs to
// block its own modifications from triggering infinite recursion of this function.
var XAU_BLOCK_CCS_DOM_CHANGE = false;
function xau_addColorCodedSearch()
{
	// If this function is already executing, abort.
	if(XAU_BLOCK_CCS_DOM_CHANGE || xau_username.length < 1)
		return;
	XAU_BLOCK_CCS_DOM_CHANGE = true;

	if(window.location.href.includes("search.jsp"))
	{
		var rows = $('.search-results-table td:last-child');
		$(rows).each(function()
		{
			if($(this).html().toUpperCase().match(xau_username))
			{
				$(this).parent().find('td').addClass('xactutils-self');
			}
		});
	}

	XAU_BLOCK_CCS_DOM_CHANGE = false;
}