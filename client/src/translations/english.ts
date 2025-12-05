// English Translations

export const englishTranslations = {
  // Header
  title: 'Fever Calculator',
  subtitle: 'Fever Reducer & Pain Reliever Dosage Calculator for Children',
  description: 'Calculate the correct dose for your child based on weight and medication type',
  
  // Language Toggle
  language: 'Language',
  english: 'English',
  indonesian: 'Bahasa Indonesia',
  
  // Tabs
  calculator: 'Calculator',
  medicalInfo: 'Medical Information',
  
  // Child Information Section
  childInfo: 'Child Information',
  childInfoDesc: 'Enter child\'s age and weight',
  howOld: 'How old is your child?',
  required: 'Required',
  lessThan1Year: 'Less than 1 year',
  lessThan1YearDesc: '(1-12 months)',
  moreThan1Year: 'More than 1 year',
  moreThan1YearDesc: '(1-14 years)',
  
  // Age Input
  ageMonths: 'Age (months)',
  ageYears: 'Age (years)',
  enterAge: 'Enter age',
  
  // Weight Input
  weight: 'Weight',
  weightKg: 'Weight (kg)',
  enterWeight: 'Enter weight',
  
  // Medication Form
  selectMedicationForm: 'Select medication form:',
  syrup: 'Syrup',
  drops: 'Drops',
  suppositories: 'Suppositories',
  
  // Medication Type
  paracetamolMedications: 'Paracetamol medications',
  ibuprofenMedications: 'Ibuprofen medications',
  paracetamolSuppositories: 'Paracetamol Suppositories',
  diclofenacSuppositories: 'Diclofenac Suppositories',
  forChildrenOver1Year: 'For children over 1 year',
  diclofenacNote: 'For fever or pain that doesn\'t respond to paracetamol, your doctor may recommend a stronger fever reducer or pain reliever such as diclofenac suppositories',
  diclofenacWarning: 'Diclofenac suppositories do not interact with paracetamol, but they belong to the same family as ibuprofen syrup. Do not take them at the same time and leave 8 hours between them',
  
  // Medication Cards
  concentration: 'Concentration',
  forAges: 'For ages',
  months: 'months',
  years: 'years',
  andAbove: 'and above',
  enlarge: 'Enlarge',
  clickToEnlarge: 'Click to Enlarge',
  dose: 'Dose',
  
  // Calculate Button
  calculate: 'Calculate',
  calculating: 'Calculating...',
  
  // Results
  results: 'Results',
  dosageResults: 'Dosage Calculation Results',
  recommendedDose: 'Recommended Dose',
  frequency: 'Frequency',
  times3to4PerDay: '3-4 times per day',
  everyHours: 'Every',
  hours: 'hours',
  maxDosesPerDay: 'Maximum',
  dosesPerDay: 'doses in 24 hours',
  
  // Important Notes
  importantNotes: 'Important Notes',
  note1: 'Always consult with a doctor or pharmacist before giving medication',
  note2: 'Do not exceed the recommended dose',
  note3: 'If fever persists for more than 3 days, consult a doctor immediately',
  note4: 'Store medication in a safe place, out of reach of children',
  note5: 'Use the provided measuring spoon for accurate dosing',
  
  // Warnings
  warning: 'Warning',
  ageWarning: 'This medication is not recommended for your child\'s age',
  ibuprofenAgeWarning: 'Ibuprofen is only for children 6 months and above',
  consultDoctor: 'Please consult with a doctor',
  
  // Share
  share: 'Share',
  shareText: 'Fever Calculator Indonesia - Calculate the right fever medication dose for your child',
  
  // Medical Information
  aboutParacetamol: 'About Paracetamol',
  paracetamolInfo: 'Paracetamol (acetaminophen) is a medication used to reduce fever and relieve mild to moderate pain. It works by reducing the production of chemicals in the brain that cause fever and pain.',
  
  aboutIbuprofen: 'About Ibuprofen',
  ibuprofenInfo: 'Ibuprofen is a non-steroidal anti-inflammatory drug (NSAID) used to reduce fever, relieve pain, and reduce inflammation. It works by inhibiting the production of prostaglandins, chemicals that cause inflammation and pain.',
  
  whenToUseFeverMedicine: 'When to Use Fever Medicine',
  feverMedicineInfo: 'Fever medicine should be given when a child has a high fever (above 38.5°C) or when the child feels uncomfortable. Fever is actually a natural response of the body to fight infection.',
  
  dosageGuidelines: 'Dosage Guidelines',
  paracetamolDosage: 'Paracetamol: 10-15 mg/kg body weight every 4-6 hours, maximum 4-5 times in 24 hours',
  ibuprofenDosage: 'Ibuprofen: 5-10 mg/kg body weight every 6-8 hours, maximum 3-4 times in 24 hours',
  
  safetyTips: 'Safety Tips',
  safetyTip1: 'Do not give paracetamol and ibuprofen together without doctor consultation',
  safetyTip2: 'Always use the provided measuring spoon, do not use regular tablespoons',
  safetyTip3: 'Record the time of medication administration to avoid overdose',
  safetyTip4: 'Check the expiration date of the medication before use',
  safetyTip5: 'If child vomits after taking medicine, wait 30 minutes before giving another dose',
  
  whenToSeeDoctor: 'When to See a Doctor',
  doctorVisit1: 'Fever in babies under 3 months',
  doctorVisit2: 'Fever above 39°C that does not decrease with medication',
  doctorVisit3: 'Fever persists for more than 3 days',
  doctorVisit4: 'Child appears very weak or unresponsive',
  doctorVisit5: 'Rash, seizures, or other serious symptoms appear',
  
  // Footer
  disclaimer: 'Disclaimer',
  disclaimerText: 'This calculator is for informational purposes only. Always consult with a healthcare professional before giving medication to your child. The calculated doses are estimates and may need to be adjusted based on the child\'s health condition.',
  
  // Errors
  error: 'Error',
  pleaseEnterAge: 'Please enter child\'s age',
  pleaseEnterWeight: 'Please enter child\'s weight',
  pleaseSelectMedication: 'Please select a medication',
  invalidAge: 'Invalid age',
  invalidWeight: 'Invalid weight',
  
  // Units
  ml: 'ml',
  mg: 'mg',
  kg: 'kg'
};

export type TranslationKey = keyof typeof englishTranslations;
