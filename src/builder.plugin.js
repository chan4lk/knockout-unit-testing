(function ($) {
    jQuery.fn.builder = function (settings) {
        var config = {
            'foo': 'bar'
        };

        if (settings) {
            jQuery.extend(config, settings);
        }

        this.each(function () {
            // element-specific code here
            $(this).val(config.foo);
        });

        return this;
    };
})(jQuery);