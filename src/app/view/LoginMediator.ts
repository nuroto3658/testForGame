class LoginMediator extends puremvc.Mediator
{
	public constructor(mediatorName?: string, viewComponent?: LoginPanel)
	{
		super(mediatorName, viewComponent);
		viewComponent.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTryLogin, this);
	}

	public listNotificationInterests(): string[]
	{
		return [
			app.AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS,
			app.AppMsgConst.LOGIN_PROXY_LOGIN_FAILD
		];
	}

	public handleNotification(notification: puremvc.INotification): void
	{
		switch (notification.getName())
		{
			case app.AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS:
				this.showLoginMessage("login success!");
				this.sendNotification(app.AppMsgConst.ROOT_VIEW_SWITCH_UI_TO_HALL);
				break;
			case app.AppMsgConst.LOGIN_PROXY_LOGIN_FAILD:
				this.showLoginMessage("login faild!");
				break;
		}
	}

	private onTryLogin(e: egret.TouchEvent): void
	{
		this.sendNotification(app.AppMsgConst.LOGIN_COMMAND_REQ_LOGIN, this.getViewComponent().loginVO);
	}

	public getViewComponent(): LoginPanel
	{
		return this.viewComponent as LoginPanel;
	}

	public loginError(): void
	{
		console.log("login message:" + "Error");
	}

	private showLoginMessage(msg: string): void
	{
		console.log("login message:" + msg);
	}
}

