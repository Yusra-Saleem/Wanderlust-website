import Image from 'next/image'

export default function About() {
  return (
    <div>
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <Image
          src="/about-hero.jpg"
          alt="Contact Us"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="container about-hero-content">
          <h1 className="about-hero-title">About Wanderlust Adventures</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <Image
                src="/our-story.png"
                alt="Our Team"
                width={600}
                height={600}
                layout="responsive"
                object-fit='cover'
              />
            </div>
            <div className="about-content">
              <h2 className="section-title">Our Story</h2>
              <p>
                Wanderlust Adventures was born out of a passion for exploration and a desire to share the wonders of the world with fellow travelers. Founded in 2010 by a group of avid globetrotters, our company has grown from a small startup to a leading name in the travel industry.
              </p>
              <p>
                We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories. Our team of experienced travel experts is dedicated to crafting unique, immersive journeys that cater to all types of adventurers.
              </p>
              <p>
                From the bustling streets of Tokyo to the serene beaches of Bali, we&#39;ve explored countless destinations and forged strong partnerships with local guides and accommodations. This allows us to offer you authentic experiences and insider knowledge that you won&#39;t find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--background-color)'}}>
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {[
              { title: 'Sustainability', description: 'We are committed to responsible and eco-friendly travel practices, minimizing our environmental impact and supporting local communities.' },
              { title: 'Cultural Respect', description: 'We promote cultural understanding and respect, encouraging our travelers to engage meaningfully with local customs and traditions.' },
              { title: 'Customer Satisfaction', description: 'Your happiness and safety are our top priorities. We go above and beyond to ensure every trip exceeds your expectations.' },
            ].map((value) => (
              <div key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

