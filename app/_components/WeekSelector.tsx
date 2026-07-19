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

export function WeekSelector() {
    return (
        <div className="flex flex-row">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select a week" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Weeks</SelectLabel>
                        <SelectItem value="1">Week 1</SelectItem>
                        <SelectItem value="2">Week 2</SelectItem>
                        <SelectItem value="3">Week 3</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button 
                variant="outline"
                className="ml-2"
            >View Results</Button>
        </div>
    )
}