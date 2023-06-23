/*
	Armed Services Ranks
	As issued by USAA
	Last updated 2022-12-07 by Nicholas Harrell

	Aside from entries listed as "Ambiguous" branch, this list exactly matches that issued by USAA.
	Some ranks have the same abbreviation for multiple branches of service; in those cases their entries
	in the specific branch are commented out and a new entry in the "Ambiguous" branch was created instead.
*/

var XACTUTILS_RANKS =
{

//	ABBREVIATION	[BRANCH,	FULL RANK,					SALUTATION]

	"SGT":		["Ambiguous",	"Sergeant",					"Sergeant"],
	"SSGT":		["Ambiguous",	"Staff Sergeant",				"Sergeant"],
	"MSGT":		["Ambiguous",	"Master Sergeant",				"Sergeant"],
	"CAPT":		["Ambiguous",	"Captain",					"Captain"],
	"MAJ":		["Ambiguous",	"Major",					"Major"],
	"COL":		["Ambiguous",	"Colonel",					"Colonel"],
	"PFC":		["Ambiguous",	"Private First Class",				"PFC"],
	"CPL":		["Ambiguous",	"Corporal",					"Corporal"],
	"GEN":		["Ambiguous",	"General",					"General"],

	"AB":		["Air Force",	"Airman Basic",					"Airman"],
	"AMN":		["Air Force",	"Airman",					"Airman"],
	"A1C":		["Air Force",	"Airman First Class",				"Airman"],
	"SRA":		["Air Force",	"Senior Airman",				"Airman"],
//	"SGT":		["Air Force",	"Sergeant",					"Sergeant"],
//	"SSGT":		["Air Force",	"Staff Sergeant",				"Sergeant"],
	"TSGT":		["Air Force",	"Technical Sergeant",				"Sergeant"],
//	"MSGT":		["Air Force",	"Master Sergeant",				"Sergeant"],
	"SMSGT":	["Air Force",	"Senior Master Sergeant",			"Sergeant"],
	"CMSGT":	["Air Force",	"Chief Master Sergeant",			"Chief"],
	"CCM":		["Air Force",	"Command Chief Master Sergeant",		"Chief"],
	"CMSAF":	["Air Force",	"Chief Master Sergeant of the Air Force",	"Chief"],

	"2D LT":	["Air Force",	"Second Lieutenant",				"Lieutenant"],
	"1ST LT":	["Air Force",	"First Lieutenant",				"Lieutenant"],
//	"CAPT":		["Air Force",	"Captain",					"Captain"],
//	"MAJ":		["Air Force",	"Major",					"Major"],
	"LT COL":	["Air Force",	"Lieutenant Colonel",				"Colonel"],
//	"COL":		["Air Force",	"Colonel",					"Colonel"],
	"BRIG GEN":	["Air Force",	"Brigadier General",				"General"],
	"MAJ GEN":	["Air Force",	"Major General",				"General"],
	"LT GEN":	["Air Force",	"Lieutenant General",				"General"],
//	"GEN":		["Air Force",	"General",					"General"],

	"PVT":		["Marines",	"Private",					"Private"],
//	"PFC":		["Marines",	"Private First Class",				"PFC"],
	"LCPL":		["Marines",	"Lance Corporal",				"Lance Coproral"],
//	"CPL":		["Marines",	"Corporal",					"Corporal"],
//	"SGT":		["Marines",	"Sergeant",					"Sergeant"],
//	"SSGT":		["Marines",	"Staff Sergeant",				"Staff Sergeant"],
	"GYSGT":	["Marines",	"Gunnery Sergeant",				"Gunnery Sergeant"],
//	"MSGT":		["Marines",	"Master Sergeant",				"Master Sergeant"],
	"1STSGT":	["Marines",	"First Sergeant",				"First Sergeant"],
	"MGYSGT":	["Marines",	"Master Gunnery Sergeant",			"Master Gunnery Sergeant"],
	"SGTMAJ":	["Marines",	"Sergeant Major",				"Sergeant Major"],
	"SGTMAJMC":	["Marines",	"Sergeant Major of the Marine Corps",		"Sergeant Major"],

	"WO1":		["Marines",	"Warrant Officer",				"Warrant Officer"],
	"CWO2":		["Marines",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO3":		["Marines",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO4":		["Marines",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO5":		["Marines",	"Chief Warrant Officer",			"Chief Warrant Officer"],

	"2NDLT":	["Marines",	"Second Lieutenant",				"Lieutenant"],
	"1STLT":	["Marines",	"First Lieutenant",				"Lieutenant"],
//	"CAPT":		["Marines",	"Captain",					"Captain"],
//	"MAJ":		["Marines",	"Major",					"Major"],
	"LTCOL":	["Marines",	"Lieutenant Colonel",				"Colonel"],
//	"COL":		["Marines",	"Colonel",					"Colonel"],
	"BGEN":		["Marines",	"Brigadier General",				"General"],
	"MAJGEN":	["Marines",	"Major General",				"General"],
	"LTGEN":	["Marines",	"Lieutenant General",				"General"],

	"PV1":		["Army",	"Private",					"Private"],
	"PV2":		["Army",	"Private",					"Private"],
//	"PFC":		["Army",	"Private First Class",				"PFC"],
	"SPC":		["Army",	"Specialist",					"Specialist"],
//	"CPL":		["Army",	"Corporal",					"Corporal"],
//	"SGT":		["Army",	"Sergeant",					"Sergeant"],
	"SSG":		["Army",	"Staff Sergeant",				"Sergeant"],
	"SFC":		["Army",	"Sergeant First Class",				"Sergeant"],
	"MSG":		["Army",	"Master Sergeant",				"Sergeant"],
	"1SG":		["Army",	"First Sergeant",				"First Sergeant"],
	"SGM":		["Army",	"Sgt. Major",					"Sergeant Major"],
	"CSM":		["Army",	"Command Sergeant Major",			"Sergeant Major"],
	"SMA":		["Army",	"Sergeant Major of the Army",			"Sergeant Major"],

	"W1":		["Army",	"Warrant Officer",				"Mister / Miss"],
	"CW2":		["Army",	"Chief Warrant Officer",			"Chief"],
	"CW3":		["Army",	"Chief Warrant Officer",			"Chief"],
	"CW4":		["Army",	"Chief Warrant Officer",			"Chief"],
	"CW5":		["Army",	"Chief Warrant Officer",			"Chief"],

	"2LT":		["Army",	"Second Lieutenant",				"Lieutenant"],
	"1LT":		["Army",	"First Lieutenant",				"Lieutenant"],
	"CPT":		["Army",	"Captain",					"Captain"],
//	"MAJ":		["Army",	"Major",					"Major"],
	"LTC":		["Army",	"Lieutenant Colonel",				"Colonel"],
//	"COL":		["Army",	"Colonel",					"Colonel"],
	"BG":		["Army",	"Brigadier General",				"General"],
	"MG":		["Army",	"Major General",				"General"],
	"LTG":		["Army",	"Lieutenant General",				"General"],
//	"GEN":		["Army",	"General",					"General"],

	"PO3":		["Navy",	"Petty Officer, Third Class",			"Petty Officer"],
	"PO2":		["Navy",	"Petty Officer, Second Class",			"Petty Officer"],
	"PO1":		["Navy",	"Petty Officer, First Class",			"Petty Officer"],
	"CPO":		["Navy",	"Chief Petty Officer",				"Chief"],
	"SCPO":		["Navy",	"Senior Chief Petty Officer",			"Senior Chief"],
	"MCPO":		["Navy",	"Master Chief Petty Officer",			"Master Chief"],
	"CMDCM":	["Navy",	"Command Master Chief Petty Officer",		"Master Chief"],
	"FLTCM":	["Navy",	"Fleet Master Chief",				"Master Chief"],
	"FORCM":	["Navy",	"Force Master Chief",				"Master Chief"],
	"MCPON":	["Navy",	"Master Chief Petty Officer of the Navy",	"Master Chief"],

	"WO1":		["Navy",	"Warrant Officer",				"Warrant Officer"],
	"CWO2":		["Navy",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO3":		["Navy",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO4":		["Navy",	"Chief Warrant Officer",			"Chief Warrant Officer"],
	"CWO5":		["Navy",	"Chief Warrant Officer",			"Chief Warrant Officer"],

	"ENS":		["Navy",	"Ensign",					"Ensign"],
	"LTJG":		["Navy",	"Lieutenant Junior Grade",			"Lieutenant"],
	"LT":		["Navy",	"Lieutenant",					"Lieutenant"],
	"LCDR":		["Navy",	"Lieutenant Commander",				"Commander"],
	"CDR":		["Navy",	"Commander",					"Commander"],
//	"Capt":		["Navy",	"Captain",					"Captain"],
	"RDML":		["Navy",	"Rear Admiral - Lower Half",			"Admiral"],
	"RADM":		["Navy",	"Rear Admiral - Upper Half",			"Admiral"],
	"VADM":		["Navy",	"Vice Admiral",					"Admiral"],
	"ADM":		["Navy",	"Admiral",					"Admiral"],
	"FADM":		["Navy",	"Fleet Admiral",				"Admiral"]
};

function xau_resolveRank()
{
	if(!document.getElementById('insured-name'))
		return;

	var pattern = /^([\w -]+), ([\w ]+) (\w+)$/;
	var matches = $('#insured-name').html().match(pattern);

	if(matches === null)
	{
		// Do nothing.
	}
	else
	{
		var abbrev = matches[2].toUpperCase();

		if(!XACTUTILS_RANKS[abbrev])
		{
			var salutation = abbrev;
			var fullrank = 'Unknown Rank';
			var branch = 'Unknown Branch';
		}
		else
		{
			var salutation = XACTUTILS_RANKS[abbrev][2];
			var fullrank = XACTUTILS_RANKS[abbrev][1];
			var branch = XACTUTILS_RANKS[abbrev][0];
		}

		var firstname = matches[3];
		var lastname = matches[1];

		if(branch == 'Ambiguous')
			branch = 'Ambiguous Branch';

		$('#insured-name').html
		(
			'<div id="xautil-name">' +
				'<span id="xautil-salutation">' +
					salutation.toUpperCase() + 
				'</span> ' + lastname + ', ' + firstname +
			'</div>' +
			'<div id="xautil-fullrank">' +
				'Full Rank: ' + fullrank + ' (' + abbrev + ')' +
			'</div>' +
			'<div id="xautil-branch">' +
				branch +
			'</div>'
		);
	}	
}