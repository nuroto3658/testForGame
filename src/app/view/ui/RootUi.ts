class RootUi extends eui.Group
{

	public loginScene: LoginPanel;
	public hallScene: HallPanel;
	public gameScene: GamePanel;

	public constructor()
	{
		super();
	}

	protected childrenCreated(): void
	{
		AppFacade.getInstance().registerMediator(new RootMediator(MediatorName.ROOT, this));
		this.switchLoginScene();
	}

	public switchLoginScene(): void
	{
		this.removeChildren();
		if (this.loginScene == null) this.loginScene = new LoginPanel();
		this.addChild(this.loginScene);
	}

	public switchHallScene(): void
	{
		this.removeChildren();
		if (this.hallScene == null) this.hallScene = new HallPanel();
		this.addChild(this.hallScene);
	}

	public switchGameScene(): void
	{
		this.removeChildren();
		if (this.gameScene == null) this.gameScene = new GamePanel();
		this.addChild(this.gameScene);
	}

}
