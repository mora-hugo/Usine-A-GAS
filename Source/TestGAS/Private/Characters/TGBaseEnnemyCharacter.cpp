// Fill out your copyright notice in the Description page of Project Settings.


#include "Characters/TGBaseEnnemyCharacter.h"

#include "GameplayAbilities/TGAbilitySystemComponent.h"
#include "GameplayAbilities/TGAttributeSet.h"


// Sets default values
ATGBaseEnnemyCharacter::ATGBaseEnnemyCharacter()
{
	PrimaryActorTick.bCanEverTick = true;

	AbilitySystemComponent = CreateDefaultSubobject<UTGAbilitySystemComponent>(TEXT("AbilitySystemComponent"));
	AbilitySystemComponent->SetIsReplicated(true);
	AbilitySystemComponent->SetReplicationMode(EGameplayEffectReplicationMode::Full);

	AttributeSet = CreateDefaultSubobject<UTGAttributeSet>(TEXT("AttributeSet"));
}

void ATGBaseEnnemyCharacter::BeginPlay()
{
	Super::BeginPlay();

	AbilitySystemComponent->InitAbilityActorInfo(this, this);
}

void ATGBaseEnnemyCharacter::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);
}

void ATGBaseEnnemyCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);
}

