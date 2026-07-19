"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export type WeekSelectorProps = {
    weekLabels: string[];
    selectedWeekUpdate: (weekLabel: string) => void;
}

export function WeekSelector(props: WeekSelectorProps) {
    const [selectedWeek, setSelectedWeek] = useState("");

    var handleClick = () => {
        props.selectedWeekUpdate(selectedWeek);
    }

    return (
        <div className="flex flex-row">
            <Select 
                value={selectedWeek} 
                onValueChange={(value) => setSelectedWeek(value!)}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select a week" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Weeks</SelectLabel>
                        {
                            props.weekLabels.map(s => {
                                return (
                                    <SelectItem
                                        key={s}
                                        value={s}
                                    >{s}</SelectItem>
                                )
                            })
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button 
                variant="outline"
                className="ml-2"
                onClick={handleClick}
            >View Results</Button>
        </div>
    )
}