import {projects} from "./data/projects"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
export default function Content() {
  return (
    <>
    
      <div className=" w-52 self-center flex flex-col my-10 h-cover space-y-6 sm:w-4/5">
      <div className="text-white my-8 md:my-12 self-center space-y-2">
        <h1 className="sm:mx-20 text-white font-bold text-3xl playfair-display self-center sm:text-4xl ">
          My recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-gray-500">here are some projects I've worked on, find more on  
          <a href="https://github.com/Sreyasree-001" target="blank" className="underline capitalize"> github</a>
        </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-screen bg-black"
        >
          <CarouselContent className="">
            {projects.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 bg-transparent"

              >
                <div className="p-1">
                  <ul>
                    <a href={item.link} target="blank">
                      <Card className="bg-slate-800 bg-transparent max-h-96 overflow-scroll
                      flex flex-col justify-center items-center border-none shadow-md shadow-blue-700
                      hover:scale-95 hover:shadow-lg hover:shadow-blue-400
                      transition-smooth duration-200 transform">
                        <CardContent
                          className="flex flex-col aspect-square items-center justify-center p-6 space-y-3 text-center
                        "
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-32"
                          ></img>
                          <span className="text-xl font-semibold text-white poppins-semibold sm:text-3xl">
                          {item.title}
                        </span>
                        <p className=" text-slate-600 text-center font-medium poppins-light my-2">
                          {item.about}
                        </p>
                        </CardContent>
                      </Card>
                    </a>
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
