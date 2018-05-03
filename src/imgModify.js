/*!
 * imgModify.js v0.1.0 (https://github.com/ZhangCD1919/ImgModify.js)
 * API https://github.com/ZhangCD1919/ImgModify.js/doc/api.md
 * Copyright 2018 zhangcaidie. All Rights Reserved
 */

(function ($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                sizeLimit: 10,
                pixelLimit: [4096, 4096]
            }, options);
        }
    };

    $.fn.imgModify = function (method) {
        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }else {
            $.error('Method' + method + 'does not exits on jQuery.imgModify');
        }

        return this;
    }
})(jQuery);