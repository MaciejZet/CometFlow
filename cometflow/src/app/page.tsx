import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="">
      <Input />
      <Select />
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="muted">Muted Button</Button>
      <Button variant="outline" disabled>Outline Button</Button>
      <Button variant="teritary" disabled>Teritary Button</Button>
    </div>
  );
}
