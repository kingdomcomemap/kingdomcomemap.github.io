var iconsUrl = "https://kingdomcomemap.github.io/assets/images/";
var tilesUrl = "https://kingdomcomemap.github.io/bohemia_map/{z}_{x}_{y}.jpg";
var maxNativeZoom = 5;
var mapMinZoom = 0;
var mapMaxZoom = 5;
var maxNativeZoom = 5;
var mapMinZoom = 0;
var mapMaxZoom = 5;

var mapSize = 6144;
var tileSize = 192;
var mapScale = mapSize / tileSize; // 8192 / 256 = 32.
var mapOffset = mapSize / mapScale / 2; //128
var halfTile = tileSize / 2;

L.CRS.MySimple = L.extend({}, L.CRS.Simple, {
  // At zoom 0, tile 256px x 256px should represent the entire "world" of size 8192 x 8192.
  // Scale is therefore 8192 / 256 = 32 (use the reverse in transformation, i.e. 1 / 32).
  // We want the center of tile 0/0/0 to be coordinates [0, 0], so offset is 8912 * 1 / 32 / 2 = 128.
  transformation: new L.Transformation(1 / mapScale, halfTile, -1 / mapScale, halfTile)
});

var myBounds = [[-mapSize/2, -mapSize/2],[mapSize/2, mapSize/2]];

var map = L.map('map', {
  maxNativeZoom: maxNativeZoom,
  minZoom: mapMinZoom,
  maxZoom: mapMaxZoom,
  zoomControl: false,
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

map.setMaxBounds([[-5000, -5000], [5000, 5000]]);

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


// Using Leaflet.Coordinates plugin at https://github.com/MrMufflon/Leaflet.Coordinates
	// Patch first to avoid longitude wrapping
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
		useLatLngOrder: true, //ordering of labels, default false -> lng-lat
		markerType: L.marker, //optional default L.marker
		markerProps: {} //optional default {}
	}).addTo(map);


	// 3 - ICONS

	var hurtmarker = L.icon({
		iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',

		iconSize:     [25, 41], // size of the icon
		iconAnchor:   [12, 41], // point of the icon which will correspond to marker's location
		popupAnchor:  [1, -41] // point from which the popup should open relative to the iconAnchor
	});

	//L.marker([0, 0], {icon: sampleMarker, title: "Sample Marker"}).addTo(map).bindPopup("Sample Marker!");


	// 7 - FUNCTIONS
	
	
	var layerGroups = [];
	
	function getIcon(index) {
		var iconURL = markers[index].icon;

		var customIcon = L.icon({
			iconUrl: iconURL,
			iconSize: [28,28], // size of the icon
			iconAnchor:   [14, 28], // point of the icon which will correspond to marker's location
			popupAnchor:  [2, -28],
			// point from which the popup should open relative to the iconAnchor
		});

		return customIcon;
	}
	
	//var polygon = L.polygon([[51.509, -0.08],[51.503, -0.06],[51.51, -0.047]]).addTo(mymap);
		
	for (var k = 0; k < markers.length; k++) {
		// Se o grupo não existir em layerGroups...
		if (layerGroups[markers[k].group] === undefined) {
			// Cria o grupo
			layerGroups[markers[k].group] = new L.LayerGroup();
		}
		if (markers[k].bonus === undefined) {
			markers[k].bonus = "";
		}
		// Adiciona a marcação
		L.marker(markers[k].coords, {icon: getIcon(k)}).bindPopup(markers[k].name + "<br>"+ markers[k].bonus).addTo(layerGroups[markers[k].group]);
	}
	
	// LOCATE MARKERS ON CLICK!
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
			iconUrl: items.icon,
			iconSize: [28,28],
			iconAnchor:   [14, 28],
			popupAnchor:  [2, -28],
		  });
		  
		  $('#'+items.group).prop('checked', true);
		  map.addLayer(layerGroups[items.group]);

		  var locatedMarker = L.marker(items.coords, {icon: locatedMarkerIcon}).bindPopup(items.name + "<br>"+ items.bonus).addTo(map);
		  map.panTo(locatedMarker.getLatLng());
		  locatedMarker.openPopup();
		  locatedMarker.on('popupclose', function() {
			map.removeLayer(locatedMarker);
		  });
		}
	  });
	});
	
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
	
	// TOGGLE LAYERS
	
	var koani = document.getElementById('koani');
	var mediaLuna = document.getElementById('mediaLuna');
	var tabacal = document.getElementById('tabacal');
	var montePuncu = document.getElementById('tabacal');
	
	var bonusMedal = document.getElementById('bonusMedal');
	var weaponCase = document.getElementById('weaponCase');
	var skillPoint = document.getElementById('skillPoint');
	
	function toggle(element, layer) {
		if (element.checked) {
			map.addLayer(layerGroups[layer]);
		} else {
			$('#allmarkers').prop('checked', false);
			map.removeLayer(layerGroups[layer]);
		}
	}
	
	// TOGGLE ONLY SOME LAYERS
	
	var only = document.getElementById('only');
	var provinces = document.getElementById('provinces');
	
	function toggleOnly(element, layers) {
		if (element.checked) {
			for (var i = 0; i < layers.length; i++) {
				map.addLayer(layerGroups[layers[i]]);
			}
		} else {
			for (var j = 0; j < layers.length; j++) {
				map.removeLayer(layerGroups[layers[j]]);
			}
		}
	}
		
	// only.onchange = function() {toggleOnly(this, ['animais', 'frutas'])};
	//provinces.onchange = function() {toggleOnly(this, ['koani', 'itacua', 'medialuna'])};
	/*
	intel.onchange = function() {toggle(this, 'intel')};
	kingslayerFile.onchange = function() {toggle(this, 'kingslayerFile')};
	bonusMedal.onchange = function() {toggle(this, 'bonusMedal')};
	skillPoint.onchange = function() {toggle(this, 'skillPoint')};
	accessoryCase.onchange = function() {toggle(this, 'accessoryCase')};
	weaponCase.onchange = function() {toggle(this, 'weaponCase')};
	
	
	breachCommCenter.onchange = function() {toggle(this, 'breachCommCenter')};
	defendRadio.onchange = function() {toggle(this, 'defendRadio')};
	hackAntenna.onchange = function() {toggle(this, 'hackAntenna')};
	intimidateSicario.onchange = function() {toggle(this, 'intimidateSicario')};
	parachuteDrop.onchange = function() {toggle(this, 'parachuteDrop')};
	stealHelicopter.onchange = function() {toggle(this, 'stealHelicopter')};
	stealPlane.onchange = function() {toggle(this, 'stealPlane')};
	*/
	// Toggle content
	
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