import Image from 'next/image'

const destinations = {
  paris: {
    name: 'Paris',
    description: 'Paris, the capital of France, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Champs-Élysées'],
    price: 1500,
  },
  bali: {
    name: 'Bali',
    description: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.',
    attractions: ['Ubud Monkey Forest', 'Tegalalang Rice Terraces', 'Uluwatu Temple', 'Seminyak Beach'],
    price: 1200,
  },
  'new-york': {
    name: 'New York',
    description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that&#39;s among the world&#39;s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    attractions: ['Statue of Liberty', 'Central Park', 'Empire State Building', 'Times Square'],
    price: 1800,
  },
  tokyo: {
    name: 'Tokyo',
    description: 'Tokyo is a fascinating blend of ultramodern and traditional, offering neon-lit skyscrapers alongside historic temples. As Japan’s bustling capital, it’s a hub of technology, culture, and cuisine. Visitors can marvel at cutting-edge innovation in the Akihabara district, enjoy serene moments at the Meiji Shrine, and experience vibrant shopping and entertainment in Shibuya and Harajuku. Tokyo also boasts exquisite culinary experiences, from world-famous sushi to local ramen shops. Beyond the city center, take a day trip to Mount Fuji or the hot springs of Hakone for a complete Japanese adventure.',
    attractions: ['Tokyo Tower', 'Meiji Shrine', 'Shibuya Crossing', 'Tsukiji Fish Market'],
    price: 2000,
  },
  rome: {
    name: 'Rome',
    description: 'Rome, the Eternal City, is a treasure trove of art, history, and culture. Walking through Rome feels like stepping back in time, with ancient ruins and iconic landmarks at every turn. The Colosseum, an architectural marvel, stands as a symbol of Roman engineering and gladiatorial games. Vatican City, the spiritual heart of Catholicism, offers masterpieces like Michelangelo’s Sistine Chapel ceiling. The cobblestone streets of Trastevere and the lively Piazza Navona provide a glimpse of local life. Indulge in authentic Italian pizza, gelato, and espresso as you soak in the timeless charm of this historic city.',
    attractions: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Roman Forum'],
    price: 1400,
  },
  santorini: {
    name: 'Santorini',
    description: 'Santorini is a picturesque Greek island known for its whitewashed buildings with blue domes, perched on cliffs overlooking the azure Aegean Sea. Famous for its breathtaking sunsets in Oia, this island is a haven for romance and relaxation. Explore the volcanic beaches of Red Beach and Black Beach, or take a boat tour to the caldera for stunning views. Santorini’s history comes alive at the Akrotiri Archaeological Site, an ancient city preserved in volcanic ash. Enjoy traditional Greek cuisine, such as moussaka and souvlaki, at quaint tavernas while gazing at the tranquil waters. Santorini offers a perfect mix of beauty, history, and serenity.',
    attractions: ['Oia Village', 'Red Beach', 'Santorini Caldera', 'Akrotiri Archaeological Site'],
    price: 1600,
  },
};

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations[params.id as keyof typeof destinations]

  if (!destination) {
    return <div className="container section">Destination not found</div>
  }

  return (
    <div>
      <section className="destination-hero">
        <div className="destination-hero-overlay"></div>
        <Image
          src={`/${params.id}.png`}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="container destination-hero-content">
          <h1 className="destination-hero-title">{destination.name}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="destination-details">
            <div>
              <p className="destination-description">{destination.description}</p>
              <h2 className="section-title">Top Attractions</h2>
              <ul className="attractions-list">
                {destination.attractions.map((attraction) => (
                  <li key={attraction}>{attraction}</li>
                ))}
              </ul>
            </div>
            <div>
              <form className="booking-form">
                <h3>Book Your Trip</h3>
                <p className="card-title">Starting from ${destination.price}</p>
                <div className="form-group">
                  <label htmlFor="travel-date">Travel Date</label>
                  <input type="date" id="travel-date" name="travel-date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="travelers">Number of Travelers</label>
                  <select id="travelers" name="travelers" required>
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <button type="submit" className="btn">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

