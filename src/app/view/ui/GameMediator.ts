class GameMediator extends puremvc.Mediator
{
	public constructor(mediatorName?: string, viewComponent?: GamePanel)
	{
		super(mediatorName, viewComponent);
		viewComponent.exit_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitGameHandler, this);
	}

	private onExitGameHandler(e: egret.TouchEvent): void
	{
		this.sendNotification(app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL);
	}
}

