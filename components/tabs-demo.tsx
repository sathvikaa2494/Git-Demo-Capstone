"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="p-6 border rounded-md mt-2">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold">git demo</h2>
        </div>
      </TabsContent>
      <TabsContent value="features" className="p-6 border rounded-md mt-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Simple and intuitive tab navigation</li>
            <li>Responsive design works on all devices</li>
            <li>Built with Next.js and shadcn/ui components</li>
            <li>Easy to customize and extend</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  )
}
