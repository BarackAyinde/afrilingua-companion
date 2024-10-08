import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubsrciption } from "@/lib/subscription";

const RootLayout = async ({
    children
}:{
    children: React.ReactNode;
}) => {
    const isPro = await checkSubsrciption();

    return ( 
        <div className="h-full">
            <Navbar isPro={isPro} />
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                <Sidebar isPro={isPro}/>
            </div>
            <main className="md:pl-20 pt-16 h-full">
                {children}
            </main>
        </div>
     );
}
 
export default RootLayout;