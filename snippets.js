var XACTUTILS_SNIPPETS_GENERAL =
{
	//ID		LABEL			TEXT
	"copyDOP":	["DoP",			"When processing payment, please pay Duraclean directly as the insured has signed a Direction of Payment which has been uploaded to the documents section."],
	"copyLMK":	["LMK",			"Please let me know if you require any additional information."],
	"copyPhotos":	["Photos",		"Supporting photography has been uploaded."],
	"copyUpdates":	["Updates",		"Further updates will be provided as they become available."]
};

var XACTUTILS_SNIPPETS_WATER =
{
	//ID		LABEL			TEXT
	"copy12":	["12-Hour Update",	"12-hour update:\n\n1. Was water extracted? \n2. How many rooms were affected? \n3. How much equipment was left and what type? \n4. What is the target completion date of dry out? \n5. Is there any structural damage to be repaired? \n6. Initial relative humidity and moisture readings of the affected area(s): \n7. Labeled digital photos showing the front of the risk? \n8. Affected areas any unusual drying equipment left on site?"],
	"copyCOS":	["COS",			"A signed COS has been uploaded to the documents section."],
	"copyEst":	["Estimate Uploaded",	"Drying is complete and a water mitigation estimate has been uploaded."]
}

var XACTUTILS_SNIPPETS_MOLD =
{
	//ID		LABEL					TEXT
	"copyMold":	["Request Environmentalist",		"The techs have advised that they have found more than 10 square feet of microbial growth on site. We are therefore requesting approval for an environmentalist. Please let me know if you require anything further."],
	"copyEnviro":	["Protocol & Invoice Uploaded",		"The mold remediation protocol and invoice from the environmentalist have been uploaded to the documents section for your review. A remediation estimate will be uploaded as soon as it is ready."],
	"copyScrub":	["Scrub Start",				"Principal demolition and cleaning have been completed and scrubbing is currently underway in preparation for post-testing. Results will be provided as soon as they become available."],
	"copyVerbal":	["Verbal Clearance",			"We have received verbal clearance from the environmentalist indicating that mold remediation is complete. Written PRV will be uploaded as soon as we receive it."],
	"copyPRV":	["PRV Uploaded",			"Written post-remediation verification has been uploaded to the documents section."]
}

var XACTUTILS_SNIPPETS_ASBESTOS =
{
	//ID		LABEL				TEXT
	"copyAsbTest":	["Request Testing",		"We have found possible asbestos-containing material on-site and at this time we request approval to test the site for asbestos."],
	"copyAsbIA":	["IA Hired",			"We have engaged International Academy of Annapolis, MD to test the site for asbestos. Results will be provided as soon as they are available."],
	"copyAsbRes":	["Results Up (Positive)",	"Asbestos testing returned positive results which have been uploaded to the documents section for your review. An asbestos abatement estimate will be uploaded as soon as it is ready."],
	"copyAsbNeg":	["Results Up (Negative)",	"Asbestos testing returned negative results which have been uploaded to the documents section for your review.\n\nThe invoice for asbestos testing will be uploaded as soon as it is available. Should we produce an abatement estimate for the invoice or include it in the mitigation estimate, or would USAA prefer to pay the invoice directly? In any case, please consider addressing payment to Duraclean directly as the insured has signed a Direction of Payment which has been uploaded to the documents section."],
	"copyAsbScrub":	["Scrub Start",			"Principal abatement labor has been completed and scrubbing is currently underway in preparation for post-testing. Results will be provided as soon as they become available."],
	"copyPAV":	["PAV Uploaded",		"Asbestos abatement is complete and post-testing results have been uploaded to the documents section for your review."]
}

function xau_addSnippets()
{
	var url = window.location.href;
	var pattern = 'dlg_addnoteform\.jsp';
	if(url.match(pattern) !== null)
	{
		// Maximize the add-note window
		window.resizeTo(screen.availWidth, screen.availHeight);

		var newEls = '<div id="xactutils-shortcuts-div">';

		// General Buttons
		for(const id in XACTUTILS_SNIPPETS_GENERAL)
			newEls +=
				'<button class="xactutils-button" ' +
				'id="' + id + '">' +
				XACTUTILS_SNIPPETS_GENERAL[id][0] +
				'</button>';

		// Water Dropdown
		newEls += xau_addSnippetDropdown("wtr", "Water",XACTUTILS_SNIPPETS_WATER);

		// Mold Dropdown
		newEls += xau_addSnippetDropdown("mld", "Mold",XACTUTILS_SNIPPETS_MOLD);

		// Asbestos Dropdown
		newEls += xau_addSnippetDropdown("asb", "Asbestos",XACTUTILS_SNIPPETS_ASBESTOS);

		newEls += '</div>';

		$('#popup_header').next().prepend(newEls);

		// Add on-click event to general buttons.
		// Click events for dropdowns are added in xau_addSnippetDropdown().
		for(const id in XACTUTILS_SNIPPETS_GENERAL)
			$('#'+id).click(function()
			{
				//var SNIPPET = XACTUTILS_SNIPPETS_GENERAL[$(this).attr('id')];
				var SNIPPET = XACTUTILS_SNIPPETS_GENERAL[id];
				xau_appendTextToNote(SNIPPET[1]);
				$(this).css('color','#00FF00');
			});
	}
}

function xau_addSnippetDropdown(dd_id, title, SNIPPETS)
{
	var drop = '<select class="xactutils-snippets-dropdown" id="xau_snipdd_' + dd_id + '">';
	drop += '<option disabled selected hidden>' + title + '</option>';
	for(const id in SNIPPETS)
	{
		drop +=
			'<option id="xau_snipdd_' + dd_id + '_' + id + '" ' +
			'label="' + SNIPPETS[id][0] + '">' +
			id +
			'</option>';
	}
	drop += '</select>';
	$('.popup-body').on('change','#xau_snipdd_'+dd_id,function()
	{
		var SNIPPET = SNIPPETS[$('#xau_snipdd_'+dd_id).val()];
		xau_appendTextToNote(SNIPPET[1]);
		$('#xau_snipdd_'+dd_id+'_'+$('#xau_snipdd_'+dd_id).val()).css('color','#00FF00');
		$('#xau_snipdd_'+dd_id).val($('#xau_snipdd_'+dd_id+' option:first').val());
	});
	return drop;
}

function xau_appendTextToNote(text)
{
	var box = $('#notetext');
	var pos = $(box).prop('selectionStart');
	var old = $(box).val();

	$(box).val
	(
		old.substr(0,pos) +
		text +
		old.substr(pos)
	);
}