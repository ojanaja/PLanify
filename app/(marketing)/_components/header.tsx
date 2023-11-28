import { Button } from "@/components/ui/button"
import Image from "next/image"
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link"
import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
});

const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
    ]
});

const Header = () => {
    return (
        <div className="lg:flex lg:space-x-5 lg:justify-evenly w-full">
            <div className="flex justify-center items-center flex-col">
                <div className={cn("flex justify-center items-center flex-col", headingFont.className)}>
                    <h1 className="text-3xl md:text-6xl text-neutral-800 mb-6">
                        Planify helps team move
                    </h1>
                    <div className="flex justify-center items-center text-3xl md:text-6xl bg-gradient-to-r from-blue-700 to-blue-400 text-center text-white px-4 p-2 rounded-md w-fit">
                        work forward
                    </div>
                </div>
                <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                    Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - acomplish it all with planify.
                </div>
                <Button className="mt-6" size="lg" asChild>
                    <Link href="/sign-up">
                        Get Planify for free
                    </Link>
                </Button>
            </div>
            <div>
                <Image
                    src="/globe.png"
                    alt="Work from everywhere"
                    width={3000}
                    height={1000}
                    priority
                    className="hidden lg:block lg:w-[35rem]"
                />
            </div>
        </div>
    )
}

export default Header