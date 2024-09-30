"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

// Getting components from shadcn form 
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,

} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  Name: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  Trade: z.string().min(2, {
    message: "Trade must be at least 2 characters.",
  }),
  Account: z.enum(["Active", "Inactive"]),

  Billing_Level:z.enum(["Company","Site"]),

  ERP_ID: z.number().min(10000, {
    message: "ERP_ID must be at least 5 digits",
  }),
  Tax_Status: z.enum(["Taxable", "Tax_Exempt"]),
  Contacts:z.enum(["Main","Billing","Procurement"]),
  Document:z.enum(["MSA","Contract"])
});

const Page = () => {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Trade: "",
      Account:"Inactive"
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // navigate or perform additional actions here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 ">Customer Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Adarsh" {...field}  />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Trade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trade</FormLabel>
                  <FormControl>
                    <Input placeholder="Engineer" {...field}/>
                  </FormControl>
                </FormItem>
              )}
            />

        <FormField
          control={form.control}
          name="Account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select  Account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                 
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Billing_Level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Billing Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Billing Level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Company">Company</SelectItem>
                  <SelectItem value="Site">Site</SelectItem>
                 
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />

            <FormField
              control={form.control}
              name="ERP_ID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ERP_ID</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXXX111" {...field}  className="input w-full border-gray-300 rounded-md"/>
                  </FormControl>
                </FormItem>
              )}
            />

        <FormField
          control={form.control}
          name="Tax_Status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Tax Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Taxable">Taxable</SelectItem>
                  <SelectItem value="Tax_Exempt">Tax_Exempt</SelectItem>
                 
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Contacts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contacts</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Tax Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Main">Main</SelectItem>
                  <SelectItem value="Billing">Billing</SelectItem>
                  <SelectItem value="Procurement">Procurement</SelectItem>

                 
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />
              <FormField
          control={form.control}
          name="Document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Document</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Tax Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MSA">MSA</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                 
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
