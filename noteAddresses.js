var XAU_CONTRACTOR_DOMAIN = '@contractordomain.com';

// First set of addresses
var XACTUTILS_LOCAL_ADDRESSES =
{
	"James T. Kirk":	"jkirk",
	"Benjamin Sisko":	"bsisko",
	"Jean-Luc Picard":	"jlpicard",
	"Kathryn Janeway":	"kjaneway"
};

// Second set of addresses
var XACTUTILS_LOCAL_ADDRESSES_MID =
{
	"William Adama":	"wadama",
	"Laura Rosslyn":	"lrosslyn"
};

// Third set of addresses
var XACTUTILS_LOCAL_ADDRESSES_VIP =
{
	"Joseph Bishop":	"jbishop",
	"Kong Chang":		"kchang"
};

// Add an advisory about USAA program rules regarding use of the adjuster's email address.
function xau_addUSAANoteRules()
{
	// Only run this function on the add-note page AND if the claim number is
	// formatted like a USAA claim number (999999999-333).
	var url = window.location.href;
	var urlPattern = 'dlg_addnoteform\.jsp';
	var claimPattern = /\d\d\d\d\d\d\d\d\d-\d\d\d/;
	if(url.match(urlPattern) !== null && $('form p').html().match(claimPattern) !== null)
	{
		var adjDiv = $('input[name="emailAdjuster"]').parent();
		$(adjDiv).css('max-width','25em');
		$(adjDiv).css('border','0.25em #990000 solid');
		$(adjDiv).css('border-radius','5px');
		$(adjDiv).css('padding-left','0.5em');
		$(adjDiv).css('margin-left','-0.75em');

		var warn = document.createElement('p');
		$(warn).html('USAA program rules specify that this address should be used only if the note warrants a response from the adjuster. Routine updates or advisories should be sent to the loss address instead.');
		$(warn).css('font-size','0.75em');
		$(warn).css('font-style','italic');
		$(warn).css('line-height','1.35em');
		$(warn).css('padding-left','3.5em');
		$(warn).css('margin-bottom','0.5em');
		$(warn).addClass('force-red');
		$(adjDiv).append(warn);
	}
}

// Check whether the handling adjuster has an email address listed in XA.
function xau_checkForAdjuster()
{
	// Only run this function on the add-note page.
	var url = window.location.href;
	var urlPattern = 'dlg_addnoteform\.jsp';
	if(url.match(urlPattern) !== null)
	{
		var emailDiv = $('input[name="emailAdjuster"]').parent();
		if($(emailDiv).children('input[type="hidden"]').val().length === 0)
		{
			$(emailDiv).children().attr('disabled',true);
			$(emailDiv).children().addClass('force-darkGray');
		}
	}
}

// Add addresses to the list of address checkboxes.
function xau_addLocalAddresses()
{
	// Only run this function on the add-note page.
	var url = window.location.href;
	var urlPattern = 'dlg_addnoteform\.jsp';
	if(url.match(urlPattern) !== null)
	{
		// Determine the stored address of the project manager. If it matches
		// any of the custom addresses from the lists above, those entries
		// will be disabled.
		var manager = $('input[name="hiddenEmailProjectManagers"]').val();

		// Parent div into which to add the new checkboxes.
		var emailDiv = $('input[name="emailAdjuster"]').parent().parent();

		var spacer = document.createElement('p');
		$(spacer).html('&nbsp;');
		$(spacer).css('border-bottom','1px #CCCCCC solid');
		$(emailDiv).append(spacer);

		xau_addAddressesFromList(XACTUTILS_LOCAL_ADDRESSES,emailDiv,manager);

		$(emailDiv).append($(spacer).clone());

		xau_addAddressesFromList(XACTUTILS_LOCAL_ADDRESSES_MID,emailDiv,manager);

		$(emailDiv).append($(spacer).clone());

		xau_addAddressesFromList(XACTUTILS_LOCAL_ADDRESSES_VIP,emailDiv,manager);
	}
}

/*
Add checkboxes for each address in the provided list.
The list must be formatted as follows:
var XACTUTILS_LIST_NAME =
{
	"DisplayName":	"addressBeforeAtSign",
	"DisplayName":	"addressBeforeAtSign",
	"DisplayName":	"addressBeforeAtSign",
};

Arguments for this function are as follow:
LIST	- The list of addresses to add; must be formatted as shown.
parent	- The element to which to append the new checkboxes.
exclude - If any address matches this string then its checkbox will be disabled.
*/

function xau_addAddressesFromList(LIST,parent,exclude)
{
	for(const displayName in LIST)
	{
		var disable = (LIST[displayName]+'@duraclean-somd.com' === exclude);

		var addr = LIST[displayName];
		var HTML = '<div class="input-field"><input type="checkbox" '+(disable ? 'disabled' : '')+' name="email'+addr+'" id="email'+addr+'"onchange="emailCheck(\'Contractor Employee\',this,$(\'#hiddenEmail'+addr+'\').val())"><label '+(disable ? 'class="force-darkGray"' : '')+' for="email'+addr+'">'+displayName+(disable ? ' (Project Manager)' : '')+'</label><input type="hidden" name="hiddenEmail'+addr+'" id="hiddenEmail'+addr+'" value="'+addr+XAU_CONTRACTOR_DOMAIN+'"></div>';
		$(parent).append(HTML);
	}
}