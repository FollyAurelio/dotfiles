import React from "react"
import { DataTable } from "@/components/todo";
import initialData from "./data.json";

export function DataTablePage() {
  const [data, setData] = React.useState(initialData)
export default function Todo() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <DataTable data={data} />
    </div>
  );
}


