/**
 * jQuery Simple Text Counter
 *
 * @homepage https://github.com/hugosbg/jquery-simple-txt-counter#readme
 * @author Hugo Gomes <hugo.msn@msn.com>
 * @version 0.1.3
 * @license MIT
 */
;(function ($) {
    $.fn.simpleTxtCounter = function (options) {
        const settings = $.extend({
            after: undefined,
            maxLength: undefined,
            countText: undefined,
            countElem: '<div/>',
            lineBreak: true
        }, options);

        const count = (input, length, max, uniqueId) => {
            const elem = $(`#${uniqueId}`);
            const { after, countText, countElem } = settings;

            let count = countText ? `${countText} ${length}` : length;
            if (max) {
                count += ` / ${max}`;
            }

            if (elem.length === 0) {
                const wrap = $(countElem).attr('id', uniqueId).text(count);
                const parent = input.closest(after);
                if (parent.length) {
                    parent.after(wrap);
                } else {
                    input.after(wrap);
                }
            } else {
                elem.text(count);
            }
        }

        return this.each(function (key) {
            const input = $(this);
            const max = parseInt(input.attr('maxlength') || settings.maxLength);
            const uniqueId = `simple-txt-counter-${Date.now() + key}`;

            count(input, this.value.length, max, uniqueId);

            input.on('input', function () {
                count(input, this.value.length, max, uniqueId);

                if (this.value && max) {
                    if (settings.lineBreak === false) {
                        this.value = this.value.replace(/(\r\n|\n|\r)/gm, " ").slice(0, max);
                    } else {
                        this.value = this.value.slice(0, max);
                    }
                }
            }).on('keypress', function (event) {
                const key = event.which || event.keyCode;
                if (settings.lineBreak === false && key === 13) {
                    event.preventDefault();
                    return false;
                }
            })
        });
    };
}(jQuery));
