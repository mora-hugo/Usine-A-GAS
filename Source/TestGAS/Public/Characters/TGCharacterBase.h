// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemInterface.h"
#include "GameFramework/Character.h"
#include "TGCharacterBase.generated.h"

class UTGVitalityAttributeSet;
class UTGAbilitySystemComponent;
class UAttributeSet;

UCLASS()
class TESTGAS_API ATGCharacterBase : public ACharacter, public IAbilitySystemInterface
{
	GENERATED_BODY()

public:
	ATGCharacterBase();

	virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override;
protected:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS")
	TObjectPtr<UTGAbilitySystemComponent> AbilitySystemComponent;

	
};
