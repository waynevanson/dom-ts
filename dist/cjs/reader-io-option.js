"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.flatten = exports.chainFirst = exports.apSecond = exports.apFirst = exports.chain = exports.ap = exports.ReaderIOOption = exports.Monad = exports.of = exports.fromReader = exports.fromM = exports.asks = exports.ask = exports.URI = void 0;
/**
 * This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.
 *
 * @since 8.1.0
 */
var fp_ts_1 = require("fp-ts");
var fp_ts_contrib_1 = require("fp-ts-contrib");
var pipeable_1 = require("fp-ts/lib/pipeable");
/**
 * @since 8.1.0
 */
exports.URI = "ReaderIOOption";
var M = fp_ts_1.readerT.getReaderM(fp_ts_contrib_1.IOOption.ioOption);
exports.ask = M.ask, exports.asks = M.asks, exports.fromM = M.fromM, exports.fromReader = M.fromReader, exports.of = M.of;
exports.Monad = __assign({ URI: exports.URI }, M);
exports.ReaderIOOption = __assign({}, exports.Monad);
exports.ap = (_a = pipeable_1.pipeable(exports.ReaderIOOption), _a.ap), exports.chain = _a.chain, exports.apFirst = _a.apFirst, exports.apSecond = _a.apSecond, exports.chainFirst = _a.chainFirst, exports.flatten = _a.flatten, exports.map = _a.map;
//# sourceMappingURL=reader-io-option.js.map