interface CreateGoalRequest {
    title: string,
    desiredWeeklyFrequency: number
}

export const createGoal = async ( { title, desiredWeeklyFrequency }: CreateGoalRequest) => {
    await fetch('http://localhost:3333/goals', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title, desiredWeeklyFrequency
        })
    })
}
