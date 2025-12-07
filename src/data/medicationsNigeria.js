// Nigeria Pediatric Medications Database
// Paracetamol and Ibuprofen medications commonly available in Nigeria

// Import actual product images
import emzorParacetamolDropsImg from '../assets/medications/nigeria/emzor_paracetamol_drops.png'
import emzorParacetamolSyrupImg from '../assets/medications/nigeria/emzor_paracetamol_syrup.png'
import emcapParacetamolImg from '../assets/medications/nigeria/emcap_paracetamol.png'
import panadolChildrenImg from '../assets/medications/nigeria/panadol_children.jpg'
import mbParacetamolImg from '../assets/medications/nigeria/mb_paracetamol.jpg'
import emprofenImg from '../assets/medications/nigeria/emprofen.png'
import mbIbuprofenImg from '../assets/medications/nigeria/mb_ibuprofen.png'
import nurofenChildrenImg from '../assets/medications/nigeria/nurofen_children.jpeg'
import calprofenImg from '../assets/medications/nigeria/calprofen.jpg'

// Placeholder images for medications without photos and suppositories
const paracetamolPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%234CAF50" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3EParacetamol%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

const ibuprofenPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%232196F3" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3EIbuprofen%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

const suppositoryPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23FF9800" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3ESuppository%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

export const medicationsNigeria = {
  paracetamol: [
    {
      id: 'emzor_paracetamol_drops',
      name: 'Emzor Paracetamol Drops',
      ingredient: 'Paracetamol',
      concentration: 100,
      volume: 1,
      form: 'drops',
      image: emzorParacetamolDropsImg,
      ageRestriction: 'For infants 0-12 months'
    },
    {
      id: 'emzor_paracetamol_syrup',
      name: 'Emzor Paracetamol Syrup',
      ingredient: 'Paracetamol',
      concentration: 120,
      volume: 5,
      form: 'syrup',
      image: emzorParacetamolSyrupImg,
      ageRestriction: ''
    },
    {
      id: 'emcap_paracetamol',
      name: 'Emcap Paracetamol',
      ingredient: 'Paracetamol',
      concentration: 120,
      volume: 5,
      form: 'syrup',
      image: emcapParacetamolImg,
      ageRestriction: ''
    },
    {
      id: 'panadol_children',
      name: 'Panadol Children',
      ingredient: 'Paracetamol',
      concentration: 120,
      volume: 5,
      form: 'syrup',
      image: panadolChildrenImg,
      ageRestriction: ''
    },
    {
      id: 'mb_paracetamol',
      name: 'M&B Paracetamol',
      ingredient: 'Paracetamol',
      concentration: 120,
      volume: 5,
      form: 'syrup',
      image: mbParacetamolImg,
      ageRestriction: ''
    },
    {
      id: 'acepol_paracetamol',
      name: 'Acepol',
      ingredient: 'Paracetamol',
      concentration: 120,
      volume: 5,
      form: 'syrup',
      image: paracetamolPlaceholder,
      ageRestriction: ''
    }
  ],
  ibuprofen: [
    {
      id: 'emprofen',
      name: 'Emprofen',
      ingredient: 'Ibuprofen',
      concentration: 100,
      volume: 5,
      form: 'syrup',
      image: emprofenImg,
      ageRestriction: 'For children 6 months and above'
    },
    {
      id: 'mb_ibuprofen',
      name: 'M&B Ibuprofen',
      ingredient: 'Ibuprofen',
      concentration: 100,
      volume: 5,
      form: 'syrup',
      image: mbIbuprofenImg,
      ageRestriction: 'For children 6 months and above'
    },
    {
      id: 'nurofen_children',
      name: 'Nurofen for Children',
      ingredient: 'Ibuprofen',
      concentration: 100,
      volume: 5,
      form: 'syrup',
      image: nurofenChildrenImg,
      ageRestriction: 'For children 6 months to 9 years'
    },
    {
      id: 'calprofen',
      name: 'Calprofen',
      ingredient: 'Ibuprofen',
      concentration: 100,
      volume: 5,
      form: 'syrup',
      image: calprofenImg,
      ageRestriction: 'For children 6 months and above'
    }
  ],
  suppositories: {
    paracetamol: [
      {
        id: 'paracetamol_supp_100mg',
        name: 'Paracetamol Suppository 100mg',
        ingredient: 'Paracetamol',
        concentration: 100,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '6-12.9',
        weightRange: '6-12.9 kg'
      },
      {
        id: 'paracetamol_supp_125mg',
        name: 'Paracetamol Suppository 125mg',
        ingredient: 'Paracetamol',
        concentration: 125,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '6-12.9',
        weightRange: '6-12.9 kg'
      },
      {
        id: 'paracetamol_supp_200mg',
        name: 'Paracetamol Suppository 200mg',
        ingredient: 'Paracetamol',
        concentration: 200,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '13-22',
        weightRange: '13-22 kg'
      },
      {
        id: 'paracetamol_supp_250mg',
        name: 'Paracetamol Suppository 250mg',
        ingredient: 'Paracetamol',
        concentration: 250,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '13-22',
        weightRange: '13-22 kg'
      },
      {
        id: 'paracetamol_supp_350mg',
        name: 'Paracetamol Suppository 350mg',
        ingredient: 'Paracetamol',
        concentration: 350,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '23-35',
        weightRange: '23-35 kg'
      },
      {
        id: 'paracetamol_supp_500mg',
        name: 'Paracetamol Suppository 500mg',
        ingredient: 'Paracetamol',
        concentration: 500,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '36+',
        weightRange: '36+ kg'
      }
    ],
    diclofenac: [
      {
        id: 'diclofenac_supp_12_5mg',
        name: 'Diclofenac Suppository 12.5mg',
        ingredient: 'Diclofenac',
        concentration: 12.5,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '8-16',
        weightRange: '8-16 kg'
      },
      {
        id: 'diclofenac_supp_25mg',
        name: 'Diclofenac Suppository 25mg',
        ingredient: 'Diclofenac',
        concentration: 25,
        form: 'suppository',
        image: suppositoryPlaceholder,
        ageRestriction: '17-25',
        weightRange: '17-25 kg'
      }
    ]
  }
}
