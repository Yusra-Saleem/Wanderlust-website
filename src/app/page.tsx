import Image from 'next/image'
import Link from 'next/link'

const destinations = [
  { id: 'paris', name: 'Paris', description: 'Experience the magic of the City of Light here! ' },
  { id: 'bali', name: 'Bali', description: 'Discover the beauty of this Indonesian paradise.' },
  { id: 'new-york', name: 'New York', description: 'Explore the vibrant vibes the peacefull moments.' },
  { id: 'tokyo', name: 'Tokyo', description: 'Immerse yourself in the bustling metropolis of Japan.' },
  { id: 'rome', name: 'Rome', description: 'Walk through the ancient streets of the Eternal City.' },
  { id: 'santorini', name: 'Santorini', description: 'Relax on the stunning beaches of this Greek island.' },
]

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-overlay"></div>
        <Image
          src="/hero-background.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="container hero-content">
          <h1 className="hero-title fade-in">Discover Your Next Adventure</h1>
          <p className="hero-subtitle fade-in" style={{animationDelay: '0.2s'}}>Explore breathtaking destinations around the world</p>
          <a href="#destinations" className="btn fade-in" style={{animationDelay: '0.4s'}}>Explore Destinations</a>
        </div>
      </section>

      <section id="destinations" className="section">
        <div className="container">
          <h2 className="section-title fade-in">Popular Destinations</h2>
          <div className="grid">
            {destinations.map((destination, index) => (
              <div key={destination.id} className="card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <Image
                  src={`/${destination.id}.png`}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="card-img"
                />
                <div className="card-content">
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-text">{destination.description}</p>
                  <Link href={`/destinations/${destination.id}`} className="btn">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--card-background)'}}>
        <div className="container">
          <h2 className="section-title fade-in">Why Choose Us</h2>
          <div className="grid">
            {[
              { title: 'Expert Guides', description: 'Our experienced guides ensure you have the best travel experience.' },
              { title: 'Exclusive Deals', description: 'Get access to exclusive deals and discounts on your dream vacations.' },
              { title: '24/7 Support', description: 'Our dedicated support team is always ready to assist you.' },
            ].map((feature, index) => (
              <div key={feature.title} className="card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-content">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

