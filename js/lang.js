var strings = {
	"en": {
        "translation": {
			"settings": "Settings",
			"languagechange": "Change Language",
			"translationbr": "Portuguese Brazilian translation by RogerHN",
			"version": "Version"
			
        }
    },
  	"br": {
      "translation": {
			"settings": "Configurações",
			"languagechange": "Mudar Idioma",
			"translationbr": "Tradução para Português Brasileiro por RogerHN",
			"version": "Versão"
        }
    },
	"ru": {
        "translation": {
			"settings": "настройки",
			"languagechange": "Изменить язык",
			"translationbr": "Португальский Бразильский перевод RogerHN",
			"version": "версия"
        }
    },
	"de": {
        "translation": {
            "settings": "Einstellungen",
            "languagechange": "Sprache ändern",
            "translationbr": "Portugiesische/Brasilianische Übersetzung von RogerHN",
            "version": "version"
        }
    },
	"cn": {
        "translation": {
            "settings": "设置",
            "languagechange": "更改语言",
            "translationbr": "葡萄牙语、巴西语 翻译者：RogerHN",
            "version": "版本"
        }
    },
	"pl": {
        "translation": {
            "settings": "Ustawienia",
            "languagechange": "Zmień język",
            "translationbr": "Portugalski brazylijski Tłumaczenie przez RogerHN",
            "version": "version 2.0",
		}
	},
	"ro": {
		"translation": {
			"settings": "Setări",
			"languagechange": "Schimbă Limba",
			"translationbr": "Traducere în Portugueză Braziliană făcută de RogerHN",
			"version": "Versiunea",
		}
	},
	"tr": {
		"translation": {
			"settings": "Ayarlar",
			"languagechange": "Dili Değiştir",
			"translationbr": "Portekizce Brezilya RogerHN tarafından çevrilmiştir",
			"version": "Versiyon",
		}
	},
	"it" : {
		"translation" : {
			"settings": "Impostazioni",
			"languagechange": "Cambia lingua",
			"translationbr": "Traduzione Portoghese Brasiliano di RogerHN",
			"version": "Versione",
		}
	},
	"es" : {
		"translation" : {
			"settings": "Ajustes",
			"languagechange": "Cambiar Lenguaje",
			"translationbr": "Traducción Portuguesa por RogerHN",
			"version": "Versión",
		}
	},	
};

$(document).ready(function() {
	var language = "en";
	if (localStorage.getItem("language") != null)
		language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resStore: strings,
        fallbackLng: "en"
    }, function(o) {
        $(document).i18n()
    }), $(".lang").click(function() {
        var o = $(this).attr("data-lang");
		
		localStorage.setItem("language", o);
		
        i18n.init({
            lng: o
        }, function(o) {
            $(document).i18n()
        })
    })
});