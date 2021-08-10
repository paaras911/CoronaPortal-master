export interface CovidCasesData{
    data: CaseData[]
   
}

export interface CaseData{
    weekIncidence: number,
    date: string
}

export interface CovidRecoveryData{
    data: RecoveryData[],
   
}
export interface RecoveryData{
    recovered: number,
    date: string
}

export interface CovidDeathData{
    data: DeathsData[],
 
}
export interface DeathsData{
    deaths: number,
    date: string
}
