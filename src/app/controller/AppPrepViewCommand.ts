class AppPrepViewCommand extends puremvc.SimpleCommand
{
	public execute(notification: puremvc.INotification): void
	{
		this.facade.registerMediator(new MainMediator(MediatorName.MAIN, notification.getBody()));
		this.sendNotification(app.AppMsgConst.MAIN_VIEW_ADD_ROOT_UI);
	}
}

