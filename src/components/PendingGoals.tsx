import { OutlineButton } from './ui/outline-button'
import { Plus } from 'lucide-react'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPendingGoals } from '../http/getPendingGoals';
import { createGoalCompletion } from '../http/createGoalCompletion';

export const PendingGoals = () => {

    const queryClient = useQueryClient()
    
        const { data } = useQuery({
          queryKey: ["pending"],
          queryFn: getPendingGoals,
          staleTime: 1000 * 60,
        });

        if(!data) {
            return null
        }

         const handleCompleteGoal = async (goalId: string) => {
            await createGoalCompletion(goalId)

            queryClient.invalidateQueries({queryKey: ['summary']})
            queryClient.invalidateQueries({queryKey: ['pending']})
        }


  return (
    <div className="flex flex-wrap gap-3">
        {data.map(goal => {
            return (
                <OutlineButton key={goal.id} disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
                onClick={() => handleCompleteGoal(goal.id)}
                >
                <Plus className="size-4 text-zinc-600" />
                {goal.title}
              </OutlineButton>

            )
        })}
  </div>
  )
}
