import { CreateGoal } from "./components/CreateGoal";
import { EmptyGoals } from "./components/EmptyGoals";
import { Summary } from "./components/Summary";
import { Dialog } from "./components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/getSummary";


export function App() {
  // const [summary, setSummary] = useState<TSummary | null>(null)

  // useEffect(() => {
  //   fetch("http://localhost:3333/summary").then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     return data;
  //   })
  // }, [])

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60
    })


  return (
    <Dialog>
      {data && data?.total > 0 ? <Summary /> : <EmptyGoals /> }

      <CreateGoal />
    </Dialog>
  );
}
