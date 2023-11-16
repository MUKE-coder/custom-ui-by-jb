import ComponentList from "@/components/ComponentList";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      {/* ComponentList */}
      <ComponentList />
    </div>
  );
}
