import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import data from "./data.json";

export default function Home() {
  const tableData = (data as any[]).map((item) => ({
    id: item.id,
    header: item.title,
    type: item.label,
    status: item.status,
    target: item.assignee,
    limit: item.deadline,
    reviewer: item.urgency,
  }));

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={tableData} />
    </div>
  );
}
