var capacitorMarketingName = (function (exports, core) {
    'use strict';

    const MarketingName = core.registerPlugin('MarketingName', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MarketingNameWeb()),
    });

    class MarketingNameWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MarketingNameWeb: MarketingNameWeb
    });

    exports.MarketingName = MarketingName;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
