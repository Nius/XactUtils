// Pattern identifying the contractor using this extension.
var XAU_CONTRACTOR_PATTERN = '@CONTRACTOREMAIL\.COM';

// Patterns by which users are color coded.
var XAU_NOTE_PATTERNS =
{
	'@USAA\.COM':				'xactutils-usaa',
	'@CONTRACTORCONNECTION\.COM':		'xactutils-cc',
	'@US.CRAWCO.COM':			'xactutils-cc',
	[XAU_CONTRACTOR_PATTERN]:		'xactutils-contractor',
	'XACTNET SYSTEM':			'xactutils-xactnet',
	'XACTANALYSIS SYSTEM':			'xactutils-xactnet'
}

// This function is called whenever the DOM tree is changed because notes are not loaded with the
// page; they are dynamically added later. Because this function also modifies the DOM it needs to
// block its own modifications from triggering infinite recursion of this function.
var XAU_BLOCK_DOM_CHANGES = false;
$(document).on('DOMSubtreeModified',xau_addColorCodedNotes);

function xau_addColorCodedNotes()
{
	// If this function is already executing, abort.
	if(XAU_BLOCK_DOM_CHANGES)
		return;
	XAU_BLOCK_DOM_CHANGES = true;

	// This selector grabs the author cell of every note row but excludes rows that have
	// already been color-coded. Only one cell from each row is grabbed, so iterating through
	// these is essentially the same as iterating through rows.
	var cells = $('#detailTabArea table.mdl-data-table.mdl-js-data-table.nohover.full-width tr:not([coded]) td:nth-child(2)');

	// For each row...
	for(i = 0; i < cells.length; i ++)
	{
		var cell = cells[i];
		var text = $(cell).html().toUpperCase();

		// For each color coding rule...
		for(const key in XAU_NOTE_PATTERNS)
		{
			var pattern = key;

			// If the pattern does not match, move immediately to the next pattern.
			var matches = text.match(pattern);
			if(matches === null)
				continue;

			var color = XAU_NOTE_PATTERNS[key];

			//Special case for contractor matches: find control point updates
			//in the next cell over and mark them differently.
			if(pattern == XAU_CONTRACTOR_PATTERN)
			{
				// Get the text of the next cell over.
				var content = $(cell).next().html();

				var CONTROL_POINTS_PATTERNS = 'Status Update: "('+
					'Customer Contacted|'+
					'Site Inspected|'+
					'Tracker Company Added|'+
					'Target Start Date|'+
					'Target Completion Date|'+
					'Job Started|'+
					'Job Completed|'+
					'Job Not Sold)';

				if(content.match(CONTROL_POINTS_PATTERNS) !== null)
				{
					// This note is a control point update.
					color = 'xactutils-controls';
				}
				else
				{
					// The author is a contractor employee AND this is not a control point entry.
					// Check whether the author is the current user and mark that differently.
					var user = $('#user-menu-name').html().toUpperCase().match('(\\w+'+XAU_CONTRACTOR_PATTERN+')')[1];
					if(text.match(user))
						color = 'xactutils-self';
				}
			}

			$(cell).parent().find('td').addClass(color);
			$(cell).parent().attr('coded',true);
			break;
		}
	}

	XAU_BLOCK_DOM_CHANGES = false;
}