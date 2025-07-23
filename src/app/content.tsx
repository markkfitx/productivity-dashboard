import ChartAreaGradient from "@/components/Charts/chart-area-gradient";
import ChartTooltipAdvanced from "@/components/Charts/chart-tooltip-advanced";
import Calendar from "@/components/Calendar-widget";
import Breadcrumbs from "@/components/breadcrumbs";
import GridBox from "@/components/Containers/grid-box";

import DataTable from "@/components/Tables/table";
import {columns, type Payment} from "@/components/Tables/Components/columns";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
     {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
    // ...
  ]
}
export default  function Content() {
    const data = getData()
    return (
        <div className="grid grid-col-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            <div className="col-span-2 lg:col-span-3 2xl:col-span-4 pb-2"><Breadcrumbs /></div>
            <GridBox style="lg:col-span-2"></GridBox>
            <ChartAreaGradient />
            <GridBox style=""></GridBox>
            <GridBox style="lg:row-span-2"></GridBox>
            <GridBox style="lg:row-span-2"></GridBox>
            <ChartTooltipAdvanced/>
            <GridBox style="col-span-2 lg:col-span-3 2xl:col-span-4 pb-2"><DataTable columns={columns} data={data}/></GridBox>
        </div>
    );
};