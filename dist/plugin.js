var capacitorExample = (function (exports, core) {
    'use strict';

    const iPhoneMarketingName = core.registerPlugin('iPhoneMarketingName', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.iPhoneMarketingNameWeb()),
    });

    class iPhoneMarketingNameWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
        async getMarketingName() {
            return Promise.reject('get marketing name not implemented for web');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        iPhoneMarketingNameWeb: iPhoneMarketingNameWeb
    });

    exports.iPhoneMarketingName = iPhoneMarketingName;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
