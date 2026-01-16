import React from "react"
import { DataTable } from "@/components/todo";
import data from "./data.json";

export function DataTablePage() {
  const [data, setData] = React.useState(payments)
export default function Todo() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <DataTable data={data} />
    </div>
  );
}


