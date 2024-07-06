import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import RecentProjects from "@/components/recentprojects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-a">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        <RecentProjects/>
      </div>
    </main>

  );
}
