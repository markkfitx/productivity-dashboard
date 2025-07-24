import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"

export default function Breadcrumbs() {
    return (
        <Breadcrumb>
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href="/">KeyNet</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
                <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
                <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>
    )
    }