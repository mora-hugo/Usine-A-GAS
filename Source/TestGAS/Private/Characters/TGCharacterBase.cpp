// Fill out your copyright notice in the Description page of Project Settings.


#include "Characters/TGCharacterBase.h"

#include "GameplayAbilities/TGAbilitySystemComponent.h"


ATGCharacterBase::ATGCharacterBase()
{
	PrimaryActorTick.bCanEverTick = true;
	bReplicates = true;
}

UAbilitySystemComponent* ATGCharacterBase::GetAbilitySystemComponent() const
{
	return AbilitySystemComponent;
}

