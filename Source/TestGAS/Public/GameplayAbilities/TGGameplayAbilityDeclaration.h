// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Templates/SubclassOf.h"
#include "UObject/Object.h"
#include "TGGameplayAbilityDeclaration.generated.h"

class UGameplayAbility;
/**
 * 
 */
USTRUCT(BlueprintType)
struct TESTGAS_API FTGGameplayAbilityDeclaration
{
	GENERATED_BODY()

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	TSubclassOf<UGameplayAbility> AbilityClass;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	int32 AbilityLevel;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly)
	int32 InputID;
};
