import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, Info, Languages, Baby, Weight, Pill, AlertTriangle, Share2 } from "lucide-react";
import { medicationsIndonesia, calculateParacetamolDose, calculateIbuprofenDose, calculateVolume, type Medication } from "@/data/medicationsIndonesia";
import { indonesianTranslations } from "@/translations/indonesian";
import { englishTranslations } from "@/translations/english";

type Language = 'id' | 'en';

export default function Home() {
  const [language, setLanguage] = useState<Language>('id');
  const [ageGroup, setAgeGroup] = useState<'infant' | 'child' | null>(null);
  const [ageMonths, setAgeMonths] = useState<string>('');
  const [ageYears, setAgeYears] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [medicationForm, setMedicationForm] = useState<'syrup' | 'drops'>('syrup');
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [results, setResults] = useState<any>(null);

  const t = language === 'id' ? indonesianTranslations : englishTranslations;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const handleCalculate = () => {
    if (!weight || !selectedMedication) {
      alert(t.pleaseEnterWeight + ' ' + t.pleaseSelectMedication);
      return;
    }

    const weightKg = parseFloat(weight);
    if (isNaN(weightKg) || weightKg <= 0) {
      alert(t.invalidWeight);
      return;
    }

    const isParacetamol = selectedMedication.genericName === 'Paracetamol';
    const doseInMg = isParacetamol 
      ? calculateParacetamolDose(weightKg)
      : calculateIbuprofenDose(weightKg);

    const volume = calculateVolume(
      doseInMg,
      selectedMedication.concentration,
      selectedMedication.concentrationUnit
    );

    setResults({
      medication: selectedMedication,
      doseInMg,
      volume,
      frequency: isParacetamol ? '4-6' : '6-8',
      maxDoses: isParacetamol ? '4-5' : '3-4'
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.title,
          text: t.shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  const filteredParacetamol = medicationsIndonesia.paracetamol.filter(
    med => med.form === medicationForm
  );

  const filteredIbuprofen = medicationsIndonesia.ibuprofen.filter(
    med => med.form === medicationForm
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-2 rounded-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-sm text-gray-600">{t.subtitle}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === 'id' ? '🇮🇩' : '🇬🇧'} {language === 'id' ? t.english : t.indonesian}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="calculator" className="gap-2">
              <Calculator className="w-4 h-4" />
              {t.calculator}
            </TabsTrigger>
            <TabsTrigger value="info" className="gap-2">
              <Info className="w-4 h-4" />
              {t.medicalInfo}
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="space-y-6">
            {/* Age Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="w-5 h-5" />
                  {t.childInfo}
                </CardTitle>
                <CardDescription>{t.childInfoDesc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-base mb-3 block">
                    {t.howOld} <span className="text-red-500">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card
                      className={`cursor-pointer transition-all ${
                        ageGroup === 'infant'
                          ? 'ring-2 ring-blue-500 bg-blue-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAgeGroup('infant')}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-2">👶</div>
                        <div className="font-semibold text-lg">{t.lessThan1Year}</div>
                        <div className="text-sm text-gray-600">{t.lessThan1YearDesc}</div>
                      </CardContent>
                    </Card>
                    <Card
                      className={`cursor-pointer transition-all ${
                        ageGroup === 'child'
                          ? 'ring-2 ring-blue-500 bg-blue-50'
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setAgeGroup('child')}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-2">😊</div>
                        <div className="font-semibold text-lg">{t.moreThan1Year}</div>
                        <div className="text-sm text-gray-600">{t.moreThan1YearDesc}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {ageGroup && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {ageGroup === 'infant' ? (
                      <div>
                        <Label htmlFor="ageMonths">{t.ageMonths}</Label>
                        <Input
                          id="ageMonths"
                          type="number"
                          placeholder={t.enterAge}
                          value={ageMonths}
                          onChange={(e) => setAgeMonths(e.target.value)}
                          min="1"
                          max="12"
                        />
                      </div>
                    ) : (
                      <div>
                        <Label htmlFor="ageYears">{t.ageYears}</Label>
                        <Input
                          id="ageYears"
                          type="number"
                          placeholder={t.enterAge}
                          value={ageYears}
                          onChange={(e) => setAgeYears(e.target.value)}
                          min="1"
                          max="14"
                        />
                      </div>
                    )}
                    <div>
                      <Label htmlFor="weight" className="flex items-center gap-2">
                        <Weight className="w-4 h-4" />
                        {t.weightKg}
                      </Label>
                      <Input
                        id="weight"
                        type="number"
                        step="0.1"
                        placeholder={t.enterWeight}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="0"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Medication Form Selection */}
            {weight && (
              <Card>
                <CardHeader>
                  <CardTitle>{t.selectMedicationForm}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant={medicationForm === 'syrup' ? 'default' : 'outline'}
                      onClick={() => setMedicationForm('syrup')}
                      className="flex-1"
                    >
                      💧 {t.syrup}
                    </Button>
                    <Button
                      variant={medicationForm === 'drops' ? 'default' : 'outline'}
                      onClick={() => setMedicationForm('drops')}
                      className="flex-1"
                    >
                      💉 {t.drops}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Paracetamol Medications */}
            {weight && filteredParacetamol.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    {t.paracetamolMedications}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredParacetamol.map((med) => (
                      <Card
                        key={med.id}
                        className={`cursor-pointer transition-all ${
                          selectedMedication?.id === med.id
                            ? 'ring-2 ring-blue-500 bg-blue-50'
                            : 'hover:shadow-lg'
                        }`}
                        onClick={() => setSelectedMedication(med)}
                      >
                        <CardContent className="p-4">
                          <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                            <img
                              src={med.image}
                              alt={med.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = '/images/medicine-generic.jpg';
                              }}
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{med.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{med.genericName}</p>
                          <Badge variant="secondary" className="text-xs">
                            {t.concentration}: {med.concentration}{med.concentrationUnit}
                          </Badge>
                          {med.ageRestriction && (
                            <p className="text-xs text-gray-500 mt-2">{med.ageRestriction}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Ibuprofen Medications */}
            {weight && filteredIbuprofen.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    {t.ibuprofenMedications}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-4">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{t.ibuprofenAgeWarning}</AlertDescription>
                  </Alert>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredIbuprofen.map((med) => (
                      <Card
                        key={med.id}
                        className={`cursor-pointer transition-all ${
                          selectedMedication?.id === med.id
                            ? 'ring-2 ring-orange-500 bg-orange-50'
                            : 'hover:shadow-lg'
                        }`}
                        onClick={() => setSelectedMedication(med)}
                      >
                        <CardContent className="p-4">
                          <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                            <img
                              src={med.image}
                              alt={med.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.currentTarget.src = '/images/medicine-generic.jpg';
                              }}
                            />
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{med.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{med.genericName}</p>
                          <Badge variant="secondary" className="text-xs">
                            {t.concentration}: {med.concentration}{med.concentrationUnit}
                          </Badge>
                          {med.ageRestriction && (
                            <p className="text-xs text-gray-500 mt-2">{med.ageRestriction}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Calculate Button */}
            {selectedMedication && (
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handleCalculate}
                  className="w-full md:w-auto px-12"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  {t.calculate}
                </Button>
              </div>
            )}

            {/* Results */}
            {results && (
              <Card className="border-2 border-green-500">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-900">{t.dosageResults}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-3 mb-3">
                      <Pill className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-lg">{results.medication.name}</div>
                        <div className="text-sm text-gray-600">{results.medication.genericName}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">{t.recommendedDose}</div>
                        <div className="text-3xl font-bold text-blue-600">
                          {results.volume} {t.ml}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          ({results.doseInMg} {t.mg})
                        </div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600 mb-1">{t.frequency}</div>
                        <div className="text-xl font-semibold text-orange-600">
                          {t.everyHours} {results.frequency} {t.hours}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {t.maxDosesPerDay} {results.maxDoses} {t.dosesPerDay}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <div className="font-semibold mb-2">{t.importantNotes}</div>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>{t.note1}</li>
                        <li>{t.note2}</li>
                        <li>{t.note3}</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="w-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    {t.share}
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Medical Info Tab */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.aboutParacetamol}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.paracetamolInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.aboutIbuprofen}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.ibuprofenInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.whenToUseFeverMedicine}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{t.feverMedicineInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.dosageGuidelines}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-700">• {t.paracetamolDosage}</p>
                <p className="text-gray-700">• {t.ibuprofenDosage}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.safetyTips}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{t.safetyTip1}</li>
                  <li>{t.safetyTip2}</li>
                  <li>{t.safetyTip3}</li>
                  <li>{t.safetyTip4}</li>
                  <li>{t.safetyTip5}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.whenToSeeDoctor}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>{t.doctorVisit1}</li>
                  <li>{t.doctorVisit2}</li>
                  <li>{t.doctorVisit3}</li>
                  <li>{t.doctorVisit4}</li>
                  <li>{t.doctorVisit5}</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <div className="font-semibold mb-1">{t.disclaimer}</div>
              <p className="text-sm">{t.disclaimerText}</p>
            </AlertDescription>
          </Alert>
        </div>
      </footer>
    </div>
  );
}
