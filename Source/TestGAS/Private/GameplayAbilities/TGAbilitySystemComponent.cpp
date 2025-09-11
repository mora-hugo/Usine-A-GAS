// Fill out your copyright notice in the Description page of Project Settings.


#include "Public/GameplayAbilities/TGAbilitySystemComponent.h"

#include "GameplayAbilities/TGGameplayAbilityDeclaration.h"


void UTGAbilitySystemComponent::BeginPlay()
{
	Super::BeginPlay();
	AddDefaultAbilities();
	AddDefaultAttributes();
}

void UTGAbilitySystemComponent::AddDefaultAbilities()
{
	GrantAbilities(DefaultAbilities);
}

void UTGAbilitySystemComponent::AddDefaultAttributes()
{
	for (auto AttributeSetClass : DefaultAttributeSets)
	{
		AttributesSets.Add(AttributeSetClass.Get(), GetOrCreateAttributeSubobject(AttributeSetClass));
	}
}

void UTGAbilitySystemComponent::GrantAbility(const FTGGameplayAbilityDeclaration& AbilityToGrant)
{
	FGameplayAbilitySpec Spec(AbilityToGrant.AbilityClass, AbilityToGrant.AbilityLevel, AbilityToGrant.InputID);

	GiveAbility(Spec);
}

void UTGAbilitySystemComponent::GrantAbilities(const TArray<FTGGameplayAbilityDeclaration>& AbilitiesToGrant)
{
	for (auto Ability : AbilitiesToGrant)
	{
		GrantAbility(Ability);
	}
}
