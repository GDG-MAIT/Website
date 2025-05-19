import { Navbar } from "@/components/navbar";

export default function About() {
  const teamMembers = [
    {
      name: "Rohit Goel",
      role: "GDSC Lead",
      image: "/gdgLogo.png",
      bio: "Computer Science senior with a passion for AI and community building."
    },
    {
      name: "Chayan Khetan",
      role: "Technical Lead",
      image: "/gdgLogo.png",
      bio: "Full-stack developer specialized in React and Firebase applications."
    },
    {
      name: "Navdeep",
      role: "Creative Head",
      image: "/gdgLogo.png",
      bio: "UI/UX enthusiast who loves creating intuitive user experiences."
    },
    {
      name: "Krish Puri ",
      role: "Event Coordinator",
      image: "/gdgLogo.png",
      bio: "Organized over 15 tech workshops and 2 major hackathons."
    },
    {
      name: "Vaishnavi Mishra",
      role: "Web Development Lead",
      image: "/gdgLogo.png",
      bio: "Frontend developer with expertise in React and Angular frameworks."
    },
    {
      name: "Parth Bajaj",
      role: "Android Lead",
      image: "/gdgLogo.png",
      bio: "Mobile app developer with 3 published apps on Google Play Store."
    },
    {
      name: "Saksham Gupta",
      role: "Flutter Lead",
      image: "/gdgLogo.png",
      bio: "Mobile app developer with 3 published apps on Google Play Store."
    },
    {
      name: "Shivam Gupta",
      role: "ML/AI Lead",
      image: "/gdgLogo.png",
      bio: "Researcher focused on computer vision and natural language processing."
    },
    {
      name: "XYZ",
      role: "Content Creator",
      image: "/gdgLogo.png",
      bio: "Technical writer and video producer for our educational content."
    },
    {
      name: "XYZ",
      role: "Outreach Coordinator",
      image: "/gdgLogo.png",
      bio: "Responsible for partnerships with other campus organizations."
    },
//More team members data to be added
  ];

  return (
      <main className=" min-h-screen justify-center">
        <div
            className="fixed inset-0 w-full h-full z-0"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.1" //
            }}
        ></div>
        <div className="relative z-10 w-full">
          <Navbar />
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6 flex justify-center items-center">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Meet Our Passionate Team ..
                </h1>
                <p className="max-w-[800px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                  Empowering students to innovate and build solutions for a better future.
                </p>
              </div>
            </div>
          </section>



          {/* Our Team Section */}
          <section className="w-full py-12 md:py-16 ">
            <div className="container px-4 md:px-6">
              <div className="mb-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.slice(0, 4).map((member, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-4 overflow-hidden rounded-full">
                          <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-500 text-center dark:text-gray-400">{member.bio}</p>
                      </div>
                  ))}
                </div>
              </div>
              <div className="mb-12">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.slice(4, 8).map((member, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-4 overflow-hidden rounded-full">
                          <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-500 text-center dark:text-gray-400">{member.bio}</p>
                      </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.slice(8, 12).map((member, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-4 overflow-hidden rounded-full">
                          <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-500 text-center dark:text-gray-400">{member.bio}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </section>



          <section className="w-full py-12 md:py-24  ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold text-gray-500">Join Our Community</h2>
                <p className="max-w-[700px] md:text-lg lg:text-xl">
                  Become part of a vibrant community of student developers and innovators.
                </p>
                <button className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 ">
                  Connect With Us
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
