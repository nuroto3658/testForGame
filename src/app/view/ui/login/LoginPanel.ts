class LoginPanel extends eui.Component implements eui.UIComponent
{
	public btn_login: eui.Button;
	public loginVO: LoginVO;
	public constructor()
	{
		super();
	}

	protected childrenCreated(): void
	{
		super.childrenCreated();
		this.loginVO = new LoginVO();
		AppFacade.getInstance().registerMediator(new LoginMediator(MediatorName.LOGIN, this));
	}

}

