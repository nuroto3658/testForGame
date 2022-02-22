
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"LevelView":"resource/eui_skins/LevelView.exml","GameView":"resource/eui_skins/GameView.exml"};generateEUI.paths['resource/eui_skins/GameView.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","vsImg","masterImg","enemyImg","figureGP","questionImg","countdownFNT","questionGP"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.BGImg_i(),this.figureGP_i(),this.questionGP_i()];
	}
	var _proto = GameViewSkin.prototype;

	_proto.BGImg_i = function () {
		var t = new eui.Image();
		this.BGImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "battleBG_jpg";
		t.verticalCenter = 0;
		t.width = 1600;
		return t;
	};
	_proto.figureGP_i = function () {
		var t = new eui.Group();
		this.figureGP = t;
		t.height = 900;
		t.horizontalCenter = -5;
		t.verticalCenter = -45;
		t.width = 1600;
		t.elementsContent = [this.vsImg_i(),this.masterImg_i(),this.enemyImg_i()];
		return t;
	};
	_proto.vsImg_i = function () {
		var t = new eui.Image();
		this.vsImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "vs_jpg";
		t.verticalCenter = 0;
		t.width = 1600;
		return t;
	};
	_proto.masterImg_i = function () {
		var t = new eui.Image();
		this.masterImg = t;
		t.horizontalCenter = -500;
		t.scaleX = -1;
		t.source = "master_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.enemyImg_i = function () {
		var t = new eui.Image();
		this.enemyImg = t;
		t.horizontalCenter = 500;
		t.source = "enemy_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.questionGP_i = function () {
		var t = new eui.Group();
		this.questionGP = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.questionImg_i(),this.countdownFNT_i()];
		return t;
	};
	_proto.questionImg_i = function () {
		var t = new eui.Image();
		this.questionImg = t;
		t.horizontalCenter = 0;
		t.source = "question_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.countdownFNT_i = function () {
		var t = new eui.BitmapLabel();
		this.countdownFNT = t;
		t.font = "TS_FNT02_fnt";
		t.horizontalCenter = 0;
		t.touchEnabled = false;
		t.y = -150;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelView.exml'] = window.LevelViewSkin = (function (_super) {
	__extends(LevelViewSkin, _super);
	function LevelViewSkin() {
		_super.call(this);
		this.skinParts = ["BGImg","optionGP_1"];
		
		this.height = 900;
		this.width = 1600;
		this.elementsContent = [this.BGImg_i(),this.optionGP_1_i()];
	}
	var _proto = LevelViewSkin.prototype;

	_proto.BGImg_i = function () {
		var t = new eui.Image();
		this.BGImg = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.source = "map_jpg";
		t.verticalCenter = 0;
		t.width = 1600;
		return t;
	};
	_proto.optionGP_1_i = function () {
		var t = new eui.Group();
		this.optionGP_1 = t;
		t.height = 130;
		t.width = 145;
		t.x = 335;
		t.y = 200;
		return t;
	};
	return LevelViewSkin;
})(eui.Skin);