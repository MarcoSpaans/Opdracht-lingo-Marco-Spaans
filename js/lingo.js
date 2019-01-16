

var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];

  var wordlength = words[Math.floor(Math.random() * words.length)];

  var count = 0;
  var answer = [];

	console.log(wordlength);


  function startup() {

		//create HTML
		var head = document.createElement("H1");
		head.innerHTML = "Lingo";
		document.body.appendChild(head);
		var div = document.createElement("DIV");
		div.id = "lingo";
		document.body.appendChild(div);
		var inputtext = document.createElement("INPUT");
		inputtext.id = "letter";
		inputtext.type = "text";
		document.getElementById("lingo").appendChild(inputtext);
		var inputbutton = document.createElement("INPUT");
		inputbutton.type = "button";
		inputbutton.value = "check";
		inputbutton.id = "check";
		inputbutton.setAttribute("onclick", "letter()")
		document.getElementById("lingo").appendChild(inputbutton);
		for (var b = 1; b < 6; b++) {
			var div_container = document.createElement("DIV");
			div_container.id = "answerslot" + b;
			div_container.style.marginLeft = "20px";
			div_container.style.height = "auto";
			document.body.appendChild(div_container);
			for (var d = 0; d < wordlength.length; d++) {
				var letterslot = document.createElement("DIV");
				letterslot.id = "slot_" + b + "_" + d;
				letterslot.setAttribute("class", "letterslot")
				document.getElementById('answerslot' + b).appendChild(letterslot);
			}
			for (var f = 0; f < wordlength.length; f++) {
		      var slot = document.createElement("P");
					slot.id = "letter_" + b + "_" + f;
					document.getElementById('slot_' + b + '_' + f).appendChild(slot);
		  }
		}
		document.getElementById('letter_1_0').innerHTML = wordlength[0];
		var p_count = document.createElement("P");
		var breakline = document.createElement("BR");
		var p_stat = document.createElement("P");
		p_count.id = "counter";
		p_stat.id = "stat";
		document.getElementById("lingo").appendChild(p_count);
		document.getElementById("lingo").appendChild(breakline);
		document.getElementById("lingo").appendChild(p_stat);


  }

function letter() {

  var letter = document.getElementById('letter').value;
	var post = [];

	//kopieer willekeurig woord
for (a = 0; a < wordlength.length; a++) {
	 answer[a] = wordlength[a];
 }
 console.log(answer);

if (letter.length > 4 && letter.length < 6) {

count++

  for (var i = 0; i < wordlength.length; i++) {
			document.getElementById('letter_' + count + '_' + i).innerHTML = letter[i];
			post[i] = letter[i];
  }
console.log(post);
  document.getElementById('counter').innerHTML = "pogingen: " + (5 - count);

	//controleren elk letter
	for (var c = 0; c < wordlength.length; ++c) {
		if (letter[c] == wordlength[c]) {
			document.getElementById('slot_' + count + '_' + c).style.backgroundColor = "red";
			answer[c] = 0
		}
	}

	for (var p = 0; p < wordlength.length; p++) {
		for (var o = 0; o < wordlength.length; o++) {
			if (document.getElementById('slot_' + count + '_' + p).style.backgroundColor == "red") {

			} else if (post[p] == answer[o]) {
			document.getElementById('slot_' + count + '_' + p).style.backgroundColor = "yellow";
				}
			}
		}


	//als woord geraden wordt
	if (letter == wordlength) {
		var delbutton = document.getElementById('check');
		document.getElementById('lingo').removeChild(delbutton);
		document.getElementById('stat').innerHTML = "we hebben een winnaar!";
		document.getElementById('stat').style.color = "lightgreen";
	} else if (count > 4) {
		document.getElementById('stat').innerHTML = "sorry, je hebt geen pogingen meer. het antwoord was '" + wordlength + "'. probeer het opnieuw!";
		document.getElementById('stat').style.color = "red";
		var delbutton = document.getElementById('check');
		document.getElementById('lingo').removeChild(delbutton);
	}

}
console.log(answer);
}
