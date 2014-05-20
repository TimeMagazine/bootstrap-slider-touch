(function($) {
	require('./css/slider.less')
	require("./js/modernizr.touchevents.js");
	require('./js/bootstrap-slider.js');

	module.exports.slider = function(parent_element, opts) {
		opts = opts || {};
		opts.id = opts.id || "slider";
		
		var sl = $("<div />").addClass("bs_slider").appendTo(parent_element);
		var slide = sl.slider(opts);

		$(".slider").addClass("tw-bs");

		if (opts.label) {
			var mylabel = $("<div />", {
				html: opts.label
			}).addClass("slider_label").appendTo("#" + opts.id);
			
			if (opts.orientation && opts.orientation == "vertical") {
				$(mylabel).css({ 
					transform: 'rotate(90deg)',
					'-ms-transform':'rotate(90deg)', 
					'-webkit-transform':'rotate(90deg)', 
					"margin-left": 20
				});
			}
		}

		if (!opts.orientation || opts.orientation == "horizontal") {
			//$("#" + opts.id).css("width", (opts.width || 300) + "px");
		} else {
			//$("#" + opts.id).css("height", (opts.width || 300) + "px");
		}
		
		if (opts.onSlide) {
			slide.on("slide", function(e) {
				opts.onSlide(e.value, e);
			});
		}

		if (opts.onStart) {
			slide.on("slideStart", function(e) {
				opts.onStart(e.value, e);
			});
		}

		if (opts.onStop) {
			slide.on("slideStop", function(e) {
				opts.onStop(e.value, e);
			});
		}

		if (opts.theme) {
			$(parent_element).find(".slider").addClass(opts.theme);
		}
		
		return slide;
	}
}(window.jQuery));