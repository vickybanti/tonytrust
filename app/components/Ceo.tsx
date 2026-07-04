import Image from "next/image";
import {Button} from "@/app/components/ui/button";
import Link from "next/link";

export default function Ceo() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-20">
                    {/* Left - CEO Image */}
                    <div className="relative h-[500px] lg:h-[650px] overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/hero/truck1.jpg" // Replace with your image
                            alt="CEO Portrait"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right - CEO Description */}
                    <div className="flex flex-col justify-center">
            <span className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Aim of our company
            </span>

                        <h4 className="mt-4 text-md font-bold text-gray-900">
                            As one of the fastest growing petroleum product distribution company in Nigeria, We aim to To provide safe, reliable, and efficient distribution of high-quality petroleum products while ensuring customer satisfaction, operational excellence, environmental responsibility, and sustainable business growth.
                        </h4>

                        <p className="mt-3 text-lg text-gray-600 font-medium">
                            Our Objectives include
                        </p>

                        <div className="mt-8 space-y-6 text-gray-700 leading-8">
                            <span>




                                <p>To ensure the timely and uninterrupted distribution of petroleum products to customers across designated markets.</p>
                            <p>    To maintain the highest standards of product quality, safety, and regulatory compliance throughout the supply chain.</p>
                         <p>       To build and maintain strong relationships with suppliers, marketers, retailers, and end-users through exceptional customer service.</p>
                      <p>          To optimize logistics and transportation systems in order to reduce delivery time, operational costs, and product losses.</p>
                   <p>             To implement modern technologies and best practices that enhance inventory management, fleet monitoring, and operational efficiency.</p>
                <p>To uphold strict health, safety, security, and environmental (HSSE) standards in all business operations.</p>
                            </span>
                        </div>

                        <div className="mt-10">
                            <Button className="rounded-lg bg-blue-600 px-8 py-4 text-white font-semibold transition hover:bg-blue-700">
                                <Link href={"/contact"}>Contact Us </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}