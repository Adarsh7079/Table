"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal ,ArrowUpDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
 


export type User = {
   Name: string;
  Trade: string;
  Account: string;
  ERP_ID: number;
  Tax_Status: string;
  Contact: string;
  Document: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "Trade",
    header: "Trade",
  },
  {
    accessorKey: "Account",
    header: "Account",
  },
  {
    accessorKey: "ERP_ID",
    header: "ERP ID",
  },
  {
    accessorKey: "Tax_Status",
    header: "Tax Status",
  },
  {
    accessorKey: "Contact",
    header: "Contact",
  },
  {
    accessorKey: "Document",
    header: "Document",
  }, 
  
  
    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                // onClick={() => navigator.clipboard.writeText(payment.id)}
              >
              user Id
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    }
];
