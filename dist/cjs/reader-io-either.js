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
exports.fromPredicate = exports.fromOption = exports.fromEither = exports.filterOrElse = exports.map = exports.flatten = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.ReaderIOEither = exports.fromIO = exports.MonadIO = exports.MonadThrow = exports.Monad = exports.of = exports.fromReader = exports.fromIOEither = exports.asks = exports.ask = exports.URI = void 0;
var fp_ts_1 = require("fp-ts");
var pipeable_1 = require("fp-ts/pipeable");
exports.URI = "ReaderIOEither";
var M = fp_ts_1.readerT.getReaderM(fp_ts_1.ioEither.Monad);
exports.ask = M.ask, exports.asks = M.asks, exports.fromIOEither = M.fromM, exports.fromReader = M.fromReader, exports.of = M.of;
exports.Monad = __assign({ URI: exports.URI }, M);
exports.MonadThrow = __assign(__assign({}, exports.Monad), { throwError: function (e) { return function () { return fp_ts_1.ioEither.throwError(e); }; } });
exports.MonadIO = __assign(__assign({}, exports.Monad), { fromIO: function (io) { return function () { return fp_ts_1.ioEither.fromIO(io); }; } });
exports.fromIO = exports.MonadIO.fromIO;
//
exports.ReaderIOEither = __assign(__assign({}, exports.MonadThrow), exports.MonadIO);
exports.ap = (_a = pipeable_1.pipeable(exports.ReaderIOEither), _a.ap), exports.apFirst = _a.apFirst, exports.apSecond = _a.apSecond, exports.chain = _a.chain, exports.chainFirst = _a.chainFirst, exports.flatten = _a.flatten, exports.map = _a.map, exports.filterOrElse = _a.filterOrElse, exports.fromEither = _a.fromEither, exports.fromOption = _a.fromOption, exports.fromPredicate = _a.fromPredicate;
//# sourceMappingURL=reader-io-either.js.map