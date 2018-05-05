/*!
 * imgModify.js v0.1.0 (https://github.com/ZhangCD1919/ImgModify.js)
 * API https://github.com/ZhangCD1919/ImgModify.js/doc/api.md
 * Copyright 2018 zhangcaidie. All Rights Reserved
 */

(function ($) {
    let methods = {
        init: function (options) {
            let settings = $.extend({
                sizeLimit: 10,
                pixelLimit: [4096, 4096]
            }, options);

            let html = `<div class="i-m-title-bar"></div>
    <div class="i-m-head" class="app-drag">
        更换头像
        <label class="choose-file-btn" for="choose-file-btn">本地上传</label><input type="file" id="choose-file-btn">
    </div>
    <div id="content_layer" class="content">
        <div class="edit-container">
            <div class="prompt-label">请保证头像在10M以内</div>
            <div class="cut-wrap">
                <img class="view" src="">
                <div class="mask"></div>
                <img src="" alt="">
            </div>
            <canvas class="cut-view"></canvas>

            <div class="tools">
                <div class="smaller disabled"></div>
                <div class="drag-slide disabled">
                    <div class="stick disabled"></div>
                </div>
                <div class="bigger disabled"></div>
                <div class="left-rotate disabled"></div>
                <div class="right-rotate disabled"></div>
            </div>
        </div>

        <div class="preview-container">
            <div class="label">头像预览</div>
            <div class="view-wrap preview-wrap">
                <div class="view-c">
                    <div class="view"></div>
                </div>
            </div>
            <div class="btn-row">
                <div class="btn cancel-btn">取消</div>
                <div class="btn confirm-btn">确定</div>
            </div>
        </div>
    </div>`;
            //  填充html
            this.html(html);
            let loadImageEdit = (url) => {
                let viewImgEl = this.find('.cut-wrap img');
                viewImgEl.attr('src', url);
            };

            let initEvent = () => {
                this.on('change', '#choose-file-btn', (e) => {
                    console.log(e);
                    let el = $(e.currentTarget);
                    let file = el[0].files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                        loadImageEdit(e.target.result);
                    }

                })
            };

            initEvent(this);
        }
    };

    $.fn.imgModify = function (method) {
        if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            $.error('Method' + method + 'does not exits on jQuery.imgModify');
        }

        return this;

    }
})(jQuery);