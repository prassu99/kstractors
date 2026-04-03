export type TractorModel = {
  id: string
  name: string
  hp: string
  use: string
  highlights: string[]
  image: string
}

export const tractorModels: TractorModel[] = [
  {
    id: 'ks-45',
    name: 'KS Compact 45',
    hp: '45 HP',
    use: 'Vineyards, small holdings, loader work',
    highlights: ['Hydrostatic option', 'ROPS / cab', '3-point & PTO'],
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
  },
  {
    id: 'ks-75',
    name: 'KS FieldPro 75',
    hp: '75 HP',
    use: 'Mixed farming, baling, medium implements',
    highlights: ['16F/16R transmission', 'High-flow hydraulics'],
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc1?w=800&q=80',
  },
  {
    id: 'ks-110',
    name: 'KS Titan 110',
    hp: '110 HP',
    use: 'Row crop, heavy tillage, large balers',
    highlights: ['Cab climate control', 'ISOBUS ready'],
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
  },
  {
    id: 'ks-140',
    name: 'KS Titan 140',
    hp: '140 HP',
    use: 'Primary tillage, planters, sprayers',
    highlights: ['Front linkage option', '50 km/h transport'],
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
  },
]
