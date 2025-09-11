// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemComponent.h"
#include "TGAbilitySystemComponent.generated.h"

class UTGAttributeSet;
struct FTGGameplayAbilityDeclaration;
/**
 * 
 */
UCLASS()
class TESTGAS_API UTGAbilitySystemComponent : public UAbilitySystemComponent
{
public:
	GENERATED_BODY()

	virtual void BeginPlay() override;
	
	void GrantAbility(const FTGGameplayAbilityDeclaration& AbilityToGrant);

	void GrantAbilities(const TArray<FTGGameplayAbilityDeclaration>& AbilitiesToGrant);

private:
	void AddDefaultAbilities();

	void AddDefaultAttributes();

protected:
	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	TArray<FTGGameplayAbilityDeclaration> DefaultAbilities;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	TArray<TSubclassOf<UAttributeSet>> DefaultAttributeSets;

private:
	UPROPERTY()
	TMap<UClass*, const UAttributeSet*> AttributesSets;
};
