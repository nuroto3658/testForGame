class AppPrepControllerCommand extends puremvc.SimpleCommand
{
	public execute(notification: puremvc.INotification): void
	{
		this.facade.registerCommand(app.AppMsgConst.LOGIN_COMMAND_REQ_LOGIN, LoginReqCommand);
	}
}

