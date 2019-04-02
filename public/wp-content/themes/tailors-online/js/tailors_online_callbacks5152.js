jQuery(document).on('ready', function () {
    "use strict";
    /* -------------------------------------
     LATEST NEWS SLIDER
     -------------------------------------- */
    var _tg_productsslider_related = jQuery('#tg-productsslider-related');
    _tg_productsslider_related.owlCarousel({
        margin: 30,
        nav: false,
        loop: true,
        dots: false,
        responsiveClass: true,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>',
        ],
        navClass: [
            'tg-btnsimpleprev tg-btnprev',
            'tg-btnsimplenext tg-btnnext'
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            480: {
                items: 2,
                nav: true,
            },
            768: {
                items: 2,
                nav: true,
            },
            992: {
                items: 4,
                nav: true,
            }
        }
    });


});

/**
 * Mega Menu
 */
jQuery(function ($) {

    function hoverIn() {
        var a = $(this);
        var nav = a.closest('.tg-navigation');
        var mega = a.find('.mega-menu');
        var offset = rightSide(nav) - leftSide(a);
        mega.width(Math.min(rightSide(nav), columns(mega) * 325));
        mega.css('left', Math.min(0, offset - mega.width()));
    }

    function hoverOut() {
    }

    function columns(mega) {
        var columns = 0;
        mega.children('.mega-menu-row').each(function () {
            columns = Math.max(columns, $(this).children('.mega-menu-col').length);
        });
        return columns;
    }

    function leftSide(elem) {
        return elem.offset().left;
    }

    function rightSide(elem) {
        return elem.offset().left + elem.width();
    }

    $('.tg-navigation .menu-item-has-mega-menu').hover(hoverIn, hoverOut);

});

/* -------------------------------------
 Init Full Width Sections
 -------------------------------------- */
builder_full_width_section(); //Init Sections
var $ = window.jQuery;
$(window).off("resize.sectionSettings").on("resize.sectionSettings", builder_full_width_section);
function builder_full_width_section() {
    var $sections = jQuery('.main-page-wrapper .stretch_section');

    jQuery.each($sections, function (key, item) {
        var _sec = jQuery(this);
        var _sec_full = _sec.next(".section-current-width");
        _sec_full.length || (_sec_full = _sec.parent().next(".section-current-width"));

        var _sec_margin_left = parseInt(_sec.css("margin-left"), 10);
        var _sec_margin_right = parseInt(_sec.css("margin-right"), 10);
        var offset = 0 - _sec_full.offset().left - _sec_margin_left;
        var width = jQuery(window).width();

        if (_sec.css({
            position: "relative",
            left: offset,
            "box-sizing": "border-box",
            width: jQuery(window).width()
        }), !_sec.hasClass("stretch_data")) {

            var padding = -1 * offset;

            0 > padding && (padding = 0);
            var paddingRight = width - padding - _sec_full.width() + _sec_margin_left + _sec_margin_right;
            0 > paddingRight && (paddingRight = 0), _sec.css({
                "padding-left": padding + "px",
                "padding-right": paddingRight + "px"
            })
        }
    });
}

/* -------------------------------------
 Map Styles
 -------------------------------------- */
function tailors_online_get_map_styles(style){
		
	var styles = '';
	if(style == 'view_1'){
		var styles = [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}];
	}else if(style == 'view_2'){
		var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"on"}]},{"featureType":"water","elementType":"labels","stylers":[{"hue":"#7fc8ed"},{"saturation":55},{"lightness":-6},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"hue":"#83cead"},{"saturation":1},{"lightness":-15},{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"hue":"#f3f4f4"},{"saturation":-84},{"lightness":59},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbbbbb"},{"saturation":-100},{"lightness":26},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-35},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffcc00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"hue":"#d7e4e4"},{"saturation":-60},{"lightness":23},{"visibility":"on"}]}];
	}else if(style == 'view_3'){
		var styles = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}];
	
	}else if(style == 'view_4'){
		var styles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];
	
	}else if(style == 'view_5'){
		var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
	
	}else if(style == 'view_6'){
		var styles = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
	} else{
		var styles = [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}];
	}
	return styles;
}