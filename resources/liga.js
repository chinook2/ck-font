/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'minus': '&#xea0b;',
            'subtract': '&#xea0b;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
            'checkmark': '&#xea10;',
            'tick': '&#xea10;',
            'blocked': '&#xea0e;',
            'forbidden': '&#xea0e;',
            'enlarge': '&#xe053;',
            'expand': '&#xe053;',
            'shrink': '&#xe054;',
            'collapse': '&#xe054;',
            'checkbox-unchecked': '&#xea53;',
            'file-text': '&#xe92d;',
            'file': '&#xe92d;',
            'file-picture': '&#xe928;',
            'file5': '&#xe928;',
            'file-zip': '&#xe92e;',
            'file9': '&#xe92e;',
            'compass': '&#xe030;',
            'direction': '&#xe030;',
            'stack': '&#xe040;',
            'layers': '&#xe040;',
            'cog': '&#xe995;',
            'gear': '&#xe995;',
            'equalizer2': '&#xe996;',
            'sliders2': '&#xe996;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/ck-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
