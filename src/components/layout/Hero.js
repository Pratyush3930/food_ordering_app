import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero">
            {/* The hero classname is defined inside global.css file */}
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything <br />
                    is better <br />
                    with a&nbsp; 
                    {/* &nbsp; gives a between a and pizza */}
                    <span className="text-primary">
                         Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes everything complete, a simple yet delicious joy in life
                </p>
                <div className="flex gap-4 text-sm">
                    {/* text-sm makes the text size small */}
                    <button className="bg-primary flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        ORDER NOW
                        <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'}
                    objectFit={'contain'} alt={'pizza'} />
            </div>
        </section>
    )
}