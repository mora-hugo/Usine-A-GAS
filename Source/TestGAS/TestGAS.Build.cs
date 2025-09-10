// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class TestGAS : ModuleRules
{
	public TestGAS(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[] {
			"Core",
			"CoreUObject",
			"Engine",
			"InputCore",
			"EnhancedInput",
			"AIModule",
			"StateTreeModule",
			"GameplayStateTreeModule",
			"UMG",
			"Slate", "GameplayAbilities"
		});

		PrivateDependencyModuleNames.AddRange(new string[]
		{
			"GameplayAbilities", "GameplayTags", "GameplayTasks"
		});

		PublicIncludePaths.AddRange(new string[] {
			"TestGAS",
			"TestGAS/Variant_Platforming",
			"TestGAS/Variant_Platforming/Animation",
			"TestGAS/Variant_Combat",
			"TestGAS/Variant_Combat/AI",
			"TestGAS/Variant_Combat/Animation",
			"TestGAS/Variant_Combat/Gameplay",
			"TestGAS/Variant_Combat/Interfaces",
			"TestGAS/Variant_Combat/UI",
			"TestGAS/Variant_SideScrolling",
			"TestGAS/Variant_SideScrolling/AI",
			"TestGAS/Variant_SideScrolling/Gameplay",
			"TestGAS/Variant_SideScrolling/Interfaces",
			"TestGAS/Variant_SideScrolling/UI"
		});

		// Uncomment if you are using Slate UI
		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });

		// Uncomment if you are using online features
		// PrivateDependencyModuleNames.Add("OnlineSubsystem");

		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true
	}
}
