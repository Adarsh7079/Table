"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Getting components from shadcn form 
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Trade: z.string().min(2, {
    message: "Trade must be at least 2 characters.",
  }),
  Account: z.string().min(2, {
    message: "Account must be at least 2 characters.",
  }),
  ERP_ID: z.number().min(10000, {
    message: "ERP_ID must be at least 5 digits",
  }),
  Tax_Status: z.enum(["Done", "Pending"]),
  Contact: z.string().min(10, {
    message: "Contact number should be at least 10 digits.",
  }).max(14, {
    message: "Contact number should be at most 14 digits.",
  }),
  Document: z.string().min(2, {
    message: "Document must be at least 2 characters.",
  }),
});

const Page = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Trade: "",
      Account: "",
      Tax_Status: "Done", // Default to "Done"
      Contact: "",
      Document: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // navigate or perform additional actions here
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-bold mb-6 text-center underline">Customer Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Adarsh" {...field} />
                  </FormControl>
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
                    <Input placeholder="XXXXX111" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact</FormLabel>
                  <FormControl>
                    <Input placeholder="XXXXXXXX90" {...field} />
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
                    <Input placeholder="Engineer" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Account"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account</FormLabel>
                  <FormControl>
                    <select {...field} className="input w-full border-gray-300 rounded-md">
                      <option value="Active">Done</option>
                      <option value="Close">Pending</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Tax_Status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Status</FormLabel>
                  <FormControl>
                    <select {...field} className="input w-full border-gray-300 rounded-md">
                      <option value="Done">Done</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </FormControl>
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
