import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, Info, Baby, Weight, Share2, ZoomIn } from "lucide-react";
import { medicationsNigeria, calculateParacetamolDose, calculateIbuprofenDose, calculateVolume, type Medication, type Suppository } from "@/data/medicationsNigeria";
import { englishTranslations } from "@/translations/english";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Home() {
  const [ageGroup, setAgeGroup] = useState<'infant' | 'child' | null>(null);
  const [ageMonths, setAgeMonths] = useState<string>('');
  const [ageYears, setAgeYears] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [medicationForm, setMedicationForm] = useState<'syrup' | 'drops' | 'suppository'>('syrup');
  const [selectedMedication, setSelectedMedication] = useState<Medication | Suppository | null>(null);
  const [results, setResults] = useState<any>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const t = englishTranslations;

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

    // Handle suppositories differently
    if (selectedMedication.form === 'suppository') {
      const supp = selectedMedication as Suppository;
      setResults({
        medication: supp,
        doseInMg: supp.dose,
        volume: '1 suppository',
        frequency: supp.genericName === 'Paracetamol' ? '4-6' : '8-12',
        maxDoses: supp.genericName === 'Paracetamol' ? '4' : '2-3'
      });
    } else {
      const med = selectedMedication as Medication;
      const isParacetamol = med.genericName === 'Paracetamol';
      const doseInMg = isParacetamol 
        ? calculateParacetamolDose(weightKg)
        : calculateIbuprofenDose(weightKg);

      const volume = calculateVolume(
        doseInMg,
        med.concentration,
        med.concentrationUnit
      );

      setResults({
        medication: med,
        doseInMg,
        volume: `${volume} ml`,
        frequency: isParacetamol ? '4-6' : '6-8',
        maxDoses: isParacetamol ? '4-5' : '3-4'
      });
    }
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

  const filteredParacetamol = medicationsNigeria.paracetamol.filter(
    med => med.form === medicationForm
  );

  const filteredIbuprofen = medicationsNigeria.ibuprofen.filter(
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
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
                <p className="text-sm text-gray-600">{t.subtitle}</p>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={handleShare}
              className="gap-2 bg-pink-500 hover:bg-pink-600"
            >
              <Share2 className="w-4 h-4" />
              Share
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
                        <div className="text-4xl mb-2">🧒</div>
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
                      onClick={() => {
                        setMedicationForm('syrup');
                        setSelectedMedication(null);
                        setResults(null);
                      }}
                      className="flex-1"
                    >
                      💧 {t.syrup}
                    </Button>
                    <Button
                      variant={medicationForm === 'suppository' ? 'default' : 'outline'}
                      onClick={() => {
                        setMedicationForm('suppository');
                        setSelectedMedication(null);
                        setResults(null);
                      }}
                      className="flex-1"
                    >
                      💊 {t.suppositories}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Syrup Medications */}
            {weight && medicationForm !== 'suppository' && (
              <>
                {/* Paracetamol Medications */}
                {filteredParacetamol.length > 0 && (
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
                              <div className="relative mb-3">
                                <img
                                  src={med.imageUrl}
                                  alt={med.brandName}
                                  className="w-full h-32 object-contain rounded"
                                />
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  className="absolute bottom-2 left-2 text-xs"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnlargedImage(med.imageUrl);
                                  }}
                                >
                                  <ZoomIn className="w-3 h-3 mr-1" />
                                  {t.enlarge}
                                </Button>
                              </div>
                              <h3 className="font-semibold text-sm mb-2">{med.brandName}</h3>
                              <p className="text-xs text-gray-600 mb-1">{med.genericName}</p>
                              <p className="text-xs text-blue-600 font-medium">
                                {t.concentration}: <span className="font-bold">{med.concentration}{med.concentrationUnit}</span>
                              </p>
                              {med.ageRestriction && (
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {med.ageRestriction}
                                </Badge>
                              )}
                              {selectedMedication?.id === med.id && (
                                <div className="absolute top-2 right-2">
                                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      <Alert className="mt-4">
                        <AlertDescription className="text-sm">
                          <strong>{t.note}</strong> If you have a Paracetamol medication and didn't find it in the images above, you can select the medication with the same concentration and you will get the same required dose. For example, concentration 120mg/5ml
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                )}

                {/* Ibuprofen Medications */}
                {filteredIbuprofen.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        {t.ibuprofenMedications}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mb-2">Age over 6 months</Badge>
                        <p className="text-sm mt-2">
                          For fever or pain that doesn't respond to paracetamol, your doctor may recommend a stronger fever reducer or pain reliever such as ibuprofen, alternating with paracetamol every 4 hours if necessary
                        </p>
                        <Alert className="mt-2">
                          <AlertDescription className="text-sm">
                            <strong>{t.note}</strong> Ibuprofen does not interact with paracetamol and can be taken at the same time
                          </AlertDescription>
                        </Alert>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                              <div className="relative mb-3">
                                <img
                                  src={med.imageUrl}
                                  alt={med.brandName}
                                  className="w-full h-32 object-contain rounded"
                                />
                                <Button
                                  size="sm"
                                  variant="secondary"
                                  className="absolute bottom-2 left-2 text-xs"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setEnlargedImage(med.imageUrl);
                                  }}
                                >
                                  <ZoomIn className="w-3 h-3 mr-1" />
                                  {t.enlarge}
                                </Button>
                              </div>
                              <h3 className="font-semibold text-sm mb-2">{med.brandName}</h3>
                              <p className="text-xs text-gray-600 mb-1">{med.genericName}</p>
                              <p className="text-xs text-orange-600 font-medium">
                                {t.concentration}: <span className="font-bold">{med.concentration}{med.concentrationUnit}</span>
                              </p>
                              {med.ageRestriction && (
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {med.ageRestriction}
                                </Badge>
                              )}
                              {selectedMedication?.id === med.id && (
                                <div className="absolute top-2 right-2">
                                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                                    <span className="text-white text-xs">✓</span>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}

            {/* Suppository Medications */}
            {weight && medicationForm === 'suppository' && (
              <>
                {/* Paracetamol Suppositories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {t.paracetamolSuppositories}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {medicationsNigeria.suppositories.paracetamol.map((supp) => (
                        <Card
                          key={supp.id}
                          className={`cursor-pointer transition-all ${
                            selectedMedication?.id === supp.id
                              ? 'ring-2 ring-blue-500 bg-blue-50'
                              : 'hover:shadow-lg'
                          }`}
                          onClick={() => setSelectedMedication(supp)}
                        >
                          <CardContent className="p-4">
                            <div className="relative mb-3">
                              <img
                                src={supp.imageUrl}
                                alt={supp.brandName}
                                className="w-full h-32 object-contain rounded"
                              />
                              <Button
                                size="sm"
                                variant="secondary"
                                className="absolute bottom-2 left-2 text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEnlargedImage(supp.imageUrl);
                                }}
                              >
                                <ZoomIn className="w-3 h-3 mr-1" />
                                {t.enlarge}
                              </Button>
                            </div>
                            <h3 className="font-semibold text-sm mb-2">{supp.brandName}</h3>
                            <p className="text-xs text-gray-600 mb-1">{supp.genericName}</p>
                            <p className="text-xs text-blue-600 font-medium">
                              {t.dose}: <span className="font-bold">{supp.dose}mg</span>
                            </p>
                            {supp.ageRestriction && (
                              <Badge variant="secondary" className="mt-2 text-xs">
                                {supp.ageRestriction}
                              </Badge>
                            )}
                            {selectedMedication?.id === supp.id && (
                              <div className="absolute top-2 right-2">
                                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Diclofenac Suppositories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      {t.diclofenacSuppositories}
                    </CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="mb-2">{t.forChildrenOver1Year}</Badge>
                      <Alert className="mt-2 bg-green-50 border-green-200">
                        <AlertDescription className="text-sm">
                          {t.diclofenacNote}
                        </AlertDescription>
                      </Alert>
                      <Alert className="mt-2 bg-amber-50 border-amber-200">
                        <AlertDescription className="text-sm">
                          <strong>{t.note}</strong> {t.diclofenacWarning}
                        </AlertDescription>
                      </Alert>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {medicationsNigeria.suppositories.diclofenac.map((supp) => (
                        <Card
                          key={supp.id}
                          className={`cursor-pointer transition-all ${
                            selectedMedication?.id === supp.id
                              ? 'ring-2 ring-green-500 bg-green-50'
                              : 'hover:shadow-lg'
                          }`}
                          onClick={() => setSelectedMedication(supp)}
                        >
                          <CardContent className="p-4">
                            <div className="relative mb-3">
                              <img
                                src={supp.imageUrl}
                                alt={supp.brandName}
                                className="w-full h-32 object-contain rounded"
                              />
                              <Button
                                size="sm"
                                variant="secondary"
                                className="absolute bottom-2 left-2 text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setEnlargedImage(supp.imageUrl);
                                }}
                              >
                                <ZoomIn className="w-3 h-3 mr-1" />
                                {t.enlarge}
                              </Button>
                            </div>
                            <h3 className="font-semibold text-sm mb-2">{supp.brandName}</h3>
                            <p className="text-xs text-gray-600 mb-1">{supp.genericName}</p>
                            <p className="text-xs text-green-600 font-medium">
                              {t.dose}: <span className="font-bold">{supp.dose}mg</span>
                            </p>
                            {supp.ageRestriction && (
                              <Badge variant="secondary" className="mt-2 text-xs">
                                {supp.ageRestriction}
                              </Badge>
                            )}
                            {selectedMedication?.id === supp.id && (
                              <div className="absolute top-2 right-2">
                                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Calculate Button */}
            {weight && selectedMedication && (
              <div className="flex gap-4">
                <Button
                  onClick={handleCalculate}
                  className="flex-1 bg-green-500 hover:bg-green-600"
                  size="lg"
                >
                  {t.calculateDose}
                </Button>
                <Button
                  onClick={() => {
                    setAgeGroup(null);
                    setAgeMonths('');
                    setAgeYears('');
                    setWeight('');
                    setSelectedMedication(null);
                    setResults(null);
                  }}
                  variant="outline"
                  size="lg"
                >
                  {t.reset}
                </Button>
              </div>
            )}

            {/* Results */}
            {results && (
              <Card className="border-green-500 border-2">
                <CardHeader>
                  <CardTitle className="text-green-700">{t.calculationResult}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">{results.medication.brandName}</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>{t.recommendedDose}:</strong> {results.doseInMg}mg
                      </p>
                      <p>
                        <strong>{t.volume}:</strong> {results.volume}
                      </p>
                      <p>
                        <strong>{t.frequency}:</strong> Every {results.frequency} {t.hours}
                      </p>
                      <p>
                        <strong>{t.maxDosesPerDay}:</strong> {results.maxDoses} {t.doses}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {!weight && (
              <Card>
                <CardContent className="p-8 text-center text-gray-500">
                  {t.enterDataPrompt}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Medical Information Tab */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.aboutParacetamol}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{t.paracetamolInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.aboutIbuprofen}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{t.ibuprofenInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.whenToUseFeverMedicine}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{t.feverMedicineInfo}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.dosageGuidelines}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">• {t.paracetamolDosage}</p>
                <p className="text-sm text-gray-700">• {t.ibuprofenDosage}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.safetyTips}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">• {t.safetyTip1}</p>
                <p className="text-sm text-gray-700">• {t.safetyTip2}</p>
                <p className="text-sm text-gray-700">• {t.safetyTip3}</p>
                <p className="text-sm text-gray-700">• {t.safetyTip4}</p>
                <p className="text-sm text-gray-700">• {t.safetyTip5}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.whenToSeeDoctor}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">• {t.doctorVisit1}</p>
                <p className="text-sm text-gray-700">• {t.doctorVisit2}</p>
                <p className="text-sm text-gray-700">• {t.doctorVisit3}</p>
                <p className="text-sm text-gray-700">• {t.doctorVisit4}</p>
                <p className="text-sm text-gray-700">• {t.doctorVisit5}</p>
              </CardContent>
            </Card>

            <Alert>
              <AlertDescription>
                <strong>{t.disclaimer}:</strong> {t.disclaimerText}
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </main>

      {/* Image Enlarge Dialog */}
      <Dialog open={!!enlargedImage} onOpenChange={() => setEnlargedImage(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Medication Image</DialogTitle>
          </DialogHeader>
          {enlargedImage && (
            <img
              src={enlargedImage}
              alt="Enlarged medication"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 Fever Calculator Nigeria. All rights reserved.</p>
          <p className="mt-2">
            Always consult with a healthcare professional before giving medication to your child.
          </p>
        </div>
      </footer>
    </div>
  );
}
