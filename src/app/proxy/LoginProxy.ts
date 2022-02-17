class LoginProxy extends puremvc.Proxy implements puremvc.IProxy
{

	private loggedIn: boolean = false;

	private loginVO: LoginVO = new LoginVO();

	public login(tryLogin: LoginVO): void
	{
		if (!this.loggedIn)
		{
			this.loginVO.username = tryLogin.username;
			this.loginVO.password = tryLogin.password;
			egret.setTimeout(this.onResult, this, 1000);
		} else
		{
			this.logout();
			this.login(tryLogin);
		}
	}

	private onResult(): void
	{
		this.sendNotification(app.AppMsgConst.LOGIN_PROXY_LOGIN_SUCCESS, this.loginVO.authToken);
	}

	public logout(): void
	{
		if (this.loggedIn)
		{
			this.loginVO = new LoginVO();
			this.loggedIn = false;
		}
		this.sendNotification(app.AppMsgConst.LOGIN_PROXY_LOGIN_OUT);
	}
}
