"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  Name: string
  Trade: string
  Account: "Active" | "Pending" ,
  ERP_ID: string,
  Tax_Status: "Taxable" | "Tax Exempt",
  Tax_Group:string,
  Contact:"Main" | "Billing" |"Procurement"
  Document:"MSA" | "Contract" 
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey:"Name",
    header:"Name",
  },
  {
    accessorKey:"Trade",
    header: "Trade",
  },
  {
    accessorKey:"Account",
    header: "Account",
  },
  {
    accessorKey:"ERP_ID",
    header: "ERP ID",
  },
  {
    accessorKey:"Tax_Status",
    header: "Tax Status",
  },
  {
    accessorKey:"Contact",
    header: "Contact",
  },
  {
    accessorKey:"Document",
    header: "Document",
  },
]
