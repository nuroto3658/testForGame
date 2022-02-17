class RegisterPuremvcCommand extends puremvc.SimpleCommand
{
	public execute(notification: puremvc.INotification): void
	{
		super.execute(notification);

		this.registerProxy();

		this.registerCommand();

		this.registerMediator(notification);
	}

	/**
	 * 註冊proxy
	 */
	protected registerProxy(): void
	{

		this.facade.registerProxy(new GameDataProxy());
	}

	/**
	 * 註冊command
	 */
	protected registerCommand(): void
	{

	}

	/**
	 * 註冊mediator
	 * 參數 notification 讓實作者自行決定要不要取出
	 *  */
	protected registerMediator(notification: puremvc.INotification): void
	{
		// super.registerMediator(notification);
		const rootView = notification.getBody() as egret.DisplayObjectContainer;
		rootView.name = 'gameRootView';

		const self = this;

		const gameMainGP: eui.Group = self.buildGameGroup();

		rootView.addChild(gameMainGP);

	}

	protected buildGameGroup(): eui.Group
	{
		const self = this;

		const gameGroup = new eui.Group();
		gameGroup.percentWidth = gameGroup.percentHeight = 100;
		gameGroup.horizontalCenter = gameGroup.verticalCenter = 0;
		gameGroup.name = 'gameGroup';

		const bottomGP: eui.Group = self.creatGroup(gameGroup, 'bottomGroup');
		// const middleGP: eui.Group = self.creatGroup(gameGroup, 'middleGroup');
		// const topGP: eui.Group = self.creatGroup(gameGroup, 'topGroup');

		/** Game1 */
		self.facade.registerMediator(new Game_1_ViewMediator(bottomGP));
		// self.facade.registerMediator(new ReelViewMediator('Game_1_' + ReelViewMediator.NAME));
		// self.facade.registerMediator(new ShowViewMediator('Game_1_' + ShowViewMediator.NAME));
		// self.facade.registerMediator(new SymbolPerformViewMediator("Game_1_" + SymbolPerformViewMediator.NAME));
		// /** Game2 */
		// self.facade.registerMediator(new Game_2_ViewMediator(bottomGP));
		// self.facade.registerMediator(new ReelViewMediator('Game_2_' + ReelViewMediator.NAME));
		// self.facade.registerMediator(new ShowViewMediator('Game_2_' + ShowViewMediator.NAME));
		// self.facade.registerMediator(new SymbolPerformViewMediator("Game_2_" + SymbolPerformViewMediator.NAME));

		return gameGroup;
	}

	private creatGroup(parent: egret.DisplayObjectContainer, name: string): eui.Group
	{
		const group: eui.Group = new eui.Group();
		group.name = name;
		group.touchThrough = true;
		group.percentWidth = group.percentHeight = 100;
		parent.addChild(group);
		return group;
	}
}
