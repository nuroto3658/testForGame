class LoginReqCommand extends puremvc.SimpleCommand
{
	public execute(notification: puremvc.INotification): void
	{

		let data: LoginVO = notification.getBody();
		let loginM: LoginMediator = this.facade.retrieveMediator(MediatorName.LOGIN) as LoginMediator;
		// if (data.username.length < 6)
		// {
		// 	loginM.loginError();
		// 	return;
		// }

		// 各种验证成功
		let loginP: LoginProxy = this.facade.retrieveProxy(app.ProxyName.LOGIN) as LoginProxy;
		loginP.login(data);
	}
}
