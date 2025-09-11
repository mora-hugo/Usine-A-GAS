// Fill out your copyright notice in the Description page of Project Settings.


#include "Public/PlayerStates/TGPlayerState.h"

#include "GameplayAbilities/TGAbilitySystemComponent.h"
#include "GameplayAbilities/TGAttributeSet.h"
#include "GameplayAbilities/AttributeSet/TGVitalityAttributeSet.h"

ATGPlayerState::ATGPlayerState()
{
	SetNetUpdateFrequency(100.0f);

	AbilitySystemComponent = CreateDefaultSubobject<UTGAbilitySystemComponent>(TEXT("AbilitySystemComponent"));
	AbilitySystemComponent->SetIsReplicated(true);
	AbilitySystemComponent->SetReplicationMode(EGameplayEffectReplicationMode::Full);



	
}

UAbilitySystemComponent* ATGPlayerState::GetAbilitySystemComponent() const
{
	return AbilitySystemComponent;
}
