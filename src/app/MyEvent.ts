// ====== 專案自定義內容 ======
/** 自定義事件 */
class MyEvent
{
	// COMMAND EVENT =================================================
	/** spin event for dat.GUI */
	public static readonly CMD_SPIN_DATA: string = 'CMD_SPIN_DATA';

	// VIEW EVENT ====================================================

	/** 畫面大小變動 */
	public static readonly VIEW_RESIZE: string = 'VIEW_RESIZE';
	public static readonly SWITCHRESPINIMG: string = 'SWITCHRESPINIMG';
	public static readonly SHOW_TURNTABLE_ANI: string = 'SHOW_TURNTABLE_ANI';


	public static readonly SHOW_SYMBOLWIN: string = 'SHOW_SYMBOLWIN';
	public static readonly CLOSE_ALL_SYMBOLWIN: string = 'CLOSE_ALL_SYMBOLWIN';
	public static readonly SHOW_SPEEDUP_SYMBOL: string = 'SHOW_SPEEDUP_SYMBOL';
	public static readonly SHOWREELSPEEDUPANIMATION: string = 'SHOWREELSPEEDUPANIMATION';
	public static readonly SHOWNORMALWIN: string = 'SHOWNORMALWIN';
	public static readonly SHOW_IDLE_SYMBOL: string = 'SHOW_IDLE_SYMBOL';
	public static readonly CLOSE_REEL_SYMBOL: string = 'CLOSE_REEL_SYMBOL'
	public static readonly CLOSE_ALL_BTN: string = 'CLOSE_ALL_BTN'
	public static readonly SHOW_ALL_BTN: string = 'SHOW_ALL_BTN'
	public static readonly PENDING_EVENT_AND_SHOW_LOADING: string = 'PENDING_EVENT_AND_SHOW_LOADING'
	public static readonly HIDE_DOWNLOADING: string = 'HIDE_DOWNLOADING'
	public static readonly CHANGEREELSATE: string = 'CHANGEREELSATE'
}
