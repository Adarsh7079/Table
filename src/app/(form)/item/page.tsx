"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {  z } from "zod";

import { Button } from "@/components/ui/button";

// Getting components from shadcn form
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
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
  Team_Type: z.enum(["Front", "Shell", "Rear"],{errorMap: () => ({ message: "Team Type is required." }),
}),
  Compabloc_Type: z.enum(["A", "B"],
    {errorMap: () => ({ message: "Compabloc_Type is required." }),}
  ),
  Exchange_Type: z.enum(["U_Tube", "Straight", "etc"],{errorMap: () => ({ message: "Exchange type is required." }),}),
  Spec_Weight: z.number().min(100000, {
    message: "Spec Weigth must be at least 6 digits.",
  }),
  Length: z.number().min(100000, {
    message: "Length must be at least 6 digits.",
  }),
  Tubesheet_OD: z.number().min(100000, {
    message: "Tubesheet must be at least 6 digits.",
  }),

  Tube_Count: z.number().min(100000, {
    message: "Tube Count must be at least 6 digits.",
  }),
  Tube_ID: z.number().min(100000, {
    message: "Tube ID must be at least 6 digits.",
  }),

  Tube_OD: z.number().min(100000, {
    message: "Tube OD must be at least 6 digits.",
  }),
  Tube_Wall_Thikness: z.number().min(100000, {
    message: "Tube Wall Thikness must be at least 6 digits.",
  }),

  Tube_Layout: z.enum(["Square", "Rectangular"],{errorMap: () => ({ message: "Tube_Layout is required." })}),
  Tube_Pitch: z.number().min(100000, {
    message: "Tube Pitch must be at least 6 digits.",
  }),

  Metallurgy_Type: z.enum(["Stanless", "Steel", "etc"],{errorMap: () => ({ message: "Metallurgy_Type is required." })}),
  Maximum_Hydroblast_Pressure: z.number().min(100000, {
    message: "Maximum Hydroblast Pressure must be at least 6 digits.",
  }),

  Item_Specific_Requirements: z.string(),
  Service_Description: z.string(),

  ID_Type_Fluid: z.string().min(5, {
    message: "ID Type Fluid must be at least 5 characters.",
  }),
  ID_Class_Fouling: z.enum(["Hydrocarbon", "Scale", "etc"],{errorMap: () => ({ message: "ID_Class_Fouling is required." })}),
  OD_Type_Fluid: z.string().min(5, {
    message: "OD_Type_Fluid must be at least 5 characters.",
  }),

  OD_Class_Fouling: z.enum(["Hydrocarbon", "Scale", "etc"],{errorMap: () => ({ message: "OD_Class_Fouling is required." })}),

  Chemistry_Selection: z.enum(["Surfacant", "Acid", "Both"],{errorMap: () => ({ message: "ID_Class_Fouling is required." })}),
  Documents: z.enum(["SDS", "TEMA"],{errorMap: () => ({ message: "Documents is required." })}),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      CustomerCorporateName:"",
      SiteName:"",
      UnitName:"",
      Tag:"",
      ID_Type_Fluid:"",
      OD_Type_Fluid:"",
      Maximum_Hydroblast_Pressure:Number("")
      
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-6">Item Details</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1 */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="CustomerCorporateName"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Customer Corporate Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Adarsh" {...field} />
                    </FormControl>
                                     <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="SiteName"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Site Name</FormLabel>
                    <FormControl>
                      <Input placeholder="site name " {...field} />
                    </FormControl>
                                     <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="UnitName"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Unit Name</FormLabel>
                    <FormControl>
                      <Input placeholder="unit name" {...field} />
                    </FormControl>
                                     <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Team_Type"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
           
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Compabloc_Type"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tag"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tag</FormLabel>
                    <FormControl>
                      <Input placeholder="enter tag" {...field} />
                    </FormControl>
                                     <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* 4th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Exchange_Type"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Spec_Weight"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Spec Weight</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Length"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="213" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* 6th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Tube_Count"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube_Count</FormLabel>
                    <FormControl>
                      <Input placeholder="12" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_ID"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube ID</FormLabel>
                    <FormControl>
                      <Input placeholder="XXXXX12" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tubesheet_OD"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tubesheet_OD</FormLabel>
                    <FormControl>
                      <Input placeholder="XX12" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* 7th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Tube_OD"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube OD</FormLabel>
                    <FormControl>
                      <Input placeholder="XXX12" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Wall_Thikness"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Wall Thikness</FormLabel>
                    <FormControl>
                      <Input placeholder="23" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Layout"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Layout</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
           
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
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Maximum_Hydroblast_Pressure"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Maximum_Hydroblast_Pressure</FormLabel>
                    <FormControl>
                      <Input placeholder="abc" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Tube_Pitch"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tube Pitch</FormLabel>
                    <FormControl>
                      <Input placeholder="12" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* 10th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Item_Specific_Requirements"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Item Specific Requirements</FormLabel>
                    <FormControl>
                      <Input placeholder="enter description" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Service_Description"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Service Description</FormLabel>
                    <FormControl>
                      <Input placeholder="enter description" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="OD_Class_Fouling"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="ID_Type_Fluid"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>ID Type Fluid</FormLabel>
                    <FormControl>
                      <Input placeholder="enter type" {...field} />
                    </FormControl>

                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ID_Class_Fouling"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="OD_Type_Fluid"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-1">
                    <FormLabel>OD Type Fluid</FormLabel>
                    <FormControl>
                      <Input placeholder="enter type" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
            </div>

            {/* 11th */}
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="Chemistry_Selection"
                render={({ field, fieldState }) => (
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
                    <FormMessage>{fieldState.error?.message}</FormMessage>
             
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Documents"
                render={({ field, fieldState }) => (
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
