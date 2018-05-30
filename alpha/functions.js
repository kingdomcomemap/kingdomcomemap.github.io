var version = 1.3;
var url = ('http://' + window.location.hostname + '/alpha/index.html');
var iconsUrl = './assets/images/';
var tilesUrl = "./bohemia_map/{z}_{x}_{y}.jpg";
var maxNativeZoom = 5;
var mapMinZoom = 1;
var mapMaxZoom = 6;

var mapSize = 6144;
var tileSize = 192;
var mapScale = mapSize / tileSize; // 6144 / 192 = 32.
var mapOffset = mapSize / mapScale / 2; //192
var halfTile = tileSize / 2;

L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
  // At zoom 0, tile 192px x 192px should represent the entire "world" of size 6144 x 6144.
  // Scale is therefore 6144 / 192 = 32 (use the reverse in transformation, i.e. 1 / 32).
  // We want the center of tile 0/0/0 to be coordinates [0, 0], so offset is 6144 * 1 / 32 / 2 = 192.
	transformation: new L.Transformation(1 / mapScale, halfTile, -1 / mapScale, halfTile)
});

var myBounds = [[-mapSize/2, -mapSize/2],[mapSize/2, mapSize/2]];

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

}).setView([0, 0], 2);

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

map.setMaxBounds([[-8000, -8000], [8000, 8000]]);

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

var layerGroups = [];
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

var textLayer = [];
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
  var ilist = "";
  for (var c in markers[i].items) {
    ilist += '<li><i class="'+ markers[i].items[c]+'"></i><span class="iname" data-i18n="'+ markers[i].items[c]+'">'+ markers[i].items[c].replace(/_/gi, " ")+'</span></li>';
  }
  var x = (markers[i].coords[1].toFixed(0));
  var y = (markers[i].coords[0].toFixed(0));
	
	var origin_x = (markers[i].coords[1]);
  var origin_y = (markers[i].coords[0]);
	
	var original_coords = '<p class="original_coords">'+origin_x+','+origin_y+'</p>';

  // Add the marker  [x/4096 *5862 -2931, y/4096 *5862 -2931]
  var marker = L.marker([x/4096 *5862 -2931, y/4096 *5862 -2931], {icon: getIcon(i)}).bindPopup("<p class='mtitle'>"+markers[i].name + "</p><span class='mdesc'>"+ markers[i].desc +"</span><ul class='ilist'>"+ilist+"</ul><p class='original_coords'>"+origin_y+","+origin_x+"</p>").addTo(layerGroups[markers[i].group]);
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
  // if the group doesn't exists in layergroups
  if (layerGroups[usr_markers[i].group] == undefined) {
    // Create the group
    layerGroups[usr_markers[i].group] = new L.LayerGroup();
  }
  if (usr_markers[i].desc == undefined) {
    usr_markers[i].desc = "";
  }
  if (usr_markers[i].items == undefined) {
    usr_markers[i].items = "";
  }
  var ilist = "";
  for (var c in usr_markers[i].items) {
    ilist += '<li><i class="'+ usr_markers[i].items[c]+'"></i><span class="iname" data-i18n="'+ usr_markers[i].items[c]+'">'+ usr_markers[i].items[c].replace(/_/gi, " ")+'</span></li>';
  }
  var x = (usr_markers[i].coords[1]);
  var y = (usr_markers[i].coords[0]);

  // Add the marker
  var marker = L.marker([usr_markers[i].coords[1], usr_markers[i].coords[0]], {icon: getIconUsr(i)}).bindPopup("<p class='mtitle'>"+usr_markers[i].name + "</p><span class='mdesc'>"+ usr_markers[i].desc +"</span><ul class='ilist'>"+ilist+"</ul>").addTo(layerGroups[usr_markers[i].group]);
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
	width: "18",
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
  if (localStorage.mapUserMarkers !== undefined) {
    var storageMarkers = [];

    storageMarkers = JSON.parse(localStorage.mapUserMarkers);

    for (var i = 0; i < storageMarkers.length; i++) {
      var x = storageMarkers[i].coords.x;
      var y = storageMarkers[i].coords.y;
      var name = storageMarkers[i].name;
      var icon = storageMarkers[i].icon;
      var iconUrl = storageMarkers[i].icon.options.iconUrl;
      var title = storageMarkers[i].title;
      var desc = storageMarkers[i].desc;

      var customIcon = L.icon({
        iconUrl: storageMarkers[i].icon.options.iconUrl,
        iconSize: storageMarkers[i].icon.options.iconSize,
        iconAnchor: [18,18], //storageMarkers[i].icon.options.iconAnchor,
        popupAnchor:  [0,-18], //storageMarkers[i].icon.options.popupAnchor
				className: storageMarkers[i].icon.options.className,
      });
			
			var popupcontent = '<div class="popcontent">\
			<span class="mtitle">'+name+'</span><br>\
			<span class="mdesc">'+desc+'</span><br>\
			<span class="mcoords">X: '+y+' Y: '+x+'</span></div>\
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

    var popupcontent = '<div class="popcontent">\
    <span class="mtitle">'+getAObj(postData,'title')+'</span><br>\
    <span class="mdesc">'+getAObj(postData,'desc')+'</span><br>\
    <span class="mcoords">[ '+getAObj(postData,'mlon')+' , '+getAObj(postData,'mlat')+']</span></div>\
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
  });
  $(document).on('click', '.no', function() {
    $(this).parent('#remove-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
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
  });
  $(document).on('click', '.cancel', function() {
    $(this).parent().parent().find('#edit-dialog').addClass('hide');
    $(this).parent().parent().find('.popcontent').removeClass('hide');
    $(this).parent().parent().find('.edit-marker').removeClass('hide');
    $(this).parent().parent().find('.remove-marker').removeClass('hide');
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
        
        var editedpopup ='<div class="popcontent"><span class="mtitle">'+editedtitle+'</span><br>\
<span class="mdesc">'+editeddesc+'</span><br>\
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

        //console.log(_this);
        //markerIconTypes[getAObj(postData,"icon")],
        _this.setIcon(markerIconTypes[editedicon]);
        storageMarkers[i].name = editedtitle;
        storageMarkers[i].title = editedtitle;
        storageMarkers[i].desc = editeddesc;
        storageMarkers[i].icon = (markerIconTypes[editedicon]);
        storageMarkers[i].iconvalue = editedicon;
        //$(this).parent().find('#select_icon').val(storageMarkers[i].iconvalue);
        localStorage.mapUserMarkers = JSON.stringify(storageMarkers);
      }
    } 
    popup._close();
    //localStorage.removeItem('userMarkers');
    //map.removeLayer(_this);
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

  message = "<span class='coordsinfo'>X: " +long+ " " + "Y: " +lat+ '</span><br><button class="add-marker" data-i18n="add_marker" onclick="addMarkerText('+lat+','+long+')">Add marker</button>';
  popup.setLatLng(e.latlng).setContent(message).openOn(map);

});


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