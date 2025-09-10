// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "TGCharacterBase.h"
#include "TGBaseEnnemyCharacter.generated.h"

UCLASS()
class TESTGAS_API ATGBaseEnnemyCharacter : public ATGCharacterBase
{
	GENERATED_BODY()

public:
	ATGBaseEnnemyCharacter();

protected:
	virtual void BeginPlay() override;

public:
	virtual void Tick(float DeltaTime) override;

	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;
};
