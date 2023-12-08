import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our Story'}
          mainHeader={'About Us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, tenetur? Deserunt voluptas reiciendis dicta? Ipsam itaque ut consequuntur alias animi similique voluptatum ab. Esse, nostrum architecto voluptates repellendus aperiam fugiat.
          </p>
          <p>
            Veritatis, earum esse. Quaerat quibusdam facilis porro vero commodi, eligendi repellendus error ut laudantium. At optio corrupti ex doloremque nesciunt cupiditate nulla.
          </p>
          <p>
            Rem modi ea fugit possimus, sunt in? Assumenda perferendis temporibus officia similique ullam eos quae!
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a href="tel:+46738123123" className="text-4xl underline text-gray-500">
            +46 738 123 123
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
