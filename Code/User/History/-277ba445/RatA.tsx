// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
//import { DataTable } from "@/components/todo";
import { DataTable } from "@/components/todo";
// import { SectionCards } from "@/components/section-cards";
//import {payments} from "@/components/todo";
//import {columns} from "@/components/todo";
import data from "./data.json";

export default function Todo() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <DataTable data={data} />
    </div>
  );
}


