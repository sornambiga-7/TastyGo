import './OfferBanner.css'

const offers = [
  {
    id: 1,
    title: 'Flat 50% OFF',
    subtitle: 'On your first order above ₹199',
    code: 'WELCOME50',
    bg: '#FFF1E4',
    accent: '#FC8019',
  },
  {
    id: 2,
    title: 'Free Delivery',
    subtitle: 'On orders above ₹299, all week',
    code: 'FREEDEL',
    bg: '#E7F5EA',
    accent: '#267E3E',
  },
  {
    id: 3,
    title: '₹125 OFF',
    subtitle: 'On orders above ₹349',
    code: 'SAVE125',
    bg: '#FDEBEC',
    accent: '#E23744',
  },
]

function OfferBanner() {
  return (
    <section className="offer-section">
      <div className="container">
        <h2 className="section-title">Offers for you</h2>
        <p className="section-subtitle">Grab these deals before they expire</p>

        <div className="offer-grid">
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id} style={{ background: offer.bg }}>
              <div>
                <h3 style={{ color: offer.accent }}>{offer.title}</h3>
                <p>{offer.subtitle}</p>
              </div>
              <span className="offer-code" style={{ borderColor: offer.accent, color: offer.accent }}>
                {offer.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferBanner
