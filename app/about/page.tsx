import Image from "next/image"
import { PageHeader } from "@/components/shared/page-header"
import { SectionHeader } from "@/components/shared/section-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen scanlines">
      <PageHeader
        title="ABOUT LYSIOM"
        description="A premium platform for collaborative research backed by Silicon Valley investors."
        gradient="sunset"
        backgroundPattern={true}
      />

      <main className="py-12">
        <div className="artisan-container">
          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader title="OUR MISSION" gradient="aurora" alignment="left" />

                <p className="text-[var(--color-text-secondary)] mb-6">
                  Lysiom was founded with a singular vision: to accelerate scientific breakthroughs by connecting elite
                  researchers, academics, and problem solvers to address the world's most pressing challenges through
                  collaborative innovation.
                </p>

                <p className="text-[var(--color-text-secondary)] mb-6">
                  We believe that many of humanity's greatest challenges remain unsolved not because of technological
                  limitations, but because of barriers to collaboration and knowledge sharing across disciplines and
                  institutions.
                </p>

                <p className="text-[var(--color-text-secondary)]">
                  By creating a platform that breaks down these barriers and leverages cutting-edge AI to augment human
                  intelligence, we aim to catalyze breakthroughs that would otherwise take decades to achieve.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative h-64 w-64 float">
                  <Image src="/about/mission.png" alt="Our Mission" width={256} height={256} className="pixel-art" />
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative h-64 w-64 float">
                  <Image src="/about/vision.png" alt="Our Vision" width={256} height={256} className="pixel-art" />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <SectionHeader title="OUR VISION" gradient="nebula" alignment="left" />

                <p className="text-[var(--color-text-secondary)] mb-6">
                  We envision a future where the world's brightest minds collaborate seamlessly across geographical,
                  institutional, and disciplinary boundaries to solve humanity's most pressing challenges.
                </p>

                <p className="text-[var(--color-text-secondary)] mb-6">
                  In this future, breakthroughs in fields like medicine, clean energy, artificial intelligence, and
                  space exploration happen at an unprecedented pace, driven by a global community of researchers
                  empowered by cutting-edge tools and platforms.
                </p>

                <p className="text-[var(--color-text-secondary)]">
                  Lysiom aims to be the catalyst for this future—a platform that not only connects researchers but also
                  augments their capabilities through AI, democratizes access to funding, and accelerates the path from
                  discovery to real-world impact.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <SectionHeader
              title="OUR TEAM"
              description="Meet the visionaries and experts behind Lysiom"
              gradient="cosmic"
              alignment="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="artisan-card p-6 text-center hover-lift">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden gradient-border mb-4">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="pixel-art"
                    />
                  </div>
                  <h3 className="text-lg mb-1 gradient-text">{member.name}</h3>
                  <p className="text-[var(--color-text-secondary)] mb-3">{member.role}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4">{member.bio}</p>

                  <div className="flex justify-center gap-3">
                    {member.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-aurora)]"
                        aria-label={link.name}
                      >
                        <Image
                          src={`/icons/${link.icon}.png`}
                          alt={link.name}
                          width={20}
                          height={20}
                          className="pixel-art"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Investors Section */}
          <section className="mb-20">
            <SectionHeader
              title="OUR INVESTORS"
              description="Backed by world-class investors who share our vision"
              gradient="sunset"
              alignment="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {investors.map((investor) => (
                <div key={investor.id} className="artisan-card p-6 text-center hover-lift">
                  <div className="h-16 w-auto mx-auto mb-4">
                    <Image
                      src={`/investors/${investor.logo}`}
                      alt={investor.name}
                      width={investor.width}
                      height={64}
                      className="object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-lg mb-2 gradient-text">{investor.name}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">{investor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <SectionHeader
              title="OUR VALUES"
              description="The principles that guide everything we do"
              gradient="aurora"
              alignment="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="artisan-card p-6 hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-twilight)]">
                      <Image
                        src={`/icons/${value.icon}.png`}
                        alt={value.title}
                        width={32}
                        height={32}
                        className="pixel-art"
                      />
                    </div>
                    <h3 className="text-lg gradient-text">{value.title}</h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Join Us CTA */}
          <section className="relative overflow-hidden pixel-grid py-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute w-64 h-64 rounded-full bg-[var(--color-plasma)] blur-3xl opacity-10 top-1/4 -left-20 animate-pulse"></div>
              <div
                className="absolute w-80 h-80 rounded-full bg-[var(--color-aurora)] blur-3xl bottom-1/4 -right-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-xl mb-6 gradient-text-nebula">JOIN OUR MISSION</h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
                Whether you're a researcher looking to solve challenging problems, an institution seeking breakthrough
                solutions, or an investor interested in supporting scientific innovation, we invite you to join us in
                our mission to accelerate human progress.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="pixel-button secondary">JOIN AS RESEARCHER</button>
                <button className="pixel-button primary">PARTNER WITH US</button>
                <button className="pixel-button">CONTACT US</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    id: "1",
    name: "Dr. Elena Patel",
    role: "Founder & CEO",
    bio: "Former quantum physicist with a passion for solving humanity's greatest challenges through collaborative research.",
    avatar: "/team/ceo.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
    ],
  },
  {
    id: "2",
    name: "Dr. Marcus Chen",
    role: "Chief Scientific Officer",
    bio: "Award-winning researcher with expertise in interdisciplinary science and complex systems.",
    avatar: "/team/cso.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
    ],
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    role: "Chief Technology Officer",
    bio: "AI pioneer with experience building cutting-edge platforms for scientific collaboration.",
    avatar: "/team/cto.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
      { name: "GitHub", icon: "github", url: "#" },
    ],
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    role: "Head of Research",
    bio: "Former research director at a leading university with expertise in facilitating breakthrough discoveries.",
    avatar: "/team/research.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
    ],
  },
  {
    id: "5",
    name: "Olivia Kim",
    role: "Chief Product Officer",
    bio: "Product visionary with a background in designing intuitive interfaces for complex scientific tools.",
    avatar: "/team/product.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
    ],
  },
  {
    id: "6",
    name: "Michael Johnson",
    role: "Chief Operating Officer",
    bio: "Operations expert with experience scaling research platforms and fostering scientific communities.",
    avatar: "/team/coo.png",
    links: [
      { name: "Twitter", icon: "twitter", url: "#" },
      { name: "LinkedIn", icon: "linkedin", url: "#" },
    ],
  },
]

const investors = [
  {
    id: "1",
    name: "Sequoia Capital",
    logo: "sequoia.png",
    width: 120,
    description: "Leading venture capital firm with a history of backing transformative companies.",
  },
  {
    id: "2",
    name: "Andreessen Horowitz",
    logo: "a16z.png",
    width: 120,
    description: "Venture capital firm that backs bold entrepreneurs building the future.",
  },
  {
    id: "3",
    name: "Y Combinator",
    logo: "yc.png",
    width: 100,
    description: "Startup accelerator that has helped launch over 2,000 companies.",
  },
  {
    id: "4",
    name: "Accel",
    logo: "accel.png",
    width: 100,
    description: "Global venture capital firm that partners with exceptional founders.",
  },
]

const values = [
  {
    title: "SCIENTIFIC EXCELLENCE",
    description:
      "We are committed to upholding the highest standards of scientific rigor and excellence in all our endeavors.",
    icon: "excellence",
  },
  {
    title: "COLLABORATIVE INNOVATION",
    description:
      "We believe that the most significant breakthroughs come from diverse minds working together across disciplines.",
    icon: "collaboration",
  },
  {
    title: "GLOBAL IMPACT",
    description:
      "We focus on problems that, when solved, will have a profound positive impact on humanity and our planet.",
    icon: "impact",
  },
  {
    title: "ETHICAL RESPONSIBILITY",
    description:
      "We are committed to ensuring that scientific advancements are developed and applied ethically and responsibly.",
    icon: "ethics",
  },
  {
    title: "OPEN SCIENCE",
    description: "We champion transparency, reproducibility, and knowledge sharing to accelerate collective progress.",
    icon: "open",
  },
  {
    title: "INCLUSIVE EXCELLENCE",
    description:
      "We believe that scientific progress thrives when diverse perspectives and talents are included and valued.",
    icon: "inclusive",
  },
]
