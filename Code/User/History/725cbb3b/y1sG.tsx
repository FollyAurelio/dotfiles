import taskData from "@/data/taskData.json"
import projectData from "@/data/projectData.json"
import userData from "@/data/Accounts.json"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useAuth } from "@/context/AuthContext"
import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { IconCircle, IconCircleCheckFilled, IconCircleFilled, IconLoader } from "@tabler/icons-react"
import { Label } from "@/components/ui/label"

export function DashboardTaskDivisionCard() {

    const account = useAuth().user;
    let projectsAllowed = [];
    if (account?.permission == "Manager") {
        projectsAllowed = projectData;
    }
    else if (account?.permission == "Leader") {
        projectsAllowed = projectData.filter((project) => project.leader === account.id);
    }
    else {
        return (null);
    }
  
    
    const [openState, setOpenState] = useState(false)
    const [projectState, setProjectState] = useState(projectsAllowed[0])


    const doneIcon = <IconCircleCheckFilled className={"fill-green-500 dark:fill-green-400"} />
    const inProcessIcon = <IconLoader />
    const inReviewIcon = <IconCircleFilled className={"fill-yellow-500"} />
    const todoIcon = <IconCircle />

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
            <Label className="bold">Curent Project : </Label>
            <Popover open={openState} onOpenChange={setOpenState}>
                <PopoverTrigger asChild>
                    
                    <Button
                        
                        variant="outline"
                        role="combobox"
                        aria-expanded={openState}
                        className="w-[200px] justify-between"
                    >
                        {projectsAllowed.find((project) => project.id === projectState.id)?.title!}
                        <ArrowDown />
                    </Button>
                </PopoverTrigger>
                
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search projects..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No project found.</CommandEmpty>
                            <CommandGroup>
                                {projectsAllowed.map((p) => (
                                    <CommandItem
                                        key={p.id}
                                        value={p.title}
                                        onSelect={(select) => {
                                            setProjectState(projectsAllowed.find(projectData => projectData.title === select)!)
                                            setOpenState(false)
                                        }}
                                    >
                                        {p.title}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            </div>
            {userData.map((u) => {
                let taskcount = [0, 0, 0, 0, 0, 0, 0, 0]
                for (let task of taskData) {

                    if ((task.assignee === u.id) && ((task.project === projectState.id) || (task.project === 0))) {
                        if (task.status === "Todo")
                            taskcount[1] += 1;
                        else if (task.status === "In Process")
                            taskcount[2] += 1;
                        else if (task.status === "In Review")
                            taskcount[3] += 1;
                        else if (task.status === "Done")
                            taskcount[4] += 1;
                        if (task.urgency === "High")
                            taskcount[5] += 1;
                        else if (task.urgency === "Medium")
                            taskcount[6] += 1;
                        else if (task.urgency === "Low")
                            taskcount[7] += 1;

                        taskcount[0] += 1;
                    }
                }
                return (
                    <Card key={u.id} className="@container/card ml-[10px] w-[calc(100%-20px)]">
                        <CardHeader className="flex flex-row items-start justify-between space-y-0 ">
                            <div className="space-y-1">
                                <CardTitle className="text-lg">{u.email}</CardTitle>
                                <CardDescription>Total Tasks: {taskcount[0]}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardFooter className="flex flex-wrap gap-2 px-5 pt-0">
                            
                        </CardFooter>
                    </Card>
                )
            }
            )}
        </div>
    );
}

