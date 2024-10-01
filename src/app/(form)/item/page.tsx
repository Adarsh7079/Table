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

// Schema for the form
const formSchema = z.object({
  CustomerCorporateName: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  SiteName: z.string().min(5, {
    message: "Site Name must be at least 5 characters.",
  }),
  UnitName: z.string().min(5, {
    message: "Unit Name must be at least 5 characters.",
  }),
  Tag: z.string().min(5, {
    message: "Site Name must be at least 5 characters.",
  }),
  Team_Type: z.enum(["Front", "Shell", "Rear"]),
  Compabloc_Type: z.enum(["A", "B"]),
  Exchange_Type: z.enum(["U_Tube", "Straight", "etc"]),
  Spec_Weight: z.number(),
  Length: z.number(),
  Tubesheet_OD: z.number(),
  Tube_Count: z.number(),
  Tube_ID: z.number(),
  Tube_OD: z.number(),
  Tube_Wall_Thikness: z.number(),
  Tube_Layout: z.enum(["Square", "Rectangular"]),
  Tube_Pitch: z.number(),
  Metallurgy_Type: z.enum(["Stanless", "Steel", "etc"]),
  Maximum_Hydroblast_Pressure: z.number(),
  Item_Specific_Requirements: z.string(),
  Service_Description: z.string(),
  ID_Type_Fluid: z.string(),
  ID_Class_Fouling: z.enum(["Hydrocarbon", "Scale", "etc"]),
  OD_Type_Fluid: z.string(),
  OD_Class_Fouling: z.enum(["Hydrocarbon", "Scale", "etc"]),
  Chemistry_Selection: z.enum(["Surfacant", "Acid", "Both"]),
  Documents: z.enum(["SDS", "TEMA"]),
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
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-6">Item Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1 */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="CustomerCorporateName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Customer Corporate Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Adarsh" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="SiteName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Site Name</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="UnitName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Unit Name</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tag"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tag</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Team_Type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Team Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Team Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Front">Front</SelectItem>
                        <SelectItem value="Shell">Shell</SelectItem>
                        <SelectItem value="Rear">Rear</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Compabloc_Type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Compabloc Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Compabloc Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A">A</SelectItem>
                        <SelectItem value="B">B</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* Add more rows similarly if needed */}

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
