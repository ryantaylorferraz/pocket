type TPendingGoalsResponse = {
    id: string;
    title: string;
    desiredWeeklyFrequency: number;
    completionCount: number;
}[]

export const getPendingGoals = async (): Promise<TPendingGoalsResponse> => {
    const res = await fetch('http://localhost:3333/pending  ')
    const data = await res.json()

    return data.pendingGoals;
}
