import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="flex items-center space-x-4 flex-col space-y-3 border-2 border-indigo-500 p-3 rounded-md">
        <Button size={"xs"}>XS</Button>
        <Button intent={"outline"} size="sm">SMALL</Button>
        <Button intent={"destructive"} size="base">BASE</Button>
        <Button size="lg">LARGE</Button>
      </div>
    </main>
  );
}
