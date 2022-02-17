class AppStartupCommand extends puremvc.MacroCommand
{

	public initializeMacroCommand(): void
	{
		this.addSubCommand(RegisterPuremvcCommand);
		this.addSubCommand(AppPrepViewCommand);
		this.addSubCommand(AppPrepControllerCommand);
		this.addSubCommand(AppPrepModelCommand);

	}
}

