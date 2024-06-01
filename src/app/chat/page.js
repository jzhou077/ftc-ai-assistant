import '../globals.css'
import { Sidebar } from "@/src/components/ui/Sidebar";

export default function Chat() {
    return (
        <main className="flex h-screen w-full">
            
            <Sidebar/>

            <section className="flex-grow">
                <h1>hi</h1>
            </section>
        </main>
    )
}