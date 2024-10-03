"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, // Import FormMessage to show error messages
} from "@/components/ui/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  CustomerCorporateName: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  SiteName: z.string().min(5, {
    message: "Site Name must be at least 5 characters.",
  }),
  SiteDescription: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  Type: z.enum(["Refinery", "Chemical", "Olefin"],{errorMap: () => ({ message: "Type is required." })}),
  ERP_ID: z.number().min(10000, {
    message: "ERP_ID must be at least 5 digits.",
  }),
  Tax_Status: z.enum(["Taxable", "Tax_Exempt"],{errorMap: () => ({ message: "Tax Status is required." })}),
  Tax_Group: z.enum(["A", "B"],{errorMap: () => ({ message: "Tax Group is required." })}),
  Contacts: z.enum(["Main", "Billing", "Procurement"],{errorMap: () => ({ message: "Contacts is required." })}),
  Document: z.enum(["MSA", "Contract"],{errorMap: () => ({ message: "Documents is required." })}),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CustomerCorporateName: "", // Default value for Customer Corporate Name
      SiteName: "",               // Default value for Site Name
      SiteDescription: "",        // Default value for Site Description
     
      
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Site Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="CustomerCorporateName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Corporate Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Adarsh" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.CustomerCorporateName?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="SiteName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter site name" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.SiteName?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="SiteDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.SiteDescription?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Refinery">Refinery</SelectItem>
                      <SelectItem value="Chemical">Chemical</SelectItem>
                      <SelectItem value="Olefin">Olefin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Type?.message}</FormMessage>
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
                    <Input placeholder="XXXXX111" type="number" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.ERP_ID?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Tax_Status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Tax Status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Taxable">Taxable</SelectItem>
                      <SelectItem value="Tax_Exempt">Tax Exempt</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Tax_Status?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Tax_Group"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Group</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Tax Group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Tax_Group?.message}</FormMessage>
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
                        <SelectValue placeholder="Select Contact Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Main">Main</SelectItem>
                      <SelectItem value="Billing">Billing</SelectItem>
                      <SelectItem value="Procurement">Procurement</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Contacts?.message}</FormMessage>
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
                        <SelectValue placeholder="Select Document Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MSA">MSA</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Document?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
