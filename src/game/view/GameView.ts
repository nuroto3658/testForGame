class GameView extends eui.Component implements eui.UIComponent
{
	public levelView: LevelView;
	public BGImg: eui.Image;
	public vsImg: eui.Image;
	public figureGP: eui.Group;
	public questionGP: eui.Group;
	private totalTimes: number;
	private countdownFNT: eui.BitmapLabel;
	public constructor()
	{
		super();
	}

	protected partAdded(partName: string, instance: any): void
	{
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void
	{
		super.childrenCreated();

	}
	public startBattle(): void
	{
		this.countdownTimer()
	}

	private countdownTimer()
	{
		this.questionGP.visible = true;
		this.totalTimes = 10;
		egret.Tween.get(this, { onChange: this.onChange, onChangeObj: this })
			.to({ totalTimes: 0 }, 5000)
			.call(() => this.afterCountdownTimer()); // 500 毫秒，停頓時間.
	}

	private onChange(): void
	{
		this.countdownFNT.visible = true;
		this.countdownFNT.text = "" + Math.round(this.totalTimes);
	}

	private afterCountdownTimer()
	{
		const self = this
		egret.Tween.removeTweens(self)
	}
}
