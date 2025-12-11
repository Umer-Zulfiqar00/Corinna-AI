import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowRightCircleIcon, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { pricingCards } from "@/constants/landing-page";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "process";


export default function Home(){
  return(
    <main>
      <NavBar/>
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 px-4 py-2">
          An AI Powered sales assistant chatbot</span>
          <Image
          src='/images/corinna-ai-logo.png'
          width={500}
          height={100}
          alt="logo"
          className="max-w-lg object-contain"
        />
        <p className="text-center max-w-[500px]">
          Your AI powered sales assistant! Embed Corinna AI into any website
           with just a snippet of code!
        </p>
        <Button className="bg-orange font-bold text-white px-4">
          Start for Free
        </Button>
        <Image
        src='/images/iphonecorinna.png'
        width={400}
        height={100}
        alt="logo"
        className=" max-w-lg object-contain"
        />
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
      <h2 className="text-4xl text-center">Choose What fits you right</h2>    
      <p className="text-muted-foreground text-center max-w-lg">
        Our Starightforward pricing plans are tailored to meet your needs. If
        {"you're"} not ready to commit you can get started for free.
      </p>
      </section>
      <div className=" flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card)=>(
          <Card key={card.title}
          className={clsx('w-[300px] flex flex-col justify-between',{
            'border-2 border-primary': card.title==='unlimited',
          })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>
                  {pricingCards.findLast((c)=>c.title === card.title)?.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature)=>(
                  <div
                   key={feature}
                   className="flex gap-2"
                   >
                    <Check/>
                    <p>{feature}</p>
                    </div>
                ))}
              </div>
              <Link
              href={`/dashboad?plan=${card.title}`}
              className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}