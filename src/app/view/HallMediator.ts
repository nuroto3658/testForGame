class HallMediator extends puremvc.Mediator
{
	public constructor(mediatorName?: string, viewComponent?: HallPanel)
	{
		super(mediatorName, viewComponent);
		viewComponent.game_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterGameHandler, this);
	}

	private onEnterGameHandler(e: egret.TouchEvent): void
	{
		this.sendNotification(app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_GAME);
	}
}

