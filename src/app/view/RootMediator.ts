class RootMediator extends puremvc.Mediator
{

	public constructor(mediatorName?: string, viewComponent?: RootUi)
	{
		super(mediatorName, viewComponent);
	}

	public listNotificationInterests(): string[]
	{
		return [
			app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_LOGIN,
			app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL,
			app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_GAME
		];
	}

	public handleNotification(notification: puremvc.INotification): void
	{
		switch (notification.getName())
		{
			case app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_LOGIN:
				this.getViewComponent().switchLoginScene();
				break;
			case app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL:
				this.getViewComponent().switchHallScene();
				break;
			case app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_GAME:
				this.getViewComponent().switchGameScene();
				break;
		}
	}

	public getViewComponent(): RootUi
	{
		return this.viewComponent as RootUi;
	}
}
