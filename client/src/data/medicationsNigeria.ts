// Nigeria Pediatric Medications Database
// Paracetamol and Ibuprofen medications commonly available in Nigeria

// Better placeholder images with medication-specific colors
const paracetamolPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%234CAF50" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3EParacetamol%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

const ibuprofenPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%232196F3" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3EIbuprofen%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

const suppositoryPlaceholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23FF9800" width="200" height="200" rx="10"/%3E%3Ctext x="50%25" y="45%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="white"%3ESuppository%3C/text%3E%3Ctext x="50%25" y="65%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="white"%3ENigeria%3C/text%3E%3C/svg%3E';

export interface Medication {
  id: string;
  brandName: string;
  genericName: string;
  concentration: number;
  concentrationUnit: string;
  form: 'syrup' | 'drops';
  imageUrl: string;
  ageRestriction?: string;
}

export interface Suppository {
  id: string;
  brandName: string;
  genericName: string;
  dose: number;
  form: 'suppository';
  imageUrl: string;
  ageRestriction?: string;
}

export const medicationsNigeria = {
  paracetamol: [
    {
      id: 'emzor_paracetamol_drops',
      brandName: 'Emzor Paracetamol Drops',
      genericName: 'Paracetamol',
      concentration: 100,
      concentrationUnit: 'mg/ml',
      form: 'drops' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: 'For infants 0-12 months'
    },
    {
      id: 'emzor_paracetamol_syrup',
      brandName: 'Emzor Paracetamol Syrup',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: ''
    },
    {
      id: 'emcap_paracetamol',
      brandName: 'Emcap Paracetamol',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: ''
    },
    {
      id: 'panadol_children',
      brandName: 'Panadol Children',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: ''
    },
    {
      id: 'mb_paracetamol',
      brandName: 'M&B Paracetamol',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: ''
    },
    {
      id: 'acepol_paracetamol',
      brandName: 'Acepol',
      genericName: 'Paracetamol',
      concentration: 120,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: paracetamolPlaceholder,
      ageRestriction: ''
    }
  ],
  ibuprofen: [
    {
      id: 'emprofen',
      brandName: 'Emprofen',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: ibuprofenPlaceholder,
      ageRestriction: 'For children 3 months and above'
    },
    {
      id: 'mb_ibuprofen',
      brandName: 'M&B Ibuprofen',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: ibuprofenPlaceholder,
      ageRestriction: 'For children 3 months and above'
    },
    {
      id: 'nurofen_children',
      brandName: 'Nurofen for Children',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: ibuprofenPlaceholder,
      ageRestriction: 'For children 3 months to 9 years'
    },
    {
      id: 'calprofen',
      brandName: 'Calprofen',
      genericName: 'Ibuprofen',
      concentration: 100,
      concentrationUnit: 'mg/5ml',
      form: 'syrup' as const,
      imageUrl: ibuprofenPlaceholder,
      ageRestriction: 'For children 3 months and above'
    }
  ],
  suppositories: {
    paracetamol: [
      {
        id: 'paracetamol_supp_125mg',
        brandName: 'Paracetamol Suppository 125mg',
        genericName: 'Paracetamol',
        dose: 125,
        form: 'suppository' as const,
        imageUrl: suppositoryPlaceholder,
        ageRestriction: 'For children 1-3 years'
      },
      {
        id: 'paracetamol_supp_250mg',
        brandName: 'Paracetamol Suppository 250mg',
        genericName: 'Paracetamol',
        dose: 250,
        form: 'suppository' as const,
        imageUrl: suppositoryPlaceholder,
        ageRestriction: 'For children 3-6 years'
      },
      {
        id: 'paracetamol_supp_500mg',
        brandName: 'Paracetamol Suppository 500mg',
        genericName: 'Paracetamol',
        dose: 500,
        form: 'suppository' as const,
        imageUrl: suppositoryPlaceholder,
        ageRestriction: 'For children 6-12 years'
      }
    ],
    diclofenac: [
      {
        id: 'diclofenac_supp_12_5mg',
        brandName: 'Diclofenac Suppository 12.5mg',
        genericName: 'Diclofenac',
        dose: 12.5,
        form: 'suppository' as const,
        imageUrl: suppositoryPlaceholder,
        ageRestriction: 'For children over 1 year'
      },
      {
        id: 'diclofenac_supp_25mg',
        brandName: 'Diclofenac Suppository 25mg',
        genericName: 'Diclofenac',
        dose: 25,
        form: 'suppository' as const,
        imageUrl: suppositoryPlaceholder,
        ageRestriction: 'For children over 1 year'
      }
    ]
  }
};

// Dose calculation functions
export function calculateParacetamolDose(weightKg: number): number {
  return Math.round(weightKg * 15); // 15mg/kg per dose
}

export function calculateIbuprofenDose(weightKg: number): number {
  return Math.round(weightKg * 10); // 10mg/kg per dose
}

export function calculateVolume(
  doseInMg: number,
  concentration: number,
  concentrationUnit: string
): number {
  if (concentrationUnit === 'mg/ml') {
    return Math.round((doseInMg / concentration) * 10) / 10;
  } else if (concentrationUnit === 'mg/5ml') {
    return Math.round((doseInMg / concentration) * 5 * 10) / 10;
  }
  return 0;
}
