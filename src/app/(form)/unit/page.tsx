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
  Contacts:z.enum(["Maintenance","Turnaround","Shipping"]),
 
});

const Page = () => {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // navigate or perform additional actions here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 ">Unit Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="CustomerCorporateName"
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
              name="Site_Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Abc" {...field}/>
                  </FormControl>
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
                    <Input placeholder="Abc" {...field}/>
                  </FormControl>
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
                    <Input placeholder="Abc" {...field}/>
                  </FormControl>
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
                  <SelectItem value="Maintenance">Maintenance</SelectItem>
                  <SelectItem value="Turnaround">Turnaround</SelectItem>
                  <SelectItem value="Shipping">Shipping</SelectItem>

                 
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
