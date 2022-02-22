class LevelView extends eui.Component implements eui.UIComponent
{
    public BGImg: eui.Image;
    public optionGP_1: eui.Group;
    public constructor()
    {
        super();
    }

    protected partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName, instance);
    }


    protected childrenCreated(): void
    {
        super.childrenCreated();
        this.optionGP_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    public onButtonClick(): void
    {
        this.visible = false
        const self = (this.parent as GameView)
        egret.Tween.get(this).wait(2000).call(() => this.closeVsImg(self)).wait(1000).call(() => self.startBattle())
    }

    public closeVsImg(self): void
    {

        self.figureGP.visible = false;
    }

}
