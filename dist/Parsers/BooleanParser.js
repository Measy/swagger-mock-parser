'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var chance = new _chance2['default']();

var BooleanParser = (function () {
    function BooleanParser() {
        _classCallCheck(this, BooleanParser);
    }

    _createClass(BooleanParser, [{
        key: 'canParse',
        value: function canParse(node) {
            return node.type === 'boolean';
        }
    }, {
        key: 'parse',
        value: function parse(node) {
            return chance.bool(node['x-type-options']);
        }
    }]);

    return BooleanParser;
})();

exports['default'] = BooleanParser;
module.exports = exports['default'];