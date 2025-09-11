// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "AbilitySystemComponent.h"
#include "GameplayAbilities/TGAttributeSet.h"
#include "TGVitalityAttributeSet.generated.h"

/**
 * 
 */
UCLASS()
class TESTGAS_API UTGVitalityAttributeSet : public UTGAttributeSet
{
	GENERATED_BODY()

protected:
	/* Start attributes */
	UPROPERTY(BlueprintReadOnly, Category="Attributes") 
	FGameplayAttributeData HealthAttribute;

	UPROPERTY(BlueprintReadOnly, Category="Attributes") 
	FGameplayAttributeData MaxHealthAttribute;

	UPROPERTY(BlueprintReadOnly, Category="Attributes") 
	FGameplayAttributeData ShieldAttribute;

	UPROPERTY(BlueprintReadOnly, Category="Attributes") 
	FGameplayAttributeData MaxShieldAttribute;
	/* End attributes */
	
	/* Start attributes macro */
	ATTRIBUTE_ACCESSORS(UTGVitalityAttributeSet, HealthAttribute);
	ATTRIBUTE_ACCESSORS(UTGVitalityAttributeSet, MaxHealthAttribute);
	ATTRIBUTE_ACCESSORS(UTGVitalityAttributeSet, ShieldAttribute);
	ATTRIBUTE_ACCESSORS(UTGVitalityAttributeSet, MaxShieldAttribute);
	/* End attributes macro */
};
