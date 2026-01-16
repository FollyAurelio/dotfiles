import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export type Task = {
    id: number
    title: string
    description: string
    status: string
}

function TaskCardFooter(task: Task) {
    if (task.status == "Done") {
        return null
    } else if (task.status == "In Review") {
        return (
            <CardFooter>
                <CardAction>
                    <Button>Mark done</Button>
                </CardAction>
            </CardFooter>
        )
    } else if (task.status == "In Process") {
        return (
            <CardFooter>
                <CardAction>
                    <Button>Start review</Button>
                </CardAction>
            </CardFooter>
        )
    } else if (task.status == "Todo") {
        return (
            <CardFooter>
                <CardAction>
                    <Button>Start task</Button>
                </CardAction>
            </CardFooter>
        )
    }
}

export function TaskCard({ task }: { task: Task }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{task.id}: {task.title}</CardTitle>
            </CardHeader>
            <CardContent>{task.description}</CardContent>
            {TaskCardFooter(task)}
        </Card>
    )
}