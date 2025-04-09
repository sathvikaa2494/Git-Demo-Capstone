import TabsDemo from "@/components/tabs-demo"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Tab Navigation Demo</h1>
        <TabsDemo />
      </div>
    </main>
  )
}
