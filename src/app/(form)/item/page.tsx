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
} from "@/components/ui/form/form";
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

            {/* 4th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Exchange_Type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Exchange Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Exchange Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="U_Tube">U-Tube</SelectItem>
                        <SelectItem value="Straight">Straight</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Spec_Weight"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Spec Weight</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Length"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 6th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Tube_Count"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube_Count</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_ID"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube ID</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tubesheet_OD"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tubesheet_OD</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 7th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Tube_OD"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube OD</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Wall_Thikness"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Wall Thikness</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Layout"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Layout</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 8th */}
            <div className="flex gap-4"></div>

            {/* 9th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Metallurgy_Type"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Metallurgy Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Metallurgy Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Stanless">Stanless</SelectItem>
                        <SelectItem value="Steel">Steel</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Maximum_Hydroblast_Pressure"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Maximum_Hydroblast_Pressure</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Pitch"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Pitch</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 10th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Item_Specific_Requirements"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Item Specific Requirements</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Service_Description"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Service Description</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="OD_Class_Fouling"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>OD Class Fouling</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select OD Class Fouling" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Hydrocarbon">Hydrocarbon</SelectItem>
                        <SelectItem value="Scale">Scale</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="ID_Type_Fluid"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>ID Type Fluid</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ID_Class_Fouling"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>ID Class Fouling</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ID   Class Fouling" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Hydrocarbon">Hydrocarbon</SelectItem>
                        <SelectItem value="Scale">Scale</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="OD_Type_Fluid"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>OD Type Fluid</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            {/* 11th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Chemistry_Selection"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Chemistry Selection</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select OD Class Fouling" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Surfacant">Surfacant</SelectItem>
                        <SelectItem value="Acid">Acid</SelectItem>
                        <SelectItem value="Both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Documents"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Documents</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Documents" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="SDS">SDS</SelectItem>
                        <SelectItem value="TEMA">TEMA</SelectItem>
                        <SelectItem value="etc">etc</SelectItem>
                      </SelectContent>
                    </Select>
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
