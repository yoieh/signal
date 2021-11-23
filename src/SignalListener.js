"use strict";
exports.__esModule = true;
exports.SignalListener = void 0;
var SignalListener = /** @class */ (function () {
    function SignalListener(signal, listener) {
        this.signal = signal;
        this.listener = listener;
        this.signal.add(this.listener);
    }
    SignalListener.prototype.dispose = function () {
        this.signal.remove(this.listener);
    };
    return SignalListener;
}());
exports.SignalListener = SignalListener;
exports["default"] = SignalListener;
