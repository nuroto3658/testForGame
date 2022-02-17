class Game_1_ViewMediator extends puremvc.Mediator implements IGameViewMediator
{
	public static readonly NAME: string = 'Game_1_ViewMediator';

	private gameView: Game_1_View = null;
	protected parentView: egret.DisplayObjectContainer;
	public constructor(viewComponent: egret.DisplayObjectContainer)
	{
		super(Game_1_ViewMediator.NAME, viewComponent);
		this.parentView = viewComponent;
		this.initView()
	}

	public listNotificationInterests(): Array<any>
	{
		return [
		];
	}

	public handleNotification(notification: puremvc.INotification)
	{
		const self = this;
		switch (name)
		{
			case MyEvent.SHOW_IDLE_SYMBOL:
				break;

		}
	}

	/** 建立畫面 */
	protected initView(): void
	{
		const self = this;
		self.gameView = new Game_1_View();
		self.gameView.percentHeight = self.gameView.percentWidth = 100;
		self.gameView.verticalCenter = self.gameView.horizontalCenter = 0;

		super.setViewComponent(self.gameView);
		self.parentView.addChild(self.gameView);
		// self.gameView.initView();
		self.gameView.listener = self;
	}
	// ======================== Get Set ========================

	protected _gameDataProxy: GameDataProxy;
	public get gameDataProxy(): GameDataProxy
	{
		const self = this;
		if (!self._gameDataProxy)
		{
			self._gameDataProxy = self.facade.retrieveProxy(GameDataProxy.NAME) as GameDataProxy;
		}
		return self._gameDataProxy;
	}
}

class symbolData
{
	symbolId: number
	hitData: boolean[]
}

interface IGameViewMediator
{

}
