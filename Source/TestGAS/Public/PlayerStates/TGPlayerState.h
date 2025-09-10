// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerState.h"
#include "AbilitySystemInterface.h"
#include "TGPlayerState.generated.h"

class UTGAbilitySystemComponent;
class UAttributeSet;
/**
 * 
 */
UCLASS()
class TESTGAS_API ATGPlayerState : public APlayerState, public IAbilitySystemInterface
{
	GENERATED_BODY()
public:
	ATGPlayerState();

	virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override;

	FORCEINLINE UAttributeSet* GetAttributeSet() const { return AttributeSet; }

protected:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS")
	TObjectPtr<UTGAbilitySystemComponent> AbilitySystemComponent;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category = "GAS")
	TObjectPtr<UAttributeSet> AttributeSet;
};
