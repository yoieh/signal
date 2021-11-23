"use strict";
exports.__esModule = true;
exports.Signal = void 0;
var Signal = /** @class */ (function () {
    function Signal() {
        this.listeners = [];
    }
    Signal.prototype.add = function (listener) {
        this.listeners.push(listener);
    };
    Signal.prototype.remove = function (listener) {
        this.listeners = this.listeners.filter(function (l) { return l !== listener; });
    };
    Signal.prototype.removeAll = function () {
        this.listeners = [];
    };
    Signal.prototype.dispatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.listeners.forEach(function (l) {
            l.apply(void 0, args);
        });
    };
    return Signal;
}());
exports.Signal = Signal;
exports["default"] = Signal;
