class AppPrepModelCommand extends puremvc.SimpleCommand
{
	public execute(notification: puremvc.INotification): void
	{
		this.facade.registerProxy(new AppProxy(app.ProxyName.ROOT));
		this.facade.registerProxy(new LoginProxy(app.ProxyName.LOGIN));
	}
}
