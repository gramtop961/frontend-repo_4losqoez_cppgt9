export const comuni = [
  {
    name: 'Ragusa',
    slug: 'ragusa',
    tagline: 'Barocco, panorami e vicoli di pietra',
    description:
      'Capoluogo di provincia, unisce l\'eleganza barocca di Ragusa Ibla con l\'anima moderna di Ragusa Superiore. Chiese, giardini e sapori d\'eccellenza.',
    highlights: ['Duomo di San Giorgio', 'Giardino Ibleo', 'Scorci panoramici'],
    image:
      'https://images.unsplash.com/photo-1545250610-66b95d76d43d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Modica',
    slug: 'modica',
    tagline: 'Capitale del cioccolato e dell\'arte barocca',
    description:
      'Città scenografica, famosa per il suo cioccolato tradizionale e per le spettacolari chiese barocche che dominano le colline.',
    highlights: ['Duomo di San Giorgio', 'Cioccolato di Modica', 'Punti panoramici'],
    image:
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Scicli',
    slug: 'scicli',
    tagline: 'Un set a cielo aperto tra palazzi e vicoli',
    description:
      'Affascinante borgo barocco, noto anche per le riprese del Commissario Montalbano. Un intreccio di vicoli, palazzi e chiese.',
    highlights: ['Via Mormino Penna', 'Chiesa di San Matteo', 'Palazzi storici'],
    image:
      'https://images.unsplash.com/photo-1605462863863-10d3f5f67f16?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Vittoria',
    slug: 'vittoria',
    tagline: 'Vigne, mercati e architetture neoclassiche',
    description:
      'Importante centro agricolo con un vivace mercato ortofrutticolo e un elegante impianto urbano.',
    highlights: ['Teatro Comunale', 'Piazza del Popolo', 'Cantine e vigneti'],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Comiso',
    slug: 'comiso',
    tagline: 'Arte, fontane e sapori autentici',
    description:
      'Città dalle radici antiche, ricca di chiese e piazze armoniose. Vicina all\'aeroporto di Comiso.',
    highlights: ['Piazza Fonte Diana', 'Chiese barocche', 'Prodotti tipici'],
    image:
      'https://images.unsplash.com/photo-1520975922203-bb6c9e9d1b22?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Pozzallo',
    slug: 'pozzallo',
    tagline: 'Mare cristallino e lunghe spiagge dorate',
    description:
      'Località balneare con spiagge ampie, acque limpide e un piacevole lungomare.',
    highlights: ['Torre Cabrera', 'Spiagge Bandiera Blu', 'Lungomare Pietre Nere'],
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Ispica',
    slug: 'ispica',
    tagline: 'Cave, eremi e scenari suggestivi',
    description:
      'Terra di canyon naturali e architetture barocche, tra mare e campagna.',
    highlights: ['Cava d\'Ispica', 'Basilica di Santa Maria', 'Spiagge vicine'],
    image:
      'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Santa Croce Camerina',
    slug: 'santa-croce-camerina',
    tagline: 'Le spiagge di Montalbano tra dune e fari',
    description:
      'Costa splendida tra Punta Secca e Marina di Ragusa, perfetta per relax e tramonti.',
    highlights: ['Punta Secca', 'Casa di Montalbano', 'Marina di Ragusa'],
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Chiaramonte Gulfi',
    slug: 'chiaramonte-gulfi',
    tagline: 'Il balcone di Sicilia tra ulivi e musei',
    description:
      'Borgo panoramico con vista spettacolare, noto per l\'olio d\'oliva e i musei civici.',
    highlights: ['Belvedere', 'Musei civici', 'Olio DOP'],
    image:
      'https://images.unsplash.com/photo-1520697222862-85d0ced6eaf4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Monterosso Almo',
    slug: 'monterosso-almo',
    tagline: 'Tradizioni, vicoli e atmosfere d\'altri tempi',
    description:
      'Uno dei borghi più suggestivi degli Iblei, intimo e autentico.',
    highlights: ['Centro storico', 'Tradizioni popolari', 'Eventi locali'],
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Giarratana',
    slug: 'giarratana',
    tagline: 'Famosa per la cipolla dolce e le feste di paese',
    description:
      'Piccolo centro montano dal cuore genuino, circondato dalla natura degli Iblei.',
    highlights: ['Cipolla di Giarratana', 'Feste tradizionali', 'Percorsi naturalistici'],
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Acate',
    slug: 'acate',
    tagline: 'Castelli, campagne e vini generosi',
    description:
      'Tra fortezze storiche e campagne coltivate, offre itinerari enogastronomici di qualità.',
    highlights: ['Castello dei Principi di Biscari', 'Campagne', 'Vini'],
    image:
      'https://images.unsplash.com/photo-1487730116645-74489c95b41b?q=80&w=1600&auto=format&fit=crop',
  },
]

export const comuniBySlug = Object.fromEntries(
  comuni.map((c) => [c.slug, c])
)
