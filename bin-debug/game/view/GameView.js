var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        return _super.call(this) || this;
    }
    GameView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GameView.prototype.startBattle = function () {
        this.countdownTimer();
    };
    GameView.prototype.countdownTimer = function () {
        var _this = this;
        this.questionGP.visible = true;
        this.totalTimes = 10;
        egret.Tween.get(this, { onChange: this.onChange, onChangeObj: this })
            .to({ totalTimes: 0 }, 5000)
            .call(function () { return _this.afterCountdownTimer(); }); // 500 毫秒，停頓時間.
    };
    GameView.prototype.onChange = function () {
        this.countdownFNT.visible = true;
        this.countdownFNT.text = "" + Math.round(this.totalTimes);
    };
    GameView.prototype.afterCountdownTimer = function () {
        var self = this;
        egret.Tween.removeTweens(self);
    };
    return GameView;
}(eui.Component));
__reflect(GameView.prototype, "GameView", ["eui.UIComponent", "egret.DisplayObject"]);
