//import ChartAreaGradient from "@/components/Charts/chart-area-gradient";
import ChartTooltipAdvanced from "@/components/Charts/chart-tooltip-advanced";
import ChartAreaInteractive from "@/components/Charts/chart-area-interactive";
import Breadcrumbs from "@/components/breadcrumbs";
import GridBox from "@/components/Containers/grid-box";
import  AspAPI from "../../data/api/aspAPI";
import { useEffect, useState } from "react";
import globals from "../../data/config/global.json"
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "lucide-react";

interface DataResponse {
  id: string;
  name: string;
  status: string;
}
export default function Main() {
    /*
    const [data, setData] = useState<DataResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      (async () => {
        try {
          const url = `${globals.globalData[0].serverURL}/data/asp/simpleASP.asp?id=123`;
          const res = await fetch(url, {
            credentials: "include",
            headers: {
              "Cache-Control": "no-cache",
              "Pragma": "no-cache",
            },
          });

          if (res.status === 304) {
            throw new Error("Resource not modified; no new data");
          }
          if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
          }
          const text = await res.text();
          console.log("Raw response text:", text);

          const data = JSON.parse(text);
          setData(data);
        } catch (err) {
          if (err instanceof Error) setError(err.message);
          else setError(String(err));
        } finally {
          setLoading(false);
        }
      })();
    }, []);
  

    if (loading) return <div>Loading…</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data found</div>;
    */
    return (
      <>
        <Breadcrumbs />
        <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <GridBox style="">
                <h3 className="font-bold">Requisitions</h3>
                <div className="flex flex-col items-start justify-start gap-2 mt-5">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                    <Button variant="link" className="p-0 ps-1">View All</Button>
                </div>
            </GridBox>
            <GridBox style="">
                <h3 className="font-bold">Leave Requests</h3>
                <div className="flex flex-col items-start justify-start gap-2 mt-5">
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                    <Button variant="link" className="p-0 ps-1">View All</Button>
                </div>
            </GridBox>
            <GridBox style="">
                <h3 className="font-bold">Timesheets</h3>
                <div className="flex flex-col items-start justify-start gap-2 mt-5">
                    <div className="space-y-2 w-full">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                    <Button variant="link" className="p-0 ps-1">View All</Button>
                </div>
            </GridBox>
            <GridBox style="">
              <CardHeader>
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  $1,000.00
                </CardTitle>
                <CardAction>
                  <Badge >
                    
                    +10.5%
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Trending up this month 
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
                </div>
              </CardFooter>
            </GridBox>
            <ChartAreaInteractive style="col-span-2 md:col-span-3 lg:col-span-4"/>
            <GridBox style="lg:col-span-4"></GridBox>
            <GridBox style=""></GridBox>
            <GridBox style="lg:row-span-2"></GridBox>
            <GridBox style="lg:row-span-2"></GridBox>
            <ChartTooltipAdvanced/>
            <GridBox style="col-span-2 lg:col-span-3 2xl:col-span-4 pb-2"></GridBox>
        </div>
        </>
    );
};