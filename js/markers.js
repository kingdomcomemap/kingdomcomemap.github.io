var iconsUrl = './assets/images/';
var markers = [
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "fishing_spot",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "combat_arena",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "archery_range",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "baths",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "camp",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "deer_hunting_spot",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },{
    "name": "<span data-i18n='default'>Default</span>",
    "group": "boar_hunting_spot",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "fish_trap",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "beehive",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "grocer",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "woodland_garden",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "accident",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "cave",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "grave",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "nest",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "conciliation_cross",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "shrine",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "scribe",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "baker",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "tailor",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "butcher",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "alchemy_bench",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "grindstone",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "trader",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "blacksmith",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "armourer",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "weaponsmith",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "cobbler",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "tavern",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "your_bed",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "lodgings",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "apothecary",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "herbalist",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "miller",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "horse_trader",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "tanner",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "huntsman",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "interesting_site",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  {
    "name": "<span data-i18n='default'>Default</span>",
    "group": "fishing_spot",
    "icon": "fast_travel",
    "coords": [20000,20000]
  },
  // SKALITZ
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-1914,2249]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-1878,1785]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1863,1706]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-2141,1675]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-2207,1754]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-2330,1788]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-2511,1868]
  },
  {
    "name": "<span data-i18n='shrine'>Shrine</span>",
    "group": "shrine",
    "icon": "shrine",
    "coords": [-1550,1825]
  },
  {
    "name": "<span data-i18n='camp'>Camp</span>",
    "group": "camp",
    "icon": "camp",
    "coords": [-2450,1522]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-2673,2191]
  },
  {
    "name": "<span data-i18n='deer_hunting_spot'>Deer Hunting Spot</span>",
    "group": "deer_hunting_spot",
    "icon": "deer_hunting_spot",
    "coords": [-2549,2363]
  },
  {
    "name": "<span data-i18n='deer_hunting_spot'>Deer Hunting Spot</span>",
    "group": "deer_hunting_spot",
    "icon": "deer_hunting_spot",
    "coords": [-2247,2598]
  },
  {
    "name": "<span data-i18n='shrine'>Shrine</span>",
    "group": "shrine",
    "icon": "shrine",
    "coords": [-2260,1195]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-2245,1155]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1673,1283]
  },
  {
    "name": "<span data-i18n='camp'>Camp</span>",
    "group": "camp",
    "icon": "camp",
    "coords": [-1779,1095]
  },
  {
    "name": "<span data-i18n='accident'>Accident</span>",
    "group": "accident",
    "icon": "accident",
    "coords": [-2042,2543]
  },
  {
    "name": "<span data-i18n='interesting_site'>Interesting Site</span>",
    "group": "interesting_site",
    "icon": "interesting_site",
    "coords": [-2037,1517]
  },
  {
    "name": "<span data-i18n='interesting_site'>Interesting Site</span>",
    "group": "interesting_site",
    "icon": "interesting_site",
    "coords": [-1582,1532]
  },
  {
    "name": "<span data-i18n='fish_trap'>Fish Trap</span>",
    "group": "fish_trap",
    "icon": "fish_trap",
    "coords": [-1658,1776]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-1630,2040]
  },
  {
    "name": "<span data-i18n='shrine'>Shrine</span>",
    "group": "shrine",
    "icon": "shrine",
    "coords": [-1489,2207]
  },
  {
    "name": "<span data-i18n='accident'>Accident</span>",
    "group": "accident",
    "icon": "accident",
    "coords": [-1944,1341]
  },
  {
    "name": "<span data-i18n='accident'>Accident</span>",
    "group": "accident",
    "icon": "accident",
    "coords": [-1750,1351]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-1580,1390]
  },
  {
    "name": "<span data-i18n='accident'>Accident</span>",
    "group": "accident",
    "icon": "accident",
    "coords": [-1596,1278]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-2182,1013]
  },
  {
    "name": "<span data-i18n='interesting_site'>Interesting Site</span>",
    "group": "interesting_site",
    "icon": "interesting_site",
    "coords": [-2478,755]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-1817,1007]
  },
  {
    "name": "<span data-i18n='nest'>Nest</span>",
    "group": "nest",
    "icon": "nest",
    "coords": [-2155,795]
  },
  {
    "name": "<span data-i18n='interesting_site'>Interesting Site</span>",
    "group": "interesting_site",
    "icon": "interesting_site",
    "coords": [-2122,709]
  },
  {
    "name": "<span data-i18n='grave'>Grave</span>",
    "group": "grave",
    "icon": "grave",
    "coords": [-2243,752]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-2126,608]
  },
  {
    "name": "<span data-i18n='grave'>Grave</span>",
    "group": "grave",
    "icon": "grave",
    "coords": [-1833,744]
  },
  {
    "name": "<span data-i18n='interesting_site'>Interesting Site</span>",
    "group": "interesting_site",
    "icon": "interesting_site",
    "coords": [-1810,742]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1920,971]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1701,883]
  },
  {
    "name": "<span data-i18n='conciliation_cross'>Conciliation Cross</span>",
    "group": "conciliation_cross",
    "icon": "conciliation_cross",
    "coords": [-1710,778]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1529,888]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1454,941]
  },
  {
    "name": "<span data-i18n='camp'>Camp</span>",
    "group": "camp",
    "icon": "camp",
    "coords": [-1371,1029]
  },
  {
    "name": "<span data-i18n='cave'>Cave</span>",
    "group": "cave",
    "icon": "cave",
    "coords": [-1315,1124]
  },
  {
    "name": "<span data-i18n='shrine'>Shrine</span>",
    "group": "shrine",
    "icon": "shrine",
    "coords": [-1103,1353]
  },
  {
    "name": "<span data-i18n='shrine'>Shrine</span>",
    "group": "shrine",
    "icon": "shrine",
    "coords": [-915,1320]
  },
  {
    "name": "<span data-i18n='conciliation_cross'>Conciliation Cross</span>",
		"desc": "Michael Kriz",
    "group": "conciliation_cross",
    "icon": "conciliation_cross",
    "coords": [-1760,413]
  },
	{
    "name": "<span data-i18n='herbalist'>Herbalist</span>",
		"desc": "Book Grasses and Herbs",
    "group": "herbalist",
    "icon": "herbalist",
		"items": ["book_herbalism"],
    "coords": [-1570,435]
  },
  {
    "name": "<span data-i18n='woodland_garden'>Woodland Garden</span>",
		"desc": "",
    "group": "woodland_garden",
    "icon": "woodland_garden",
		"items": ["belladonna", "chamomile", "herb_paris", "mint", "st_johns_wort"],
    "coords": [-1607,433]
  },
	{
    "name": "<span data-i18n='woodland_garden'>Woodland Garden</span>",
		"desc": "",
    "group": "woodland_garden",
    "icon": "woodland_garden",
		"items": ["belladonna", "comfrey", "mint", , "valerian"],
    "coords": [-1510,385]
  },
	{
    "name": "<span data-i18n='woodland_garden'>Woodland Garden</span>",
		"desc": "",
    "group": "woodland_garden",
    "icon": "woodland_garden",
		"items": ["comfrey", "eyebright", "sage", , "valerian"],
    "coords": [-1568,314]
  },
  //  //X: -1568 Y: 314
  // Fast Travel - north to south
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-559,2264]         // PRIBYSLAVITZ
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "desc": "SKALITZ",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1663,1897]        // SKALITZ
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [1428,1842]         // UZHITZ
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1153,1532]        // ROVNA
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [446,1136]          // TALMBERG
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-591,817]          // MERHOJED
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1297,277]         // SAMOPESH
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [1181,-211]         // INN IN THE GLADE
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1604,-642]        // MONASTERY
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [2059,-868]         // NEUHOF
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [12,-1065]          // LEDETCHKO
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1646,-1234]       // SASAU
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [-1651,-1729]       // VRANIK
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [574,-1945]         // RATTAY MILL
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [1048,-1963]        // RATTAY UPPER GATE
  },
  {
    "name": "<span data-i18n='fast_travel'>Fast Travel</span>",
    "group": "fast_travel",
    "icon": "fast_travel",
    "coords": [674,-2217]         // RATTAY LOWER GATE
  },
  
]