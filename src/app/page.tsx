import Button from "./components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="space-y-3 border-2 border-indigo-500 p-3">
        <Button width="w-fit">SOLID</Button>
        <Button>DESTRUCTIVE</Button>
        <Button>SECONDARY</Button>
        <Button>OUTLINE</Button>
        <Button>CHOST</Button>
        <Button>LINK</Button>
      </div>
    </main>
  );
}
