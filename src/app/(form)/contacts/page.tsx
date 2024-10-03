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
  FormMessage,
} from "@/components/ui/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Zod Validation Schema
const formSchema = z.object({
  Customer: z.string().min(5, {
    message: "Customer Name must be at least 5 characters.",
  }),
  Site: z.string().min(5, {
    message: "Site must be at least 5 characters.",
  }),
  Unit: z.enum(["A", "B", "C"], {
    errorMap: () => ({ message: "Unit is required." }),
  }),
  Type: z.enum(["FMS", "List", "etc"], {
    errorMap: () => ({ message: "Type is required." }),
  }),
  Name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  Address1: z.string().min(5, {
    message: "Address1 must be at least 5 characters.",
  }),
  Address2: z.string().min(5, {
    message: "Address2 must be at least 5 characters.",
  }),
  City: z.string().min(5, {
    message: "City must be at least 5 characters.",
  }),
  State: z.string().min(5, {
    message: "State must be at least 5 characters.",
  }),
  ZIP: z.number().min(100000, {
    message: "ZIP must be at least 6 digits.",
  }),
  Phones: z.string().regex(/^\d{10}$/, {
    message: "Phone Number must be exactly 10 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Customer: "",
      Site: "",
      Name: "",
      Address1: "",
      Address2: "",
      City: "",
      State: "",
      Phones: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-6">Contacts Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Form Fields */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="Customer"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Customer</FormLabel>
                    <FormControl>
                      <Input placeholder="enter customer name" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Site"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Site</FormLabel>
                    <FormControl>
                      <Input placeholder="enter site name" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="Unit"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Unit</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                        <SelectItem value="C">C</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Type"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FMS">FMS</SelectItem>
                        <SelectItem value="List">List</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Form Fields */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="Name"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your name" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Address1"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address1</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your address-1" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {/* Remaining Fields */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="Address2"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address2</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your address-2" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="City"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your city" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="State"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your state" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ZIP"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>ZIP</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your ZIP" type="number" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <FormField
                control={form.control}
                name="Phones"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Phones</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your phones" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="enter your email" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

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
