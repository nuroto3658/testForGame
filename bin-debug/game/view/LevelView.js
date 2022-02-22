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
var LevelView = (function (_super) {
    __extends(LevelView, _super);
    function LevelView() {
        return _super.call(this) || this;
    }
    LevelView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LevelView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.optionGP_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    LevelView.prototype.onButtonClick = function () {
        var _this = this;
        this.visible = false;
        var self = this.parent;
        egret.Tween.get(this).wait(2000).call(function () { return _this.closeVsImg(self); }).wait(1000).call(function () { return self.startBattle(); });
    };
    LevelView.prototype.closeVsImg = function (self) {
        self.figureGP.visible = false;
    };
    return LevelView;
}(eui.Component));
__reflect(LevelView.prototype, "LevelView", ["eui.UIComponent", "egret.DisplayObject"]);
