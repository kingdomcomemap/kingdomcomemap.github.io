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
  /*
  FAST TRAVEL - NORTH TO SOUTH
  */
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
  /*
  BOAR HUNTING SPOT - NORTH TO SOUTH
  */
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-2673,2187]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-111,2036]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-840,1929]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-549,1305]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-407,1122]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [1281,601]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-2126,591]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-1816,341]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [313,322]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [2151,10]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-757,-455]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [2491,-607]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-1205,-997]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-324,-1332]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-672,-1562]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-776,-1781]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-1940,-1865]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [2310,-2278]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [-2587,-2281]
  },
  {
    "name": "<span data-i18n='boar_hunting_spot'>Boar Hunting Spot</span>",
    "group": "boar_hunting_spot",
    "icon": "boar_hunting_spot",
    "coords": [791,-2691]
  },
  /*
  TREASURE CHEST - NORTH TO SOUTH
  */
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XXIII - Req: None - inside a small cave",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1481,2757]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Ancient Treasure V - Req: Lockpick (Very Hard) - next to a broken hut near the deer hunting spot",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2244,2585]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XXIV - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1636,2569]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Ancient Treasure III - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [1585,2562]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XX - Req: Lockpick (Easy) - hidden in high grass right next to the western tree",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1863,2379]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XXV - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2620,2047]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure IX - Req: None - right next to the stone bridge",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1687,1766]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XXI - Req: Lockpick (Very Hard) - enter the cave to the northeast of this chest, stick to the left wall and climb up 3 ladders",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1988,1567]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XVIII - Req: Lockpick (Easy)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [641,1107]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XVI - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2244,754]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XVII - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1830,741]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure V - Req: None - bag in a dried-up well",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [58,9]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure I - Req: Lockpick (Hard) (use the ladder in the westernmost house)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2020,-178]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure II - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2384,-336]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure III - Req: Lockpick (Very Hard) - behind an old house",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2614,-502]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure VI - Req: Lockpick (Hard)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [317,-654]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure VII - Req: Lockpick (Easy)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-268,-757]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure IV - Req: Lockpick (Very Hard)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [1047,-862]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XIX - Req: Spade - grave on a little island on the river",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1698,-1015]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XV - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [1281,-1026]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XIV - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [2346,-1129]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XI - Req: None",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-865,-1299]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure VIII - Req: None - bag behind a bare tree",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [406,-1315]
  } ,
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure X - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-523,-1589]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Ancient Treasure I - Req: Spade",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [2612,-1672]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Ancient Treasure IV - Req: Lockpick (Easy)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-469,-1815]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XIII - Req: Lockpick (Easy)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [2240,-1903]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XXII - Req: None - bag next to destroyed gallows",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-2072,-2054]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Treasure XII - Req: Lockpick (Hard)",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [1619,-2455]
  },
  {
    "name": "<span data-i18n='treasure_chest'>Treasure Chest</span>",
    "desc": "Ancient Treasure II - Req: None - look for a big rock next to a cave",
    "group": "treasure_chest",
    "icon": "treasure_chest",
    "coords": [-1685,-2545]
  },

]
