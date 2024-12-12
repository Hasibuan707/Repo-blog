import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800" id="">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600">
              We are a passionate team dedicated to creating innovative
              solutions that make a difference. Our journey began with a simple
              idea and has grown into a mission to transform the way people
              interact with technology.
            </p>
            <p className="text-lg text-gray-600">
              With years of experience and a commitment to excellence, we strive
              to deliver products and services that exceed expectations and
              inspire change.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/spokat.jpg?height=600&width=800"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
