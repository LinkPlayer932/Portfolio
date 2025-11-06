import React from "react";
import { Quote } from "lucide-react";

const ClientSays = () => {
  const clients = [
    {
      name: "Robert Hughes",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "James Carter",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Ethan Brooks",
      img: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1374",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fff9f9] to-[#fff3f3] py-15 px-6 md:px-20">
      {/* ==== Testimonials Cards ==== */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {clients.map((client, i) => (
          <div
            key={i}
            className="bg-white md:w-1/3 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(255,0,0,0.15)] flex-1 text-center transition-all duration-500 transform hover:-translate-y-2"
          >
            <Quote className="flex items-center mx-auto text-red-500 rotate-180 fill-red-500 mb-6 mt-4" />

            <img
              src={client.img}
              alt={client.name}
              className="mx-auto rounded-full h-20 w-20 mb-6 border-4 border-red-200 shadow-md object-cover"
            />

            <p className="text-gray-600 text-sm leading-relaxed mb-6 px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              explicabo rem asperiores at commodi aliquid maxime veniam facilis
              veritatis. Deserunt!
            </p>

            <div className="h-[2px] w-12 bg-red-500 mx-auto rounded mb-4"></div>

            <h3 className="text-lg font-semibold text-[#0d2550]">
              {client.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSays;
