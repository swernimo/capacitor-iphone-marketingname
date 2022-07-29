'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const MarketingName = core.registerPlugin('MarketingName', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MarketingNameWeb()),
});

class MarketingNameWeb extends core.WebPlugin {
    async getMarketingName() {
        return {
            value: 'Web'
        };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MarketingNameWeb: MarketingNameWeb
});

exports.MarketingName = MarketingName;
//# sourceMappingURL=plugin.cjs.js.map
