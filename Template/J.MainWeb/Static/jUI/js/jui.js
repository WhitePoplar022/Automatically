/// <reference path=".../jquery-1.8.1-vsdoc.js"/>

jQuery.extend({
	juileftShow: function () { $("#LeftDiv").show("slide"); },
	juileftHide: function () { $("#LeftDiv").hide("slide"); },
	juirightShow: function () { $("#RightDiv").show("slideRight"); },
	juirightHide: function () { $("#RightDiv").hide("slideRight"); }
});

(function ($, undefined)
{

	$.effects.slideRight = function (o)
	{

		return this.queue(function ()
		{

			// Create element
			var el = $(this), props = ['position', 'top', 'bottom', 'left', 'right'];

			// Set options
			var mode = $.effects.setMode(el, o.options.mode || 'show'); // Set Mode
			var direction = o.options.direction || 'left'; // Default Direction

			// Adjust
			$.effects.save(el, props); el.show(); // Save & Show
			$.effects.createWrapper(el).css({ overflow: 'hidden' }); // Create Wrapper
			var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
			var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
			var distance = o.options.distance || (ref == 'top' ? el.outerHeight(true) : el.outerWidth(true));
			if (mode == 'show') el.css(ref, motion == 'pos' ? distance : (isNaN(distance) ? "-" + distance : -distance)); // Shift

			// Animation
			var animation = {};
			animation[ref] = (mode == 'show' ? (motion == 'pos' ? '-=' : '+=') : (motion == 'pos' ? '+=' : '-=')) + distance;

			// Animate
			el.animate(animation, {
				queue: false, duration: o.duration, easing: o.options.easing, complete: function ()
				{
					if (mode == 'hide') el.hide(); // Hide
					$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
					if (o.callback) o.callback.apply(this, arguments); // Callback
					el.dequeue();
				}
			});
		});
	};
})(jQuery);


/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI jsortSelect Plugin
/*
* jQuery UI jsortSelect
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Leidc
* Start date: 2012-11-30
* Description: checkbox美化

/*
* options:

*		
* event
*		
*	    
*/

(function ($, undefined) {
    $.widget("jui.jcheckbox",
    {
        options: {
            items: null
        },

        _create: function () {
            var self = this,
            o = this.options;
            $(":checkbox", this.element).each(function () {
                var spanId = $(this).attr("id") + "_ico";
                if ($.browser.msie) { //IE浏览器
                    $(this).after("<span class='jui-checkbox' id=" + spanId + "></span>");
                    if ($(this).next().next().attr("for")==$(this).attr("id")) {
                        $(this).next().next().attr("for", spanId);
                    }
                } else {//非IE浏览器
                    $(this).after("<span class='jui-checkbox'></span>");
                }

            }).click(function (event) {//checkbox的点击事件

                var tagObject = $(this);
                var tagNextObject = tagObject.next();
                if (tagObject.is(':checked')) {
                    tagNextObject.addClass("jui-checkbox-checked");
                    tagObject.checked = true;
                    tagNextObject.removeClass("jui-checkbox-checked-hover jui-checkbox-checked-checked");
                  
                }
                else {

                    tagNextObject.removeClass('jui-checkbox-checked-checked jui-checkbox-checked');
                    tagNextObject.addClass("jui-checkbox-checked-hover");
                    tagObject.checked = false;
                }
                event.stopPropagation();

            }).hide().next().click(function (event) { //背景图片点击事件
             
                var myObject = document.getElementById($(this).prev().attr("id"));
                var tagObject = $(this);
                var tagNextObject = tagObject.next();
                if (myObject.checked == true) {
                    $(this).removeClass('jui-checkbox-checked jui-checkbox-checked-hover jui-checkbox-checked-checked');
                    myObject.checked = false;
                } else {
                    myObject.checked = true;
                    $(this).removeClass('jui-checkbox-checked-hover jui-checkbox-checked-checked');
                    $(this).addClass('jui-checkbox-checked')
                }
                event.stopPropagation();
      
            }).next().mouseover(function (event) {
                $(this).addClass('jui-checkbox-label');
                var tagPrevObject = $(this).prev();
                if (tagPrevObject.attr("class") == 'jui-checkbox') {
                    tagPrevObject.addClass('jui-checkbox-checked-hover');
                } else {
                    tagPrevObject.addClass('jui-checkbox-checked-checked');
                }

                event.stopPropagation();
            }).mouseout(function (event) {
                var tagPrevObject = $(this).prev();
                tagPrevObject.removeClass('jui-checkbox-checked-hover jui-checkbox-checked-checked');
                //tagPrevObject.removeClass('jui-checkbox-checked-checked');
                event.stopPropagation();
            });

           

            $(":checkbox:checked", this.element).each(function () {
                //if ($(this).is(':checked')) {
                var tagNextObject = $(this).next();

                    tagNextObject.addClass("jui-checkbox-checked");
                    $(this).checked = true;
                    tagNextObject.removeClass("jui-checkbox-checked-hover jui-checkbox-checked-checked");
                    //tagNextObject.removeClass('jui-checkbox-checked-checked');
                //}
            });

           
        },


        _setOption: function (key, value) {
            if (value !== undefined || value != null)
                this.options[key] = value;
            else
                return this.options[key];
        },

        _setOptions: function (options) {
            $.each(options, function (key, value) {
                this._setOption(key, value);
            });
        },


        _destroy: function () {
            $(this.element).empty();
            $(this).empty();

            return this;
        }
    });

    $.extend($.jui.jtip, {
        version: "0.1.0"
    });
})(jQuery);


/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI jsortSelect Plugin
/*
* jQuery UI jsortSelect
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Leidc
* Start date: 2012-11-30
* Description: radio美化

/*
* options:

*		
* event
*		
*	    
*/

(function ($, undefined) {
    $.widget("jui.jradio",
    {
        options: {
            items: null
        },

        _create: function () {
            var self = this,
            o = this.options;
            $(":radio", this.element).each(function () {

                var spanId = $(this).attr("id") + "_ico";
                if ($.browser.msie) { //IE浏览器
                    $(this).after("<span class='jui-radio' id=" + spanId + "></span>");
                    if ($(this).next().next().attr("for") == $(this).attr("id")) {
                        $(this).next().next().attr("for", spanId);
                    }
                } else {//非IE浏览器
                    $(this).after("<span class='jui-radio'></span>");
                }

            }).click(function () {
                var tagObject = $(this);
                var tagNextObject = tagObject.next();
                if (tagObject.is(':checked')) {
                    tagNextObject.siblings().removeClass("jui-radio-checked");
                    tagNextObject.removeClass("jui-radio-checked-hover jui-radio-checked-checked");
                    tagNextObject.addClass("jui-radio-checked");
                    tagObject.checked = true;
                } else {
                    tagNextObject.removeClass("jui-radio-checked");
                    tagObject.checked = false;

                }
            }).hide().next().click(function () {
              
                $(this).siblings().removeClass('jui-radio-checked jui-radio-checked-hover jui-radio-checked-checked');
                var tagPrevObject = $(this).prev();
                if (!tagPrevObject.is(":checked")) {
                    tagPrevObject.attr("checked",true);
                    $(this).removeClass('jui-radio-checked-hover jui-radio-checked-checked');
                    $(this).addClass('jui-radio-checked');
                }
           
            }).next().mouseover(function (event) {
                $(this).addClass('jui-radio-label');
                var tagPrevObject = $(this).prev();
                if (tagPrevObject.attr("class") == 'jui-radio') {
                    tagPrevObject.addClass("jui-radio-checked-hover");
                } else {
                    
                    tagPrevObject.addClass("jui-radio-checked-checked");
                }
                event.stopPropagation();
            }).mouseout(function (event) {
                var tagPrevObject = $(this).prev();
                tagPrevObject.removeClass("jui-radio-checked-hover jui-radio-checked-checked");
                event.stopPropagation();
            });

            $(":radio", this.element).each(function () {

                var tagObject = $(this);
                var tagNextObject = tagObject.next();
                if (tagObject.is(':checked')) {
                    tagNextObject.siblings().removeClass("jui-radio-checked");
                    tagNextObject.addClass("jui-radio-checked");
                    tagObject.checked = true;
                } else {
                    tagNextObject.removeClass("jui-radio-checked");
                    tagObject.checked = false;
                }
            });
        },
     

        _setOption: function (key, value) {
            if (value !== undefined || value != null)
                this.options[key] = value;
            else
                return this.options[key];
        },

        _setOptions: function (options) {
            $.each(options, function (key, value) {
                this._setOption(key, value);
            });
        },


        _destroy: function () {
            $(this.element).empty();
            $(this).empty();

            return this;
        }
    });

    $.extend($.jui.jtip, {
        version: "0.1.0"
    });
})(jQuery);


/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI tip Plugin
/*
* jQuery UI tip
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Leidc
* Start date: 2012-09-27 16:30
* Description: 提示控件
* Finish date: 2012-09-28 14:30
*/

/*
* options:
*		type;表示提示的类型包括(nomal[常规],success[成功],error[错误])
*		position;表示提示出现的位置(w[底部中间提示],n[右边中间提示])
*		width：表示提示框的长度
*		content:表示提示的内容
*       autoshow:表示是否直接显示（false[初始化为隐藏],true[初始化为显示]）
* event
*		show：显示
*		hide:隐藏
*	    refreshPositon:重新定位
*/

(function ($, undefined) {
	$.widget("jui.jtip",
	{
		options: {
			type: "nomal",
			positon: "left",
			width: "150px",
			content: "",
			autoshow: false
		},

		_create: function () {
			$(this.element).empty();
			var self = this,
			o = this.options;

			var arrowheadId, contentId;
			var tagid = this.element.attr("id");/*目标的id*/

			var arrowheadId = tagid + "_arrowhead";
			var contentId = tagid + "_content";

			switch (o.type) {
				case "nomal": /*正常情况*/
					switch (o.positon) {
						case "left":/*箭头朝西*/

							$("body").append("<div id=" + contentId + " class='jui-jitp-nomal-w-content' style='width:" + o.width + "'><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-w-arrowhead'></div>");
							break;
						case "bottom":/*箭头朝北*/

							$("body").append("<div id=" + contentId + " class='jui-jitp-nomal-n-content' style='width:" + o.width + "'><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-n-arrowhead'></div>");
							break;
					}
					break;


				case "success": /*成功情况*/
					switch (o.positon) {
						case "left":/*箭头朝西*/
						  
							$("body").append("<div id=" + contentId + " class='jui-jtip-success-w-content' style='width:" + o.width + "'><span class='ui-icon ui-icon-check' style='float: left; margin-left: 3px; margin-top: 3px; margin-right: 3px;'></span><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-w-arrowhead-success'></div>");
							break;
						case "bottom":/*箭头朝北*/

							$("body").append("<div id=" + contentId + " class='jui-jtip-success-n-content' style='width:" + o.width + "'><span class='ui-icon ui-icon-check' style='float: left; margin-left: 3px; margin-top: 3px; margin-right: 3px;'></span><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-n-arrowhead-success'></div>");
							break;
					}
					break;
				case "error": /*错误情况*/
					switch (o.positon) {
						case "left":/*箭头朝西*/

							$("body").append("<div id=" + contentId + " class='ui-state-error jui-jtip-error-w-content' style='width:" + o.width + "'><span class='ui-icon ui-icon-alert' style='float: left; margin-left: 3px; margin-top: 3px; margin-right: 3px;'></span><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-w-arrowhead-error'></div>");
							break;
						case "bottom":/*箭头朝北*/

							$("body").append("<div id=" + contentId + " class='ui-state-error  jui-jtip-error-n-content' style='width:" + o.width + "'><span class='ui-icon ui-icon-alert' style='float: left; margin-left: 3px; margin-top: 3px; margin-right: 3px;'></span><span style='padding:3px'>" + o.content + "</span></div>");
							$("body").append("<div id=" + arrowheadId + " class='jui-jtip-n-arrowhead-error'></div>");
							break;
					}

					break;


			}

			if (o.autoshow) {
				this._positon(o.positon, contentId, arrowheadId);
			} else if (o.autoshow == false) {
				$("#" + arrowheadId).css({ "filter": "alpha(opacity = 0)", "opacity": 0 }); //隐藏箭头
				$("#" + contentId).css({ "filter": "alpha(opacity = 0)", "opacity": 0 }); //隐藏内容 

				this._positon(o.positon, contentId, arrowheadId);

			}

		},

		show: function () { /*显示*/
			var self = this,
            o = this.options;
			var tagid = this.element.attr("id");/*目标的id*/
			//$("[id$=content]").stop();
			//$("[id=$arrowhead]").stop();
			var arrowheadId = tagid + "_arrowhead";
			var contentId = tagid + "_content";
			$("#" + contentId).stop();
			$("#" + arrowheadId).stop();
			$("#" + contentId).animate({ opacity: '1' }, 1000);
			$("#" + arrowheadId).animate({ opacity: '1' }, 1000);
			this._positon(o.positon, contentId, arrowheadId);
		},

		hide: function () { /*隐藏*/
			var self = this,
             o = this.options;

			var tagid = this.element.attr("id");/*目标的id*/
			var arrowheadId = tagid + "_arrowhead";
			var contentId = tagid + "_content";
			$("#" + contentId).stop();
			$("#" + arrowheadId).stop();
			$("#" + contentId).animate({ opacity: '0' }, 1000);
			$("#" + arrowheadId).animate({ opacity: '0' }, 1000);
		},

		refreshPositon: function () { /*刷新重定位*/
			var self = this,
            o = this.options;
			var tagid = this.element.attr("id");/*目标的id*/
			var arrowheadId = tagid + "_arrowhead";
			var contentId = tagid + "_content";

			this._positon(o.positon, contentId, arrowheadId);

		},
		_positon: function (positon, contentId, arrowheadId) {
			if (positon == "left") { //朝西定位

				$("#" + arrowheadId).position({
					of: this.element,
					my: "left middle",
					at: "right middle"
				});
				$("#" + contentId).position({
					of: this.element,
					my: "left middle",
					at: "right middle",
					offset: '6 0'
				});
			


			} else { //朝北定位

				$("#" + contentId).position({
					of: this.element,
					my: "center top",
					at: "center bottom",
					offset: '0 6'
				});

				$("#" + arrowheadId).position({
					of: this.element,
					my: "center top",
					at: "center bottom"
				});

			}

		},
		_setOption: function (key, value) {
			if (value !== undefined || value != null)
				this.options[key] = value;
			else
				return this.options[key];
		},

		_setOptions: function (options) {
			$.each(options, function (key, value) {
				this._setOption(key, value);
			});
		},


		_destroy: function () {
			$(this.element).empty();
			$(this).empty();

			return this;
		}
	});

	$.extend($.jui.jtip, {
		version: "0.1.0"
	});
})(jQuery);

// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.8
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function () {
	var SelectParser;

	SelectParser = (function () {

		function SelectParser() {
			this.options_index = 0;
			this.parsed = [];
		}

		SelectParser.prototype.add_node = function (child) {
			if (child.nodeName.toUpperCase() === "OPTGROUP") {
				return this.add_group(child);
			} else {
				return this.add_option(child);
			}
		};

		SelectParser.prototype.add_group = function (group) {
			var group_position, option, _i, _len, _ref, _results;
			group_position = this.parsed.length;
			this.parsed.push({
				array_index: group_position,
				group: true,
				label: group.label,
				children: 0,
				disabled: group.disabled
			});
			_ref = group.childNodes;
			_results = [];
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				option = _ref[_i];
				_results.push(this.add_option(option, group_position, group.disabled));
			}
			return _results;
		};

		SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
			if (option.nodeName.toUpperCase() === "OPTION") {
				if (option.text !== "") {
					if (group_position != null) this.parsed[group_position].children += 1;
					this.parsed.push({
						array_index: this.parsed.length,
						options_index: this.options_index,
						value: option.value,
						text: option.text,
						html: option.innerHTML,
						selected: option.selected,
						disabled: group_disabled === true ? group_disabled : option.disabled,
						group_array_index: group_position,
						classes: option.className,
						style: option.style.cssText
					});
				} else {
					this.parsed.push({
						array_index: this.parsed.length,
						options_index: this.options_index,
						empty: true
					});
				}
				return this.options_index += 1;
			}
		};

		return SelectParser;

	})();

	SelectParser.select_to_array = function (select) {
		var child, parser, _i, _len, _ref;
		parser = new SelectParser();
		_ref = select.childNodes;
		for (_i = 0, _len = _ref.length; _i < _len; _i++) {
			child = _ref[_i];
			parser.add_node(child);
		}
		return parser.parsed;
	};

	this.SelectParser = SelectParser;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/

(function () {
	var AbstractChosen, root;

	root = this;

	AbstractChosen = (function () {

		function AbstractChosen(form_field, options) {
			this.form_field = form_field;
			this.options = options != null ? options : {};
			this.set_default_values();
			this.is_multiple = this.form_field.multiple;
			this.set_default_text();
			this.setup();
			this.set_up_html();
			this.register_observers();
			this.finish_setup();
		}

		AbstractChosen.prototype.set_default_values = function () {
			var _this = this;
			this.click_test_action = function (evt) {
			 
				return _this.test_active_click(evt);
			};
			this.activate_action = function (evt) {
				return _this.activate_field(evt);
			};
			this.active_field = false;
			this.mouse_on_container = false;
			this.results_showing = false;
			this.result_highlighted = null;
			this.result_single_selected = null;
			this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
			this.disable_search_threshold = this.options.disable_search_threshold || 0;
			this.disable_search = this.options.disable_search || false;
			this.search_contains = this.options.search_contains || false;
			this.choices = 0;
			this.single_backstroke_delete = this.options.single_backstroke_delete || false;
			return this.max_selected_options = this.options.max_selected_options || Infinity;
		};

		AbstractChosen.prototype.set_default_text = function () {
			if (this.form_field.getAttribute("data-placeholder")) {
				this.default_text = this.form_field.getAttribute("data-placeholder");
			} else if (this.is_multiple) {
				this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options";
			} else {
				this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option";
			}
			return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "没有找到相关的";
		};

		AbstractChosen.prototype.mouse_enter = function () {
			return this.mouse_on_container = true;
		};

		AbstractChosen.prototype.mouse_leave = function () {
			return this.mouse_on_container = false;
		};

		AbstractChosen.prototype.input_focus = function (evt) {
			var _this = this;
			if (this.is_multiple) {
				if (!this.active_field) {
					return setTimeout((function () {
						return _this.container_mousedown();
					}), 50);
				}
			} else {
				if (!this.active_field) return this.activate_field();
			}
		};

		AbstractChosen.prototype.input_blur = function (evt) {
			var _this = this;
			if (!this.mouse_on_container) {
				this.active_field = false;
				return setTimeout((function () {
					return _this.blur_test();
				}), 100);
			}
		};

		AbstractChosen.prototype.result_add_option = function (option) {
			var classes, style;
			if (!option.disabled) {
				option.dom_id = this.container_id + "_o_" + option.array_index;
				classes = option.selected && this.is_multiple ? [] : ["active-result"];
				if (option.selected) classes.push("result-selected");
				if (option.group_array_index != null) classes.push("group-option");
				if (option.classes !== "") classes.push(option.classes);
				style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
				return '<li id="' + option.dom_id + '" class="' + classes.join(' ') + '"' + style + '>' + option.html + '</li>';
			} else {
				return "";
			}
		};

		AbstractChosen.prototype.results_update_field = function () {
			if (!this.is_multiple) this.results_reset_cleanup();
			this.result_clear_highlight();
			this.result_single_selected = null;
			return this.results_build();
		};

		AbstractChosen.prototype.results_toggle = function () {
			if (this.results_showing) {
				return this.results_hide();
			} else {
				return this.results_show();
			}
		};

		AbstractChosen.prototype.results_search = function (evt) {
			if (this.results_showing) {
				return this.winnow_results();
			} else {
				return this.results_show();
			}
		};

		AbstractChosen.prototype.keyup_checker = function (evt) {
			var stroke, _ref;
			stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
			this.search_field_scale();
			switch (stroke) {
				case 8:
					if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
						return this.keydown_backstroke();
					} else if (!this.pending_backstroke) {
						this.result_clear_highlight();
						return this.results_search();
					}
					break;
				case 13:
					evt.preventDefault();
					if (this.results_showing) return this.result_select(evt);
					break;
				case 27:
					if (this.results_showing) this.results_hide();
					return true;
				case 9:
				case 38:
				case 40:
				case 16:
				case 91:
				case 17:
					break;
				default:
					return this.results_search();
			}
		};

		AbstractChosen.prototype.generate_field_id = function () {
			var new_id;
			new_id = this.generate_random_id();
			this.form_field.id = new_id;
			return new_id;
		};

		AbstractChosen.prototype.generate_random_char = function () {
			var chars, newchar, rand;
			chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			rand = Math.floor(Math.random() * chars.length);
			return newchar = chars.substring(rand, rand + 1);
		};

		return AbstractChosen;

	})();

	root.AbstractChosen = AbstractChosen;

}).call(this);

/*
Chosen source: generate output using 'cake build'
Copyright (c) 2011 by Harvest
*/

(function () {
	var $, Chosen, get_side_border_padding, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function (child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

	root = this;

	$ = jQuery;

	$.fn.extend({
		chosen: function (options) {
			if ($.browser.msie && ($.browser.version === "6.0" || ($.browser.version === "7.0" && document.documentMode === 7))) {
				return this;
			}
			return this.each(function (input_field) {
				var $this;
				$this = $(this);
				if (!$this.hasClass("chzn-done")) {
					return $this.data('chosen', new Chosen(this, options));
				}
			});
		}
	});

	Chosen = (function (_super) {

		__extends(Chosen, _super);

		function Chosen() {
			Chosen.__super__.constructor.apply(this, arguments);
		}

		Chosen.prototype.setup = function () {
			this.form_field_jq = $(this.form_field);
			this.current_value = this.form_field_jq.val();
			return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
		};

		Chosen.prototype.finish_setup = function () {
			return this.form_field_jq.addClass("chzn-done");
		};

		Chosen.prototype.set_up_html = function () {
			var container_div, dd_top, dd_width, sf_width;
			this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, '_') : this.generate_field_id();
			this.container_id += "_chzn";
			this.f_width = this.form_field_jq.outerWidth();
			container_div = $("<div />", {
				id: this.container_id,
				"class": "chzn-container" + (this.is_rtl ? ' chzn-rtl' : ''),
				style: 'width: ' + this.f_width + 'px;'
			});
			if (this.is_multiple) {
				container_div.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>');
			} else {
				container_div.html('<a href="javascript:void(0)" class="chzn-single chzn-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /><span></span></div><ul class="chzn-results"></ul></div>');
			}
			this.form_field_jq.hide().after(container_div);
			this.container = $('#' + this.container_id);
			this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single"));
			this.dropdown = this.container.find('div.chzn-drop').first();
			dd_top = this.container.height();
			dd_width = this.f_width - get_side_border_padding(this.dropdown);
			this.dropdown.css({
				"width": dd_width + "px",
				"top": dd_top + "px"
			});
			this.search_field = this.container.find('input').first();
			this.search_results = this.container.find('ul.chzn-results').first();
			this.search_field_scale();
			this.search_no_results = this.container.find('li.no-results').first();
			if (this.is_multiple) {
				this.search_choices = this.container.find('ul.chzn-choices').first();
				this.search_container = this.container.find('li.search-field').first();
			} else {
				this.search_container = this.container.find('div.chzn-search').first();
				this.selected_item = this.container.find('.chzn-single').first();
				sf_width = dd_width - get_side_border_padding(this.search_container) - get_side_border_padding(this.search_field);
				this.search_field.css({
					"width": sf_width + "px"
				});
			}
			this.results_build();
			this.set_tab_index();
			return this.form_field_jq.trigger("liszt:ready", {
				chosen: this
			});
		};

		Chosen.prototype.register_observers = function () {
			var _this = this;
			this.container.mousedown(function (evt) {
				return _this.container_mousedown(evt);
			});
			this.container.mouseup(function (evt) {
				return _this.container_mouseup(evt);
			});
			this.container.mouseenter(function (evt) {
				return _this.mouse_enter(evt);
			});
			this.container.mouseleave(function (evt) {
				return _this.mouse_leave(evt);
			});
			this.search_results.mouseup(function (evt) {
				return _this.search_results_mouseup(evt);
			});
			this.search_results.mouseover(function (evt) {
				return _this.search_results_mouseover(evt);
			});
			this.search_results.mouseout(function (evt) {
				return _this.search_results_mouseout(evt);
			});
			this.form_field_jq.bind("liszt:updated", function (evt) {
				return _this.results_update_field(evt);
			});
			this.form_field_jq.bind("liszt:activate", function (evt) {
				return _this.activate_field(evt);
			});
			this.form_field_jq.bind("liszt:open", function (evt) {
				return _this.container_mousedown(evt);
			});
			this.search_field.blur(function (evt) {
				return _this.input_blur(evt);
			});
			this.search_field.keyup(function (evt) {
				return _this.keyup_checker(evt);
			});
			this.search_field.keydown(function (evt) {
				return _this.keydown_checker(evt);
			});
			this.search_field.focus(function (evt) {
				return _this.input_focus(evt);
			});
			if (this.is_multiple) {
				return this.search_choices.click(function (evt) {
					return _this.choices_click(evt);
				});
			} else {
				return this.container.click(function (evt) {
					return evt.preventDefault();
				});
			}
		};

		Chosen.prototype.search_field_disabled = function () {
			this.is_disabled = this.form_field_jq[0].disabled;
			if (this.is_disabled) {
				this.container.addClass('chzn-disabled');
				this.search_field[0].disabled = true;
				if (!this.is_multiple) {
					this.selected_item.unbind("focus", this.activate_action);
				}
				return this.close_field();
			} else {
				this.container.removeClass('chzn-disabled');
				this.search_field[0].disabled = false;
				if (!this.is_multiple) {
					return this.selected_item.bind("focus", this.activate_action);
				}
			}
		};

		Chosen.prototype.container_mousedown = function (evt) {
			var target_closelink;
			if (!this.is_disabled) {
				target_closelink = evt != null ? ($(evt.target)).hasClass("search-choice-close") : false;
				if (evt && evt.type === "mousedown" && !this.results_showing) {
				    
					evt.stopPropagation();
				}
				if (!this.pending_destroy_click && !target_closelink) {
					if (!this.active_field) {
						if (this.is_multiple) this.search_field.val("");
						$(document).click(this.click_test_action);
						this.results_show();
					} else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chzn-single").length)) {
						evt.preventDefault();
						this.results_toggle();
					}
					return this.activate_field();
				} else {
					return this.pending_destroy_click = false;
				}
			}
		};

		Chosen.prototype.container_mouseup = function (evt) {
			if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
				return this.results_reset(evt);
			}
		};

		Chosen.prototype.blur_test = function (evt) {
			if (!this.active_field && this.container.hasClass("chzn-container-active")) {
				return this.close_field();
			}
		};

		Chosen.prototype.close_field = function () {
		   
		    $(document).unbind("click", this.click_test_action);
		   
			this.active_field = false;
			this.results_hide();
			this.container.removeClass("chzn-container-active");
			this.winnow_results_clear();
			this.clear_backstroke();
			this.show_search_field_default();
			return this.search_field_scale();
		};

		Chosen.prototype.activate_field = function () {
			this.container.addClass("chzn-container-active");
			this.active_field = true;
			this.search_field.val(this.search_field.val());
			return this.search_field.focus();
		};

		Chosen.prototype.test_active_click = function (evt) {
		    if ($(evt.target).parents('#' + this.container_id).length) {
				return this.active_field = true;
			} else {
				return this.close_field();
			}
		};

		Chosen.prototype.results_build = function () {
			var content, data, _i, _len, _ref;
			this.parsing = true;
			this.results_data = root.SelectParser.select_to_array(this.form_field);
			if (this.is_multiple && this.choices > 0) {
				this.search_choices.find("li.search-choice").remove();
				this.choices = 0;
			} else if (!this.is_multiple) {
				this.selected_item.addClass("chzn-default").find("span").text(this.default_text);
				if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
					this.container.addClass("chzn-container-single-nosearch");
				} else {
					this.container.removeClass("chzn-container-single-nosearch");
				}
			}
			content = '';
			_ref = this.results_data;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				data = _ref[_i];
				if (data.group) {
					content += this.result_add_group(data);
				} else if (!data.empty) {
					content += this.result_add_option(data);
					if (data.selected && this.is_multiple) {
						this.choice_build(data);
					} else if (data.selected && !this.is_multiple) {
						this.selected_item.removeClass("chzn-default").find("span").text(data.text);
						if (this.allow_single_deselect) this.single_deselect_control_build();
					}
				}
			}
			this.search_field_disabled();
			this.show_search_field_default();
			this.search_field_scale();
			this.search_results.html(content);
			return this.parsing = false;
		};

		Chosen.prototype.result_add_group = function (group) {
			if (!group.disabled) {
				group.dom_id = this.container_id + "_g_" + group.array_index;
				return '<li id="' + group.dom_id + '" class="group-result">' + $("<div />").text(group.label).html() + '</li>';
			} else {
				return "";
			}
		};

		Chosen.prototype.result_do_highlight = function (el) {
			var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
			if (el.length) {
				this.result_clear_highlight();
				this.result_highlight = el;
				this.result_highlight.addClass("highlighted");
				maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
				visible_top = this.search_results.scrollTop();
				visible_bottom = maxHeight + visible_top;
				high_top = this.result_highlight.position().top + this.search_results.scrollTop();
				high_bottom = high_top + this.result_highlight.outerHeight();
				if (high_bottom >= visible_bottom) {
					return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
				} else if (high_top < visible_top) {
					return this.search_results.scrollTop(high_top);
				}
			}
		};

		Chosen.prototype.result_clear_highlight = function () {
			if (this.result_highlight) this.result_highlight.removeClass("highlighted");
			return this.result_highlight = null;
		};

		Chosen.prototype.results_show = function () {
			var dd_top;
			if (!this.is_multiple) {
				this.selected_item.addClass("chzn-single-with-drop");
				if (this.result_single_selected) {
					this.result_do_highlight(this.result_single_selected);
				}
			} else if (this.max_selected_options <= this.choices) {
				this.form_field_jq.trigger("liszt:maxselected", {
					chosen: this
				});
				return false;
			}
			dd_top = this.is_multiple ? this.container.height() : this.container.height() - 1;
			this.form_field_jq.trigger("liszt:showing_dropdown", {
				chosen: this
			});
			this.dropdown.css({
				"top": dd_top + "px",
				"left": 0
			});
			this.results_showing = true;
			this.search_field.focus();
			this.search_field.val(this.search_field.val());
			return this.winnow_results();
		};

		Chosen.prototype.results_hide = function () {
			if (!this.is_multiple) {
				this.selected_item.removeClass("chzn-single-with-drop");
			}
			this.result_clear_highlight();
			this.form_field_jq.trigger("liszt:hiding_dropdown", {
				chosen: this
			});
			this.dropdown.css({
				"left": "-9000px"
			});
			return this.results_showing = false;
		};

		Chosen.prototype.set_tab_index = function (el) {
			var ti;
			if (this.form_field_jq.attr("tabindex")) {
				ti = this.form_field_jq.attr("tabindex");
				this.form_field_jq.attr("tabindex", -1);
				return this.search_field.attr("tabindex", ti);
			}
		};

		Chosen.prototype.show_search_field_default = function () {
			if (this.is_multiple && this.choices < 1 && !this.active_field) {
				this.search_field.val(this.default_text);
				return this.search_field.addClass("default");
			} else {
				this.search_field.val("");
				return this.search_field.removeClass("default");
			}
		};

		Chosen.prototype.search_results_mouseup = function (evt) {
			var target;
			target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
			if (target.length) {
				this.result_highlight = target;
				this.result_select(evt);
				return this.search_field.focus();
			}
		};

		Chosen.prototype.search_results_mouseover = function (evt) {
			var target;
			target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
			if (target) return this.result_do_highlight(target);
		};

		Chosen.prototype.search_results_mouseout = function (evt) {
			if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
				return this.result_clear_highlight();
			}
		};

		Chosen.prototype.choices_click = function (evt) {
			evt.preventDefault();
			if (this.active_field && !($(evt.target).hasClass("search-choice" || $(evt.target).parents('.search-choice').first)) && !this.results_showing) {
				return this.results_show();
			}
		};

		Chosen.prototype.choice_build = function (item) {
			var choice_id, html, link,
        _this = this;
			if (this.is_multiple && this.max_selected_options <= this.choices) {
				this.form_field_jq.trigger("liszt:maxselected", {
					chosen: this
				});
				return false;
			}
			choice_id = this.container_id + "_c_" + item.array_index;
			this.choices += 1;
			if (item.disabled) {
				html = '<li class="search-choice search-choice-disabled" id="' + choice_id + '"><span>' + item.html + '</span></li>';
			} else {
				html = '<li class="search-choice" id="' + choice_id + '"><span>' + item.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + item.array_index + '"></a></li>';
			}
			this.search_container.before(html);
			link = $('#' + choice_id).find("a").first();
			return link.click(function (evt) {
				return _this.choice_destroy_link_click(evt);
			});
		};

		Chosen.prototype.choice_destroy_link_click = function (evt) {
			evt.preventDefault();
			if (!this.is_disabled) {
				this.pending_destroy_click = true;
				return this.choice_destroy($(evt.target));
			} else {
				return evt.stopPropagation;
			}
		};

		Chosen.prototype.choice_destroy = function (link) {
			if (this.result_deselect(link.attr("rel"))) {
				this.choices -= 1;
				this.show_search_field_default();
				if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
					this.results_hide();
				}
				return link.parents('li').first().remove();
			}
		};

		Chosen.prototype.results_reset = function () {
			this.form_field.options[0].selected = true;
			this.selected_item.find("span").text(this.default_text);
			if (!this.is_multiple) this.selected_item.addClass("chzn-default");
			this.show_search_field_default();
			this.results_reset_cleanup();
			this.form_field_jq.trigger("change");
			if (this.active_field) return this.results_hide();
		};

		Chosen.prototype.results_reset_cleanup = function () {
			this.current_value = this.form_field_jq.val();
			return this.selected_item.find("abbr").remove();
		};

		Chosen.prototype.result_select = function (evt) {
			var high, high_id, item, position;
			if (this.result_highlight) {
				high = this.result_highlight;
				high_id = high.attr("id");
				this.result_clear_highlight();
				if (this.is_multiple) {
					this.result_deactivate(high);
				} else {
					this.search_results.find(".result-selected").removeClass("result-selected");
					this.result_single_selected = high;
					this.selected_item.removeClass("chzn-default");
				}
				high.addClass("result-selected");
				position = high_id.substr(high_id.lastIndexOf("_") + 1);
				item = this.results_data[position];
				item.selected = true;
				this.form_field.options[item.options_index].selected = true;
				if (this.is_multiple) {
					this.choice_build(item);
				} else {
					this.selected_item.find("span").first().text(item.text);
					if (this.allow_single_deselect) this.single_deselect_control_build();
				}
				if (!(evt.metaKey && this.is_multiple)) this.results_hide();
				this.search_field.val("");
				if (this.is_multiple || this.form_field_jq.val() !== this.current_value) {
					this.form_field_jq.trigger("change", {
						'selected': this.form_field.options[item.options_index].value
					});
				}
				this.current_value = this.form_field_jq.val();
				return this.search_field_scale();
			}
		};

		Chosen.prototype.result_activate = function (el) {
			return el.addClass("active-result");
		};

		Chosen.prototype.result_deactivate = function (el) {
			return el.removeClass("active-result");
		};

		Chosen.prototype.result_deselect = function (pos) {
			var result, result_data;
			result_data = this.results_data[pos];
			if (!this.form_field.options[result_data.options_index].disabled) {
				result_data.selected = false;
				this.form_field.options[result_data.options_index].selected = false;
				result = $("#" + this.container_id + "_o_" + pos);
				result.removeClass("result-selected").addClass("active-result").show();
				this.result_clear_highlight();
				this.winnow_results();
				this.form_field_jq.trigger("change", {
					deselected: this.form_field.options[result_data.options_index].value
				});
				this.search_field_scale();
				return true;
			} else {
				return false;
			}
		};

		Chosen.prototype.single_deselect_control_build = function () {
			if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
				return this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
			}
		};

		Chosen.prototype.winnow_results = function () {
			var found, option, part, parts, regex, regexAnchor, result, result_id, results, searchText, startpos, text, zregex, _i, _j, _len, _len2, _ref;
			this.no_results_clear();
			results = 0;
			searchText = this.search_field.val() === this.default_text ? "" : $('<div/>').text($.trim(this.search_field.val())).html();
			regexAnchor = this.search_contains ? "" : "^";
			regex = new RegExp(regexAnchor + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
			zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
			_ref = this.results_data;
			for (_i = 0, _len = _ref.length; _i < _len; _i++) {
				option = _ref[_i];
				if (!option.disabled && !option.empty) {
					if (option.group) {
						$('#' + option.dom_id).css('display', 'none');
					} else if (!(this.is_multiple && option.selected)) {
						found = false;
						result_id = option.dom_id;
						result = $("#" + result_id);
						if (regex.test(option.html)) {
							found = true;
							results += 1;
						} else if (option.html.indexOf(" ") >= 0 || option.html.indexOf("[") === 0) {
							parts = option.html.replace(/\[|\]/g, "").split(" ");
							if (parts.length) {
								for (_j = 0, _len2 = parts.length; _j < _len2; _j++) {
									part = parts[_j];
									if (regex.test(part)) {
										found = true;
										results += 1;
									}
								}
							}
						}
						if (found) {
							if (searchText.length) {
								startpos = option.html.search(zregex);
								text = option.html.substr(0, startpos + searchText.length) + '</em>' + option.html.substr(startpos + searchText.length);
								text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
							} else {
								text = option.html;
							}
							result.html(text);
							this.result_activate(result);
							if (option.group_array_index != null) {
								$("#" + this.results_data[option.group_array_index].dom_id).css('display', 'list-item');
							}
						} else {
							if (this.result_highlight && result_id === this.result_highlight.attr('id')) {
								this.result_clear_highlight();
							}
							this.result_deactivate(result);
						}
					}
				}
			}
			if (results < 1 && searchText.length) {
				return this.no_results(searchText);
			} else {
				return this.winnow_results_set_highlight();
			}
		};

		Chosen.prototype.winnow_results_clear = function () {
			var li, lis, _i, _len, _results;
			this.search_field.val("");
			lis = this.search_results.find("li");
			_results = [];
			for (_i = 0, _len = lis.length; _i < _len; _i++) {
				li = lis[_i];
				li = $(li);
				if (li.hasClass("group-result")) {
					_results.push(li.css('display', 'auto'));
				} else if (!this.is_multiple || !li.hasClass("result-selected")) {
					_results.push(this.result_activate(li));
				} else {
					_results.push(void 0);
				}
			}
			return _results;
		};

		Chosen.prototype.winnow_results_set_highlight = function () {
			var do_high, selected_results;
			if (!this.result_highlight) {
				selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
				do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
				if (do_high != null) return this.result_do_highlight(do_high);
			}
		};

		Chosen.prototype.no_results = function (terms) {
			var no_results_html;
			no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
			no_results_html.find("span").first().html(terms);
			return this.search_results.append(no_results_html);
		};

		Chosen.prototype.no_results_clear = function () {
			return this.search_results.find(".no-results").remove();
		};

		Chosen.prototype.keydown_arrow = function () {
			var first_active, next_sib;
			if (!this.result_highlight) {
				first_active = this.search_results.find("li.active-result").first();
				if (first_active) this.result_do_highlight($(first_active));
			} else if (this.results_showing) {
				next_sib = this.result_highlight.nextAll("li.active-result").first();
				if (next_sib) this.result_do_highlight(next_sib);
			}
			if (!this.results_showing) return this.results_show();
		};

		Chosen.prototype.keyup_arrow = function () {
			var prev_sibs;
			if (!this.results_showing && !this.is_multiple) {
				return this.results_show();
			} else if (this.result_highlight) {
				prev_sibs = this.result_highlight.prevAll("li.active-result");
				if (prev_sibs.length) {
					return this.result_do_highlight(prev_sibs.first());
				} else {
					if (this.choices > 0) this.results_hide();
					return this.result_clear_highlight();
				}
			}
		};

		Chosen.prototype.keydown_backstroke = function () {
			var next_available_destroy;
			if (this.pending_backstroke) {
				this.choice_destroy(this.pending_backstroke.find("a").first());
				return this.clear_backstroke();
			} else {
				next_available_destroy = this.search_container.siblings("li.search-choice").last();
				if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
					this.pending_backstroke = next_available_destroy;
					if (this.single_backstroke_delete) {
						return this.keydown_backstroke();
					} else {
						return this.pending_backstroke.addClass("search-choice-focus");
					}
				}
			}
		};

		Chosen.prototype.clear_backstroke = function () {
			if (this.pending_backstroke) {
				this.pending_backstroke.removeClass("search-choice-focus");
			}
			return this.pending_backstroke = null;
		};

		Chosen.prototype.keydown_checker = function (evt) {
			var stroke, _ref;
			stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
			this.search_field_scale();
			if (stroke !== 8 && this.pending_backstroke) this.clear_backstroke();
			switch (stroke) {
				case 8:
					this.backstroke_length = this.search_field.val().length;
					break;
				case 9:
					if (this.results_showing && !this.is_multiple) this.result_select(evt);
					this.mouse_on_container = false;
					break;
				case 13:
					evt.preventDefault();
					break;
				case 38:
					evt.preventDefault();
					this.keyup_arrow();
					break;
				case 40:
					this.keydown_arrow();
					break;
			}
		};

		Chosen.prototype.search_field_scale = function () {
			var dd_top, div, h, style, style_block, styles, w, _i, _len;
			if (this.is_multiple) {
				h = 0;
				w = 0;
				style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
				styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
				for (_i = 0, _len = styles.length; _i < _len; _i++) {
					style = styles[_i];
					style_block += style + ":" + this.search_field.css(style) + ";";
				}
				div = $('<div />', {
					'style': style_block
				});
				div.text(this.search_field.val());
				$('body').append(div);
				w = div.width() + 25;
				div.remove();
				if (w > this.f_width - 10) w = this.f_width - 10;
				this.search_field.css({
					'width': w + 'px'
				});
				dd_top = this.container.height();
				return this.dropdown.css({
					"top": dd_top + "px"
				});
			}
		};

		Chosen.prototype.generate_random_id = function () {
			var string;
			string = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
			while ($("#" + string).length > 0) {
				string += this.generate_random_char();
			}
			return string;
		};

		return Chosen;

	})(AbstractChosen);

	get_side_border_padding = function (elmt) {
		var side_border_padding;
		return side_border_padding = elmt.outerWidth() - elmt.width();
	};

	root.get_side_border_padding = get_side_border_padding;

}).call(this);

/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />



//JQuery UI jSelect Plugin
/*
* jQuery UI jSelect
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*	chosee.jquery.js
*/


/*
* Author: Leidc
* Start date: 2012-10-22 
* Description: 普通的select
*/

/*items:		[{ value: "China", text: "中国" }, value:表示实际值  text：表示文本显示的值  selected 表示是否选中
*			{ value: " Japan", text: "日本" },
*			{ value: "America", text: "美国",selected: true },
*			{ value: "Korea  ", text: "朝鲜" },
*			{ value: "Corea  ", text: "韩国" }
*			]
*		
*model:single（multiple） model表示是单选框还是多选框 single表示单选  multiple表示多选
*
*placeholder: "请选择..."  placeholder表示没有选择前的提示语 默认为 请选择...	
*	
*width:150px   width表示select选择框的宽度 默认为150px
*
*onSelectChange:null  onSelectChange表示 选项的点击事件
*/

(function ($, undefined) {
	$.widget("jui.jSelect",
	{
		options: {
			items: null,
			model: "single",
			placeholder: "请选择",
			width: "150px",
			onSelectChange: null
		},

		_create: function () {
			$(this.element).empty();
			var self = this,
			o = this.options;
			var tagId = this.element.attr("id");/*目标的id*/
			var width, palceHoler;
			var selectHtml = '';
			var selectId = tagId + "_select";
			var flag = false;

			if (o.items != null) {

				if (o.model != "multiple") { /*多选功能的select*/
					selectHtml += "<select id=" + selectId + " data-placeholder=" + o.placeholder + " class='chzn-select' style='width:" + o.width + ";' tabindex='2'><option></option>";
				} else {
					flag = true;
					selectHtml += "<select id=" + selectId + " data-placeholder=" + o.placeholder + " class='chzn-select' multiple style='width:" + o.width + ";' tabindex='4'><option></option>";
				}
				for (var i = 0; i < o.items.length; i++) {
					if (o.items[i].selected) {
						selectHtml += "<option selected value=" + o.items[i].value + ">" + o.items[i].text +"</option>";
					} else {
					    selectHtml += "<option value=" + o.items[i].value + ">" + o.items[i].text  + "</option>";
					}

				}
				selectHtml += "</select>";
				$("#" + tagId).append(selectHtml);
				$(".chzn-select").chosen();
			
				
				$("#" + selectId).change(function () {
				    if (flag) {
				        var selectList = [];
				      
					    $("option:selected",this).each(function(){
					        var tempObject = new Object();
					        tempObject.value = $(this).val();
					        tempObject.text = $(this).text();
					        selectList.push(tempObject);
				        });
				 
					    //alert($($(this).find("option:selected")[0]).text());
                        //var textList = 
						////var textList = $(this).find("option:selected").text().substring(0, $(this).find("option:selected").text().length).split('　');
						//var valueList = $(this).val();

						//if (valueList != null) {
						//	for (var i = 0; i < valueList.length ; i++) {
						//	    var tempObject = new Object();
						//		tempObject.value = valueList[i];
						//		tempObject.text = textList[i];
						//		selectList.push(tempObject);
						//	}
						//} else {
						//	selectList = null;
						//}

						if (self.options.onSelectChange != null) {
						    self.options.onSelectChange(selectList);
						}
					


					} else {
					    //alert($(this).val());
					    if(self.options.onSelectChange!=null){
					        self.options.onSelectChange($(this).val(), $(this).find("option:selected").text());
					    }
					
					}
				});

			} else {

				$("#" + tagId).append("<span style='color:red;'>错误！！！请检查数据源</span>");

			}


		},
		getSelectValueText: function () {
			
			var self = this,
			o = this.options;
			var tagId = this.element.attr("id");/*目标的id*/
			var selectId = tagId + "_select";/*content*/
		
			if (o.model == "multiple") {
			    var list = [];


			    $("option:selected", $("#" + selectId)).each(function () {
			        var tempObject = new Object();
			        tempObject.value = $(this).val();
			        tempObject.text = $(this).text();
			        list.push(tempObject);
			    });

				//var textList = $("#" + selectId).find("option:selected").text().substring(0, $("#" + selectId).find("option:selected").text().length).split('　');
				//var valueList = $("#" + selectId).val();
				//if (valueList != null) {
				//	for (var i = 0; i < valueList.length ; i++) {
				//	    var tempObject = {};
				//		tempObject.value = valueList[i];
				//		tempObject.text = textList[i];
				//		list.push(tempObject);
				//	}
				//} else {
				//	list = null;
				//}
				
			
				return list;
				
			} else {
				
			    var selectObject = {};
				selectObject.value = $("#"+selectId).val();
				selectObject.text = $("#"+selectId).find("option:selected").text().substring(0, $("#" + selectId).find("option:selected").text().length-1);
				return selectObject;
			}
			
		},


		_setOption: function (key, value) {
			if (value !== undefined || value != null)
				this.options[key] = value;
			else
			    return this.options[key];
			this._create();
		},

		_setOptions: function (options) {
		    var self = this;
			$.each(options, function (key, value) {
			    self._setOption(key, value);
			});
		},


		_destroy: function () {
			$(this.element).empty();
			$(this).empty();

			return this;
		}
	});

	$.extend($.jui.jtip, {
		version: "0.1.0"
	});
})(jQuery);

/// <reference path="../../Views/Home/checkTable.cshtml" />
/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI jsortSelect Plugin
/*
* jQuery UI jsortSelect
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Leidc
* Start date: 2012-10-22 
* Description: 排序功能的select
*/

//items: [{ sortColumn: "Id", text: "编号" }, 
//				{ sortColumn: "Age", text: "年龄",sortType: "desc" }, /sort值区分大小写/
//				{ sortColumn: "finishData", text: "完成日期", sortType: "asc" },
//				{ sortColumn: "size", text: "大小", sortType: "desc" }
/*
* options:
*		items ：
*				sortColumn: 表示排序字段的名称  text: 字段显示的值 sortType:排序方式
*
*		onSortChange:回调函数 项选择之后触发
*       sortItem:{sortColumn:"大小",sortType:"desc"}
*		
* event
*		getSelectedItem：
*		
*	    
*/

(function ($, undefined) {
		$.widget("jui.jsortSelect",
		{
			options: {
				items: null,
				onSortChange: null,
				sortItem: null
			},
			_create: function () {
			    $(this.element).empty();
				var self = this,
				o = this.options;
				var tagId = this.element.attr("id");/*目标的id*/
				
				var titleId = tagId + "-title"; /*title*/
				var selectId = tagId + "-selectId";/*content*/
				var showParentUl = tagId + "-showParentUl";
				var showChildUl = tagId + "-showChildUl";
				var defaultDataSortType, defaultDataSortColumn, defaultDataContent; /*默认排序 实际值 显示值*/
				
				if (o.items != null) {
				    defaultDataSortType = (o.items[0]["sortType"] != "desc") ? "asc" : "desc";
					defaultDataSortColumn = o.items[0]["sortColumn"];
					defaultDataContent = o.items[0]["text"];
					var flag = false;
					for (var i = 0; i < o.items.length ; i++) {
					    if (o.sortItem != null && o.items[i]["sortColumn"] == o.sortItem.sortColumn) {
						    defaultDataSortType = (o.sortItem.sortType!= "desc") ? "asc" : "desc";
							defaultDataSortColumn = o.items[i]["sortColumn"];
							defaultDataContent = o.items[i]["text"];
							flag = true;
							break;
						}
					}

				
					$("#" + tagId).append("<span id=" + titleId + " style='cursor:pointer;text-align:right;display:-moz-inline-box; display:inline-block; width:140px;'>排序方式 : " +
						"<span id=" + selectId + " style='cursor: pointer' data-sortColumn=" + defaultDataSortColumn + " data-sortType=" + defaultDataSortType + ">" + defaultDataContent + "</span>" +
					"<span class='jui-jsortSelect-downBtn'>&nbsp;&nbsp;</span></span>");
					var ulHtml = "<ul id=" + showParentUl + " class='jui-jsortSelect-ul'>";
					for (var i = 0; i < o.items.length; i++) {
					    var dataSortType = (o.items[i]["sortType"] != "desc") ? "asc" : "desc";
						if (flag) {
						    if (o.sortItem.sortColumn != null && o.items[i]["sortColumn"] == o.sortItem.sortColumn) {

							    ulHtml += "<li data-sortColumn=" + o.items[i]["sortColumn"] + " data-sortType=" + dataSortType + " class='action'><i class='action' /><span>" + o.items[i]["text"] + "</span> </li>";
							} else {
							    ulHtml += "<li data-sortColumn=" + o.items[i]["sortColumn"] + " data-sortType=" + dataSortType + "><i /><span>" + o.items[i]["text"] + "</span></li>";
							}
						
						}else{
							if (i == 0) {
							    ulHtml += "<li data-sortColumn=" + o.items[0]["sortColumn"] + " data-sortType=" + dataSortType + " class='action'><i class='action' /><span>" + o.items[0]["text"] + "</span> </li>";
							} else {
							    ulHtml += "<li data-sortColumn=" + o.items[i]["sortColumn"] + " data-sortType=" + dataSortType + "><i /><span>" + o.items[i]["text"] + "</span> </li>";
							}
						}
					}
					if (defaultDataSortType == "asc") {
					    ulHtml += "<div><hr style='margin:12px;cursor:default;'/><ul id=" + showChildUl + "><li class='action'><i class='action' /><span>升序</span></li><li><i /><span>降序</span></li></ul></div></ul>"
					}else{
					    ulHtml += "<div><hr style='margin:12px;cursor:default;'/><ul id=" + showChildUl + "><li ><i /><span>升序<span></li><li class='action'><i class='action' /><span>降序</span></li></ul></div></ul>"
					}
                 
					
		$("body").append(ulHtml); /*body之前追加要显示的ul部分*/

		//鼠标点击展开事件
		$("#" + titleId).click(function (event) {
			//取消事件冒泡
		    event.stopPropagation();
		   $("#"+showParentUl).slideToggle("fast");
		   
		});

		//里面的点击事件
		$("#" + showParentUl + " > li,#" + showChildUl + " > li").click(function (event) {
		  
			$(this).siblings().removeClass("action");
			$(this).addClass("action");
			$(this).siblings().find("i").removeClass("action");
			$(this).find("i").addClass("action");

			if ($("#" + showParentUl + " > li").hasClass("action") && $("#" + showChildUl + " > li").hasClass("action")) {
			   
			    switch ($(this).find("span").text()) {
                  
					case "降序":
					    $("#" + selectId).attr("data-sortType", "desc");
						break;
					case "升序":
					    $("#" + selectId).attr("data-sortType", 'asc');
						break;
					default:
					    if ($(this).attr("data-sortType") == "desc") {
							$("#" + showChildUl + " > li").siblings().removeClass("action");
							$("#" + showChildUl + " > li").eq(1).addClass("action");
							$("#" + showChildUl + " > li").siblings().find("i").removeClass("action");
							$("#" + showChildUl + " > li").eq(1).find("i").addClass("action");
							$("#" + selectId).attr("data-sortType", "desc");
						} else {
							$("#" + showChildUl + " > li").siblings().removeClass("action");
							$("#" + showChildUl + " > li").eq(0).addClass("action");
							$("#" + showChildUl + " > li").siblings().find("i").removeClass("action");
							$("#" + showChildUl + " > li").eq(0).find("i").addClass("action");
							$("#" + selectId).attr("data-sortType", 'asc');
						}
						$("#" + selectId).html($(this).html()).attr("data-sortColumn", $(this).attr("data-sortColumn"));
						break;
				}
				$("#" + showParentUl).slideToggle("fast");
				if (o.onSortChange != null) {
				   
				    self.options.onSortChange($("#" + selectId).attr("data-sortColumn"), $("#" + selectId).find("span").text(), $("#" + selectId).attr("data-sortType"));
			}
			}
			event.stopPropagation();

		});
		$(document).bind("click", function (e) {
		    if ($(e.target).parent("#" + showParentUl).length == 0) {
		        if (!$("#" + showParentUl).is(":hidden")) {
		        $("#" + showParentUl).slideUp("fast");  
		        }
		    } 		    });
		$("#" + showParentUl).position({
			of: $("#" + titleId),
			my: "left top",
			at: "left bottom",
			offset: '0 0'
		}).css("display", "none");

		} else {
					$("#" + tagId).append("<span style='color:red;'>错误！！！请检查数据源</span>");
				
		}
			},
		getSelectedItem: function () {
			var self = this,
			o = this.options;
			var tagId = this.element.attr("id");/*目标的id*/
			var selectId = tagId + "-selectId";/*content*/
			var selectObject = Object;
			selectObject.sortColumn = $("#" + selectId).attr("data-sortColumn");
			selectObject.text = $("#" + selectId).text();
			selectObject.sortType = $("#" + selectId).attr("data-sortType");
			return selectObject;
		},

		_setOption: function (key, value) {
		    if (value !== undefined || value != null){
		        this.options[key] = value;
		       
		    } else{     
		        return this.options[key];
		    }
		},
		
		_setOptions: function (options) {
		    var self = this, refresh = false;
		    $.each(options, function (key, value) {
		        self._setOption(key, value);
		        if (key == "sortItem") {
                    refresh = true;
		        }
		    });
		    if (refresh) {
			    o = this.options;
		        var tagId = this.element.attr("id");/*目标的id*/
		        var selectId = tagId + "-selectId";/*content*/                                    //改效果
		        var showParentUl = tagId + "-showParentUl";
		        var showChildUl = tagId + "-showChildUl";
		        $("#" + selectId).attr("data-sortColumn", o.sortItem.sortColumn);
		        $("#" + selectId).attr("data-sortType", o.sortItem.sortType);
		        for (var i = 0; i < o.items.length; i++) {
		            if (o.items[i]["sortColumn"] == o.sortItem.sortColumn) {
		                $("#" + selectId).html(o.items[i]["text"]);
		                break;
		            }
		        }
		        $("#" + showParentUl + ">li").each(function () {
		            $(this).find("i").removeClass("action");
		            if ($(this).attr("data-sortColumn") == o.sortItem.sortColumn) {
		                $(this).attr("data-sortType", o.sortItem.sortType);
                        $(this).find("i").addClass("action")
		            }
		        });
		        $("#" + showChildUl + " > li").find("i").removeClass("action");
		        if (o.sortItem.sortType == "desc") {
		            $("#" + showChildUl + " > li").eq(1).find("i").addClass("action");
		        } else {
		            $("#" + showChildUl + " > li").eq(0).find("i").addClass("action");
		        }

	
		   
		    }
		   
		    
		},
		
		
		_destroy: function () {
			$(this.element).empty();
			$(this).empty();
		
			return this;
		}
		});
		
		$.extend($.jui.jtip, {
			version: "0.1.0"
		});
		})(jQuery);
		
		
/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI datapager Plugin
/*
* jQuery UI datapager 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Jasper
* Create date: 2012-09-25 15:00
* Description: 翻页控件
* PS: 特定样式
*/

/*
* items:
*		菜单对象列表：{ top: 20, text: "这是一个空的LeftMenu", isSelect: true }
*		top: 上边缘边距
*		text：显示文本内容
*		isSelect：是否选中
* onClick(index, text):
*		点击菜单时的事件
*		index：点击菜单所在索引，0开始
*		text：点击菜单的内容
*/


(function ($, undefined)
{
	$.widget("jui.jdatapager",
	{
		options: {
			pageIndex: 1,
			pageSize: 15,
			recordCount: 0,
			noResultsText: "对不起，没有找到您的搜索结果。",
			onPageChange: null
		},

		_create: function ()
		{
			this._jdatapagerify();
		},

		_jdatapagerify: function ()
		{
			$(this.element).empty();
			var self = this,
				o = this.options,
				pageIndex = parseInt(o.pageIndex + ""),
				pageSize = parseInt(o.pageSize + ""),
				recordCount = parseInt(o.recordCount + "");

			if (isNaN(pageIndex) || pageIndex <= 0)
			{
				pageIndex = o.pageIndex = 1;
			}
			if (isNaN(pageSize) || pageSize <= 0)
			{
				pageSize = o.pageSize = 15;
			}
			if (isNaN(recordCount) || recordCount <= 0)
			{
				recordCount = o.recordCount = 0;
			}

			var pageMax = Math.ceil(recordCount / pageSize);

			if (isNaN(pageMax) || pageMax <= 0)
			{
				pageMax = 1;
			}
			if (pageIndex > pageMax)
			{
				pageIndex = o.pageIndex = pageMax;
			}

			var AddButton = function (pageIndex, text, type)
			{
				if (type)
					return '<span class="jui-datapager-item-' + type + '" data-pageIndex="' + pageIndex + '">' + text + '</span>';
				else
					return '<span class="jui-datapager-item" data-pageIndex="' + pageIndex + '">' + text + '</span>';
			};

			if (recordCount > 0)
			{
				/*首页，上一页*/
				if (pageIndex > 1)
				{
					$(self.element).append(AddButton(1, "首页"));
					$(self.element).append(AddButton(pageIndex - 1, "&lt;上一页"));
				}
				else
				{
					$(self.element).append(AddButton(1, "首页", "disabled"));
					$(self.element).append(AddButton(pageIndex - 1, "&lt;上一页", "disabled"));
				}
				/*中间的数字页*/
				//小于等于11个按钮，全部输出
				if (pageMax <= 11)
				{
					for (var i = 1; i <= pageMax; i++)
					{
						$(self.element).append(AddButton(i, i, i == pageIndex ? "active" : null));
					}
				}
					//大于11个按钮，显示1
				else if (pageIndex < 6)
				{
					for (var i = 1; i <= 11; i++)
					{
						$(self.element).append(AddButton(i, i, i == pageIndex ? "active" : null));
					}
				}
					//大于11个按钮，显示pageMax
				else if (pageIndex > pageMax - 5)
				{
					for (var i = pageMax - 10; i <= pageMax; i++)
					{
						$(self.element).append(AddButton(i, i, i == pageIndex ? "active" : null));
					}
				}
				else
				{
					for (var i = pageIndex - 5; i <= pageIndex + 5; i++)
					{
						$(self.element).append(AddButton(i, i, i == pageIndex ? "active" : null));
					}
				}
				/*下一页，尾页*/
				if (pageIndex < pageMax)
				{
					$(self.element).append(AddButton(pageIndex + 1, "下一页&gt;"));
					$(self.element).append(AddButton(pageMax, "尾页"));
				}
				else
				{
					$(self.element).append(AddButton(pageIndex + 1, "下一页&gt;", "disabled"));
					$(self.element).append(AddButton(pageMax, "尾页", "disabled"));
				}

				/*样式*/
				$(self.element).removeClass("ui-state-error").addClass("jui-datapager ui-helper-clearfix");

				/*事件*/
				$("span.jui-datapager-item", $(self.element)).click(function ()
				{
					self._setOptions({ "pageIndex": $(this).attr("data-pageIndex") });
				});
			}
			else
			{
				$(self.element).removeClass("jui-datapager").remove("ui-helper-clearfix").addClass("ui-state-error");
				$(self.element).append('<span class="ui-icon ui-icon-alert" style="float: left; margin: 3px 3px 0px 3px;"></span><p>' + o.noResultsText + '</p>');
			}
		},

		_setOption: function (key, value)
		{
			if (value !== undefined || value != null)
				this.options[key] = value;
			else
				return this.options[key];
		},

		_setOptions: function (options)
		{
			var self = this, refresh = false;

			$.each(options, function (key, value)
			{
				self._setOption(key, value);
				if (key == "pageIndex" || key == "pageSize" || key == "recordCount")
					refresh = true;
			});
			if (refresh && self.options.onPageChange != null)
				self.options.onPageChange(self.options);
			self._jdatapagerify();
		},

		_destroy: function ()
		{
			$(this.element).empty();
			$(this).empty();

			return this;
		}
	});

	$.extend($.jui.jdatapager, {
		version: "0.1.0"
	});
})(jQuery);

/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI headMenu Plugin
/*
* jQuery UI headMenu 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: ZhangJian
* Create date: 2012年9月19日 10:33:31
* Description: 导航菜单(二级菜单) 
* PS: 特定皮肤
*/

/*
* data:[item,item....]
* item:
*       name:菜单各项显示内容
*       id:选项id
*       position:定位图片的坐标字符串
*       image:给选项前添加小图标(注：图标宽高各为27px)
*       line:设置选项间距为空格或分割线
*       children:设置是否有二级菜单
*       onItemClick(id, name):
*		    点击菜单时的事件
*		    id：点击项的id
*		    name：点击项的文本内容
*/

(function ($, undefined) {
    $.widget("jui.jheadMenu",
	{
	    // default options
	    options: {
	        data: []
            , onItemClick: null
	    },

	    _create: function () {
	        this._jdatapagerify();
	    },

	    _jdatapagerify:function(){	        
	        var self = this, o = this.options,
	        e = $(this.element);
	        e.empty();
	        var eid= $(this.element).attr("id");
	        var data = o.data;
	        e.addClass('jui-headMenu').empty().append("<ul id='" + eid + "_ul' class='jui-headMenu-ju'></ul>").bind("selectstart", function () { return false; });
	        for (var i = 0; i < data.length; i++) {
	            var id = data[i]["id"];
	            if (id == "" || id == null) {
	                id = i;
	            }
	            var name = data[i]["name"],
	                image = data[i]["image"],
	                children = data[i]["children"],
	                hline = data[i]["line"],
	                position = data[i]["position"];
	            if (image != null && image != "") {
                    $("#" + eid + "_ul").append("<li id='" + eid + "_" + id + "'><span style='display:none;'>"+id+"</span><a>"
                        + "<span class='jui-headMenu-las1'> <span class='jui-headMenu-lass'> <span class='jui-headMenu-lass_endicon'>" +
                        "<span style='width:27px;height:27px;float:left;position:relative;top:4px;background-image:url(" + image + ");background-position:" + position + ";' ></span></span> " + name + "</span> </span>"
                        + "</a></li>");
	            } else {
	                $("#" + eid + "_ul").append("<li id='" + eid + "_" + id + "'><span style='display:none;'>" + id + "</span><a>"
                        + "<span class='jui-headMenu-las1'> <span class='jui-headMenu-lass'> <span class='jui-headMenu-lass_endicon'><span style='height:27px;float:left;position:relative;top:4px;'></span></span> " + name + "</span> </span>"
                        + "</a></li>");
	            }
	            var lw = 0;
	            if (children != null && children.length) {
	                $("#" + eid + "_" + id).append("<ul class='jui-headMenu-u1' id='u" + eid + "_" + id + "'></ul>"); //二级菜单
	                for (var j = 0; j < children.length; j++) {
	                    var uid = children[j]["id"];
	                    if (uid == "" || uid == null) {
	                        uid = i+"_"+j;
	                    }
	                    var uname = children[j]["name"];
	                    var uline = children[j]["line"];
	                    $("#u" + eid + "_" + id).append("<li id='" + eid +"_"+ uid + "'><span style='display:none;'>" + uid + "</span><a><span>" + uname + "</span></a></li>");
	                    if (uline == true) {
	                        $("#u" + eid + "_" + id).find("li").eq(j).append("<span class='jui-headMenu-solid'><span style='border-bottom:1px solid #666;display: block;'></span> </span>");
	                    }
	                    lw = $("#" + eid + "_" + id).width();
	                    if (lw < 50) {
	                        $("#u" + eid + "_" + id).css("width", 2 * lw+100);//ul
	                    } else {
	                        $("#u" + eid + "_" + id).css("width", 2 * lw);//ul
	                    }
	                    $("#" + eid + "_" + id).width(lw);//li

	                    if (i == data.length - 1) {
	                        $("#" + eid + "_" + id).children("ul").css({ "left": -lw + 12 + "px" });
	                    }
	                }
	            }
	            if (hline == true) {
	                $("#" + eid + "_" + id).after("<span class='jui-headMenu-vsolid '></span>");
	            }
	        }
	        e.find("li").has("ul").find(".jui-headMenu-lass").after("<span class='jui-headMenu-endImg'></span>");

	        e.children("ul").children("li").click(function () {
	            e.find("li").not(this).has("ul:visible").children("ul").slideUp("fast");
	            $(this).children("ul").slideToggle("fast");
	        });
	        e.children("ul").children("li").mousedown(function () {
	            e.find("li").removeClass("jui-headMenu-clicked");
	            e.find("li").children("a").removeClass("jui-headMenu-clicked");
	            $(this).addClass("jui-headMenu-clicked");
	            $(this).children("a").addClass("jui-headMenu-clicked");
	            $(this).mouseup(function () {
	                $(this).removeClass("jui-headMenu-clicked");
	                $(this).children("a").removeClass("jui-headMenu-clicked");
	            });	       
	        });

	        e.find("li").bind("click", function () {
	            if ($(this).find(".jui-headMenu-endImg").length == 0) {
	                self.options.onItemClick($(this).children("span").text().trim(), $(this).children("a").text().trim());
	            }
	        });

	        $(document).bind("mouseup", function (evt) {
	            if ($(evt.target).parents('#' + eid).length == 0) {
	                e.find("li").has("ul:visible").children("ul").slideUp("fast");
	                e.find("li").removeClass("jui-headMenu-clicked");
	                e.find("li").children("a").removeClass("jui-headMenu-clicked");
	            }
	        })
	        //当菜单项中无文字而只有下拉图标时候，调整下拉箭头样式
	        e.find("li").has("ul").find(".jui-headMenu-lass").each(function () {
	            var t = $(this).text();
	            var img = $(this).next();
	            var ul = $(this).parent().parent().next();
	            var li = $(this).parent("li");
	            if (t.trim() == "" || t.trim() == null) {
	                $(this).remove();
	                img.css({ "top": "12px", "left": "6px" });
	                ul.css({ "top": "19px" });
	            }
	        });
	        $(".jui-headMenu-ju").find("li").has("ul").addClass("jui-headMenu-ju_li");

	        $(".jui-headMenu-solid").click(function (event) {
	            event.stopPropagation();	            
	        });


	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	    },

	    _setOptions: function (options) {
	        $.each(options, function (key, value) {
	            this._setOption(key, value);
	        });
	        //self.options.onItemClick(options);
	        this._jdatapagerify();
	    },

	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();
	        return this;
	    }
	});

    $.extend($.jui.jheadMenu, {
        version: "0.1.0"
    });
})(jQuery);

/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI leftMenu Plugin
/*
* jQuery UI leftMenu 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: Jasper
* Create date: 2012-09-11 14:30
* Description: 左边菜单栏(单级菜单) 
* PS: 特定皮肤
*/

/*
* items:
*		菜单对象列表：{ top: 20, text: "这是一个空的LeftMenu", isSelect: true }
*		top: 上边缘边距
*		text：显示文本内容
*		isSelect：是否选中
* onClick(index, text):
*		点击菜单时的事件
*		index：点击菜单所在索引，0开始
*		text：点击菜单的内容
*/

(function ($, undefined)
{
	$.widget("jui.jleftMenu",
	{
		// default options
		options: {
			items: [],
			onClick: null
		},

		_create: function ()
		{
			$(this.element).empty();
			var self = this,
				o = this.options;

			$(this.element).addClass("jui-leftMenu")
			for (var i = 0; i < o.items.length; i++)
			{
				var item = $("<div>").addClass("jui-leftMenu-item");
				if (o.items[i].isSelect != null && o.items[i].isSelect)
					item.addClass("jui-leftMenu-item-active");
				if (o.items[i].top != null)
					item.css("margin-top", o.items[i].top);
				if(o.items[i].text != null)
					item.text(o.items[i].text);
				if (o.onClick != null)
				{
					(function ()
					{
						var _index = i;
						var _text = o.items[_index].text;
						var _item = item;
						item.click(function ()
						{
							$(".jui-leftMenu-item-active", $(self.element)).removeClass("jui-leftMenu-item-active").addClass("jui-leftMenu-item");
							_item.removeClass("jui-leftMenu-item").addClass("jui-leftMenu-item-active");
							o.onClick(_index, _text);
						});
					})();
				}
				$(self.element).append(item);
			}
		},

		_setOption: function (key, value)
		{
			if (value !== undefined || value != null)
				this.options[key] = value;
			else
				return this.options[key];
		},

		_setOptions: function (options)
		{
			$.each(options, function (key, value)
			{
				this._setOption(key, value);
			});
		},

		_destroy: function ()
		{
			$(this.element).empty();
			$(this).empty();

			return this;
		}
	});

	$.extend($.jui.jleftMenu, {
		version: "0.1.0"
	});
})(jQuery);


/// <reference path="../jquery-1.7.js" />
/// <reference path="../jquery-ui-1.8.18.js" />

//JQuery UI table Plugin
/*
* jQuery UI table 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/

/*
* Author: ZhangJian
* Create date: 2012年10月8日 10:48:21
* Description: 表格生成插件
*/

/*
items:
    [
        {item,item...},
        {item,item...},
        ...
    ]	//使用item列表为其赋值

    item:
            head: "名称名称名称名称",				                        //名称
            context: "#Name(#Name2)(#ID)",			                //#Name(#Name2)(#ID)
            maxLength: 5,			                                            //文本最大长度，0不限制
            head_align: "left",                                                 //表头单元格横向分布 [left], center, right
            v_align: "top",		                                                //表格单元格纵向分布 [top], middle, bottom
            h_align: "left",		                                                //表格单元格横向分布 [left], center, right
            tableHeight: "auto",			                                            //单元格高度 150px, 10%
            tableWidth: "auto",			                                            //单元格宽度 150px, 10%
            sortColumn:"",                                                         //需要排序的data列名
            sortType:""                                                           //升序或降序
*/

(function ($, undefined) {
    $.widget("j.jtable",
	{
	    // default options
	    options: {
	        tableHeight: '', //表高
	        tableWidth: '', //表宽
	        data: [
                        //{ "ID": 1, "Name": "AAAAA", "Name2": "aaaaa", "Name3": "aaaaa3", "Name4": "aaaaaa4", "Name5": "aaaaaaaa5" },
                        //{ "ID": 2, "Name": "BBBBBBB", "Name2": "bbbbb", "Name3": "bbbbb3", "Name4": "bbbbb4", "Name5": "bbbbb5" },
                        //{ "ID": 3, "Name": "CCCCCC", "Name2": "cccccc", "Name3": "cccccc3", "Name4": "cccccc4", "Name5": "cccccc5" },
                        //{ "ID": 4, "Name": "DDDDDD", "Name2": "dddddd", "Name3": "dddddd3", "Name4": "dddddd4", "Name5": "dddddd5" },
                        //{ "ID": 5, "Name": "EEEEEEE", "Name2": "eeeeeee", "Name3": "eeeeeee3", "Name4": "eeeeeee4", "Name5": "eeeeeee5" },
                        //{ "ID": 6, "Name": "FFFFFFF", "Name2": "ffffffff", "Name3": "ffffffff3", "Name4": "ffffffff4", "Name5": "ffffffff5" },
                        //{ "ID": 7, "Name": "GGGGG", "Name2": "gggggg", "Name3": "gggggg3", "Name4": "gggggg4", "Name5": "gggggg5" }
	        ], //数据源
	        columns: [
		                //{
		                //    head: "名称1",				                                    //名称
		                //    context: "#Name(#Name2)(#ID)",			            //#Name(#Name2)(#ID)
		                //    maxLength: 5,			                                        //文本最大长度，0不限制
		                //    head_align: "left",                                             //[left], center, right
		                //    v_align: "top",		                                            //[top], middle, bottom
		                //    h_align: "left",		                                            //[left], center, right
		                //    height: "auto",			                                        //150px, 10%
		                //    width: "auto"			                                        //150px, 10%
		                //},
		                //{ head: "名称2", context: "#Name2", maxLength: 5, head_align: "left", v_align: "top", h_align: "left", height: "auto", width: "auto" },
		                //{ head: "名称3", context: "#Name3", maxLength: 5, head_align: "left", v_align: "top", h_align: "left", height: "auto", width: "auto" },
		                //{ head: "名称4", context: "#Name4", maxLength: 5, head_align: "left", v_align: "top", h_align: "left", height: "auto", width: "auto" },
		                //{ head: "名称5", context: "#Name5", maxLength: 5, head_align: "left", v_align: "top", h_align: "left", height: "auto", width: "auto" },
		                //{
		                //    head: "操作", context: "<a href='#' onclick=ActionEdit(#ID,'#Name','#Name2')>Edit</a>|<a href='#' onclick=ActionDetail(#ID,'#Name','#Name2')>Detail</a>|<a href='#' onclick=ActionDelete(#ID,'#Name','#Name2')>Delete</a>",
		                //    maxLength: 5, head_align: "left", v_align: "top", h_align: "left", height: "auto", width: "auto"
		                //}
	        ],//列
	        onSortChange:null,
	        sortItem: { sortColumn: "", sortType: "" }
	    },

	    _create: function () {
	        this._jtableCreate();
	    },
	    //_init: function () {
	    //    this._jtableCreate();            
	    //},

	    _jtableCreate: function () {
	        var self = this,
            o = this.options;
	        $(this.element).empty();
	        var onSortChange = o.onSortChange;
	        var sortItem = o.sortItem;
	        $(document).bind("selectstart", function () { return false; }); //控制文本不能被选中
	        //无数据时，显示错误提示信息
	        if (o.data.length == 0) {
	            $(this.element).empty().append('<span class="ui-icon ui-icon-alert" style="float: left; margin: 3px 3px 0px 3px;"></span><p>无数据</p>');
	        } else {
	            var tableId = $(this.element).attr("id");

                //生成表框架
	            $(this.element).empty().append(
                    "<table class='jui-table' id='" + tableId + "_tableSorter' style='width:" + o.tableWidth + ";height:" + o.tableHeight + ";'>" +
                    "<thead class='jui-table-head'><tr></tr></thead><tbody></tbody>" +
                    "</table>" +
                    "<span id='dis_checkedItems' style='display:none;'></span>");

	            var dataArray = new Array();
	            for (d in o.data[0]) {
	                dataArray.push(d);
	            }
	            dataArray.sort(this._sortNum).reverse();

                //生成表头
	            var g, short_g_head;
	            for (var j in o.columns) {
	                var g = o.columns[j];
	                var g_head = g["head"];
	                var g_maxLength = g["maxLength"];
	                if (g_head.length > g_maxLength && g_maxLength !=0) {
	                    short_g_head = g_head.substring(0, g_maxLength) + "...";
	                } else {
	                    short_g_head = g_head;
	                }
	                var g_context = g["context"];
	                var g_head_align = g["head_align"];
	                var g_v_align = g["v_align"];
	                var g_h_align = g["h_align"];
	                var g_height = g["height"];
	                var g_width = g["width"];
	                var g_sortColumn = g["sortColumn"];
	                var g_sortType = g["sortType"];
	                $("#" + tableId + "_tableSorter thead tr").append(
                        "<td style='text-align: " + g_head_align
                        + "; vertical-align: " + g_v_align
                        + "; height: " + g_height
                        + "; width: " + g_width + ";padding-left: 2px; padding-right: 2px;padding-top:5px;padding-bottom:5px;'>"
                        + "<div id='" + tableId + g_head + "' style='position:relative;'>" +
                        "<span style='cursor:default;display:inline-block;' title='" + g_head + "'>" + short_g_head + "</span>"
                        +"</div>"+
                        "</td>"
                        );
	                if (g_sortColumn != "" && g_sortColumn != null) {
	                    $("#" + tableId + g_head).children("span:eq(0)").css("cursor", "pointer");
	                    $("#" + tableId + g_head).append("<span class='ui-icon ui-icon-triangle-2-n-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>").css("cursor", "pointer");
	                    if (sortItem["sortColumn"] == g_sortColumn) {
	                        var g_head2 = g["head"];
	                        $("#" + tableId + g_head2).children("span:eq(1)").remove();
	                        if (sortItem["sortType"] == "desc") {
	                            $("#" + tableId + g_head2).append("<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>").css("cursor", "pointer");
	                        } else if (sortItem["sortType"] == "asc" || sortItem["sortType"] == "" || sortItem["sortType"] == null) {
	                            $("#" + tableId + g_head2).append("<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>").css("cursor", "pointer");
	                        }
	                    }	                    
	                }
	            }
	            var span_n = "<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>";
	            var span_s = "<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>";
	            $("#" + tableId + "_tableSorter thead tr").children("td").each(function () {
	                var t = $(this);
	                var text = t.children("div").children("span:eq(0)").text();
	                var column, sort;
	                for (var c in o.columns) {
	                    if (o.columns[c]["head"] == text) {
	                        column = o.columns[c]["sortColumn"];
	                        sort = o.columns[c]["sortType"];
	                    }
	                }
	                if (column != "" && column != null) {
	                    var flag2 = true;
	                    t.children("div").click(function () {
	                        if (flag2) {
	                            $(".ui-icon-triangle-1-s").replaceWith("<span class='ui-icon ui-icon-triangle-2-n-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>");
	                            $(".ui-icon-triangle-1-n").replaceWith("<span class='ui-icon ui-icon-triangle-2-n-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>");
	                            
	                            if (column != sortItem["sortColumn"]) {
	                                if (sort == "desc") {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                } else if (sort == "asc" || sort == "" || sort == null) {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                }
	                                onSortChange(column, text, sort);
	                            } else {
	                                if (sort == "desc") {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                    onSortChange(column, text, "asc");
	                                } else if (sort == "asc" || sort == "" || sort == null) {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                    onSortChange(column, text, "desc");
	                                }
	                            }
	                            flag2 = false;
	                            return;
	                        }
	                        if (!flag2) {
	                            $(".ui-icon-triangle-1-s").replaceWith("<span class='ui-icon ui-icon-triangle-2-n-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>");
	                            $(".ui-icon-triangle-1-n").replaceWith("<span class='ui-icon ui-icon-triangle-2-n-s' style='position:absolute;display:inline-block;right:0px;top:2px;'></span>");
	                            if (column != sortItem["sortColumn"]) {
	                                if (sort == "desc") {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                    onSortChange(column, text, "asc");
	                                } else if (sort == "asc" || sort == "" || sort == null) {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                    onSortChange(column, text, "desc");
	                                }
	                            } else {
	                                if (sort == "desc") {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-s' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                } else if (sort == "asc" || sort == "" || sort == null) {
	                                    $(this).children("span:eq(1)").replaceWith("<span class='ui-icon ui-icon-triangle-1-n' style='position:absolute;display:inline-block;right:0px;top:2px;cursor:pointer;'></span>");
	                                }
	                                onSortChange(column, text, sort);
	                            }
	                            flag2 = true;
	                            return;
	                        }
	                    });
	                }
	            });

                //生成表格
	            var v, short_v_head;
	            for (var i = 0; i < o.data.length; i++) {
	                $("#" + tableId + "_tableSorter tbody").append("<tr></tr>"); //行
	                for (var c in o.columns) {
	                    var isLink = false;
	                    v = o.columns[c];
	                    var v_head = v["head"];
	                    var v_context = v["context"];
	                    var v_maxLength = v["maxLength"];
	                    var v_head_align = v["head_align"];
	                    var v_v_align = v["v_align"];
	                    var v_h_align = v["h_align"];
	                    var v_height = v["height"];
	                    var v_width = v["width"];
	                    for (var r = 0; r < dataArray.length; r++) {
	                        var t = "#" + dataArray[r];
	                        v_context = v_context.replace2(t, o.data[i][dataArray[r]]);
	                    }
                        //排除操作列
	                    if (v_context.length > v_maxLength && !v_context.startsWith("<") && v_maxLength!=0) {
	                        short_v_head = v_context.substring(0, v_maxLength) + "...";
	                    } else {
	                        short_v_head = v_context;
	                        if(v_context.startsWith("<")){
	                            isLink = true;
	                        }
	                    }
	                    if (isLink == true) {
	                        $("#" + tableId + "_tableSorter tbody tr:eq(" + i + ")").append("<td style='text-align: " + v_h_align
                            + "; vertical-align: " + v_v_align
                            + "; height: " + v_height
                            + "; width: " + v_width + ";padding-left: 2px; padding-right: 2px;padding-top:5px;padding-bottom:5px;'><span>" + v_context + "</span></td>"); //列 
	                    } else {
	                        $("#" + tableId + "_tableSorter tbody tr:eq(" + i + ")").append("<td style='text-align: " + v_h_align
                            + "; vertical-align: " + v_v_align
                            + "; height: " + v_height
                            + "; width: " + v_width + ";padding-left: 2px; padding-right: 2px;padding-top:5px;padding-bottom:5px;'><span style='cursor:default;' title='" + v_context + "'>" + short_v_head + "</span></td>"); //列 
	                    }
	                }
                    //隐藏域保存行ID
	                $("#" + tableId + "_tableSorter tbody tr:eq(" + i + ") td:eq(0)").prepend("<span style='display:none;'>" + o.data[i]["ID"] + "</span>");
	            }


                //首列添加图标
	            var table = $("#" + tableId + "_tableSorter");

	            //*********表格行样式切换
	            var $tr = table.children("tbody").find('tr');
	            var doubleTr = table.children("tbody").find("tr:odd");
	            var singleTr = table.children("tbody").find("tr:even");
	            //给tr设置LOCK
	            $tr.attr('Lock', 'false');
	            singleTr.addClass("jui-table-odd");
	            doubleTr.addClass("jui-table-even");
	            var hoverClassToggle = function (obj) {
	                obj.mouseover(function () {
	                    if ($(this).attr("Lock") == "false") {
	                        $(this).removeClass().addClass("jui-table-hover");
	                    }
	                });
	                if (obj == singleTr) {
	                    obj.mouseout(function () {
	                        if ($(this).attr("Lock") == "false") {
	                            $(this).removeClass().addClass("jui-table-odd");
	                        }
	                    });
	                } else if (obj == doubleTr) {
	                    obj.mouseout(function () {
	                        if ($(this).attr("Lock") == "false") {
	                            $(this).removeClass().addClass("jui-table-even");
	                        }
	                    });
	                }
	            }
	            hoverClassToggle(singleTr);
	            hoverClassToggle(doubleTr);
	            $tr.mousedown(function () {
	                singleTr.attr("Lock", "false").removeClass("jui-table-Active").addClass("jui-table-odd");
	                doubleTr.attr("Lock", "false").removeClass("jui-table-Active").addClass("jui-table-even");
	                $(this).attr("Lock", "true").removeClass().addClass("jui-table-Active");
	            });
	        }
	    },
        //返回选中行数据
	    currentData: function () {
	        var o = this.options;
	        var checkedRoll="";
	        var checkedRollId = $(this.element).find(".jui-table-Active").find("td:eq(0)").find("span:eq(0)").text();
	        for (var i = 0; i < o.data.length; i++) {
	            if (o.data[i]["ID"] == checkedRollId) {
	                checkedRoll = o.data[i];
	            }
	        }
	        return checkedRoll;
	    },

	    //_init: function () {
	    //    this._jtableCreate();
	    //},

	    _sortNum: function (a, b) {
	        return a.length - b.length;
	    },

	    _setOption: function (key, value) {
	        var o = this.options;
	        var onSortChange = o.onSortChange;
	        var sortItem = o.sortItem;
	        if (value !== undefined || value != null) {
	            this.options[key] = value;
	            if (key == "sortItem") {
	                var head;
	                for (var c in o.columns) {
	                    if (o.columns[c]["sortColumn"] == value["sortColumn"]) {
	                        head = o.columns[c]["head"];
	                    }
	                }
	                onSortChange(value["sortColumn"], head, value["sortType"]);
	            }
	        }
	        else {
	            return this.options[key];
	        }
	    },

	    _setOptions: function (options) {
	        var self = this;
	        var o = this.options;
	        var onSortChange = o.onSortChange;
	        var sortItem = o.sortItem;
	        $.each(options, function (key, value) {
	            self._setOption(key, value);
	        });
	        this._jtableCreate();
	    },

	    _destroy: function () {
	        var o = this.options;

	        $(this.element).empty();
	        $(this).empty();

	        return this;
	    }
	});

    $.extend($.j.jtableCreate, {
        version: "0.1.0"
    });
})(jQuery);

// <reference path="../jquery-1.7.js" />
/// <reference path="../jquery-ui-1.8.18.js" />
/// <reference path="jui.jtable.js" />

//JQuery UI table Plugin
/*
* jQuery UI table 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*   jui.jtable.js
*/

/*
* Author: ZhangJian
* Create date: 2012年10月12日 14:04:45
* Description: 给表格添加checkbox
* 注:调用前需要先调用jui.jtable.js生成表格
*   可选项小于全选个数时候，全选按钮不可用
*   若默认选择项个数等于可选项个数，则其他项不可用
*   默认选择项个数不得大于可选项个数
*/


(function ($, undefined) {
    $.widget("j.jcheckTable",
	{
	    // default options
	    options: {
	        //field: ""
            //, checkedItems: []
            //,count:0
	    },

	    _create: function () {
	        this._jcheckTable();
	    },

	    _jcheckTable: function () {
	        var self = this,
            o = this.options;
	        var count = o.count;//可勾选的数目
	        var checkedItems = o.checkedItems;//默认选中行
	        var field = o.field;//列名
	        var tableId = $(this.element).attr("id");
	        var table = $("#" + tableId + "_tableSorter");
	        var checkAll = true;//判断全选
	        var listChecked = [];//选中项
	        $("#" + tableId + "_tableSorter tr").find("td:has(input)").remove();
	        $("#" + tableId + "_tableSorter tr").prepend("<td><input id='checkbox_" + tableId + "'  type='checkbox'  name='checkbox_" + tableId + "' style='display:none;'/><span class='jui-checkbox'></span></td>");
	        
	        //默认选中的项
	        for (var i = 0; i < table.find("thead").find("td").length; i++) {
	            var column_value = table.find("thead").find("td:eq(" + i + ")").children("span").html();//列名
	            if (field == column_value) {
	                table.find("tbody").find("tr").each(function () {
	                    for (var k = 0; k < checkedItems.length; k++) {
	                        if ($(this).find("td:eq(" + i + ")").children("span").html() == checkedItems[k]) {
	                            $(this).find("td:eq(0) input").attr("checked", 'true').next().addClass("jui-checkbox-checked");
	                        }	                        
	                    }
	                });
	                break;
	            }
	        }

	        //全选
	        table.find("thead .jui-checkbox").click(function () {
	            if (checkAll) {
	                $("input[name='checkbox_" + tableId + "']").attr("checked", 'true').next().addClass("jui-checkbox-checked");
	                checkAll = false;
	            } else if (!checkAll) {
	                $("input[name='checkbox_" + tableId + "']").removeAttr("checked").next().removeClass("jui-checkbox-checked");
	                checkAll = true;
	            }
	        });

	        //if (count > 0) {
	            //可选项小于全选个数时候，全选按钮不可用
	            if (count < table.children("tbody").find("tr").length && count>0) {
	                table.find("thead .jui-checkbox").hide();
	            }

	            //若默认选择项个数等于可选项个数，则其他项不可用
	            if (count == checkedItems.length && checkedItems.length > 0) {
	                table.find("td input:not(:checked)").next().hide();
	            }

	            //限定可选个数
	            table.find("tbody .jui-checkbox").click(function () {
	                if ($(this).prev().is(":checked")) {
	                    $(this).removeClass('jui-checkbox-checked');
	                    $(this).prev().removeAttr("checked");
	                } else {
	                    $(this).addClass('jui-checkbox-checked');
	                    $(this).prev().attr("checked", 'true');
	                }
	                var checkCounts = table.children("tbody").find("td input:checked").length;
	                if (checkCounts == count && count > 0) {
	                    table.find("td input:not(:checked)").next().hide();
	                }
	                if (checkCounts < count && count > 0) {
	                    table.find("td input:not(:checked)").next().show();
	                }
	                //可选项小于全选个数时候，全选按钮不可用
	                if (count < table.children("tbody").find("tr").length && count > 0) {
	                    table.find("thead .jui-checkbox").hide();
	                }
	         
	            });

	            //默认选择项个数不得大于可选项个数
	            if (count > 0 && checkedItems.length > count) {
	                $("#" + tableId + "_tableSorter").parent("div").empty().append("<span class='ui-icon ui-icon-alert' style='float: left; margin: 3px 3px 0px 3px;'></span><p>默认选中项个数不得大于可选项个数。</p>");
	            }
	        //}
	    },

	    checkedValues: function () {
	        var self = this,
            o = this.options;
	        var tableId = $(this.element).attr("id");
	        var table = $("#" + tableId + "_tableSorter");
	        var field = o.field;//列名
	        var listChecked = [];
	        for (var j = 0; j < table.find("thead").find("td").length; j++) {
	            var column_value = table.find("thead").find("td:eq(" + j + ")").children("span").html();//列名
	            if (field == column_value) {
	                for (var i = 0; i < table.find("tbody tr").length; i++) {
	                    if (table.find("tbody tr:eq(" + i + ")").find("input").is(':checked')) {
	                        listChecked.push(table.find("tbody tr:eq(" + i + ")").find("td:eq(" + j + ")").children("span").html());
	                    }
	                }

	                break;
	            }
	        }
	        return listChecked;
	    },

	    _init: function () {
	        //this._jcheckTable();
	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	        this._jcheckTable();
	    },

	    _setOptions: function (options) {
	        var self = this;
	        $.each(options, function (key, value) {
	            self._setOption(key, value);
	        });
	        this._jcheckTable();

	    },

	    _destroy: function () {
	        var o = this.options;

	        $(this.element).empty();
	        $(this).empty();

	        return this;
	    }
	});

    $.extend($.j.jcheckTable, {
        version: "0.1.0"
    });
})(jQuery);

// <reference path="../jquery-1.7.js" />
/// <reference path="../jquery-ui-1.8.18.js" />
/// <reference path="jui.jtable.js" />

//JQuery UI table Plugin
/*
* jQuery UI table 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*   jui.jtable.js
*/

/*
* Author: ZhangJian
* Create date: 2012年10月16日 14:16:04
* Description: 给表格添加checkbox
* 注:调用前需要先调用jui.jtable.js生成表格
*/


(function ($, undefined) {
    $.widget("j.jradioTable",
	{
	    // default options
	    options: {
	        //field: "名称3"//默认选择项(列名)
            //, checkedItem: "c3"//默认选择项(单元格内的值)
	    },

	    _create: function () {
	        this._jcheckTable();
	    },

	    _jcheckTable: function () {
	        var self = this,
            o = this.options;
	        var field = o.field;
	        var checkedItem = o.checkedItem;
	        var tableId = $(this.element).attr("id");
	        var table = $("#" + tableId + "_tableSorter");
	        $("#" + tableId + "_tableSorter").find("td:has(input)").remove();
	        $("#" + tableId + "_tableSorter thead tr").prepend("<td></td>");
	        $("#" + tableId + "_tableSorter tbody tr").prepend("<td><input  type='radio'  name='radio_" + tableId + "' style='display:none;'/><span class='jui-radio'></span></td>");
	        
	        //默认选中的项
	        for (var i = 0; i < table.find("thead").find("td").length; i++) {
	            var column_value = table.find("thead").find("td:eq(" + i + ")").children("span").html();//列名
	            if (field == column_value) {
	                table.find("tbody").find("tr").each(function () {
	                        if ($(this).find("td:eq(" + i + ")").children("span").html() == checkedItem) {
	                            $(this).find(":radio").next().addClass("jui-radio-checked");
	                            $(this).find("td:eq(0) input").attr("checked", true);
	                        }
	                });
	                break;
	            }
	        }

	        table.find(":radio").next().click(function () {
	            table.find(":radio").next().removeClass("jui-radio-checked");
	            $(this).addClass("jui-radio-checked");
	            $(this).prev().attr("checked",true);
	        });

	        ////补齐新增列样式
	        table.children("thead").find("td").css("background", "#094ab2");
	        table.find("td").css({ "padding-top": "5px", "padding-bottom": "5px" });	     
	    },

	    checkedValue: function () {
	        var self = this,
            o = this.options;
	        var tableId = $(this.element).attr("id");
	        var table = $("#" + tableId + "_tableSorter");
	        var field = o.field;//列名
	        var r="";
	        for (var j = 0; j < table.find("thead").find("td").length; j++) {
	            var column_value = table.find("thead").find("td:eq(" + j + ")").children("span").html();//列名
	            if (field == column_value) {
	                for (var i = 0; i < table.find("tbody tr").length; i++) {
	                    if (table.find("tbody tr:eq(" + i + ")").find("input").is(':checked')) {
	                        r = table.find("tbody tr:eq(" + i + ")").find("td:eq(" + j + ")").children("span").html();
	                    }
	                }
	                break;
	            }
	        }
	        return r;
	    },

	    _init: function () {
	        //this._jcheckTable();
	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	        this._jcheckTable();
	    },

	    _setOptions: function (options) {
	        var self = this;
	        $.each(options, function (key, value) {
	            self._setOption(key, value);
	        });
	        this._jcheckTable();

	    },

	    _destroy: function () {
	        var o = this.options;

	        $(this.element).empty();
	        $(this).empty();

	        return this;
	    }
	});

    $.extend($.j.jcheckTable, {
        version: "0.1.0"
    });
})(jQuery);


/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI tree Plugin
/*
* jQuery UI tree 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: ZhangJian
* Create date: 2012年11月5日 09:17:16
* Description: 树形菜单
*/

/**/

(function ($, undefined) {
    $.widget("jui.jtree",
	{
	    // default options
	    options: {
            //onClick:null
	    },

	    _create: function () {
	        this._jdatapagerify();
	    },

	    _jdatapagerify: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var name, id, image, position;
	        e.addClass("jui-jtree");
            e.empty();
            e.append("<span id='saveId"+e_id+"' style='display:none;'></span>" +
                            "<span id='saveName" + e_id + "' style='display:none;'></span>" +
                            "<span id='saveImage" + e_id + "' style='display:none;'></span>" +
                            "<span id='savePosition" + e_id + "' style='display:none;'></span>" +
                            "<span id='temp" + e_id + "' style='display:none;'>0</span>" +
                            "<ul id='" + e_id + "_ul_top'></ul>");//u1
            e.bind("selectstart", function () { return false; });//界面无法选中
	        //#region生成节点
            //生成节点
            var makeNode = function (str,obj) {
                $("#" + e_id + "_ul_" + str).append(
                    "<li class='jui-jtree-u-li' id='" + e_id + "_li_" + obj["id"] + "'>" +
                    "<span class='jui-jtree-u-switch'></span>" +
                    "<span style='display:none;'></span>" +
                    "<a title='" + obj["name"] + "' class='jui-jtree-u-a' >" +
                    "<span class='jui-jtree-u-icon' style='background-image:url(" + obj["image"] + ");background-position:" + obj["position"] + ";'></span>" +
                    "<span class='jui-jtree-u-text' >" + obj["name"] +
                    "</span></a></li>");
                self.clickNode(e_id + "_li_" + obj["id"]);
            } 
            //#endregion
            //#region 生成树
            var makeTree = function () {
                for (var i = 0; i < n.length; i++) {
                    makeNode("top",n[i]);//u1
                    if (n[i]["children"]) {
                        $("#"+e_id + "_li_" + n[i]["id"]).children("a").after("<ul class='line' id='" + e_id + "_ul_"+i+"'></ul>");
                        if (i == n.length-1) {
                            $("#" + e_id + "_li_" + n[i]["id"]).children("a").next().removeClass("line");
                        }
                        for (var j = 0; j < n[i]["children"].length; j++) {
                            makeNode(i,n[i]["children"][j]);//u2
                            if (n[i]["children"][j]["children"]) {
                                $("#" + e_id + "_li_" + n[i]["children"][j]["id"]).children("a").after("<ul class='line' id='" + e_id + "_ul_"+i+j+"'></ul>");//u3
                                if (j == n[i]["children"].length-1) {
                                    $("#" + e_id + "_li_" + n[i]["children"][j]["id"]).children("a").next().removeClass("line");
                                }
                                for (var k = 0; k < n[i]["children"][j]["children"].length; k++) {
                                    makeNode(i.toString()+ j.toString(), n[i]["children"][j]["children"][k]);//u3
                                }
                            }
                            $("#" + e_id + "_li_" + n[i]["children"][j]["id"]).children("a").next().children("li").last().children("span:eq(0)").removeClass("jui-jtree-u-switch-cross").addClass("jui-jtree-u-switch-cross-bottom");
                            $("#" + e_id + "_li_" + n[i]["children"][j]["id"]).children("a").next().children("li").first().children("span:eq(0)").removeClass("jui-jtree-u-switch-cross").addClass("jui-jtree-u-switch-cross-bottom");
                        }
                        $("#" + e_id + "_li_" + n[i]["id"]).children("a").next().children("li").last().children("span:eq(0)").removeClass("jui-jtree-u-switch-dircorss-close").addClass("jui-jtree-u-switch-dircorss-bottom-close");
                    }
                }                
            }
            makeTree();
            //#endregion 
	        //#region 样式的切换
            var
                dir_All = e.children("ul").find("li").children("a"),//所有含ul的li中的a
                sw_1 = e.children("ul").children("li").children("span:eq(0)"),//一级switch
                ul2 = e.children("ul").children("li").children("ul"),//二级ul
                ul3 = ul2.children("li").children("ul");//三级ul
            sw_1.removeClass("jui-jtree-u-switch").addClass("jui-jtree-u-switch-dircorss-close");
            sw_1.first().removeClass("jui-jtree-u-switch-dircorss-close").addClass("jui-jtree-u-switch");
	        sw_1.last().removeClass("jui-jtree-u-switch-dircorss-close").addClass("jui-jtree-u-switch-dircorss-bottom-close");

            ul3.css("display", "none");
            ul2.css("display", "none");
            e.children("ul").find("li").each(function () {
                if ($(this).children("ul").children("li").length > 0) {
                    self.toggleLiCss($(this).children("span:eq(0)"));
                }
            });
            e.children("ul").find("li").each(function () {
                if ($(this).children("ul").length == 0) {
                    $(this).children("a").children("span:eq(0)").css("background-position", "-110px -30px");
                    if ($(this).nextAll().length == 0) {
                        $(this).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-cross-bottom");
                    } else {
                        $(this).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-cross");
                    }
                } else {
                    if ($(this).nextAll().length == 0) {
                        $(this).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-close");
                    } else {
                        $(this).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-close");
                    }
                }
                var t = $(this).children("a");
                t.click(function () {
                    e.children("ul").find("a").removeClass("jui-jtree-a-clicked");
                    t.addClass("jui-jtree-a-clicked");
                });
            });
	        //#endregion
            e.children("ul").children("li:eq(0)").children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch");
	    },

        //#region增加节点
	    //添加子节点
	    addChildNode: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId" + e_id).text();
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return;
	        }
	        var temp = $("#temp" + e_id).text();
	        //#region选中节点为父节点时
	        if ($("#" + node_id).children("ul").length > 0) {
	            var newLi_id , newLi_name;
	            var lastNodeIcon = $("#" + node_id).children("ul").children("li").last().children("span:eq(0)");
	            //#region如果最后的节点为父节点
	            if ($("#" + node_id).children("ul").children("li").last().children("ul").length > 0) {	                
	                if (lastNodeIcon.attr("class") == "jui-jtree-u-switch-dircorss-bottom-close") {
	                    //闭合时
	                    lastNodeIcon.removeClass().addClass("jui-jtree-u-switch-dircorss-close");
	                } else if (lastNodeIcon.attr("class") == "jui-jtree-u-switch-dircorss-bottom-open") {
	                    //打开时
	                    lastNodeIcon.removeClass().addClass("jui-jtree-u-switch-dircorss-open");
	                }
	                lastNodeIcon.siblings("ul").addClass("line");//ul添加虚线
	            }
                //#endregion
	            else
	            //#region 如果最后的节点为子节点
	            {
	                lastNodeIcon.removeClass().addClass("jui-jtree-u-switch-cross");
	            }
                //#endregion
                //#region 父节点闭合时，添加子节点后，父节点展开
	            if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch") {
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-open");
	            } else if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-close") {
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-open");
	            } else if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-bottom-close") {
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-open");
	            } else if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-single-close") {
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-single-open");
	            }
	            $("#" + node_id).children("a").children("span:eq(0)").css("background-position", "-110px -15px");
	            $("#" + node_id).children("span:eq(0)").siblings("ul").slideDown("fast");
                //#endregion
	        }//#endregion
	        else
            //#region 选中节点为子节点时
	        {
	            var newUl_id = node_id + "_newUl";//ul的id
	            if ($("#" + node_id).children("ul").length == 0) {
	                $("#" + node_id).append("<ul class='line' id='" + newUl_id + "'></ul>")
	            }
	            //子节点增加子节点,此时子节点变为父节点
	            if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-cross-bottom") {
	                //切换图标变更
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-open");
	                $("#" + node_id).children("ul").removeClass("line");
	            } else {
	                //切换图标变更
	                $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-open");
	            }
	            //文件夹图标变更
	            $("#" + node_id).children("a").children("span:eq(0)").css("background-position", "-110px -15px");
	        }
	        //#endregion
            //#region 具体添加节点的操作
	        newLi_id =  "NewLi_" + temp;//新增节点的id
	        newLi_name = "NewNode";//新增节点的文本内容
	        if ($("#" + node_id).children("ul").children("li").length == 0) {
	            this.toggleLiCss($("#" + node_id).children("span:eq(0)"));
	        }
	        //添加新节点
	        $("#" + node_id).children("ul").append(
                "<li class='jui-jtree-u-li' id='" + newLi_id + "'>" +
                "<span class='jui-jtree-u-switch-cross-bottom'></span>" +
                "<span style='display:none;'></span>" +
                "<a title='" + newLi_name + "' class='jui-jtree-u-a'>" +
                "<span class='jui-jtree-u-icon' style='background-image:url(../../Images/zTreeStandard.png);background-position:-110px -30px;' ></span>" +
                "<span class='jui-jtree-u-text'>" + newLi_name +
                "</span></a></li>");
	        var css = $("#" + node_id).children("span:eq(1)").attr("class");
	        if (css == "jui-jtree-u-cbox-unChecked" || css == "jui-jtree-u-cbox-partChecked2" || css == "jui-jtree-u-cbox-checked") {
	            $("#" + newLi_id).children("span:eq(1)").addClass(css);
	            e.jcheckTree("updateCheckedState");//更新选中状态
	            e.jcheckTree("controllChecked", $("#" + newLi_id));
	        }
	        if (css == "jui-jtree-u-rbox-unChecked" || css == "jui-jtree-u-rbox-partChecked" || css == "jui-jtree-u-rbox-checked") {
	            $("#" + newLi_id).children("span:eq(1)").addClass("jui-jtree-u-rbox-unChecked");
	            e.jradioTree("updateCheckedState");//更新选中状态
	        }
	        this.clickNode(newLi_id);// 添加节点点击事件
	        $("#temp" + e_id).text(parseInt(temp)+1);
            //#endregion
	    },
	    //添加同级节点
	    addSiblingNode: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId" + e_id).text();
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return;
	        }
	        var temp = $("#temp" + e_id).text();
	        var ul_father = $("#" + node_id).parent("ul");//选中li节点的父ul
	        var newUlId = $("#" + node_id).parent("ul").attr("id") + "_" + ($("#" + node_id).parent("ul").children("li").length + 1);//新增li节点的ulid
	        var newLi_name = "NewNode";//新增节点的文本
	        var newLi_id = "NewLi_" +temp;//新增li节点的id
	        //#region如果末节点为文件夹(父节点)
	        if (ul_father.children("li").last().children("ul").length > 0) {
	            if (ul_father.children("li").last().children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-bottom-close") {
	                ul_father.children("li").last().children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-close");
	            } else if (ul_father.children("li").last().children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-bottom-open") {
	                ul_father.children("li").last().children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-open");
	            }
	            ul_father.children("li").last().children("ul").addClass("line");//ul添加虚线
	        }
	        //#endregion
	        else
	        //#region如果末节点为文件(子节点)
	        {
	            ul_father.children("li").last().children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-cross");
	        }
	        if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-single-close") {
	            $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch");
	        } else if ($("#" + node_id).children("span:eq(0)").attr("class") == "jui-jtree-u-switch-single-open") {
	            $("#" + node_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-open");
	        }
	        //#endregion
	        //#region具体添加操作 
	        ul_father.append(
            "<li class='jui-jtree-u-li' id='" + newLi_id + "'>" +
            "<span class='jui-jtree-u-switch-cross-bottom'></span>" +
            "<span style='display:none;'></span>" +
            "<a title='" + newLi_name + "' class='jui-jtree-u-a'>" +
            "<span class='jui-jtree-u-icon' style='background-image:url(../../Images/zTreeStandard.png);background-position:-110px -30px;' ></span>" +
            "<span class='jui-jtree-u-text'>" + newLi_name +
            "</span></a>" +
            "</li>");
	        if ($("#" + node_id).children("ul").length > 0) {
	            $("#" + newLi_id).append("<ul id='" + newUlId + "'></ul>");
	            $("#" + newLi_id).children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-close");
	            $("#" + newLi_id).children("a").children("span:eq(0)").css("background-position", "-110px 0px");
	        }
	        this.clickNode(newLi_id);// 添加节点点击事件
	        var css = $("#" + node_id).children("span:eq(1)").attr("class");
	        if (css == "jui-jtree-u-cbox-unChecked" || css == "jui-jtree-u-cbox-partChecked2" || css == "jui-jtree-u-cbox-checked") {
	            $("#" + newLi_id).children("span:eq(1)").addClass("jui-jtree-u-cbox-unChecked");
	            e.jcheckTree("controllChecked", $("#" + newLi_id));//点击多选框后更新选中状态
	            e.jcheckTree("updateCheckedState");//更新选中状态
	        }
	        if (css == "jui-jtree-u-rbox-unChecked" || css == "jui-jtree-u-rbox-partChecked" || css == "jui-jtree-u-rbox-checked") {
	            $("#" + newLi_id).children("span:eq(1)").addClass("jui-jtree-u-rbox-unChecked");
	            e.jradioTree("updateCheckedState");//更新选中状态
	        }
	        $("#temp" + e_id).text(parseInt(temp) + 1);
	        //#endregion
	    },
        //给节点添加点击事件 str:选中li标签id
	    clickNode: function (str) {
	        var
                o = this.options,
	            e = $(this.element),
                onClick = o.onClick,
	            e_id = e.attr("id");

	        if (onClick != null) {
	            $("#" + str).children("a").click(function () {
	                id = str;
	                name = $(this).children("span:eq(1)").text();
	                image = $(this).children("span:eq(0)").css("background-image");
	                position = $(this).children("span:eq(0)").css("background-position");
	                onClick({ name: name, id: id, image: image, position: position });
	                $("#saveId" + e_id).text(id);
	                $("#saveName" + e_id).text(name);
	                $("#saveImage" + e_id).text(image);
	                $("#savePosition" + e_id).text(position);
	            });
	        }
	        e.children("ul").find("li").children("a").each(function () {
	            var t = $("#"+str).children("a");
	            t.click(function () {
	                e.children("ul").find("a").removeClass("jui-jtree-a-clicked");
	                t.addClass("jui-jtree-a-clicked");
	            });
	        });

	    },
        //切换"+","-"图标 obj为span标签
	    toggleLiCss: function (obj) {
	        obj.unbind("click");
	        obj.bind("click", function () {
	            //切换各级顶端"+","-"按钮
	            if ($(this).attr("class") == "jui-jtree-u-switch") {
	                $(this).removeClass("jui-jtree-u-switch").addClass("jui-jtree-u-switch-open");
	            } else if ($(this).attr("class") == "jui-jtree-u-switch-open") {
	                $(this).removeClass("jui-jtree-u-switch-open").addClass("jui-jtree-u-switch");
	            }
	            //切换各级中间"+","-"按钮
	            if ($(this).attr("class") == "jui-jtree-u-switch-dircorss-close") {
	                $(this).removeClass("jui-jtree-u-switch-dircorss-close").addClass("jui-jtree-u-switch-dircorss-open");
	            } else if ($(this).attr("class") == "jui-jtree-u-switch-dircorss-open") {
	                $(this).removeClass("jui-jtree-u-switch-dircorss-open").addClass("jui-jtree-u-switch-dircorss-close");
	            }
	            //切换各级底部"+","-"按钮
	            if ($(this).attr("class") == "jui-jtree-u-switch-dircorss-bottom-close") {
	                $(this).removeClass("jui-jtree-u-switch-dircorss-bottom-close").addClass("jui-jtree-u-switch-dircorss-bottom-open");
	            } else if ($(this).attr("class") == "jui-jtree-u-switch-dircorss-bottom-open") {
	                $(this).removeClass("jui-jtree-u-switch-dircorss-bottom-open").addClass("jui-jtree-u-switch-dircorss-bottom-close");
	            }

	            //切换各级图标开与关按钮 
	            if ($(this).siblings("a").find("span:eq(0)").css("background-position") == "-110px 0px") {
	                $(this).siblings("a").find("span:eq(0)").css("background-position", "-110px -15px");
	            } else if ($(this).siblings("a").find("span:eq(0)").css("background-position") == "-110px -15px") {
	                $(this).siblings("a").find("span:eq(0)").css("background-position", "-110px 0px");
	            }
	            $(this).siblings("ul").slideToggle("fast");
	        });
	    },
	    //#endregion
        //#region删除节点
	    deleteNode: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId" + e_id).text();
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return;
	        }
            //#region 仅留一层父节点时的样式控制
	        if (node_id == e.children("ul").children("li:eq(0)").attr("id") && e.children("ul").children("li").length > 2) {
	            e.children("ul").children("li:eq(1)").children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch");
	        }
	        if (e.children("ul").children("li").length == 2) {
	            if (e.children("ul").children("li:eq(1)").children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-bottom-close") {
	                e.children("ul").children("li:eq(1)").children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-single-close");
	            } else if (e.children("ul").children("li:eq(1)").children("span:eq(0)").attr("class") == "jui-jtree-u-switch-dircorss-bottom-open") {
	                e.children("ul").children("li:eq(1)").children("span:eq(0)").removeClass().addClass("jui-jtree-u-switch-single-open");
	            }
	            e.children("ul").children("li:eq(1)").children("span:eq(0)").click(function () {
	                if ($(this).attr("class") == "jui-jtree-u-switch-single-close") {
	                    $(this).removeClass().addClass("jui-jtree-u-switch-single-open");
	                } else if ($(this).attr("class") == "jui-jtree-u-switch-single-open") {
	                    $(this).removeClass().addClass("jui-jtree-u-switch-single-close");
	                }
	            });
	        }
	        //#endregion
	        //#region删除节点为末尾节点时
	        if ($("#" + node_id).next().length == 0) {
	            var prev_li = $("#" + node_id).prev().children("span:eq(0)");
	            if (prev_li.attr("class") == "jui-jtree-u-switch-dircorss-close"){
	                prev_li.removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-close");
	            } else if (prev_li.attr("class") == "jui-jtree-u-switch-dircorss-open") {
	                prev_li.removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-open");
	            } else if (prev_li.attr("class") == "jui-jtree-u-switch-cross") {
	                prev_li.removeClass().addClass("jui-jtree-u-switch-cross-bottom");
	            } else if (prev_li.attr("class") == "jui-jtree-u-switch-open") {
	                prev_li.removeClass().addClass("jui-jtree-u-switch-single-open");
	            } else if (prev_li.attr("class") == "jui-jtree-u-switch") {
	                prev_li.removeClass().addClass("jui-jtree-u-switch-single-close");
	            }
	            if (prev_li.siblings("ul").length > 0) {
	                prev_li.siblings("ul").removeClass("line");
	            }
	        }
	        //子节点删除完后
	        if ($("#" + node_id).next().length == 0 && $("#" + node_id).prev().length == 0) {
	            var switchSpan = $("#" + node_id).parent().parent().children("span:eq(0)");
	            if (switchSpan.attr("class") == "jui-jtree-u-switch-dircorss-bottom-open") {
	                switchSpan.removeClass().addClass("jui-jtree-u-switch-dircorss-bottom-close");
	                switchSpan.siblings("a").children("span:eq(0)").css("background-position", "-110px 0");
	            }
	            if (switchSpan.attr("class") == "jui-jtree-u-switch-dircorss-open") {
	                switchSpan.removeClass().addClass("jui-jtree-u-switch-dircorss-close");
	            }
	            if (switchSpan.attr("class") == "jui-jtree-u-switch-open") {
	                switchSpan.removeClass().addClass("jui-jtree-u-switch-close");
	            }
	        }
	        //#endregion
	        $("#" + node_id).remove();
	        var css = e.children("ul").children("li:eq(0)").children("span:eq(1)").attr("class");
	        if (css == "jui-jtree-u-cbox-unChecked" || css == "jui-jtree-u-cbox-partChecked2" || css == "jui-jtree-u-cbox-checked") {
	            e.jcheckTree("updateCheckedState");//更新选中状态
	        }
	        if (css == "jui-jtree-u-rbox-unChecked" || css == "jui-jtree-u-rbox-partChecked" || css == "jui-jtree-u-rbox-checked") {
	            e.children("ul").find("li").has("ul").each(function () {
	                var _t = $(this);
	                if (_t.children("ul").find(".jui-jtree-u-rbox-checked").length > 0) {
	                    _t.children("span:eq(1)").removeClass().addClass("jui-jtree-u-rbox-partChecked");
	                } else {
	                    _t.children("span:eq(1)").removeClass().addClass("jui-jtree-u-rbox-unChecked");
	                }
	            });
	        }
	        $("#saveId" + e_id).text("");
	    },
	    //#endregion
	    //#region编辑节点
	    editNode: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId"+e_id).text();//选中节点ID
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return;
	        }
	        var node = $("#" + node_id);
	        var a_html = node.children("a").clone();
	        var old_text = node.children("a").children("span:eq(1)").text();
	        var text_html = "<input type='text' style='height:16px;' id='newText' value='" + old_text + "'/>";
	        
	        node.children("a").remove();
	        var css = $("#" + node_id).children("span:eq(1)").attr("class");
	        if (!css) {
	            node.children("span:eq(0)").after(text_html);
	        } else {
	            node.children("span:eq(1)").after(text_html);
	        }
	        $("#newText").focus();
	        $("#newText").focusout(function () {
	            var content = $(this).attr("value");
	            node.children("input").remove();
	            node.children("span:eq(0)").after(a_html);
	            if (!css) {
	                node.children("span:eq(0)").after(a_html);
	            } else {
	                node.children("span:eq(1)").after(a_html);
	            }
	            $("#saveName" + e_id).text(content);
	            $("#obj_name").text(content);
	            node.children("a").attr("title",content);
	            node.children("a").children("span:eq(1)").text(content);
	            self.clickNode(node_id);
	        });

	    },
	    //#endregion
	    //#region遍历节点
	    //选中子节点，返回父节点
	    getParentNode: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId" + e_id).text();//选中节点ID
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return false;
	        }
	        var parent_node = $("#" + node_id).parent("ul").parent("li");
	        var id = parent_node.attr("id");
	        var name = parent_node.children("a").children("span:eq(1)").text();
	        var bgimg = parent_node.children("a").children("span:eq(0)").css("background-image");
	        var position = parent_node.children("a").children("span:eq(0)").css("background-position");
	        var objParent = { id: id, name: name, image: bgimg, position: position };
	        return objParent;
	    },
        //选中父节点，返回子节点集合
	    getChildrenNodes: function (obj) {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId"+e_id).text();//选中节点ID
	        //var node_id = obj;//选中节点ID
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return false;
	        }
	        var objli = $("#" + node_id).children("ul").children("li");
	        var children_nodes = [],
                id,
                name,
                bgimg,
                position;
	        if (objli.length > 0) {
	            for (var i = 0; i < objli.length; i++) {
	                id = objli.eq(i).attr("id");
	                name = objli.eq(i).children("a").children("span:eq(1)").text();
	                bgimg = objli.eq(i).children("a").children("span:eq(0)").css("background-image");
	                position = objli.eq(i).children("a").children("span:eq(0)").css("background-position");
	                children_nodes.push({ id: id, name: name, image: bgimg, position: position });
	            }
	            return children_nodes;
	        } else {
	            return "N";
	        }
	    },

	    //#endregion
	    //#region查找选中节点的路径
	    getNodePath: function () {
	        var
                self = this,
                o = this.options,
                n = o.nodes,
	            e = $(this.element),
                onClick = o.onClick,
                e_id = e.attr("id");
	        var node_id = $("#saveId" + e_id).text();//选中节点ID
	        if (node_id == "" || node_id == null) {
	            alert("未选中节点。");
	            return false;
	        }
	        var parentsId = $("#" + node_id).parents("li");
	        var result = "~", id;
	        for (var i = parentsId.length-1; i >=0; i--) {
	            id = parentsId.eq(i).attr("id");
	            result += "/"+id;
	        }
	        return result+"/"+node_id;
	    },
	    //#endregion
	    //#region获取最终nodes集合
	    getNodes: function () {
	        var
                self = this,
	            e = $(this.element),
                nodes=[],
                e_id = e.attr("id");
            //生成子节点集合
	        var makechildNode = function (obj) {
	            var id = obj.attr("id");
	            var name = obj.children("a").children("span:eq(1)").text();
	            var bgimg = obj.children("a").children("span:eq(0)").css("background-image");
	            var position = obj.children("a").children("span:eq(0)").css("background-position");
	            makeParentNode(obj);
	            return { id: id, name: name, image: bgimg, position: position };
	        };
            //生成父节点集合
	        var makeParentNode = function (obj) {
	            var id = obj.attr("id");
	            var name = obj.children("a").children("span:eq(1)").text();
	            var bgimg = obj.children("a").children("span:eq(0)").css("background-image");
	            var position = obj.children("a").children("span:eq(0)").css("background-position");
	            var children = [];
	            obj.children("ul").children("li").each(function () {
	                if ($(this).children("ul").children("li").length > 0) {
	                    children.push(makeParentNode($(this)));
	                } else {
	                    children.push(makechildNode($(this)));
	                }
	            });
	            return { id: id, name: name, image: bgimg, position: position, children: children };
	        };
	        e.children("ul").children("li").each(function () {
	            nodes.push(makeParentNode($(this)));
	        });
	        return nodes;
	    },
        //#endregion
	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	    },

	    _setOptions: function (options) {
	        $.each(options, function (key, value) {
	            this._setOption(key, value);
	        });
	        this._jdatapagerify();
	    },

	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();
	        return this;
	    }
	});

    $.extend($.jui.jtree, {
        version: "0.1.0"
    });
})(jQuery);

/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI checkTree Plugin
/*
* jQuery UI checkTree 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: ZhangJian
* Create date: 2012年11月7日 15:03:06
* Description: 带checkbox的树形菜单
*/

/**/

(function ($, undefined) {
    $.widget("jui.jcheckTree",
	{
	    // default options
	    options: {

	    },

	    _create: function () {
	        this._jdatapagerify();
	    },

	    _jdatapagerify: function () {
	        var
                self = this,
                o = this.options,
	            e = $(this.element),
                e_id = e.attr("id");
	        e.find("a").prev().addClass("jui-jtree-u-cbox-unChecked");
	        var parent_li = e.children("ul").children("li");//顶端li
            
	        var children_li = parent_li.children("ul").find("li").has("ul");//次级li
	        e.children("ul").find("li").each(function () {
	            self.controllChecked($(this));
	        });
	    },
	    //每次选中操作返回选中节点数据的集合
	    getCheckValue: function () {
	        var
	            list = [],
                self = this,
                o = this.options,
	            e = $(this.element),
	            str_checked = "jui-jtree-u-cbox-checked";//选中
	        e.children("ul").find("li").each(function () {
	            var _t = $(this);
	            if ($(this).children("span:eq(1)").attr("class") == str_checked) {
	                list.push($(this).children("a").children("span:eq(1)").html());
	            }
	        });

	        return list;
	    },
	    //更新选中状态
	    updateCheckedState: function () {
	        var e = $(this.element);
	        e.children("ul").find("li").each(function () {
	            var t2 = $(this);
	            if (t2.children("ul").children("li").length >= 0) {
	                if (t2.find(".jui-jtree-u-cbox-unChecked").length == 0) {
	                    t2.children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-checked");
	                } else if (t2.find(".jui-jtree-u-cbox-checked").length == 0) {
	                    t2.children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-unChecked");
	                } else {
	                    t2.children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-partChecked2");
	                }
	            } else {
	                t2.children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-unChecked");
	            }
	        });
	    },
	    //子项选中，影响父项选中
	    controllChecked: function (obj) {
	        var
                self = this,
                o = this.options,
	            e = $(this.element),
                e_id = e.attr("id");
	            str_checked = "jui-jtree-u-cbox-checked",//选中
                str_unChecked = "jui-jtree-u-cbox-unChecked",//未选中
                str_checkedPart = "jui-jtree-u-cbox-partChecked2";//部分选中
	        //全选控制 
	        var controlChildrenClass = function (obj, str) {
	            obj.removeClass().addClass(str);
	            obj.siblings("ul").find("li").find("span:eq(1)").removeClass().addClass(str);
	        }

	        obj.children("span:eq(1)").click(function () {
	            var t = $(this);
	            if (t.attr("class") == str_checked || t.attr("class") == str_checkedPart) {
	                controlChildrenClass(t, str_unChecked);
	            } else if (t.attr("class") == str_unChecked) {
	                controlChildrenClass(t, str_checked);
	            }
	            var _count = obj.siblings().length + 1;//同级个数
	            var checked_span = t.parent().parent().children("li").children(".jui-jtree-u-cbox-checked").length;//同级选中个数
	            if (_count == checked_span) {
	                obj.parents("li").children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-checked");//全部选中样式
	            }
	            if (_count > checked_span) {
	                obj.parents("li").children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-partChecked2");//部分选中样式
	            }
	            if (checked_span == 0) {
	                obj.parents("li").children("span:eq(1)").removeClass().addClass("jui-jtree-u-cbox-unChecked");//未选中样式
	            }
	            self.updateCheckedState();
	        });

	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	    },

	    _setOptions: function (options) {
	        $.each(options, function (key, value) {
	            this._setOption(key, value);
	        });
	        this._jdatapagerify();
	    },

	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();
	        return this;
	    }
	});

    $.extend($.jui.jcheckTree, {
        version: "0.1.0"
    });
})(jQuery);

/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI checkTree Plugin
/*
* jQuery UI checkTree 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: ZhangJian
* Create date: 2012年11月23日 10:44:49
* Description: 带radiobox的树形菜单
*/

/**/

(function ($, undefined) {
    $.widget("jui.jradioTree",
	{
	    // default options
	    options: {

	    },

	    _create: function () {
	        this._jdatapagerify();
	    },

	    _jdatapagerify: function () {
	        var
                self = this,
                o = this.options,
	            e = $(this.element),
                e_id = e.attr("id");
	        e.find("a").prev().addClass("jui-jtree-u-rbox-unChecked");
	        var parent_li = e.children("ul").children("li");//顶端li
	        var children_li = parent_li.children("ul").find("li").has("ul");//次级li
	        e.children("ul").find("li").each(function () {
	            self.controllChecked($(this));
	        });
	        ////控制单选按钮父级与子级菜单间关系
	        //self.updateCheckedState();       
	    },
	    //更新选中状态
	    updateCheckedState: function () {
	        var e = $(this.element);
	        //控制单选按钮父级与子级菜单间关系
	        e.children("ul").find("li").each(function () {
	            var _t = $(this);
	            _t.children("span:eq(1)").click(function () {
	                e.children("ul").find(".jui-jtree-u-rbox-checked").removeClass().addClass("jui-jtree-u-rbox-unChecked");
	                e.children("ul").find(".jui-jtree-u-rbox-partChecked").removeClass().addClass("jui-jtree-u-rbox-unChecked");
	                $(this).removeClass().addClass("jui-jtree-u-rbox-checked");
	                e.children("ul").find("li").has("ul").each(function () {
	                    var _t = $(this);
	                    if (_t.children("ul").find(".jui-jtree-u-rbox-checked").length > 0) {
	                        _t.children("span:eq(1)").removeClass().addClass("jui-jtree-u-rbox-partChecked");
	                    }
	                });
	            });
	        });

	    },
	    controllChecked: function (obj) {
	        var
                self = this;
	        obj.children("span:eq(1)").click(function () {
	            self.updateCheckedState();
	        });
	    },
	    //每次选中操作返回选中节点数据的集合
	    getCheckValue: function () {
	        var
	            item = null,
                self = this,
                o = this.options,
	            e = $(this.element);
	        e.children("ul").find("li").each(function () {
	            var _t = $(this);
	            if ($(this).children("span:eq(1)").attr("class") == "jui-jtree-u-rbox-checked") {
	                item = $(this).children("a").children("span:eq(1)").html();
	            }
	        });

	        return item;
	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	    },

	    _setOptions: function (options) {
	        $.each(options, function (key, value) {
	            this._setOption(key, value);
	        });
	        this._jdatapagerify();
	    },

	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();
	        return this;
	    }
	});

    $.extend($.jui.jcheckTree, {
        version: "0.1.0"
    });
})(jQuery);


/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI datetimepicker Plugin
/*
* jQuery UI datetimepicker 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/


/*
* Author: ZhangJian
* Create date: 2012年9月27日 16:43:24
* Description: 日历控件
*/

/*
* items:
*		datetimeType:日期控件类型
*       datetimeParse:日期显示格式
*       display:日期呈现类型false/true
*       readonly:文本框只读ture/false
*       showToday:显示今天
*       value:指定默认显示日期，格式为xxxx-xx-xx
*/

(function ($, undefined) {
    $.widget("jui.jdatetimepicker",
	{
	    // default options
	    options: {
	        datetimeType: ""
            , datetimeParse: ""
            , display: false
            , readonly: false
	        , showToday: false//是否显示今天按钮
            , value:""//格式为xxxx-xx-xx
	    },

	    _create: function () {
	        var
                self = this,
	            e = $(this.element),
	            data = this.options,
	            showToday = data.showToday,
	            datetimeType = data.datetimeType,
	            datetimeParse = data.datetimeParse,
	            display = data.display,
	            readonly = data.readonly,
                default_value = data.value,
	            date = new Date(),
	            y = date.getFullYear(), //今年
	            m = date.getMonth(),//当月
	            d = date.getDate(),//今日
	            longMonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	            shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	            shortWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	            longWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	            shortWeekCN = ['日', '一', '二', '三', '四', '五', '六'],
	            longWeekCN = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
	            MonthNamesCN = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                arrayDate = ["00","01", "02", "03", "04", "05", "06", "07", "08", "09" ],
	            fullDay = [1, 3, 5, 7, 8, 10, 12],
	            maxDay = null,
	            max = false,
	            weekResult = null,//列
	            roll = null,//行               
	            elementId = "_" + e.attr("id"),
	            hideValue = null,
	            y_value = null,
	            ym_value = null,
	            setVal_y = null,
	            setVal_M = null,
	            outDiv = "<div id='" + elementId + "_outDiv' class='jui-datetimepicker'></div>",//外层div	           

	            head = "<div id='" + elementId + "_headDiv' class='jui-datetimepicker-dhead'>"
                + "<a id='" + elementId + "_prev' title='上一页' class='jui-datetimepicker-prev'><span class='ui-icon ui-icon-circle-triangle-w'>&nbsp;</span></a>"
                + "<div id='" + elementId + "_yearDiv' class='jui-datetimepicker-headcenter'><input type='button' value='" + (y - 5) + "~" + (y + 4) + "' /></div>"
                + "<a id='" + elementId + "_next' title='下一页' class='jui-datetimepicker-next'><span class='ui-icon ui-icon-circle-triangle-e'>&nbsp;</span></a>"
                + "</div>",//头部
                save_y = y,
                save_m = m + 1;

	        //字符串转日期
	        var strToDate = function (str) {
	            var val = Date.parse(str);
	            var newDate = new Date(val);
	            return newDate;
	        }
	        //补零
	        var getNewDate = function (date) {
	            return arrayDate[date] || date;
	        }
	        //去样式
	        var noCss = function () {
	            $("#" + elementId + "_tb td a").each(function () {
	                var a = $(this);
	                if (a.text() == "") {a.removeClass();}
	            });
	        }

	        //填日期
	        var writeDate = function () {
	            var write_y = parseInt($("#" + elementId + "_btn_y").attr("value"));
	            var write_m = parseInt($("#" + elementId + "_btn_m").attr("value"));
	            var fullDay = [1, 3, 5, 7, 8, 10, 12];
	            var maxDay = null;
	            var max = false;
	            $.each(fullDay, function (key, val) {
	                if (val == write_m)
	                    max = true;
	            });
	            if (max) {
	                maxDay = 31;
	            } else {
	                if (write_m == 2) {
	                    if ((write_y % 4 == 0 && write_y % 100 != 0) || (write_y % 400 == 0)) {
	                        maxDay = 29;
	                    } else {
	                        maxDay = 28;
	                    }
	                } else {
	                    maxDay = 30;
	                }
	            }
	            var myDate = new Date();
	            myDate.setFullYear(write_y);
	            myDate.setMonth(write_m - 1);
	            myDate.setDate(1);
	            var fir = myDate.getDay();//例:0(周日)
	            var weekResult = null;//列
	            var roll = null;//行           
	            for (var i = 1; i <= maxDay; i++) {
	                $("#" + elementId + "_tb").find("tr:eq(6)").remove();
	                myDate.setDate(i);
	                weekResult = myDate.getDay();//例:0(周日)
	                if (i < (8 - fir))
	                    roll = 1;
	                if (i >= (8 - fir) && i < (15 - fir))
	                    roll = 2;
	                if (i >= (15 - fir) && i < (22 - fir))
	                    roll = 3;
	                if (i >= (22 - fir) && i < (29 - fir))
	                    roll = 4;
	                if (i >= (29 - fir) && i < (36 - fir))
	                    roll = 5;
	                if (i >= (36 - fir)) {
	                    roll = 6;
	                    $("#" + elementId + "_tb").append("<tr></tr>");
	                    if (i == 31) {
	                        $("#" + elementId + "_tb").find("tr:eq(6)").empty();
	                        if (fir == 5)
	                            $("#" + elementId + "_tb").find("tr:eq(6)").append("<td ><a href='#'></a></td>");
	                        if (fir == 6)
	                            $("#" + elementId + "_tb").find("tr:eq(6)").append("<td ><a href='#'></a></td><td ><a href='#'></a></td>");
	                        $("#" + elementId + "_tb").find("tr:eq(" + roll + ")").find("td:eq(" + (weekResult - 1) + ")").find("a").html(i - 1);
	                    }
	                    if (i == 30) {
	                        $("#" + elementId + "_tb").find("tr:eq(6)").empty();
	                        $("#" + elementId + "_tb").find("tr:eq(6)").append("<td ><a href='#'></a></td>");
	                    }
	                    $("#" + elementId + "_tb").find("a").addClass("jui-datetimepicker-table-tr-a");
	                }
	                $("#" + elementId + "_tb").find("tr:eq(" + roll + ")").find("td:eq(" + weekResult + ")").find("a").html(i);
	                $("#" + elementId + "_tb").find("a").addClass("jui-datetimepicker-table-tr-a");
	                clickToHide();
	                noCss();
	            }

	        }

	        //默认选中当天日期的样式
	        var activeCss = function () {
	            var act_y = parseInt($("#" + elementId + "_btn_y").attr("value"));//当前选择的年份
	            var act_m = parseInt($("#" + elementId + "_btn_m").attr("value")-1);//当前选择的月份
	            $("#" + elementId + "_tb a").each(function () {
	                if (default_value) {
	                    y = strToDate(default_value).getFullYear(),
                        m = strToDate(default_value).getMonth(),
                        d = strToDate(default_value).getDate();
	                    if ($(this).text() == d && act_y == y && (act_m == m))
	                        $(this).removeClass("jui-datetimepicker-table-tr-a").addClass("jui-datetimepicker-now ");
	                } else {
	                    if ($(this).text() == date.getDate() && act_y == date.getFullYear() && (act_m == date.getMonth()))
	                        $(this).removeClass("jui-datetimepicker-table-tr-a").addClass("jui-datetimepicker-now ");
	                }
	            });
	        }
	        var activeCss_y = function () {
	            $("#" + elementId + "_tb a").each(function () {
	                if ($(this).text() == date.getFullYear())
	                    $(this).removeClass("jui-datetimepicker-table-tr-a").addClass("jui-datetimepicker-now ");
	            });
	        }
	        var activeCss_ym = function () {
	            $("#" + elementId + "_tb a").each(function () {
	                if ($(this).text() == date.getMonth()+1)
	                    $(this).removeClass("jui-datetimepicker-table-tr-a").addClass("jui-datetimepicker-now ");
	            });
	        }
	        //标记选择日期
	        var choseDate = function () {
	            var chose_y = parseInt($("#" + elementId + "_btn_y").attr("value"));
	            var chose_m = parseInt($("#" + elementId + "_btn_m").attr("value"));
	            $("#" + elementId + "_tb td").each(function () {
	                if ($(this).text() == hideValue && chose_y == setVal_y && chose_m == setVal_M) {
	                    $(this).children("a").addClass("jui-datetimepicker-active");
	                }
	            });
	        }
	        var choseDate_y = function () {
	            if ($(this).text() == save_y ) {
	                $(this).children("a").addClass("jui-datetimepicker-active");
	            }
	        }
	        var choseDate_ym = function () {
	            if ($(this).text() == save_m) {
	                $(this).children("a").addClass("jui-datetimepicker-active");
	            }
	        }
            //今天按钮的点击事件
	        var today_click = function () {
	            $("#btn_" + elementId).click(function () {
	                $("#" + elementId + "_tb").remove();
	                save_y = date.getFullYear();
	                save_m = date.getMonth()+1;
	                yMd();
	                var international_val, china_val;
	                var istr = date.getFullYear() + "-" + getNewDate(date.getMonth() + 1) + "-" + getNewDate(date.getDate());
	                var cstr = date.getFullYear() + "年" + getNewDate(date.getMonth() + 1) + "月" + getNewDate(date.getDate()) + "日";
	                if (display) {
	                    international_val = function () {$("#show_date").text(istr);}
	                    china_val = function () {$("#show_date").text(cstr);}
	                } else {
	                    international_val = function () { e.val(istr); }
	                    china_val = function () { e.val(cstr); }	                 
	                }
	                switch (datetimeParse) {
	                    case 'yyyy年MM月dd日':
	                        china_val(date);
	                        break;
	                    case 'yyyy-MM-dd':
	                        international_val(date);
	                        break;
	                    default:
	                        china_val(date);
	                        break;
	                }
	            });
	        }

	        //高亮并赋值
	        var setVal = function () {
	            $("#" + elementId + "_tb td a").click(function () {
	                hideValue = $(this).text();
	                $("#" + elementId + "_tb td a").removeClass("jui-datetimepicker-active").addClass("jui-datetimepicker-table-tr-a");
	                $(this).addClass("jui-datetimepicker-active"); //高亮	
	                activeCss();
	                setVal_y = $("#" + elementId + "_btn_y").attr("value");
	                setVal_M = $("#" + elementId + "_btn_m").attr("value");
	                var internationalStr = setVal_y + "-" + setVal_M + "-" + getNewDate(hideValue);
	                var chinaStr = setVal_y + "年" + setVal_M + "月" + getNewDate(hideValue) + "日";
	                var international_val, china_val;
	                if (display) {
	                    international_val = function () {$("#show_date").text(internationalStr)}
	                    china_val = function () {$("#show_date").text(chinaStr);}
	                } else {
	                    international_val = function () {e.val(internationalStr);}
	                    china_val = function () {e.val(chinaStr);}
	                }
	                switch (datetimeParse) {
	                    case 'yyyy年MM月dd日':
	                        china_val(setVal_y, setVal_M);
	                        break;
	                    case 'yyyy-MM-dd':
	                        international_val(setVal_y, setVal_M);
	                        break;
	                    default:
	                        china_val(setVal_y, setVal_M);
	                        break;
	                }
	                noCss();
	            });
	        }
	        //高亮并赋值
	        var lightAndSetValue = function () {
	            $("#" + elementId + "_tb td").click(function () {
	                save_y = $(this).text();
	                $("#" + elementId + "_prev").unbind("click");
	                $("#" + elementId + "_next").unbind("click");
	                $("#" + elementId + "_tb").remove();
	                yMd();
	            });
	        }
	        
	        //默认高亮
	        var defaultheightLight = function () {
	            $("#" + elementId + "_tb td").each(function () {
	                if ($(this).text() == save_y) {
	                    $(this).children("a").addClass("jui-datetimepicker-active");
	                }
	            });
	        }
	        //点击消失
	        var clickToHide = function () {
	            if (display == false) {
	                $("#" + elementId + "_tb a").click(function () {
	                    $("#" + elementId + "_outDiv").hide();
	                });
	            } 
	        }
	        
	        //年
	        var whenYYYY = function () {
	            var table = "<table id='" + elementId + "_tb' class='jui-datetimepicker-table'></table>"; //表格
	            $("#" + elementId + "_outDiv").append(table); //添加下部内容
	            var makeCells = function () {
	                $("#" + elementId + "_tb").empty();
	                for (var i = 0; i < 5; i++) {
	                    $("#" + elementId + "_tb").append("<tr><td><a href='#'>" + (parseInt(save_y) - 5 + i) + "</a></td><td><a href='#'>" + (parseInt(save_y) + i) + "</a></td></tr>");
	                }
	                if (datetimeParse == "yyyy-MM-dd") {
	                    $("#" + elementId + "_yearDiv").find("span").html((parseInt(save_y) - 5) + " ~ " + (parseInt(save_y) + 4));
	                } else {
	                    $("#" + elementId + "_yearDiv").find("span").html((parseInt(save_y) - 5) + " 年 ~ " + (parseInt(save_y) + 4 + " 年"));
	                }
	                $("#" + elementId + "_tb a").addClass("jui-datetimepicker-table-tr-a");
	            }
	            //前翻页
	            $("#" + elementId + "_prev").bind("click", function () {
	                save_y = parseInt(save_y) -10;
	                makeCells();
	                lightAndSetValue();
	                activeCss_y();
	            });
	            //后翻页
	            $("#" + elementId + "_next").bind("click", function () {
	                save_y = parseInt(save_y) + 10;
	                makeCells();
	                lightAndSetValue();
	                activeCss_y();
	            });
	            makeCells();
	            $("#btn_" + elementId).remove();                
	            lightAndSetValue();
	            activeCss_y();
	        }
	        //年月
	        var yM = function () {
	            var saveM;
	            $("#" + elementId + "_yearDiv").children("span").html(save_y);
	            $("#" + elementId + "_outDiv").append("<table id='" + elementId + "_tb' class='jui-datetimepicker-table'></table>"); //添加下部内容
	            for (var i = 0; i < 6; i++) {
	                $("#" + elementId + "_tb").append("<tr><td><a href='#'>" + (2 * i + 1) + "</a></td><td><a href='#'>" + (2 * i + 2) + "</a></td></tr>");
	            }
	            var click_yM = function () {
	                $("#" + elementId + "_yearDiv").children("span").html(save_y);
	            }
	            //前翻页
	            $("#" + elementId + "_prev").bind("click", function () {
	                save_y =parseInt(save_y) - 1;
	                click_yM(y);
	            });
	            //后翻页
	            $("#" + elementId + "_next").bind("click", function () {
	                save_y=parseInt(save_y)+1;
	                click_yM(y);
	            });
	            //高亮并赋值            
	            $("#" + elementId + "_tb td").click(function () {
	                save_m = $(this).text();
	                if (save_m < 10) {
	                    save_m = "0" + save_m;
	                }
	                $("#" + elementId + "_prev").unbind("click");
	                $("#" + elementId + "_next").unbind("click");
	                $("#" + elementId + "_tb").remove();
	                yMd();
	            });
	            $("#" + elementId + "_btn_y").click(function () {
	                $("#" + elementId + "_yearDiv").empty();
	                if (datetimeParse == "yyyy-MM-dd") {
	                    $("#" + elementId + "_yearDiv").append("<span style='display:inline-block;font-size:13px;'>" + (parseInt(save_y) - 5) + " ~ " + (parseInt(save_y) + 4) + "</span>");
	                } else {
	                    $("#" + elementId + "_yearDiv").append("<span style='display:inline-block;font-size:13px;'>" + (parseInt(save_y) - 5) + " 年 ~ " + (parseInt(save_y) + 4) + " 年</span>");
	                }
	                $("#" + elementId + "_tb").remove();
	                $("#" + elementId + "_prev").unbind("click");
	                $("#" + elementId + "_next").unbind("click");
	                whenYYYY();
	            });
	            $("#" + elementId + "_tb td a").addClass("jui-datetimepicker-table-tr-a");
	            $("#btn_" + elementId).remove();
	            activeCss_ym();
	        }
            //年月日
	        var yMd = function () {
	            $("#btn_" + elementId).remove();
	            $("#" + elementId + "_yearDiv").empty();
	            if (datetimeParse == "yyyy-MM-dd") {
	                $("#" + elementId + "_yearDiv").append("<div id='_month" + elementId + "' style='display:inline-block;'><input type='button' value='" + getNewDate(save_m) + "' id='" + elementId + "_btn_m'/><span style='display: inline-block;'>-</span></div>" +
                        "<div id='_year" + elementId + "' style='display:inline-block;'><input type='button' value='" + save_y + "' id='" + elementId + "_btn_y'/></div>");//年月
	                $("#" + elementId + "_headDiv").children("a:eq(1)").attr("title", "next");
	                $("#" + elementId + "_headDiv").children("a:eq(0)").attr("title", "previous");
	            } else {
	                $("#" + elementId + "_yearDiv").append("<div id='_year" + elementId + "' style='display:inline-block;'><input type='button' value='" + save_y + "' id='" + elementId + "_btn_y'/><span style='display: inline-block;'>年</span></div>" +
                        "<div id='_month" + elementId + "' style='display:inline-block;'><input type='button' value='" + getNewDate(save_m) + "' id='" + elementId + "_btn_m'/><span style='display: inline-block;'>月</span></div>");//月年
	                $("#" + elementId + "_headDiv").children("a:eq(1)").attr("title", "下一页");
	                $("#" + elementId + "_headDiv").children("a:eq(0)").attr("title", "上一页");
	            }
	            //显示日期的表格结构
	            var table = "<table id='" + elementId + "_tb' class='jui-datetimepicker-table'></table>";
	            $("#" + elementId + "_outDiv").append(table);
	            $("#" + elementId + "_tb").append("<tr></tr>");//表格头部
	            var long_week, short_week;
	            switch (datetimeParse) {
	                case 'yyyy-MM-dd':
	                    long_week = longWeek;
	                    short_week = shortWeek; break;
	                case 'yyyy年MM月dd日':
	                    long_week = longWeekCN;
	                    short_week = shortWeekCN; break;
	                default:
	                    long_week = longWeekCN;
	                    short_week = shortWeekCN; break;
	            }
	            for (var k = 0; k < short_week.length; k++) {
	                $("#" + elementId + "_tb tr").append("<td><span class='jui-datetimepicker-week' title='" + long_week[k] + "'>" + short_week[k] + "</span></td>");
	            }
	            for (var i = 0; i < 5; i++) {
	                $("#" + elementId + "_tb").append("<tr></tr>");
	                for (var j = 0; j < 7; j++) {
	                    $("#" + elementId + "_tb").find("tr:eq(" + (i + 1) + ")").append("<td><a href='#'></a></td>");
	                }
	            }
	            writeDate();
	            setVal();
	            $("#" + elementId + "_prev").bind("click",function () {                    
	                $("#" + elementId + "_tb a").removeClass("jui-datetimepicker-active");
	                var btn_m_val = parseInt($("#" + elementId + "_btn_m").attr("value"));
	                var btn_y_val = parseInt($("#" + elementId + "_btn_y").attr("value"));
	                if (btn_m_val <= 10) {
	                    $("#" + elementId + "_btn_m").attr("value", "0" + (btn_m_val - 1))
	                    if (btn_m_val == "01") {
	                        $("#" + elementId + "_btn_m").attr("value", 12);
	                        $("#" + elementId + "_btn_y").attr("value", btn_y_val - 1);
	                    }
	                } else {
	                    $("#" + elementId + "_btn_m").attr("value", btn_m_val - 1)
	                }
	                $("#" + elementId + "_tb a").text("");//清空
	                writeDate();
	                choseDate();
	                setVal();
	                activeCss();
	            }); //前翻
	            $("#" + elementId + "_next").bind("click", function () {
	                $("#" + elementId + "_tb").find("a").removeClass("jui-datetimepicker-active");
	                var btn_m_val = parseInt($("#" + elementId + "_btn_m").attr("value"));
	                var btn_y_val = parseInt($("#" + elementId + "_btn_y").attr("value"));
	                if (btn_m_val <9) {
	                    $("#" + elementId + "_btn_m").attr("value", "0" + (btn_m_val + 1))
	                } else {
	                    $("#" + elementId + "_btn_m").attr("value", btn_m_val + 1)
	                }
	                if (btn_m_val == 12) {
	                    $("#" + elementId + "_btn_m").attr("value", "01");
	                    $("#" + elementId + "_btn_y").attr("value", btn_y_val + 1);
	                }
	                $("#" + elementId + "_tb a").text("");//清空
	                writeDate();
	                choseDate();
	                setVal();
	                activeCss();
	            });//后翻
	            activeCss();
	            $("#" + elementId + "_btn_y").click(function () {
	                $("#" + elementId + "_yearDiv").empty();
	                if (datetimeParse == "yyyy-MM-dd") {
	                    $("#" + elementId + "_yearDiv").append("<span style='display:inline-block;font-size:13px;'>" + (parseInt(save_y) - 5) + " ~ " + (parseInt(save_y) + 4) + "</span>");
	                } else {
	                    $("#" + elementId + "_yearDiv").append("<span style='display:inline-block;font-size:13px;'>" + (parseInt(save_y) - 5) + " 年 ~ " + (parseInt(save_y) + 4) + " 年</span>");
	                }
	                $("#" + elementId + "_tb").remove();
	                $("#" + elementId + "_prev").unbind("click");
	                $("#" + elementId + "_next").unbind("click");
	                whenYYYY();
	            });
	            $("#" + elementId + "_btn_m").click(function () {
	                $("#" + elementId + "_yearDiv").empty();
	                if (datetimeParse == "yyyy-MM-dd") {
	                    $("#" + elementId + "_yearDiv").append("<div id='_year" + elementId + "' style='display:inline-block;'><input type='button' value='" + save_y + "' id='" + elementId + "_btn_y'/></div>");
	                } else {
	                    $("#" + elementId + "_yearDiv").append("<div id='_year" + elementId + "' style='display:inline-block;'><input type='button' value='" + save_y + "' id='" + elementId + "_btn_y'/>年</div>");
	                }
	                $("#" + elementId + "_tb").remove();
	                $("#" + elementId + "_prev").unbind("click");
	                $("#" + elementId + "_next").unbind("click");
	                yM();
	            });
	            if (showToday) {
	                $("#" + elementId + "_tb").after("<input id='btn_" + elementId + "' type='button' value='今天' />");
	                today_click();
	            }
	        }
            //时分秒
	        var hms = function () {
	            $("#" + elementId + "_outDiv").empty().css({"padding":"0 15px 0 15px"});
	            $("#" + elementId + "_outDiv").append("<table style='width:100%;' id='tab_" + elementId + "'>" +
                    "<tr><td></td><td><span>00</span>时<span>00</span>分<span>00</span>秒</td></tr>" +
                    "<tr><td>时:</td><td><div id='" + elementId + "_slider_h'></div></td></tr>" +
                    "<tr><td>分:</td><td><div id='" + elementId + "_slider_m'></div></td></tr>" +
                    "<tr><td>秒:</td><td><div id='" + elementId + "_slider_s'></div></td></tr>" +
                    "</table>");
	            $("#tab_" + elementId).find("tr td").css({ "padding-top": "4px", "padding-bottom": "4px" });
	            $("#tab_" + elementId).find("span").css({"padding-left":"4px","padding-right":"4px"});
	            hms_HH();
	            hms_mm();
	            hms_ss();
	            $("#tab_" + elementId).after("<div style='height:30px;'><div style='float:left;'><input type='button' value='现在' id='slider_now' /></div><div style='float:right;'><input type='button' value='完成' id='slider_ok' /></div></div>");
	            $("#slider_ok").click(function () {
	                e.val($("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)").text());
	                if (display == false) {
	                    $("#" + elementId + "_outDiv").hide();
	                }
	            });
	            $("#slider_now").click(function () {
	                var date_now = new Date();
	                var now_HH = date_now.getHours() < 10 ? "0" + date_now.getHours() : date_now.getHours();
	                var now_mm = date_now.getMinutes() < 10 ? "0" + date_now.getMinutes() : date_now.getMinutes();
	                var now_ss = date_now.getSeconds() < 10 ? "0" + date_now.getSeconds() : date_now.getSeconds();
	                $("#" + elementId + "_slider_h").slider("value", now_HH);
	                $("#" + elementId + "_slider_m").slider("value", now_mm);
	                $("#" + elementId + "_slider_s").slider("value", now_ss);
	                var slider_td = $("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)");
	                slider_td.find("span:eq(0)").text(now_HH);
	                slider_td.find("span:eq(1)").text(now_mm);
	                slider_td.find("span:eq(2)").text(now_ss);
	           
	            });
	        }
            //时分
	        var hm = function () {
	            $("#" + elementId + "_outDiv").empty().css({ "padding": "0 15px 0 15px" });
	            $("#" + elementId + "_outDiv").append("<table style='width:100%;' id='tab_" + elementId + "'>" +
                    "<tr><td></td><td><span>00</span>时<span>00</span>分</td></tr>" +
                    "<tr><td>时:</td><td><div id='" + elementId + "_slider_h'></div></td></tr>" +
                    "<tr><td>分:</td><td><div id='" + elementId + "_slider_m'></div></td></tr>" +
                    "</table>");
	            $("#tab_" + elementId).find("tr td").css({ "padding-top": "4px", "padding-bottom": "4px" });
	            $("#tab_" + elementId).find("span").css({ "padding-left": "4px", "padding-right": "4px" });
	            hms_HH();
	            hms_mm();
	            $("#tab_" + elementId).after("<div style='height:30px;'><div style='float:left;'><input type='button' value='现在' id='" + elementId + "slider_now' /></div><div style='float:right;'><input type='button' value='完成' id='" + elementId + "slider_ok' /></div></div>");
	            $("#" + elementId + "slider_ok").click(function () {
	                e.val($("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)").text());
	                if (display == false) {
	                    $("#" + elementId + "_outDiv").hide();
	                }
	            });
	            $("#" + elementId + "slider_now").click(function () {
	                var date_now = new Date();
	                var now_HH = date_now.getHours() < 10 ? "0" + date_now.getHours() : date_now.getHours();
	                var now_mm = date_now.getMinutes() < 10 ? "0" + date_now.getMinutes() : date_now.getMinutes();
	                $("#" + elementId + "_slider_h").slider("value", now_HH);
	                $("#" + elementId + "_slider_m").slider("value", now_mm);
	                var slider_td = $("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)");
	                slider_td.find("span:eq(0)").text(now_HH);
	                slider_td.find("span:eq(1)").text(now_mm);

	            });
	        }
            //时
	        var h = function () {
	            $("#" + elementId + "_outDiv").empty().css({ "padding": "0 15px 0 15px" });
	            $("#" + elementId + "_outDiv").append("<table style='width:100%;' id='tab_" + elementId + "'>" +
                    "<tr><td></td><td><span>00</span>时</td></tr>" +
                    "<tr><td>时:</td><td><div id='" + elementId + "_slider_h'></div></td></tr>" +
                    "</table>");
	            $("#tab_" + elementId).find("tr td").css({ "padding-top": "4px", "padding-bottom": "4px" });
	            $("#tab_" + elementId).find("span").css({ "padding-left": "4px", "padding-right": "4px" });
	            hms_HH();
	            $("#tab_" + elementId).after("<div style='height:30px;'><div style='float:left;'><input type='button' value='现在' id='" + elementId + "slider_now' /></div><div style='float:right;'><input type='button' value='完成' id='" + elementId + "slider_ok' /></div></div>");
	            $("#" + elementId + "slider_ok").click(function () {
	                e.val($("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)").text());
	                if (display == false) {
	                    $("#" + elementId + "_outDiv").hide();
	                }
	            });
	            $("#" + elementId + "slider_now").click(function () {
	                var date_now = new Date();
	                var now_HH = date_now.getHours() < 10 ? "0" + date_now.getHours() : date_now.getHours();
	                $("#" + elementId + "_slider_h").slider("value", now_HH);
	                var slider_td = $("#tab_" + elementId).find("tr:eq(0)").find("td:eq(1)");
	                slider_td.find("span:eq(0)").text(now_HH);
	            });
	        }
	        var hms_HH = function () {
	            var span_h = $("#tab_" + elementId).find("tr:eq(0)").find("span:eq(0)");
	            $("#" + elementId + "_slider_h").slider({
	                range: "min",
	                min: 0,
	                max: 23,
                    value:0,
                    slide: function (event, ui) {
                        if ($("#" + elementId + "_slider_h").find("a").attr("outline-color") != "transparent") {
                            $("#" + elementId + "_slider_h").find("a").css("outline-color", "transparent");
                        }
                        if (ui.value < 10) {
                            ui.value ="0"+ ui.value;
                        }
	                    span_h.html(ui.value);
                    }
	            });
	            $("#" + elementId + "_slider_h").find("a").mousedown(function () {
	                $(this).css("outline-color","transparent");
	            });
	        }
	        var hms_mm = function () {
	            var span_m = $("#tab_" + elementId).find("tr:eq(0)").find("span:eq(1)");
	            $("#" + elementId + "_slider_m").slider({
	                range: "min",
	                min: 0,
	                max: 60,
	                value: 0,
	                slide: function (event, ui) {
	                    if ($("#" + elementId + "_slider_m").find("a").attr("outline-color") != "transparent") {
	                        $("#" + elementId + "_slider_m").find("a").css("outline-color", "transparent");
	                    }
	                    if (ui.value < 10) {
	                        ui.value = "0" + ui.value;
	                    }
	                    span_m.html(ui.value);
	                }
	            });
	            $("#" + elementId + "_slider_m").find("a").mousedown(function () {
	                $(this).css("outline-color", "transparent");
	            });
	        }
	        var hms_ss = function () {
	            var span_s = $("#tab_" + elementId).find("tr:eq(0)").find("span:eq(2)");
	            $("#" + elementId + "_slider_s").slider({
	                range: "min",
	                min: 0,
	                max: 60,
	                value: 0,
	                slide: function (event, ui) {
	                    if ($("#" + elementId + "_slider_s").find("a").attr("outline-color") != "transparent") {
	                        $("#" + elementId + "_slider_s").find("a").css("outline-color", "transparent");
	                    }
	                    if (ui.value < 10) {
	                        ui.value = "0" + ui.value;
	                    }
	                    span_s.html(ui.value);
	                }
	            });
	            $("#" + elementId + "_slider_s").find("a").mousedown(function () {
	                $(this).css("outline-color", "transparent");
	            });
	        }
            
	        if (display == false) {	            
	            e.wrap("<div style='display:inline-block;'></div>").after(outDiv);//text占一行
	        } else {
	            e.append(outDiv);
	            e.after("<span id='show_date' style='display:block;'></span>");
	            $("#" + elementId + "_outDiv").css("float", "none").css("position", "relative");
	            e.css("display", "block");
	        }
	        //添加头部内容
	        $("#" + elementId + "_outDiv").append(head);
	        if (default_value) {
	            y = strToDate(default_value).getFullYear(),
                m = strToDate(default_value).getMonth(),
                d = strToDate(default_value).getDate();
	            e.val(y + "年" + getNewDate(parseInt(m) + 1) + "月" + getNewDate(d) + "日"); //赋值 
	            if (display) {
	                $("#show_date").text(y + "年" + getNewDate(parseInt(m) + 1) + "月" + getNewDate(d) + "日"); //赋值 
	            }
	        }
	        //判断点击显示或总是显示
	        if (display == false) {
	            $("#" + elementId + "_outDiv").hide();
	            e.focus(function () {
	                $("#" + elementId + "_outDiv").show();
	            });

	            $(document).bind("mousedown", function (evt) {
	                if ($(evt.target).parents('#' + elementId + '_outDiv').length == 0 && $(evt.target).attr("id")!=e.attr("id")) {
	                    $("#" + elementId + "_outDiv").hide();
	                }
	            });
	        }
	        if (readonly == true) {
	            e.attr("readonly", "readonly");
	        }
	        $("#" + elementId + "_outDiv").bind("selectstart", function () { return false; });//界面无法选中
	        $("#" + elementId + "_outDiv").bind("contextmenu", function () { return false; });//禁用右键
	        switch (datetimeType) {
	            case 'yyyy':
	                whenYYYY();
	                break;
	            case 'yyyy-MM':
	                yM();
	                break;
	            case 'yyyy-MM-dd':
	                yMd();
	                break;
	            case 'hh-mm-ss':
	                hms();
	                break;
                case 'hh-mm':
                    hm();
                    break;
                case 'hh':
                    h();
                    break;
	            default:
	                yMd();
	        }
	    },
        
	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	        this._create();
	    },

	    _setOptions: function (options) {
	        var self = this;
	        $.each(options, function (key, value) {
	            self._setOption(key, value);
	        });
	    },

	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();
	        return this;
	    }
	});

    $.extend($.jui.jheadMenu, {
        version: "0.1.0"
    });
})(jQuery);


/// <reference path="../../Views/Home/linkHtml.cshtml" />
/// <reference path="../jquery-1.8.1-vsdoc.js" />
/// <reference path="../jquery-ui-1.8.23.js" />

//JQuery UI search Plugin
/*
* jQuery UI search
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*	chosen.jquery.js
*	jui.jselect.js
*	jui.jdatetimepicker.js
*   jui.jradio.js
*   jui.jcheckbox.js
*/


/*
* Author: Leidc
* Start date: 2012-11-23 16:30
* Description: 查询控件
* 
*/

/*
* options:
       items：[{item},{item}]
*		    item:{Name:"名称",Id:"名称",Type:"类型",,name:'',MaxLength:最大长度,Brother:[同级集合],content:"内容",Value:[部分控件的数据源]}
*		   
        Type:
                  string :字符串  { Name: "字符串", Id: "txt_Name", Type: "string", MaxLength: 5 }
*                 int：单个整数   { Name: "两位整数", Id: "txt_int", Type: "int", MaxLength: 2 }
*		          intRange:范围整数 	{ Name: "范围整数", Id: "txt_intStart", Type: "intRange", MaxLength: 3, Brother: [{ Id: "txt_intEnd", MaxLength: 4 }] }
                  double：单个小数和整数  { Name: "小数和整数", Id: "txt_double", Type: "double" }
*		          doubleRange:整数和小数范围{ Name: "范围小数和整数", Id: "txt_doubleStart", Type: "doubleRange", Brother: [{ Id: "txt_doubleEnd" }] }
                  date:单个日期 { Name: "单个日期", Id: "txt_Time", Type: "date" }
                  dateRange:日期范围 { Name: "两个日期", Id: "date_StartTime", Type: "dateRange", Brother: [{ Id: "date_EndTime" }] }
                  radio:单选按钮{ Name: "单选按钮", Id: "btn-radio", name: "radio-hobby", Type: "radio", Value: [{ value: "羽毛球", text: "羽毛球" }, { value: "篮球", text: "篮球", selected: true }, { value: "乒乓球", text: "乒乓球" }] }
                  checkbox:多选按钮  { Name: "多选按钮", Id: "btn-checkbox", name: "checkbox-hobby", Type: "checkbox", Value: [{ value: "羽毛球", text: "羽毛球", selected: true }, { value: "篮球", text: "篮球", selected: true }, { value: "乒乓球", text: "乒乓球" }] }
                  selectSingle:单选select { Name: "单选", Id: "txt_State1", Type: "selectSingle", Value: [{ value: 0, text: "全部" }, { value: 1, text: "正常" }, { value: 2, text: "停用", selected: true }] }
*                 selectMultiple:多选select { Name: "多选", Id: "txt_State", Type: "selectMultiple", Value: [{ value: 0, text: "全部" }, { value: 1, text: "正常" }, { value: 2, text: "停用" }] }
                  custom:用户自定义 { Name: "自定义", Type: "custom", Content: "<input  id='txt_content1' name='text' type='text' >" }

            Id:
                单个item生成之后的ID名称

            Name:
                名称(都必填)

            name:
                在Type为 radio或者checkbox是必须出现的

            Maxlength：
                    在Type为string、int 、intRange、intRange中Brother属性值设置
            
            Brother：
                    {} Type为intRange设置为 Brother:{Id: "编号", MaxLength: 长度 };
                       Type为doubleRange和dateRange设置为Brother:{Id: "编号"};
            content:
                    在Type为 custom时 才能设置对自定义内容

           onSearchButtonClick： //事件返回一个obj

* event
*		getSearchConditionReturnString:返回字符串
*		getSearchCondionReturnList:返回对象
*	    
*/

(function ($, undefined) {
    $.widget("jui.jsearch",
	{
	    options: {
	        items:null,
	        onSearchButtonClick: null
            
	    },

	    _create: function () {
	   
	        var e = $(this.element);
	        $(this.element).empty();
	        o = this.options;
	    
	        if (o.items != null) {
	         
	            this._showTable();
	            this._setLimit();
	            this._onButtonClick();

	        }else{
	            var tagId = this.element.attr("id");/*目标的id*/
	            $("#"+tagId).append("<span style='color:red;'>错误！！！请检查数据源</span>");
	        }


	    },
	    getSearchConditionReturnString: function () {
	        var conditionList = this._returnList();
	        var conditonString = "";
	        for (var i in conditionList) {
	            conditonString += i + "=" + conditionList[i] + "&";
	        }
	        return conditonString;   
	    },
	    getSearchCondionReturnList: function () {
	        return this._returnList();
	    },
	    _returnList: function () {
	        var e = $(this.element);
	        o = this.options;
	        var count = o.items.length;
	        var tagId = this.element.attr("id");/*目标的id*/
	        var tableId = tagId + "_table";
	        var trId = tagId + "_tr_";
	        var returnList = {};
	        for (var i = 0; i < count ; i++) {
	            switch (o.items[i]["Type"]) {
	                case "int":
	                    returnList[o.items[i]["Id"]] = parseInt($("#" + o.items[i]["Id"]).val());
	                    break;
	                case "intRange":
	                    returnList[o.items[i]["Id"]] = parseInt($("#" + o.items[i]["Id"]).val());
	                    returnList[o.items[i]["Brother"][0]["Id"]] = parseInt($("#" + o.items[i]["Brother"][0]["Id"]).val());
	                    break;
	                case "double":
	                    returnList[o.items[i]["Id"]] = $("#" + o.items[i]["Id"]).val();
	                    break;
	                case "doubleRange":
	                    returnList[o.items[i]["Id"]] = $("#" + o.items[i]["Id"]).val();
	                    returnList[o.items[i]["Brother"][0]["Id"]] = $("#" + o.items[i]["Brother"][0]["Id"]).val();
	                    break;
	                case "date":
	                    returnList[o.items[i]["Id"]] = $("#" + o.items[i]["Id"]).val();
	                    break;
	                case "dateRange":
	                    returnList[o.items[i]["Id"]] = $("#" + o.items[i]["Id"]).val();
	                    returnList[o.items[i]["Brother"][0]["Id"]] = $("#" + o.items[i]["Brother"][0]["Id"]).val();
	                    break;
	                case "radio":
	                    returnList[o.items[i]["name"]] = $(":radio[name='" + o.items[i]["name"] + "'][checked]").val();
	                    break;
	                case "checkbox":
	                    var checkboxValue = "";
	                    $('input[name=' + o.items[i]["name"] + ']:checked').each(function () {
	                        checkboxValue += $(this).val() + "_";
	                    });
	                    returnList[o.items[i]["name"]] = checkboxValue.substring(0, checkboxValue.length - 1);
	                    break;
	                case "selectSingle":
	                    var selectSingleValue = $("#" + trId + i + "_td").jSelect("getSelectValueText");
	                    returnList[o.items[i]["Id"]] = selectSingleValue.value;
	                    break;
	                case "selectMultiple":
	                    var selectList = $("#" + trId + i + "_td").jSelect("getSelectValueText");
	                    var selectMultipleContent = "";
	                    if (selectList != null) {
	                        for (var n = 0; n < selectList.length; n++) {
	                            selectMultipleContent += selectList[n]["value"] + "_";
	                        }
	                        selectMultipleContent = selectMultipleContent.substring(0, selectMultipleContent.length - 1);
	                    }
	                    returnList[o.items[i]["Id"]] = selectMultipleContent;

	                    break;
	                case "string":
	                    returnList[o.items[i]["Id"]] = $("#" + o.items[i]["Id"]).val();
	                    break;
	            }
	        }
            
	        return  returnList;
	    },

	    _onButtonClick: function () {
	        var self = this;
	        tag = self.options;
	        var tagId = this.element.attr("id");/*目标的id*/
	        var buttonId = tagId + "_btn";
	  
	        $("#" + buttonId).click(function () {
	            if (tag.onSearchButtonClick != null) {
	                tag.onSearchButtonClick(self._returnList());
	            }
	                });
	        
	    
	    },



	    _showTable: function () {

	        $(this.element).empty();
	        var e = $(this.element);
	        o = this.options;
	   
	        var tagId = this.element.attr("id");/*目标的id*/
	        var count = o.items.length;
	        var tableId = tagId + "_table";
	        var buttonId = tagId + "_btn";
	        var trId = tagId + "_tr_";
	        e.addClass("jui-jSearch");
	        e.append("<table id=" + tableId + " width='100%'  cellpadding='0' cellspacing='0'></table>");
	        $("#" + tableId).addClass("ui-jsearch-table");
	        $("#" + tableId).after("<p style='margin-top: 5px; margin-left: 50%;'><input id=" + buttonId + " type='button' value='搜索' /></p>");

	        if (count % 2 == 0) { //创建偶数行 
	            for (var i = 0; i < count / 2; i++) {
	                $("#" + tableId).append("<tr id='" + trId + "" + i + "'></tr>");


	                this._appendEven(i);
	            }
	        }
	        if (count % 2 != 0) {  //创建奇数行
	            for (var i = 0; i < parseInt(count / 2) ; i++) {
	                $("#" + tableId).append("<tr  id='" + trId + "" + i + "'></tr>");

	                this._appendEven(i);
	            }
	            $("#" + tableId).append("<tr id='" + trId + parseInt(count / 2) + "'></tr>");
	            var last = parseInt(count / 2);

	            this._appendLast(last);
	        }

	   

	    },

	    _appendLast:function (last) { //添加最后一条数据

	        var e = $(this.element);
	        o = this.options;
	        var count = o.items.length;
	        var tagId = this.element.attr("id");/*目标的id*/
	        var trId = tagId + "_tr_";

	        switch (o.items[last * 2]["Type"]) {
	            case "string":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%; padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' maxlength=" + o.items[last * 2]["MaxLength"] + "/></td><td></td><td></td>");
	                break;
	            case "int":

	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' maxlength=" + o.items[last * 2]["MaxLength"] + "/></td><td></td><td></td>");
	                break;
	            case "intRange":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' maxlength=" + o.items[last * 2]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[last * 2]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[last * 2]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td><td></td><td></td>");
	                break;

	            case "double":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' maxlength=" + o.items[last * 2]["MaxLength"] + "/></td><td></td><td></td>");
	                break;
	            case "dateRange":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width:36%;'padding-left:5px;><input  id=" + o.items[last * 2]["Id"] + " type='text' maxlength=" + o.items[last * 2]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[last * 2]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[last * 2]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td><td></td><td></td>");
	                break;

	            case "date":

	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' /></td><td></td><td></td>");
	                break;
	            case "dateRange":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[last * 2]["Id"] + " type='text' style='width:75px;'/>至<input  id=" + o.items[last * 2]["Brother"][0]["Id"] + " type='text' style='width:75px;'/></td><td></td><td></td>");
	                break;

	            case "radio":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;' id=" + trId + last * 2 + "_td" + "></td><td></td><td></td>");
	                break;
	            case "checkbox":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;' id=" + trId + last * 2 + "_td" + "></td><td></td><td></td>");
	                break;

	            case "selectSingle":
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;' id=" + trId + last * 2 + "_td" + "></td><td></td><td></td>");
	                break;                                                                 
                                                                                           
	            case "selectMultiple":                                                     
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width: 36%;padding-left:7px;' id=" + trId + last * 2 + "_td" + "></td><td></td><td></td>");
	                break;                                                                
                                                                                          
	            case "custom": //custom                                                   
	                $("#" + trId + "" + last).append("<td style='text-align: right; width: 16%;'>" + o.items[last * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;' > " + o.items[last * 2]["Content"] + "</td><td></td><td></td>");
	                break;

	        }

	    },
	    _appendEven: function (range) { //添加偶数条数据

	        var e = $(this.element);
	        o = this.options;
	        var count = o.items.length;
	        var tagId = this.element.attr("id");/*目标的id*/
	        var trId = tagId + "_tr_";
	        switch (o.items[range * 2]["Type"]) {
	            case "string":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' maxlength=" + o.items[range * 2]["MaxLength"] + "/></td>");
	                break;
	            case "int":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' maxlength=" + o.items[range * 2]["MaxLength"] + "/></td>");
	                break;
	            case "intRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' maxlength=" + o.items[range * 2]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[range * 2]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[range * 2]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td>");
	                break;

	            case "double":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' maxlength=" + o.items[range * 2]["MaxLength"] + "/></td>");
	                break;
	            case "doubleRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' maxlength=" + o.items[range * 2]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[range * 2]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[range * 2]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td>");
	                break;


	            case "radio":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px; padding-top:0;' id=" + trId + range * 2 + "_td" + "></td>");
	                break;

	            case "checkbox":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%; padding-left:7px;' id=" + trId + range * 2 + "_td" + "></td>");
	                break;

	            case "date":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text' /></td>");
	                break;
	            case "dateRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2]["Id"] + " type='text'  style='width:75px;'/>至<input  id=" + o.items[range * 2]["Brother"][0]["Id"] + " type='text'  style='width:75px;'/></td>");
	                break;

	            case "selectSingle":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%;padding-left:5px; padding-top:0;' id=" + trId + range * 2 + "_td" + "></td>");
	                break;

	            case "selectMultiple":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width: 36%; padding-left:7px;' id=" + trId + range * 2 + "_td" + "></td>");
	                break;

	            case "custom":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2]["Name"] + "</td><td style='width:36%;padding-left:5px;' > " + o.items[range * 2]["Content"] + "</td>");
	                break;

	        }
	        switch (o.items[range * 2 + 1]["Type"]) {
	            case "string":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["MaxLength"] + "/></td>");
	                break;
	            case "int":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["MaxLength"] + "/></td>");
	                break;
	            case "intRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[range * 2 + 1]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td>");
	                break;

	            case "double":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["MaxLength"] + "/></td>");
	                break;
	            case "doubleRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["MaxLength"] + " style='width:75px;'/>至<input  id=" + o.items[range * 2 + 1]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td>");
	                break;

	            case "radio":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;' id=" + trId + (range * 2 + 1) + "_td" + "></td>");
	                break;

	            case "checkbox":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:7px;' id=" + trId + (range * 2 + 1) + "_td" + "></td>");
	                break;

	            case "date":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width:16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text' /></td>");
	                break;
	            case "dateRange":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width:36%;padding-left:5px;'><input  id=" + o.items[range * 2 + 1]["Id"] + " type='text'  style='width:75px;'/>至<input  id=" + o.items[range * 2 + 1]["Brother"][0]["Id"] + " type='text' maxlength=" + o.items[range * 2 + 1]["Brother"][0]["MaxLength"] + " style='width:75px;'/></td>");
	                break;

	            case "selectSingle":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 36%;padding-left:5px;' id=" + trId + (range * 2 + 1) + "_td" + "></td>");
	                break;

	            case "selectMultiple":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width: 34%;padding-left:7px;' id=" + trId + (range * 2 + 1) + "_td" + "></td>");
	                break;

	            case "custom":
	                $("#" + trId + "" + range).append("<td style='text-align: right; width: 16%;'>" + o.items[range * 2 + 1]["Name"] + "</td><td style='width:34%;padding-left:5px;' > " + o.items[range * 2 + 1]["Content"] + "</td>");
	                break;
	        }

	    },


	    _setLimit: function () { //数据条件的限制
	        var e = $(this.element);
	        o = this.options;
	        var count = o.items.length;

	        var tagId = this.element.attr("id");/*目标的id*/
	        var trId = tagId + "_tr_";

	        for (var n = 0; n < count; n++) {

	            switch (o.items[n]["Type"]) {
	                case "int":
	                    $("#" + o.items[n]["Id"]).bind("keyup", function () {//限制文本框中只能输入数字
	                        $(this).val($(this).val().replace(/[\D]/g, ""));
	                    });
	                    break;
	                case "intRange":
	                    $("#" + o.items[n]["Id"]).bind("keyup", function () {//限制文本框中只能输入数字
	                        $(this).val($(this).val().replace(/[\D]/g, ""));
	                    });

	                    $("#" + o.items[n]["Brother"][0]["Id"]).bind("keyup", function () {//限制文本框中只能输入数字
	                        $(this).val($(this).val().replace(/[\D]/g, ""));
	                    });
	                    break;
	                case "double":
	                    $("#" + o.items[n]["Id"]).bind("keyup", function () {	//限制文本框只能输入小数

	                        len = $(this).val().length;
	                        var dotNum = 0;
	                        for (var i = 0; i < len; i++) {
	                            oneNum = $(this).val().substring(i, i + 1);
	                            if (oneNum == ".") {
	                                dotNum++;
	                            }
	                            if (((oneNum < "0" || oneNum > "9") && oneNum != ".") || dotNum > 1) {
	                                $(this).val($(this).val().substring(0, i));
	                                break;
	                            } else {
	                            }
	                        }
	                    });
	                    break;
	                case "doubleRange":
	                    $("#" + o.items[n]["Id"]).bind("keyup", function () {	//限制文本框只能输入小数
	                        len = $(this).val().length;
	                        var dotNum = 0;
	                        for (var i = 0; i < len; i++) {
	                            oneNum = $(this).val().substring(i, i + 1);
	                            if (oneNum == ".") {
	                                dotNum++;
	                            }
	                            if (((oneNum < "0" || oneNum > "9") && oneNum != ".") || dotNum > 1) {
	                                $(this).val($(this).val().substring(0, i));
	                                break;
	                            } else {
	                            }
	                        }
	                    });


	                    $("#" + o.items[n]["Brother"][0]["Id"]).bind("keyup", function () {	//限制文本框只能输入小数
	                        len = $(this).val().length;
	                        var dotNum = 0;
	                        for (var i = 0; i < len; i++) {
	                            oneNum = $(this).val().substring(i, i + 1);
	                            if (oneNum == ".") {
	                                dotNum++;
	                            }
	                            if (((oneNum < "0" || oneNum > "9") && oneNum != ".") || dotNum > 1) {
	                                $(this).val($(this).val().substring(0, i));
	                                break;
	                            } else {
	                            }
	                        }
	                    });
	                    break;
	                case "radio":

	                    var dataSource = o.items[n].Value;
	                    var radioHtml = "";
	                    for (var i = 0; i < dataSource.length; i++) {
	                        if (dataSource[i]["selected"]) {
	                            radioHtml += "<input id=" + o.items[n]["Id"] + '_' + i + "  type='radio' value=" + dataSource[i]["value"] + "  name=" + o.items[n]["name"] + " checked ><label for=" + o.items[n]["Id"] + '_' + i + ">" + dataSource[i]["text"] + "</label>";
	                        } else {
	                            radioHtml += "<input id=" + o.items[n]["Id"] + '_' + i + " type='radio' value=" + dataSource[i]["value"] + "  name=" + o.items[n]["name"] + "><label for=" + o.items[n]["Id"] + '_' + i + ">" + dataSource[i]["text"] + "</label>";
	                        }

	                    }
	                    $("#" + trId + n + "_td").append(radioHtml);
	                    $("#" + trId + n + "_td").jradio();
	                    break;
	                case "checkbox":
	                    var dataSource = o.items[n].Value;
	                    var checkboxHtml = "";
	                    for (var i = 0; i < dataSource.length ; i++) {
	                        if (dataSource[i]["selected"]) {
	                            checkboxHtml += "<input id=" + o.items[n]["Id"] + '_' + i + "  type='checkbox' value=" + dataSource[i]["value"] + "  name=" + o.items[n]["name"] + " checked ><label for=" + o.items[n]["Id"] + '_' + i + ">" + dataSource[i]["text"] + "</label>";
	                        } else {
	                            checkboxHtml += "<input id=" + o.items[n]["Id"] + '_' + i + "  type='checkbox' value=" + dataSource[i]["value"] + "  name=" + o.items[n]["name"] + " ><label for=" + o.items[n]["Id"] + '_' + i + ">" + dataSource[i]["text"] + "</label>";

	                        }
	                    }
	                    $("#" + trId + n + "_td").append(checkboxHtml);
	                    $("#" + trId + n + "_td").jcheckbox();
	                    break;

	                case "date":
	                    $("#" + o.items[n]["Id"]).jdatetimepicker({
	                        datetimeParse: "yyyy-MM-dd"
	                    });
	                    break;
	                case "dateRange":
	                    $("#" + o.items[n]["Id"]).jdatetimepicker({
	                        datetimeParse: "yyyy-MM-dd"
	                    });
	                    $("#" + o.items[n]["Brother"][0]["Id"]).jdatetimepicker({
	                        datetimeParse: "yyyy-MM-dd"
	                    });
	                    break
	                case "selectSingle":

	                    $("#" + trId + n + "_td").jSelect({ //单选
	                        items: o.items[n]["Value"],
	                        placeholder: "请选择状态....",
	                        width: "100px",
	                        model: "single"
	                    });
	                    break;

	                case "selectMultiple":

	                    $("#" + trId + n + "_td").jSelect({ //单选
	                        items: o.items[n]["Value"],
	                        placeholder: "请选择状态....",
	                        width: "200px",
	                        model: "multiple"
	                    });

	                    break;
	            }
	        }

	    },



	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	    },

	    _setOptions: function (options) {
	        $.each(options, function (key, value) {
	            this._setOption(key, value);
	        });
	    },


	    _destroy: function () {
	        $(this.element).empty();
	        $(this).empty();

	        return this;
	    }
	});

    $.extend($.jui.jsearch, {
        version: "0.1.0"
    });
})(jQuery);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

/// <reference path="../jquery-1.7.js" />
/// <reference path="../jquery-ui-1.8.18.js" />
/// <reference path="jquery.mousewheel.js" />

//JQuery UI datapager Plugin
/*
* jQuery UI DataPager 
*
* Depends:
*	jquery.ui.core.js
*	jquery.ui.widget.js
*/

/*
* Author: ZhangJian
* Create date: 2012年9月7日 14:16:34
* Description: 滚动条
*/

(function ($, undefined) {
    $.widget("j.jscrollbar",
	{
	    // default options
	    options: {

	        buttonDefault: '#bababa'//按钮颜色(less文件中已定义)
			, buttonActive: '#666666'//按钮点击后颜色(less文件中已定义)
            , buttonHover: '#cccccc'//覆盖按钮后颜色(less文件中已定义)
            
            , 
                buttonBorder: 'transparent'//顶端按钮边框颜色    

            , buttonWidth: 11//纵向滚动条顶端按钮宽度
            , buttonHeight: 12//纵向滚动条顶端按钮高度

	        , handleDefault: '#bababa' //滑块颜色
            , handleActive: '#ffffff'//点击时滑块颜色
			, handleHover: '#cccccc'//鼠标移入滑块时颜色

			, grooveColor: '#666666'//滚动槽颜色
            , grooveBorder: '#f3f3f3'//滚动槽边框颜色 
            
            , showWidth: null//显示宽度*
            , showHeight: null//显示高度*

            , handleWidth: 6//滑块宽度
            , grooveWidth: 2//滚动槽宽度
            , grooveRadius: 8//滚动槽圆角
            , handleRadius:8//滑块圆角
	    },

	    _create: function () {
	        this._jscrollbar();
	    },

	    _jscrollbar: function () {
	        var t = $(this.element); //目标元素，需要用到滚动条的div
	        var t_id = t.attr("id");
	        var self = this, o = this.options;
	        var showWidth = o.showWidth;
	        var showHeight = o.showHeight;

	        var handlebgcolor = o.handleDefault;
	        var handleincolor = o.handleHover;
	        var handleActive = o.handleActive;

	        var buttonDefault = o.buttonDefault;
	        var buttonActive = o.buttonActive;
	        var buttonHover = o.buttonHover;
	        var buttonBorder = o.buttonBorder;
	        var buttonWidth = o.buttonWidth;
	        var buttonHeight = o.buttonHeight;

	        var scrollWrapColor = o.grooveColor;
	        var grooveBorder = o.grooveBorder;

	        var grooveRadius = o.grooveRadius;
	        var grooveWidth = o.grooveWidth;
	        var handleWidth_v_h = o.handleWidth;
	        var handleRadius = o.handleRadius;
	        var sliderBorderWidth = 1;
	        if (grooveWidth <= handleWidth_v_h) {
	            sliderBorderWidth = 0;
	        }
	        if (grooveWidth < 0 || grooveWidth > 40) {
	            grooveWidth = 20;
	        }
	        var t_w, t_h;
	        if (t.css("overflow") == "scroll" || t.css("overflow") == "auto") {
	            if (showWidth == "" || showWidth == null) {
	                showWidth = t.width();
	            }
	            if (showHeight == "" || showHeight == null) {
	                showHeight = t.height();
	            }
	            t.css({ "overflow": "visible"});
	        }
	        t.css({ "width": "auto", "height": "auto", "position": "absolute","white-space": "pre" });
	        t_w = t.width();
	        t_h = t.height();
	        if ($("#" + t_id + "sliderWrapVertical").length > 0) {
	            $("#" + t_id + "sliderWrapVertical").remove();
	        }
	        if ($("#" + t_id + "sliderWrapHorizontal").length > 0) {
	            $("#" + t_id + "sliderWrapHorizontal").remove();
	        }

	        if ($("#" + t_id + "containerDiv").length == 0) {
	            t.wrap("<div id='" + t_id + "containerDiv'></div>");
	            $("#" + t_id + "containerDiv").addClass("jui-jscrollbar-scroll-containerDiv");
	        }
	        $("#" + t_id + "containerDiv").css({ "width": showWidth, "height": showHeight });

	        if ($("#" + t_id + "outDiv").length == 0) {
	            $("#" + t_id + "containerDiv").wrap("<div id='" + t_id + "outDiv' style='position:relative;margin:5px 5px 5px 5px;'></div>");
	        }
	        $("#" + t_id + "outDiv").css({ "width": showWidth + grooveWidth + 3, "height": showHeight + grooveWidth + 3 });

	        if ($("#" + t_id + "sliderWrapVertical").length == 0) {
	            $("#" + t_id + "outDiv").append("<div id='" + t_id + "sliderWrapVertical'></div>");
	            $("#" + t_id + "sliderWrapVertical").addClass("jui-jscrollbar-scroll-sliderWrapVertical");
	        }
	        $("#" + t_id + "sliderWrapVertical").css({ "left": showWidth, "width": grooveWidth, "height": showHeight - 2 * (buttonHeight + 2), "border": "" + sliderBorderWidth + "px solid " + grooveBorder, "border-radius": grooveRadius + "px", "background-color": scrollWrapColor, "margin-top": buttonHeight + 2 });
	        if ($("#" + t_id + "sliderWrapHorizontal").length == 0) {
	            $("#" + t_id + "outDiv").append("<div id='" + t_id + "sliderWrapHorizontal'></div>");
	            $("#" + t_id + "sliderWrapHorizontal").addClass("jui-jscrollbar-scroll-sliderWrapHorizontal");
	        }
	        $("#" + t_id + "sliderWrapHorizontal").css({ "top": showHeight, "width": showWidth - 2 * (buttonWidth + 2), "height": grooveWidth, "border": "" + sliderBorderWidth + "px solid " + grooveBorder, "border-radius": grooveRadius + "px", "background-color": scrollWrapColor, "margin-left": buttonHeight + 2 });
	        //比较内部容器高度与目标元素高度
	        var diff = t_h - showHeight;
	        //比较内部容器宽度和目标元素宽度
	        var w_diff = t_w - showWidth;
	        //保存高度差
	        t.data('diff', diff);
	        //保存宽度差
	        t.data('w_diff', w_diff);
	        //按钮部分宽度总和
	        var space_ = 2 * (buttonHeight+2);
            //切换按钮样式
	        var changeBtnCss = function (theA) {
	            var inbtn = false, isdown = false;
	            var slider_a = theA;
	            slider_a.mouseover(function () {
	                inbtn = true;
	                $(this).css({ "border": 0, "outline-color": "transparent" });
	                isdown ? $(this).css("background-color", handleActive) : $(this).css("background-color", handleincolor);
	            }).mouseout(function () {
	                inbtn = false;
	                isdown ? $(this).css("background-color", handleActive) : $(this).css("background-color", handlebgcolor);
	            }).mousedown(function () {
	                isdown = true;
	                $(this).css({ "background-color": handleActive, "outline-color": "transparent" });
	            }).mouseup(function () {
	                isdown = false;
	                $(this).css({ "background-color": handleincolor, "outline-color": "transparent" });
	            });
	            slider_a.focusout(function () {
	                $(this).css("background-color", handlebgcolor);
	            });
	            $(document).mouseup(function () {
	                isdown = false;
	                inbtn ? slider_a.css("background-color", handleincolor) : slider_a.css("background-color", handlebgcolor);
	            });
	        };

            //#region 垂直滚动条 
	        if (diff > 0) {
	            $("#" + t_id + "sliderWrapVertical").show();
	            if (w_diff <= 0) {
	                $("#" + t_id + "outDiv").css("height", $("#" + t_id + "sliderWrapVertical").height() + 2);
	            }
	            $("#" + t_id + "sliderWrapVertical")
                    .append("<div id='" + t_id + "sliderVertical'></div>")
                    .append("<div id='" + t_id + "sliderTop' class='jui-jscrollbar-scroll-buttonTop'></div>")
                    .append("<div id='" + t_id + "sliderBottom' class='jui-jscrollbar-scroll-buttonBottom '></div>");

	            $("#" + t_id + "sliderTop").css({ "margin-top": -buttonHeight - 2 - sliderBorderWidth, "margin-left": 0.5 * (grooveWidth - 2 - buttonWidth), "width": buttonWidth, "height": buttonHeight, "border": "1px solid " + buttonBorder });
	            $("#" + t_id + "sliderVertical").css({ "width": grooveWidth - 2, "position": "absolute" });
	            $("#" + t_id + "sliderBottom").css({ "margin-bottom": -buttonHeight - 2 - sliderBorderWidth, "margin-left": 0.5 * (grooveWidth - 2 - buttonWidth), "position": "absolute", "bottom": "0", "width": buttonWidth, "height": buttonHeight, "border": "1px solid " + buttonBorder });
	            
	            var prop = diff / t_h; //高度差与内容层高度比例
	            var handleHeight = Math.round((1 - prop) * (showHeight - space_)); //计算滑块的高度
	            var sliderInitial = 100;
	            var a = true, b = true;
	            //#region设置滑动条
	            $("#"+t_id+"sliderVertical").slider({
	                orientation: 'vertical',
	                min: 0,
	                max: 100,
	                range: 'min',
	                value: sliderInitial,
	                slide: function (event, ui) {
	                    if (a) {
	                        $("#" + t_id + "sliderVertical").find("a").css("border", "0");
	                        a = false;
	                    }
	                    var topValue = -((100 - ui.value) * diff / 100);
	                    t.css("top",topValue);
	                },
	                change: function (event, ui) {
	                    if (b) {
	                        $("#" + t_id + "sliderVertical").find("a").css("border", "0");
	                        b = false;
	                    }
	                    var topValue = -((100 - ui.value) * (t_h - showHeight) / 100); //重新计算超出高度
	                    t.css("top",topValue);
	                }
	            });
	            //#endregion

	            //#region 调节滑块样式
	            $("#" + t_id + "sliderVertical").find("a").removeClass("ui-state-default").css({ "border-radius": handleRadius, "cursor": "pointer", "width": handleWidth_v_h + "px", "background-color": handlebgcolor, "margin-left": (grooveWidth - handleWidth_v_h) * 0.5 + "px" });
	            $("#" + t_id + "sliderVertical").removeClass("ui-slider-vertical").removeClass("ui-widget-content");

	            //设置滑块层的高度和底边距，以使得滑块层中间位置正好处在滑块位置
	            $("#" + t_id + "sliderVertical").find("a").css({ 'height': handleHeight, 'margin-bottom': -0.5 * handleHeight });
	            var origSliderHeight = showHeight - space_; //读取滚动条总长度
	            var sliderHeight = origSliderHeight - handleHeight; //获取滑块可移动范围长度
	            var sliderMargin = 0.5 * handleHeight; //获取滑块上下边距
	            if (handleWidth_v_h < grooveWidth) {
	                sliderMargin = sliderMargin + 0.5 * (grooveWidth - handleWidth_v_h);
	                sliderHeight = sliderHeight - grooveWidth + handleWidth_v_h;
	            } 
	            $("#" + t_id + "sliderVertical").css({ 'height': sliderHeight, 'margin-top': sliderMargin}); //设置滑动层高度和上边距       
                //#endregion

	            //#region按钮样式切换
	            changeBtnCss($("#" + t_id + "sliderVertical").find("a"));
	            //#endregion

                //#region点击滑动层外部空白区域
	            $("#" + t_id + "sliderVertical").mousedown(function (event) {
	                event.stopPropagation();
	            });
	            $("#" + t_id + "sliderWrapVertical").mousedown(function (event) {
	                var offsetTop = $("#" + t_id + "sliderVertical").offset().top; //获得滑动层定位
	                var clickValue = (event.pageY - offsetTop) * 100 / $("#" + t_id + "sliderVertical").height(); //找到点击点，减去偏移量，计算点击处与滑动层高度百分比
	                $("#" + t_id + "sliderVertical").slider("value", 100 - clickValue); //设置滑动层新的值
	            });
	            //#endregion

                //#region支持鼠标滚轮事件
	            if ($.fn.mousewheel) {
	                t.unmousewheel(); //删除之前所有鼠标滑轮相关事件
	                t.mousewheel(function (event, delta) {
	                    var speed = Math.round(5000 / t.data('diff'));
	                    if (speed < 1) speed = 1;
	                    if (speed > 100) speed = 100;
	                    var sliderVal = $("#" + t_id + "sliderVertical").slider("value"); //读取当前滚动条的值
	                    sliderVal += (delta * speed); //增加当前滑轮值
	                    $("#" + t_id + "sliderVertical").slider("value", sliderVal); //为滚动条设置新值
	                    event.preventDefault(); //终止默认行为
	                });
	            }
	            //#endregion

                //#region垂直滚动条按钮点击事件
	            var intervalId;
	            $("#" + t_id + "sliderTop").mousedown(function (event) {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonTop").addClass("jui-jscrollbar-scroll-buttonTop-active");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonActive.substring(1) + "_78x84.png)");
	                event.stopPropagation();
	                intervalId = setInterval(function addfix() { var v = $("#" + t_id + "sliderVertical").slider("value"); v += 1; $("#" + t_id + "sliderVertical").slider("value", v); }, 10);
	            }).mouseover(function () {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonTop").addClass("jui-jscrollbar-scroll-buttonTop-hover");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	            }).mouseout(function () {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonTop-hover jui-jscrollbar-scroll-buttonTop-active").addClass("jui-jscrollbar-scroll-buttonTop");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonDefault.substring(1) + "_78x84.png)");
	                clearInterval(intervalId);
	            }).mouseup(function () {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonTop-active").addClass("jui-jscrollbar-scroll-buttonTop-hover");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                clearInterval(intervalId);
	            });

	            $("#" + t_id + "sliderBottom").css("border", "1px solid " + buttonBorder);
	            $("#" + t_id + "sliderBottom").mouseover(function () {
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonBottom").addClass("jui-jscrollbar-scroll-buttonBottom-hover");
	            }).mousedown(function (event) {
	                event.stopPropagation();
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonBottom").addClass("jui-jscrollbar-scroll-buttonBottom-active");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonActive.substring(1) + "_78x84.png)");
	                intervalId = setInterval(function addfix() { var v = $("#" + t_id + "sliderVertical").slider("value"); v -= 1; $("#" + t_id + "sliderVertical").slider("value", v); }, 10);
	            }).mouseout(function () {
	                clearInterval(intervalId);
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonDefault.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonBottom-hover jui-jscrollbar-scroll-buttonBottom-active").addClass("jui-jscrollbar-scroll-buttonBottom");
	            }).mouseup(function () {
	                clearInterval(intervalId);
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonBottom-active").addClass("jui-jscrollbar-scroll-buttonBottom-hover");
	            });
                //#endregion
	        }
            //#endregion

            //#region 水平滚动条
	        if (w_diff > 0) {
	            $("#" + t_id + "sliderWrapHorizontal").show();
	            if (diff <= 0) {
	                $("#" + t_id + "outDiv").css("width", $("#" + t_id + "sliderWrapHorizontal").width() + 2);
	            }
	            $("#" + t_id + "sliderWrapHorizontal").append(
                    "<div id='" + t_id + "sliderLeft' class='jui-jscrollbar-scroll-buttonLeft'></div>" +
                    "<div id='" + t_id + "sliderHorizontal'></div>" +
                    "<div id='" + t_id + "sliderRight' class='jui-jscrollbar-scroll-buttonRight'></div>");
	            $("#" + t_id + "sliderLeft").css({ "margin-left": -buttonWidth - 3 - sliderBorderWidth, "margin-top": 0.5 * (grooveWidth - 1 - buttonWidth), "width": buttonHeight, "height": buttonWidth, "border": "1px solid " + buttonBorder });
	            $("#" + t_id + "sliderHorizontal").css({ "height": grooveWidth - 2, "position": "absolute", "top": 0 });
	            $("#" + t_id + "sliderRight").css({ "margin-right": -buttonWidth - 3 - sliderBorderWidth, "margin-top": 0.5 * (grooveWidth - 1 - buttonWidth), "position": "absolute", "right": "0", "top": "0", "width": buttonHeight, "height": buttonWidth, "border": "1px solid " + buttonBorder });
                
	            var c = true, d = true;
	            var w_prop = w_diff / t_w; //宽度差与内容层宽度比例
	            var handleWidth = Math.round((1 - w_prop) * (showWidth - space_)); //计算滑块的宽度
	            var w_sliderInitial = 0;

	            //#region设置滑动条
	            $("#" + t_id + "sliderHorizontal").slider({
	                orientation: 'horizontal',
	                min: 0,
	                max: 100,
	                range: 'max',
	                value: w_sliderInitial,
	                slide: function (event, ui) {
	                    if (c) {
	                        $("#"+t_id+"sliderHorizontal").find("a").css("border", "0");
	                        c = false;
	                    }
	                    var leftValue = -((ui.value) * w_diff / 100);
	                    t.css({ "left": leftValue }); //内容层随滑轮改变位置
	                },
	                change: function (event, ui) {
	                    if (d) {
	                        $("#" + t_id + "sliderHorizontal").find("a").css("border", "0");
	                        d = false;
	                    }
	                    var leftValue = -((ui.value) * (t_w - showWidth) / 100); //重新计算超出高度
	                    t.css({ "left": leftValue }); //内容层随滑轮改变位置   
	                }
	            });
	            //#endregion
                
	            //#region 调节滑块样式
	            $("#" + t_id + "sliderHorizontal").find("a").removeClass("ui-state-default").css({ "border-radius": handleRadius, "cursor": "pointer", "height": handleWidth_v_h + "px", "background-color": handlebgcolor, "margin-top": (grooveWidth - handleWidth_v_h) * 0.5 + "px" });
	            $("#" + t_id + "sliderHorizontal").removeClass("ui-slider-horizontal").removeClass("ui-widget-content");
	            
	            //设置滑块层的宽度和右边距，以使得滑块层中间位置正好处在滑块位置
	            $("#" + t_id + "sliderHorizontal").find("a").css({ 'width': handleWidth, 'margin-left': -0.5 * handleWidth});
	            var origSliderWidth = showWidth - space_; //读取滚动条总长度
	            var sliderWidth = origSliderWidth - handleWidth; //获取滑块可移动范围长度
	            var sliderMarginLR = 0.5 * handleWidth; //获取滑块左右边距
	            if (handleWidth_v_h < grooveWidth) {
	                sliderMarginLR = sliderMarginLR + 0.5 * (grooveWidth - handleWidth_v_h);
	                sliderWidth = sliderWidth - grooveWidth+ handleWidth_v_h;
	            }
	            $("#" + t_id + "sliderHorizontal").css({ 'width': sliderWidth+2, 'margin-left': sliderMarginLR });
                //#endregion

	            //#region按钮样式切换
	            changeBtnCss($("#" + t_id + "sliderHorizontal").find("a"));
	            //#endregion

	            //#region点击滑动层外部空白区域
	            $("#" + t_id + "sliderHorizontal").mousedown(function (event) {
	                event.stopPropagation();
	            });
	            $("#" + t_id + "sliderWrapHorizontal").mousedown(function (event) {
	                var offsetLeft = $("#" + t_id + "sliderHorizontal").offset().left; //获得滑动层定位
	                var clickValue = (event.pageX - offsetLeft) * 100 / $("#" + t_id + "sliderHorizontal").width(); //找到点击点，减去偏移量，计算点击处与滑动层宽度百分比
	                $("#" + t_id + "sliderHorizontal").slider("value",clickValue); //设置滑动层新的值
	            });
	            //#endregion
                
	            //#region支持鼠标滚轮事件
	            if (diff <= 0) {
	                if ($.fn.mousewheel) {
	                    t.unmousewheel(); //删除之前所有鼠标滑轮相关事件
	                    t.mousewheel(function (event, delta) {
	                        var speed = Math.round(5000 / t.data('w_diff'));
	                        if (speed < 1) speed = 1;
	                        if (speed > 100) speed = 100;
	                        var sliderVal = $("#" + t_id + "sliderHorizontal").slider("value"); //读取当前滚动条的值
	                        sliderVal -= (delta * speed); //增加当前滑轮值
	                        $("#" + t_id + "sliderHorizontal").slider("value",sliderVal); //为滚动条设置新值
	                        event.preventDefault(); //终止默认行为
	                    });
	                }
	            }
	            //#endregion
                
	            //#region垂直滚动条按钮点击事件
	            var intervalId;
	            $("#" + t_id + "sliderLeft").css("border", "1px solid " + buttonBorder);
	            $("#" + t_id + "sliderLeft").mousedown(function (event) {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonLeft").addClass("jui-jscrollbar-scroll-buttonLeft-active");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonActive.substring(1) + "_78x84.png)");
	                event.stopPropagation();
	                intervalId = setInterval(function addfix() { var v = $("#" + t_id + "sliderHorizontal").slider("value"); v -= 1; $("#" + t_id + "sliderHorizontal").slider("value", v); }, 10);
	            }).mouseover(function () {
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonLeft").addClass("jui-jscrollbar-scroll-buttonLeft-hover");
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	            }).mouseout(function () {
	                clearInterval(intervalId);
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonDefault.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonLeft-hover jui-jscrollbar-scroll-buttonLeft-active").addClass("jui-jscrollbar-scroll-buttonLeft");
	            }).mouseup(function () {
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonLeft-active").addClass("jui-jscrollbar-scroll-buttonLeft-hover");
	                clearInterval(intervalId);
	            });
	            $("#" + t_id + "sliderRight").css("border", "1px solid " + buttonBorder);
	            $("#" + t_id + "sliderRight").mousedown(function (event) {
	                event.stopPropagation();
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonActive.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonRight").addClass("jui-jscrollbar-scroll-buttonRight-active");
	                intervalId = setInterval(function addfix() { var v = $("#" + t_id + "sliderHorizontal").slider("value"); v += 1; $("#" + t_id + "sliderHorizontal").slider("value", v); }, 10);
	            }).mouseover(function () {
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonRight").addClass("jui-jscrollbar-scroll-buttonRight-hover");
	            }).mouseout(function () {
	                clearInterval(intervalId);
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonDefault.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonRight-hover jui-jscrollbar-scroll-buttonRight-active").addClass("jui-jscrollbar-scroll-buttonRight");
	            }).mouseup(function () {
	                clearInterval(intervalId);
	                $(this).css("background-image", "url(../../Content/JUI/images/jui-icons_" + buttonHover.substring(1) + "_78x84.png)");
	                //$(this).removeClass("jui-jscrollbar-scroll-buttonRight-active").addClass("jui-jscrollbar-scroll-buttonRight-hover");
	            });
	            //#endregion

	        }
            //#endregion

	        //#region文本不得选中
	        $("#" + t_id + "sliderWrapVertical").bind("selectstart", function () { return false; });
	        $("#" + t_id + "sliderWrapHorizontal").bind("selectstart", function () { return false; });
            //#endregion
            
	    },

	    _setOption: function (key, value) {
	        if (value !== undefined || value != null)
	            this.options[key] = value;
	        else
	            return this.options[key];
	        this._jscrollbar();
	    },

	    _setOptions: function (options) {
	        var self = this, refresh = false;
	        $.each(options, function (key, value) {
	            self._setOption(key, value);
	        });
	    },

	    _destroy: function () {
	        var o = this.options;

	        $(this.element).empty();
	        $(this).empty();

	        return this;
	    }
	});

    $.extend($.j.jdatapager, {
        version: "0.1.0"
    });
})(jQuery);