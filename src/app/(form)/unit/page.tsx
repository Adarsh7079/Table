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
  FormMessage, // Import FormMessage to display error messages
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
    message: "Customer Name must be at least 5 characters.",
  }),
  Site_Name: z.string().min(5, {
    message: "Site Name must be at least 5 characters.",
  }),
  Unit_Name: z.string().min(5, {
    message: "Unit Name must be at least 5 characters.",
  }),
  Unit_Description: z.string().min(5, {
    message: "Unit Description must be at least 5 characters.",
  }),
  Contacts: z.enum(["Maintenance", "Turnaround", "Shipping"],{errorMap: () => ({ message: "Contacts is required." })}),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      CustomerCorporateName:"",
      Site_Name:"",
      Unit_Name:"",
      Unit_Description:"",


    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // navigate or perform additional actions here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Unit Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="CustomerCorporateName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="enater customer corporate name" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.CustomerCorporateName?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Site_Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter site name" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.Site_Name?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Unit_Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Name</FormLabel>
                  <FormControl>
                    <Input placeholder="enter unit name " {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.Unit_Name?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Unit_Description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Description</FormLabel>
                  <FormControl>
                    <Input placeholder="enter unit description" {...field} />
                  </FormControl>
                  <FormMessage>{form.formState.errors.Unit_Description?.message}</FormMessage>
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
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                      <SelectItem value="Turnaround">Turnaround</SelectItem>
                      <SelectItem value="Shipping">Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage>{form.formState.errors.Contacts?.message}</FormMessage>
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
