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
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  CustomerName: z.string().min(5, {
    message: "Customer Name must be at least 5 characters.",
  }),
  Site: z.string().min(5, {
    message: "Site must be at least 5 characters.",
  }),
  Unit: z.enum(["A", "B", "C"]),
  Type: z.enum(["FMS", "List", "etc"]),
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
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Contact Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Part */}
            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="CustomerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Adarsh" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Site"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Site</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-10">
  <FormField
    control={form.control}
    name="Unit"
    render={({ field }) => (
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
      </FormItem>
    )}
  />

  <FormField
    control={form.control}
    name="Type"
    render={({ field }) => (
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
      </FormItem>
    )}
  />
</div>


            {/* Second Part */}
            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Address1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address1</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="Address2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address2</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="City"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="State"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ZIP"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP</FormLabel>
                    <FormControl>
                      <Input placeholder="123456" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-10">
              <FormField
                control={form.control}
                name="Phones"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phones</FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
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
