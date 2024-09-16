export const createGoalCompletion = async (goalId: string) => {
    await fetch('http://localhost:3333/completions', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            goalId
        })
    })
}
