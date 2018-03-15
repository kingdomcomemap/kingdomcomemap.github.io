var version = 1.3;
var url = ('http://' + window.location.hostname + '/');
var iconsUrl = './assets/images/';
var tilesUrl = "./map/{z}_{x}_{y}.jpg";
var maxNativeZoom = 5;
var mapMinZoom = 1;
var mapMaxZoom = 6;

var mapSize = 8192;
var tileSize = 256;
var mapScale = mapSize / tileSize;
var mapOffset = mapSize / mapScale / 2;
var halfTile = tileSize / 2;
var mapBounds = 4096;

L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
	transformation: new L.Transformation(1 / 16, 0, -1 / 16, 256)
});

var myBounds = [[0,0],[mapBounds, mapBounds]];

var map = L.map('map', {
  maxNativeZoom: maxNativeZoom,
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  zoomControl: false,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topright'
  },
  crs: L.CRS.MySimple,

}).setView([2932,2932], 2);

L.tileLayer(tilesUrl, {
  maxNativeZoom: maxNativeZoom,
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  tileSize: tileSize,
  noWrap: true,
  tms: false,
  bounds: myBounds,
  continuousWorld: true
}).addTo(map);

map.setMaxBounds([[-4000, -4000], [10000, 10000]]);

window.latLngToPixels = function(latlng) {
  return window.map.project([latlng.lat, latlng.lng], window.map.getMaxZoom());
};

window.pixelsToLatLng = function(x, y) {
  return window.map.unproject([x, y], window.map.getMaxZoom());
};

var popup = L.popup();

new L.Control.Zoom({position: 'topright'}).addTo(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

sidebar.open('home');

var hash = new L.Hash(map);

L.Control.Coordinates.include({
	_update: function(evt) {
		var pos = evt.latlng,
		opts = this.options;
		if (pos) {
			//pos = pos.wrap(); // Remove that instruction
			this._currentPos = pos;
			this._inputY.value = L.NumberFormatter.round(pos.lat, opts.decimals, opts.decimalSeperator);
			this._inputX.value = L.NumberFormatter.round(pos.lng, opts.decimals, opts.decimalSeperator);
			this._label.innerHTML = this._createCoordinateLabel(pos);
		}
	}
});

L.control.coordinates({
	position: "bottomright",
	decimals: 0, //optional default 4
	decimalSeperator: ".", //optional default "."
	labelTemplateLat: "Y: {y}", //optional default "Lat: {y}"
	labelTemplateLng: "X: {x}", //optional default "Lng: {x}"
	enableUserInput: true, //optional default true
	useDMS: false, //optional default false
	useLatLngOrder: false, //ordering of labels, default false -> lng-lat
	markerType: L.marker, //optional default L.marker
	markerProps: {} //optional default {}
}).addTo(map);

// Fix for the 1px white border
function gridfix(){
  var originalInitTile = L.GridLayer.prototype._initTile
  L.GridLayer.include({
    _initTile: function (tile) {
      originalInitTile.call(this, tile);
      var tileSize = this.getTileSize();
      tile.style.width = tileSize.x + 1 + 'px';
      tile.style.height = tileSize.y + 1 + 'px';
    }
  });
};
gridfix();

var layerGroups = [];

var textLayer = [];

var globalMarkers = [];
var transparentMarker = L.icon({
        iconUrl: iconsUrl+'alpha_marker.png',
        iconSize: [1, 1],
        iconAnchor: [iWidth, iHeight],
        popupAnchor: [0, -iHeight]
      });

for (var i = 0; i < textMarkers.length; i++) {
  // If the group doesn't exists
  if (layerGroups.textmarkers == undefined) {
    // Create the group
    layerGroups.textmarkers = new L.LayerGroup();
  }
  // Add the marker
  var textMarker = new L.marker(textMarkers[i].coords, { opacity: 0.0, icon: transparentMarker }); //opacity may be set to zero
  textMarker.bindTooltip(textMarkers[i].name, {permanent: true, direction: "top", className: "text-label", offset: [0, 0] });
  textMarker.addTo(layerGroups.textmarkers); // Adds the text markers to map.
  layerGroups.textmarkers.addTo(map);
}

map.on('zoomend', function(e) {
  var size = map.getZoom();
  switch (size){  // zoom level

    case 0:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '12px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 1:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '14px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 2:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '16px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 3:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '18px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 4:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '20px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
    case 5:
      $('.text-label').css('visibility', 'visible');
      $('.text-label span').css('font-size', '20px');
      $('.text-label.secondary').css('visibility', 'hidden'); break;
  }
});

function getIcon(index) {
  var icon = markers[index].icon;
	
  var markerIcon = L.icon({
    iconUrl: iconsUrl+icon+'.png',
    iconSize: [36,36], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -18],
    // point from which the popup should open relative to the iconAnchor
  });

  return markerIcon;
}

// GAME MARKERS

for (var i = 0; i < markers.length; i++) {
  // if the group doesn't exists in layergroups
  if (layerGroups[markers[i].group] == undefined) {
    // Create the group
    layerGroups[markers[i].group] = new L.LayerGroup();
  }
  if (markers[i].desc == undefined) {
    markers[i].desc = "";
  }
  if (markers[i].items == undefined) {
    markers[i].items = "";
  }
	if (markers[i].kcditems == undefined) {
    markers[i].kcditems = "";
  }
  var ilist = "";
  for (var h in markers[i].kcditems) {
		var kcditems =  markers[i].kcditems[h];
    ilist += '<li><i class="'+ markers[i].kcditems[h].item+'"></i><span class="iname" data-i18n="'+ markers[i].kcditems[h].item+'">'+ markers[i].kcditems[h].item.replace(/_/gi, " ")+'</span><span class="qnt">'+markers[i].kcditems[h].qnt+'</span></li>';
  }
  var x = (markers[i].coords[1]).toFixed(0);
  var y = (markers[i].coords[0]).toFixed(0);
  
  var origin_x = (markers[i].coords[1]);
  var origin_y = (markers[i].coords[0]);
	
  var markerUrl = (url+"?marker="+y+","+x);

  // Add the marker
  var marker = L.marker([x, y], {icon: getIcon(i),title: markers[i].group}).bindPopup("<p class='mtitle'>"+markers[i].name + "</p><span class='mdesc'>"+ markers[i].desc +"</span><ul class='ilist'>"+ilist+"</ul><p class='original_coords'>"+origin_y+","+origin_x+"</p><p class='markerlink hide'>"+markerUrl+"</p><button class='copymarkerurl'><span class='sharetext'  data-i18n='copylink'>Copy link</span><span class='copiedmsg hide'>Copied</span></button>").addTo(layerGroups[markers[i].group]);
	globalMarkers.push(marker);
}

function getIconUsr(index) {
  var icon = usr_markers[index].icon;

  var markerIcon = L.icon({
    iconUrl: iconsUrl+icon+'.png',
    iconSize: [36,36], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -18],
    // point from which the popup should open relative to the iconAnchor
  });

  return markerIcon;
}

// USER MARKERS
for (var i = 0; i < usr_markers.length; i++) {
	var imarkers = usr_markers[i]
  // if the group doesn't exists in layergroups
  if (layerGroups[imarkers.group] == undefined) {
    // Create the group
    layerGroups[imarkers.group] = new L.LayerGroup();
  }
  if (imarkers.desc == undefined) {
    imarkers.desc = "";
  }
	if (imarkers.desc2 == undefined) {
    imarkers.desc2 = "";
  }
  if (imarkers.items == undefined) {
    imarkers.items = "";
  }
if (imarkers.req != undefined) {
  imarkers.req = (imarkers.req == undefined) ? "" : imarkers.req;
  imarkers.level = (imarkers.level == undefined) ? "" : imarkers.level;
    var req = '<p class="req" data-i18n="req">Requirements:</p><ul class="ilist"><li><i class="'+imarkers.req+'"></i><span class="iname" data-i18n="'+imarkers.req+'">'+imarkers.req.replace(/_/gi, " ")+'</span><span class="ilevel '+imarkers.level+'" data-i18n="'+imarkers.level+'">'+imarkers.level.replace(/_/gi, " ")+'</span></li>';
  } else {req = ""; }
  var ilist = "";
  for (var c in imarkers.items) {
    ilist += '<li><i class="'+ imarkers.items[c]+'"></i><span class="iname" data-i18n="'+ imarkers.items[c]+'">'+ imarkers.items[c].replace(/_/gi, " ")+'</span></li>';
  }
  console.log(imarkers.req)
	
	
  var x = (imarkers.coords[1]);
  var y = (imarkers.coords[0]);
	
  var markerUrl = (url+"?marker="+y+","+x);

  // Add the marker
  var marker = L.marker([x, y], {icon: getIconUsr(i), title: imarkers.group}).bindPopup("<p class='mtitle'>"+imarkers.name + "</p><p class='mdesc'>"+ imarkers.desc +"</p><p class='mdesc'>"+ imarkers.desc2 +"</p>"+req+"<ul class='ilist'>"+ilist+"</ul><p class='original_coords'>"+y+","+x+"</p><p class='markerlink hide'>"+markerUrl+"</p><button class='copymarkerurl'><span class='sharetext'  data-i18n='share'>Share</span><span class='copiedmsg hide'>Copied</span></button>").addTo(layerGroups[imarkers.group]);
	globalMarkers.push(marker);
}

function toggle(element, layer) {
  if (element.checked) {
    map.addLayer(layerGroups[layer]);
  } else {
    $('#allmarkers').prop('checked', false);
    map.removeLayer(layerGroups[layer]);
  }
}

// TOGGLE ALL LAYERS
var allmarkers = document.getElementById('allmarkers');
function toggleAll(element) {
		if (element.checked) {
			$('.markers-list input').prop('checked', true);
			for (var key in layerGroups) {
				map.addLayer(layerGroups[key]);
			}
		} else {
			$('.markers-list input').prop('checked', false);
			for (var keys in layerGroups) {
				map.removeLayer(layerGroups[keys]);
			}
		}
	}

allmarkers.onchange = function() {toggleAll(this)};

$('.markers-list input').each(function() {
  this.onchange = function() {
    toggle(this, this.id);
    if (this.id == "textmarkers") {
      if ($(this.id).is(':checked')) {
        $('.text-label').css('visibility', 'hidden');
        $('.text-label.secondary').css('visibility', 'hidden');
      } else {
        $('.text-label').css('visibility', 'visible');
        $('.text-label').css('font-size', '24px');
        $('.text-label.secondary').css('visibility', 'hidden');
      }
    }
  };
});

// URL Function
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

var urlCoordinates = getUrlVars()["marker"];
if (urlCoordinates != undefined) {
  var markFound = false;
  sidebar.close();
  if (getUrlVars()["zoom"]>=1 && getUrlVars()["zoom"]<=4) {
    var urlZoom = getUrlVars()["zoom"];
  } else {
    var urlZoom = 4;
  }

  for (var l in globalMarkers){
    var markerX = globalMarkers[l]._latlng.lat;
    var markerY = globalMarkers[l]._latlng.lng;
    var markerdata = (markerY+','+markerX);    

    if (markerdata == urlCoordinates){
      $('#'+globalMarkers[l].options.title).prop('checked', true);
      map.addLayer(layerGroups[globalMarkers[l].options.title]);
      map.flyTo(globalMarkers[l].getLatLng(),urlZoom);
      if (getUrlVars()["popup"]!="false") globalMarkers[l].openPopup();
      markFound = true;
    };
  };

  if (markFound==false) {
    var aux_y = urlCoordinates.split(",")[1];
    var aux_x = urlCoordinates.split(",")[0];
    if ((aux_y <= mapBounds && aux_y>0) && (aux_x<=mapBounds && aux_x>0)) {
      var aux_marker = L.marker([aux_y, aux_x]);        
      map.flyTo(aux_marker.getLatLng(), urlZoom);
      aux_marker = null;
    }
    aux_y = null;
    aux_x = null;
  };
};

// Copy function

function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
$(document).on('click', '.copymarkerurl', function() {
  var copy = $(this).parent().find('.markerlink');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(copy).text()).select();
  document.execCommand("copy");
  $('.copiedmsg').fadeIn({queue: false, duration: '300'});
  $('.copiedmsg').delay(1000).fadeOut(300);
  $temp.remove();
})


var locatedGroup = L.layerGroup();
markers.forEach(function (items) {
  var marker = L.marker(items.latLng, {
    title: items.name,
    riseOnHover: true
  }).bindPopup(items.name);
  // Add each marker to the group
  locatedGroup.addLayer(marker);
  // Save the ID of the marker with it's data
  items.marker_id = locatedGroup.getLayerId(marker);
  //console.log(items.marker_id);
});

markers.forEach(function (items) {
  $('.locate').on('click', function(){
    var locateMarker = $(this).attr('data-marker');
    if(locateMarker == items.title){
      var locatedMarkerIcon = L.icon({
        iconUrl: iconsUrl+'alpha_marker.png',
        iconSize: [iWidth, iHeight],
        iconAnchor: [iWidth / 2, iHeight],
        popupAnchor: [0, -iHeight]
      });

      $('#'+items.group).prop('checked', true);
      map.addLayer(layerGroups[items.group]);

      var locatedMarker = L.marker(items.coords, {icon: locatedMarkerIcon}).bindPopup(items.name + "<br>"+ items.desc).addTo(map);
      map.panTo(locatedMarker.getLatLng());
      locatedMarker.openPopup();
      locatedMarker.on('popupclose', function() {
        map.removeLayer(locatedMarker);
      });
    };
  });
});

// Limit input of coordinates range
function numonly(e){
  $("#mlat,#mlon").keyup(function() {
    var val = $(this).val().replace(/-?\d+[^0-9]+/,"");
    if (val => 2934){
      !/^\s*$/.test(val);
      if (val > 0) {
        val = (parseInt(val) > 2934) ? 2934 : val;
      }else{
        val = (parseInt(val) > -2394) ? val : -2394;
      }

    }
    else {
      (!/^\s*$/.test(val));
      if (val > 0) {
        val = (parseInt(val) > 2934) ? 2934 : val;
      }else{
        val = (parseInt(val) > -2394) ? val : -2394;
      }
    }
    $(this).val(val);
  });
}
// End limit input of coordinates range

function getAObj(obj,name) {
  for (e in obj) {
    if (obj[e].name == name)
      return obj[e].value;
  };
  return 0;
};

// Available markers to add on click
var mapMarkers = 
[
  {
	icon:"arrow",
	width: "36",
	height: "36"},
  {
	icon:"accident",
	width: "36",
	height: "36"},
  {
	icon:"alchemy_bench",
	width: "36",
	height: "36"},
  {
	icon:"apothecary",
	width: "36",
	height: "36"},
  {
	icon:"archery_range",
	width: "36",
	height: "36"},
  {
	icon:"armourer",
	width: "36",
	height: "36"},
  {
	icon:"baker",
	width: "36",
	height: "36"},
  {
	icon:"bandit_camp",
	width: "36",
	height: "36"},
  {
	icon:"baths",
	width: "36",
	height: "36"},
  {
	icon:"beehive",
	width: "36",
	height: "36"},
  {
	icon:"blacksmith",
	width: "36",
	height: "36"},
  {
	icon:"boar_hunting_spot",
	width: "36",
	height: "36"},
  {
	icon:"butcher",
	width: "36",
	height: "36"},
  {
	icon:"camp",
	width: "36",
	height: "36"},
  {
	icon:"cave",
	width: "36",
	height: "36"},
  {
	icon:"charcoal_burner",
	width: "36",
	height: "36"},
  {
	icon:"cobbler",
	width: "36",
	height: "36"},
  {
	icon:"combat_arena",
	width: "36",
	height: "36"},
  {
	icon:"conciliation_cross",
	width: "36",
	height: "36"},
  {
	icon:"deer_hunting_spot",
	width: "36",
	height: "36"},
  {
	icon:"fast_travel",
	width: "64",
	height: "64"},
  {
	icon:"fish_trap",
	width: "36",
	height: "36"},
  {
	icon:"fishing_spot",
	width: "36",
	height: "36"},
  {
	icon:"grave",
	width: "36",
	height: "36"},
  {
	icon:"grindstone",
	width: "36",
	height: "36"},
  {
	icon:"grocer",
	width: "36",
	height: "36"},
  {
	icon:"herbalist",
	width: "36",
	height: "36"},
  {
	icon:"home",
	width: "36",
	height: "36"},
  {
	icon:"horse_trader",
	width: "36",
	height: "36"},
  {
	icon:"huntsman",
	width: "36",
	height: "36"},
  {
	icon:"interesting_site",
	width: "36",
	height: "36"},
  {
	icon:"lodgings",
	width: "36",
	height: "36"},
  {
	icon:"miller",
	width: "36",
	height: "36"},
  {
	icon:"nest",
	width: "36",
	height: "36"},
  {
	icon:"scribe",
	width: "36",
	height: "36"},
  {
	icon:"shrine",
	width: "36",
	height: "36"},
  {
	icon:"tailor",
	width: "36",
	height: "36"},
  {
	icon:"tanner",
	width: "36",
	height: "36"},
  {
	icon:"tavern",
	width: "36",
	height: "36"},
  {
	icon:"trader",
	width: "36",
	height: "36"},
  {
	icon:"treasure_chest",
	width: "36",
	height: "36"},
  {
	icon:"treasure_map",
	width: "36",
	height: "36"},
  {
	icon:"treasure_map_alt",
	width: "36",
	height: "36"},
  {
	icon:"weaponsmith",
	width: "36",
	height: "36"},
  {
	icon:"woodland_garden",
	width: "36",
	height: "36"},
  {
	icon:"belladonna",
	width: "36",
	height: "36"},
  {
	icon:"chamomile",
	width: "36",
	height: "36"},
  {
	icon:"comfrey",
	width: "36",
	height: "36"},
  {
	icon:"dandelion",
	width: "36",
	height: "36"},
  {
	icon:"eyebright",
	width: "36",
	height: "36"},
  {
	icon:"herb_paris",
	width: "36",
	height: "36"},
  {
	icon:"marigold",
	width: "36",
	height: "36"},
  {
	icon:"mint",
	width: "36",
	height: "36"},
  {
	icon:"nettle",
	width: "36",
	height: "36"},
  {
	icon:"poppy",
	width: "36",
	height: "36"},
  {
	icon:"sage",
	width: "36",
	height: "36"},
  {
	icon:"st_johns_wort",
	width: "36",
	height: "36"},
  {
	icon:"thistle",
	width: "36",
	height: "36"},
  {
	icon:"valerian",
	width: "36",
	height: "36"},
  {
	icon:"wormwood",
	width: "36",
	height: "36"},
  {
	icon:"marker_a",
	width: "36",
	height: "36"},
  {
	icon:"marker_b",
	width: "36",
	height: "36"},
  {
	icon:"marker_c",
	width: "36",
	height: "36"},
  {
	icon:"star",
	width: "36",
	height: "36"},
  {
	icon:"exclamation",
	width: "36",
	height: "36"},
	
]

var markerIconTypes = [];
for (var i in mapMarkers) {
  var icon = mapMarkers[i].icon;
  var iWidth = mapMarkers[i].width;
  var iHeight = mapMarkers[i].height;
  // make the icon while we are here
  markerIconTypes[i] = L.icon({
    className: "",
    iconUrl: iconsUrl + icon.replace(/ /g, "") + '.png',
    iconSize: [iWidth, iHeight],
    iconAnchor: [iWidth / 2, iHeight / 2,],
    popupAnchor: [0, -iHeight / 2]
  });
};
// End available markers to add on click

// User added markers
var groupUser = [];
initUserLayerGroup();
function initUserLayerGroup() {
	var markersUser = [];
	if (localStorage.mapUserMarkers == "undefined") {
		localStorage.mapUserMarkers = "[]";
	}
  if (localStorage.mapUserMarkers !== undefined) {
    var storageMarkers = [];

    storageMarkers = JSON.parse(localStorage.mapUserMarkers);

    for (var i = 0; i < storageMarkers.length; i++) {
      var x = storageMarkers[i].coords.x;
      var y = storageMarkers[i].coords.y;
      var name = storageMarkers[i].name;
      var icon = storageMarkers[i].icon;
			var iconvalue = storageMarkers[i].iconvalue;
      var iconUrl = storageMarkers[i].icon.options.iconUrl;
      var title = storageMarkers[i].title;
      var desc = storageMarkers[i].desc;
			
			var markerlink = (url+"?m="+y+","+x+"&title="+name+"&desc="+desc+"&icon="+iconvalue+"&");

      var customIcon = L.icon({
        iconUrl: storageMarkers[i].icon.options.iconUrl,
        iconSize: storageMarkers[i].icon.options.iconSize,
        iconAnchor: [18,18], //storageMarkers[i].icon.options.iconAnchor,
        popupAnchor:  [0,-18], //storageMarkers[i].icon.options.popupAnchor
				className: storageMarkers[i].icon.options.className,
      });
			
			var popupcontent = '<div class="popcontent">\
			<p class="mtitle">'+name+'</p>\
			<p class="mdesc">'+desc+'</p>\
			<span class="mcoords">X: '+y+' Y: '+x+'</span></div>\
      <span class="markerlink hide">'+markerlink+'</span>\
      <button class="copymarkerurl"><span class="sharetext" data-i18n="copylink">Copy link</span>\
      <span class="copiedmsg hide">Copied</span></button>\
			<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
			<div id="edit-dialog" class="hide">\
			<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
			<div id="iconprev" style="background-image:url(\''+iconUrl+'\')"></div>\
			<select id="select_icon" name="icon" onchange="iconpref(this.value);">';
      for (var j in mapMarkers) {
        popupcontent +='<option value="'+j+'">'+mapMarkers[j].icon.replace(/_/gi, " ")+'</option>';
      };
      popupcontent = popupcontent+'</select>\
			<input type="text" id="editedtitle" name="title" value="'+title+'">\
			<textarea id="editeddesc" name="desc">'+desc+'</textarea>\
			<button class="cancel" data-i18n="cancel">Cancel</button>\
			<button class="save-marker" data-i18n="Save">Save</button>\
			</div>\
			<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
			<div id="remove-dialog" class="hide">\
			<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
			<button class="yes" data-i18n="yes">Yes</button>\
			<button class="no" data-i18n="no">No</button></div>';
      var marker = L.marker([x, y], {draggable: false,icon: customIcon}).bindPopup(popupcontent);

      marker.on("popupopen", onPopupOpen);
      markersUser.push(marker);
    }
  } else {
		localStorage.mapUserMarkers = "[]";
	}
	groupUser = L.layerGroup(markersUser);
  map.addLayer(groupUser);
}
// End user added markers

// Patch coordinates if old version
var actualversion = localStorage.getItem('version');
if (actualversion === null || actualversion < version) {
  localStorage.setItem('version', version);
  console.log("version outdated")
  storageMarkers = JSON.parse(localStorage.mapUserMarkers);
  for (var i = 0; i < storageMarkers.length; i++) {
    var x = storageMarkers[i].coords.x;
    var y = storageMarkers[i].coords.y;
    x = (x/2932*2048 + 2048).toFixed(0);
    y = (y/2932*2048 + 2048).toFixed(0);
    storageMarkers[i].coords.x = x
    storageMarkers[i].coords.y = y
    localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
    map.removeLayer(groupUser);
    initUserLayerGroup();
  };
} else {};
// End Patch

// Change marker background image on select marker
function iconpref(value) {
  document.getElementById("iconprev").style.backgroundImage = "url("+markerIconTypes[value].options.iconUrl+")";
};
// Change marker name image on select marker
function titlepref(value) {
  document.getElementById("titleprev").value = value.replace(/_/gi, " ");
};

function removeMarkerE(lat,lon) {
  for(e in markers) {
    var tmpm = markers[e].getLatLng();
    if(tmpm.lat == lat && tmpm.lng == lon) {
      map.removeLayer(markers[e]);
    };
  };
};


function addMarkerText(lat,long) {
  //console.log(markerIconTypes);
  var message = '<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
  <div id="iconprev" style="background-image:url(\''+markerIconTypes[0].options.iconUrl+'\')"></div>\
  <form id="addmark" method="post" action="#">\
  <select id="select_icon" name="icon" onchange="iconpref(this.value); titlepref(this.options[this.selectedIndex].innerHTML);">';
  for (var i in mapMarkers) {
    message +='<option value="'+i+'">'+mapMarkers[i].icon.replace(/_/gi, " ")+'</option>';
  };
  message = message+'</select><div class="markertitle" data-i18n="marker_title">Marker Title:</div>\
  <input type="text" id="titleprev" name="title" value="Arrow">\
  <div class="markerdesc" data-i18n="marker_desc">Marker Description:</div>\
  <textarea name="desc" onclick="this.value=\'\'; this.onclick = function(){}"></textarea>\
  <table class="coordsinputs">\
  <tr>\
  <td>X:<input type="text" readonly="readonly" name="mlon" id="mlon" maxlength="5" value="'+long+'" onKeyPress="return numonly(this,event)"></td>\
  <td>Y:<input id="mlat" type="text" readonly="readonly" name="mlat" maxlength="5" value="'+lat+'" onKeyPress="return numonly(this,event)"></td>\
  </tr>\
  </table>\
  <input type="hidden" name="submit" value="true">\
  <button type="submit" class="send" data-i18n="add">Add</button>\
  </form>';
  // 
  var ltn = {};
  ltn.lat = lat;
  ltn.lng = long;
  popup.setLatLng(ltn).setContent(message).openOn(map);
  
  // Add the mark
  $('#addmark').submit(function(e){
		var selectedIcon = $(this).find("#select_icon option:selected").text();
    var postData = $(this).serializeArray();
    var lat = Math.round(getAObj(postData,"mlat"));
    var lon = Math.round(getAObj(postData,"mlon"));
    postData.push({"name": "lat","value":lat});
    postData.push({"name": "lon","value":lon});

    var storageMarkers = [];
    var markersUser = [];

    if (localStorage.mapUserMarkers !== undefined) {
      storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    }
    storageMarkers.push({
      "coords": {
        "x": lat,
        "y": lon
      },
      "name": getAObj(postData,"title"),
      "icon": markerIconTypes[getAObj(postData,"icon")],
      "iconvalue": getAObj(postData,"icon"),
      "title": getAObj(postData,"title"),
      "desc": getAObj(postData,"desc")
    });
    popup._close();
		
		var markerlink = (url+"?m="+lon+","+lat+"&title="+getAObj(postData,"title")+"&desc="+getAObj(postData,"desc")+"&icon="+getAObj(postData,"icon")+"&");

    var popupcontent = '<div class="popcontent">\
    <span class="mtitle">'+getAObj(postData,'title')+'</span><br>\
    <span class="mtitle">'+getAObj(postData,'desc')+'</span><br>\
    <span class="mcoords">[ '+getAObj(postData,'mlon')+' , '+getAObj(postData,'mlat')+']</span></div>\
    <span class="markerlink hide">'+markerlink+'</span>\
    <button class="copymarkerurl"><span class="sharetext" data-i18n="copylink">Copy link</span>\
    <span class="copiedmsg hide">Copied</span></button>\
    <button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
    <div id="edit-dialog" class="hide">\
    <div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
    <div id="iconprev" style="background-image:url(\''+markerIconTypes[0].options.iconUrl+'\')"></div>\
    <select id="select_icon" name="icon" onchange="iconpref(this.value);">';
      for (var i in mapMarkers) {
      popupcontent +='<option value="'+i+'">'+mapMarkers[i].icon.replace(/_/gi, " ")+'</option>';
    };
    popupcontent = popupcontent+'</select>\
    <input type="text" id="editedtitle" name="title" value="'+getAObj(postData,'title')+'">\
    <textarea id="editeddesc" name="desc">'+getAObj(postData,'desc')+'</textarea>\
    <button class="cancel" data-i18n="cancel">Cancel</button>\
    <button class="save-marker" data-i18n="Save">Save</button>\
    </div>\
    <button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
    <div id="remove-dialog" class="hide">\
    <span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
    <button class="yes" data-i18n="yes">Yes</button>\
    <button class="no" data-i18n="no">No</button></div>'
    //
    var newMarker = L.marker({lat: lat, lng: lon},{icon: markerIconTypes[getAObj(postData,"icon")]});
    newMarker.bindPopup(popupcontent);
    newMarker.addTo(map);
    newMarker.on("popupopen", onPopupOpen);
    markersUser.push(newMarker);
		console.log(groupUser);
    groupUser.addLayer(newMarker);
    localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
    map.addLayer(groupUser);
    e.preventDefault();
  });
}

function onPopupOpen() {
  var _this = this;
  var clickedMarkerCoords = this.getLatLng();
  var popup = _this.getPopup();

  $(document).on('click', '.remove-marker', function() {
    $(this).addClass('hide');
    $(this).next('#remove-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.edit-marker').addClass('hide');
		$(this).parent().parent().find('.copymarkerurl').addClass('hide');
  });
  $(document).on('click', '.no', function() {
    $(this).parent('#remove-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
		$(this).parent().parent().find('.copymarkerurl').removeClass('hide');
  });

  $(document).on('click', '.yes', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        storageMarkers.splice(i, 1);
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
      }
    }  
    //localStorage.removeItem('userMarkers');
    map.removeLayer(_this);
		groupUser.removeLayer(_this);
  });
  
   //Edit Marker
  $(document).on('click', '.edit-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        $(this).parent().find('#iconprev').css("background-image", "url("+storageMarkers[i].icon.options.iconUrl+")");
        $(this).parent().find('#select_icon').val(storageMarkers[i].iconvalue);
      }
    }
    // HERE
    $(this).addClass('hide');
    $(this).next('#edit-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.remove-marker').addClass('hide');
		$(this).parent().parent().find('.copymarkerurl').addClass('hide');
  });
  $(document).on('click', '.cancel', function() {
    $(this).parent().parent().find('#edit-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
		$(this).parent().parent().find('.copymarkerurl').removeClass('hide');
  });
  $(document).on('click', '.save-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
    for(i = storageMarkers.length; i > -1; i--) {
      if (typeof storageMarkers[i] != 'undefined' && 
          (clickedMarkerCoords.lat == storageMarkers[i].coords.x &&
           clickedMarkerCoords.lng == storageMarkers[i].coords.y)
         ) {
        var editedicon = $(this).parent().find('select[name=icon]').val();
        var editedtitle = $(this).parent().find('#editedtitle').val();
        var editeddesc = $(this).parent().find('#editeddesc').val();
				
				var markerlink = (url+"?m="+clickedMarkerCoords.lng+","+clickedMarkerCoords.lat+"&title="+editedtitle+"&desc="+editeddesc+"&icon="+editedicon+"&");
        
        var editedpopup ='<div class="popcontent"><span class="mtitle">'+editedtitle+'</span><br>\
<span class="mtitle">'+editeddesc+'</span><br>\
<span class="mcoords">[ '+clickedMarkerCoords.lng+' , '+clickedMarkerCoords.lat+']</span></div>\
<span class="markerlink hide">'+markerlink+'</span>\
<button class="copymarkerurl"><span class="sharetext" data-i18n="copylink">Copy link</span>\
<span class="copiedmsg hide">Copied</span></button>\
<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
<div id="edit-dialog" class="hide">\
<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
  <div id="iconprev" style="background-image:url(\''+markerIconTypes[0].options.iconUrl+'\')"></div>\
  <select id="select_icon" name="icon" onchange="iconpref(this.value);">';
    for (var j in mapMarkers) {
    editedpopup +='<option value="'+j+'">'+mapMarkers[j].icon.replace(/_/gi, " ")+'</option>';
  };
  editedpopup = editedpopup+'</select>\
<input type="text" id="editedtitle" name="title" value="'+editedtitle+'">\
<textarea id="editeddesc" name="desc">'+editeddesc+'</textarea>\
<button class="cancel" data-i18n="cancel">Cancel</button>\
<button class="save-marker" data-i18n="Save">Save</button>\
</div>\
<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
<div id="remove-dialog" class="hide">\
<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
<button class="yes" data-i18n="yes">Yes</button><button class="no" data-i18n="no">No</button></div>';
        popup.setContent(editedpopup);

        _this.setIcon(markerIconTypes[editedicon]);
        storageMarkers[i].name = editedtitle;
        storageMarkers[i].title = editedtitle;
        storageMarkers[i].desc = editeddesc;
        storageMarkers[i].icon = (markerIconTypes[editedicon]);
        storageMarkers[i].iconvalue = editedicon;
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
      }
    } 
    popup._close();
  });
}

$('#usermarkers').click(function(){
  if($(this).prop("checked") == true){
    map.addLayer(groupUser);
  }
  else if($(this).prop("checked") == false){
    map.removeLayer(groupUser);
  }
});
// End toggle user markers */

map.on('click', function (e) {
  var lat = Math.round(e.latlng.lat);
  var long = Math.round(e.latlng.lng);
  if (long < 0 || long > 4095 || lat < 0 || lat > 4095) {
   console.log("lat: "+lat+ "long: "+long);
  } else {
    message = '<span class="coordsinfo">X: ' +long+ ' ' + 'Y: ' +lat+ '</span><br><button class="add-marker" data-i18n="add_marker" onclick="addMarkerText('+lat+','+long+')">Add marker</button>';
    popup.setLatLng(e.latlng).setContent(message).openOn(map);
  }
});

var sharedMarker = getUrlVars()["m"];
if (sharedMarker != undefined) {
  sidebar.close();
  var smIcon = getUrlVars()["icon"];
  var smTitle = getUrlVars()["title"];
  smTitle = decodeURIComponent(smTitle);
  var smDesc = getUrlVars()["desc"];
  smDesc = decodeURIComponent(smDesc);
  var smY = sharedMarker.split(",")[1];
  var smX = sharedMarker.split(",")[0];
  console.log(smTitle);
  console.log(smDesc);
  var icoUrl = (markerIconTypes[smIcon].options.iconUrl);

  var popupcontent = '<div class="popcontent">\
<span class="mtitle">'+smTitle+'</span><br>\
<span class="mdesc">'+smDesc+'</span><br>\
<span class="mcoords">X: '+smY+' Y: '+smX+'</span></div>\
<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
<div id="edit-dialog" class="hide">\
<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
<div id="iconprev" style="background-image:url(\''+icoUrl+'\')"></div>\
<select id="select_icon" name="icon" onchange="iconpref(this.value);">';
  for (var k in mapMarkers) {
    popupcontent +='<option value="'+k+'">'+mapMarkers[k].icon.replace(/_/gi, " ")+'</option>';
  };
  popupcontent = popupcontent+'</select>\
<input type="text" id="editedtitle" name="title" value="'+smTitle+'">\
<textarea id="editeddesc" name="desc">'+smDesc+'</textarea>\
<button class="cancel" data-i18n="cancel">Cancel</button>\
<button class="save-marker" data-i18n="Save">Save</button>\
</div>\
<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
<div id="remove-dialog" class="hide">\
<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
<button class="yes" data-i18n="yes">Yes</button>\
<button class="no" data-i18n="no">No</button></div>';

  if ((smY <= mapBounds && smY>0) && (smX<=mapBounds && smX>0)) {
    var sm_marker = L.marker([smY,smX], {icon: markerIconTypes[smIcon]}).bindPopup(popupcontent).addTo(map);       
    map.flyTo(sm_marker.getLatLng(), 4);
    sm_marker.on("popupopen", onPopupOpenShared);
    sm_marker.openPopup();
  }
};

// Edit and save shared marker
function onPopupOpenShared() {
  var _this = this;
  var clickedMarkerCoords = this.getLatLng();
  var popup = _this.getPopup();
  var smIcon = getUrlVars()["icon"];
  var smTitle = getUrlVars()["title"];
  smTitle = decodeURIComponent(smTitle);
  var smDesc = getUrlVars()["desc"];
  smDesc = decodeURIComponent(smDesc);
  var smY = sharedMarker.split(",")[1];
  var smX = sharedMarker.split(",")[0];
  var icoUrl = (markerIconTypes[smIcon].options.iconUrl);

  $(document).on('click', '.remove-marker', function() {
    $(this).addClass('hide');
    $(this).next('#remove-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.edit-marker').addClass('hide');
  });
  $(document).on('click', '.no', function() {
    $(this).parent('#remove-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
  });

  $(document).on('click', '.yes', function() {
    map.removeLayer(_this);
  });
  
   //Edit Marker
  $(document).on('click', '.edit-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
        $(this).parent().find('#iconprev').css("background-image", "url("+icoUrl+")");
        $(this).parent().find('#select_icon').val(smIcon);
    // HERE
    $(this).addClass('hide');
    $(this).next('#edit-dialog').removeClass('hide');
    $(this).parent().parent().find('.popcontent').addClass('hide');
    $(this).parent().parent().find('.remove-marker').addClass('hide');
  });
  $(document).on('click', '.cancel', function() {
    $(this).parent().parent().find('#edit-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
  });
  $(document).on('click', '.save-marker', function() {
    storageMarkers = JSON.parse(localStorage.mapUserMarkers);
        var editedicon = $(this).parent().find('select[name=icon]').val();
        var editedtitle = $(this).parent().find('#editedtitle').val();
        var editeddesc = $(this).parent().find('#editeddesc').val();
        
        var editedpopup ='<div class="popcontent"><span class="mtitle">'+editedtitle+'</span><br>\
<span class="mtitle">'+editeddesc+'</span><br>\
<span class="mcoords">[ '+clickedMarkerCoords.lng+' , '+clickedMarkerCoords.lat+']</span></div>\
<button class="edit-marker" data-i18n="edit_marker">Edit marker</button>\
<div id="edit-dialog" class="hide">\
<div class="chooseIcon" data-i18n="choose_icon">Choose Icon:</div>\
  <div id="iconprev" style="background-image:url(\''+markerIconTypes[0].options.iconUrl+'\')"></div>\
  <select id="select_icon" name="icon" onchange="iconpref(this.value);">';
    for (var j in mapMarkers) {
    editedpopup +='<option value="'+j+'">'+mapMarkers[j].icon.replace(/_/gi, " ")+'</option>';
  };
  editedpopup = editedpopup+'</select>\
<input type="text" id="editedtitle" name="title" value="'+editedtitle+'">\
<textarea id="editeddesc" name="desc">'+editeddesc+'</textarea>\
<button class="cancel" data-i18n="cancel">Cancel</button>\
<button class="save-marker" data-i18n="Save">Save</button>\
</div>\
<button class="remove-marker" data-i18n="remove_marker">Remove marker</button>\
<div id="remove-dialog" class="hide">\
<span class="remove-text" data-i18n="remove_text">Are you sure?</span>\
<button class="yes" data-i18n="yes">Yes</button><button class="no" data-i18n="no">No</button></div>';
        popup.setContent(editedpopup);
    
        storageMarkers.push({
          "coords": {
            "x": smY,
            "y": smX
          },
          "name": editedtitle,
          "icon": (markerIconTypes[editedicon]),
          "iconvalue": editedicon,
          "title": editedtitle,
          "desc": editeddesc
        });

        _this.setIcon(markerIconTypes[editedicon]);
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);

    popup._close();
  });
}

function getFormattedTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = ("0" + (today.getMonth() + 1)).slice(-2)
    var d = today.getDate();
    var hour = today.getHours();
    var min = today.getMinutes();
    var s = today.getSeconds();
    return y + "-" + m + "-" + d + "_" + hour + "." + min;
}


// Backup Restore 
$(document).on('click', '.clearls', function() {
  $(this).addClass('hide');
  $(this).next('.prompt').removeClass('hide');
});
$(document).on('click', '.clearyes', function() {
  $(this).parent('.prompt').addClass('hide');
  localStorage.setItem('mapUserMarkers', '[]');
  map.removeLayer(groupUser);
  initUserLayerGroup();
});
$(document).on('click', '.clearno', function() {
  $(this).parent('.prompt').addClass('hide');
});

$('.backupls').on('click', function(e) {
  var backup = {};
  var mapUserMarkers = localStorage.mapUserMarkers;
  var langactive = localStorage.langactive;
  backup.markers = mapUserMarkers;
  backup.langactive = langactive;

  var json = JSON.stringify(backup);
  var base = btoa(json);
  var href = 'data:text/javascript;charset=utf-8;base64,' + base;
  var link = document.createElement('a');
    link.setAttribute('download', 'kcdmap_'+getFormattedTime()+'.json');
  link.setAttribute('href', href);
  document.querySelector('body').appendChild(link);
  link.click();
  link.remove();
});

$('.restorels').on('click', function(e) {
	var w = document.createElement('div');
  w.className = "restoreWindowOverlay";
  var t = document.createElement('div');
  t.className = "restoreWindow";
  var a = document.createElement('a');
  a.className = "restoreWindowX";
  a.appendChild(document.createTextNode('×'));
  a.setAttribute('href', '#');
  t.appendChild(a);
  a.onclick = function() {
      w.remove();
  };

  var l = document.createElement('input');
  l.setAttribute('type', 'file');
  l.setAttribute('id', 'fileinput');
  l.onchange = function(e) {
			w.remove();
      var f = e.target.files[0];
      if (f) {
          var reader = new FileReader();
          reader.onload = function(e) {
              var text = e.target.result;
            text = JSON.parse(text);
            localStorage.setItem('mapUserMarkers', text.markers);
            localStorage.setItem('langactive', text.langactive);
            initUserLayerGroup();
              alert('Imported markers from backup.')
          };
          reader.readAsText(f);
      } else {
        alert('Failed to load file');
      }
  };
  var a = document.createElement('h3');
  a.className = "restoreTitle";
  a.appendChild(document.createTextNode('Select file with backup'));
  t.appendChild(a);
  t.appendChild(l);
	w.appendChild(t);
  document.querySelector('body').appendChild(w);
});
// End Backup Restore 


$('.toggle-title').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	
	$('.toggle-content').click(function(){
		$(this).toggleClass('active');
		$(this).next('.hidden-content').slideToggle(500);
	});
	
	// Language visual toggle
	var langactive = localStorage.getItem('langactive');
  if (langactive === null) {
    localStorage.setItem('langactive', "en");
    $(".langswitch").find(".lang[data-lang='en']").addClass("active");
    $(".langswitch").find(".lang[data-lang='en']").find(".checkmark").addClass("active");
  }
  else {
    $(".langswitch").find(".lang[data-lang="+langactive+"]").addClass("active");
    $(".langswitch").find(".lang[data-lang="+langactive+"]").find(".checkmark").addClass("active");
  }
  $(".lang").click(function(){
    localStorage.setItem('langactive', $(this).data("lang"));
    $(this).parent().find(".lang-text").removeClass("active");
    $(this).find(".lang-text").addClass("active");
    $(this).parent().find(".lang").removeClass("active");
    $(this).addClass("active");
    $(this).parent().find(".checkmark").removeClass("active");
    $(this).find(".checkmark").addClass("active");
  });
	
	// Save toggle state
$('.markers-list input').on('change', function() {
  var toggled, activemarkers = [];
  $('.markers-list input').each(function() { // run through each of the checkboxes
    toggled = {id: $(this).attr('id'), value: $(this).prop('checked')};
    activemarkers.push(toggled);
  });
  localStorage.setItem("activemarkers", JSON.stringify(activemarkers));
});

var activemarkers = JSON.parse(localStorage.getItem('activemarkers'));
if (localStorage.activemarkers !== undefined) {
  for (var i=0; i<activemarkers.length; i++) {
    $('#' + activemarkers[i].id ).prop('checked', activemarkers[i].value);
    if (activemarkers[i].value) {
      $('#allmarkers').prop('checked', false);
      map.addLayer(layerGroups[activemarkers[i].id]);
    };
  };
};
// end toggle state