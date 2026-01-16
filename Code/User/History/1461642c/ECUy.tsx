import type { Task } from "@/components/task"
import { TaskCard } from "@/components/task"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardHeader,
    CardTitle,
    CardAction,
    CardContent
} from "@/components/ui/card"
import {
    Button
} from "@/components/ui/button"
import {
    Plus
} from "lucide-react"

export function TaskList({ tasks = [] }: { tasks?: Task[] }) {
    const inReview: Task[] = []
    const inProcess: Task[] = []
    const todo: Task[] = []
    const done: Task[] = []
    tasks.forEach(task => {
        if (task.status == "In Review") {
            inReview.push(task)
        } else if (task.status == "In Process") {
            inProcess.push(task)
        } else if (task.status == "Todo") {
            todo.push(task)
        } else if (task.status == "Done") {
            done.push(task)
        }
    });
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardAction>
                    <Button><Plus />New</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple">
                    <AccordionItem value="in-review">
                        <AccordionTrigger>In Review</AccordionTrigger>
                        <AccordionContent>
                            {inReview.map(task => <TaskCard task={task} />)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="in-process">
                        <AccordionTrigger>In Process</AccordionTrigger>
                        <AccordionContent>
                            {inProcess.map(task => <TaskCard task={task} />)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="todo">
                        <AccordionTrigger>Todo</AccordionTrigger>
                        <AccordionContent>
                            {todo.map(task => <TaskCard task={task} />)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="done">
                        <AccordionTrigger>Done</AccordionTrigger>
                        <AccordionContent>
                            {done.map(task => <TaskCard task={task} />)}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}