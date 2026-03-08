import { useNavigate } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Personal Information',
  'Project Selection',
  'Skills & Motivation',
  'Health & Safety',
  'Review & Submit'
];

export function VolunteerApplicationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    countryOfResidence: '',
    dateOfBirth: '',
    gender: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    // Step 2
    primaryProject: '',
    secondaryProject: '',
    preferredLocation: '',
    startDate: '',
    duration: '',
    // Step 3
    motivation: '',
    skills: '',
    previousVolunteer: '',
    previousVolunteerDetails: '',
    childExperience: '',
    childExperienceDetails: '',
    certifications: '',
    // Step 4
    medicalConditions: '',
    dietaryRequirements: '',
    travelInsurance: '',
    visaRequired: '',
    agreementChecked: false
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    // In a real app, this would send data to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-24 bg-[var(--cream)] min-h-screen">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="text-center p-12">
              <CheckCircle2 className="w-20 h-20 text-[var(--deep-green)] mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-[var(--earth-dark)] mb-4">
                Application Received 🎉
              </h1>
              <p className="text-lg text-[var(--warm-brown)] mb-6">
                Thank you for applying to volunteer with Impact Trails Africa.
              </p>
              <div className="bg-[var(--cream)] p-6 rounded-lg text-left mb-6">
                <p className="text-[var(--warm-brown)] mb-4">
                  Our team will review your application within 3–5 working days.
                </p>
                <p className="text-[var(--warm-brown)]">
                  If shortlisted, you will receive an email with next steps, including a short call and program confirmation details.
                </p>
              </div>
              <Button
                onClick={() => navigate('/')}
                className="bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
              >
                Return to Home
              </Button>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-24 pb-16 bg-[var(--cream)] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 flex items-center">
                  <div className="flex flex-col items-center w-full">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        index <= currentStep
                          ? 'bg-[var(--deep-green)] text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div className="text-xs mt-2 text-center hidden md:block">
                      {step}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 ${
                        index < currentStep ? 'bg-[var(--deep-green)]' : 'bg-gray-300'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center md:hidden text-sm text-[var(--warm-brown)] mt-2">
              Step {currentStep + 1}: {steps[currentStep]}
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              {currentStep === 0 && <Step1PersonalInfo formData={formData} setFormData={setFormData} />}
              {currentStep === 1 && <Step2ProjectSelection formData={formData} setFormData={setFormData} />}
              {currentStep === 2 && <Step3SkillsMotivation formData={formData} setFormData={setFormData} />}
              {currentStep === 3 && <Step4HealthSafety formData={formData} setFormData={setFormData} />}
              {currentStep === 4 && <Step5Review formData={formData} />}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  Back
                </Button>
                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-[var(--deep-green)] hover:bg-[var(--deep-green)]/90"
                    disabled={!formData.agreementChecked}
                  >
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Step1PersonalInfo({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--earth-dark)] mb-2">
          Tell Us About You
        </h2>
        <p className="text-[var(--warm-brown)]">
          We'd love to get to know you. This helps us match you with the right project and community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number (with country code) *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="nationality">Nationality *</Label>
          <Input
            id="nationality"
            value={formData.nationality}
            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="countryOfResidence">Country of Residence *</Label>
          <Input
            id="countryOfResidence"
            value={formData.countryOfResidence}
            onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender (Optional)</Label>
          <Input
            id="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          />
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-lg font-semibold text-[var(--earth-dark)] mb-4">
          Emergency Contact
        </h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="emergencyContactName">Emergency Contact Name *</Label>
            <Input
              id="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emergencyContactPhone">Emergency Contact Phone *</Label>
              <Input
                id="emergencyContactPhone"
                type="tel"
                value={formData.emergencyContactPhone}
                onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="emergencyContactRelationship">Relationship *</Label>
              <Input
                id="emergencyContactRelationship"
                value={formData.emergencyContactRelationship}
                onChange={(e) => setFormData({ ...formData, emergencyContactRelationship: e.target.value })}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2ProjectSelection({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--earth-dark)] mb-2">
          Choose Your Volunteer Project
        </h2>
        <p className="text-[var(--warm-brown)]">
          Select the project you are most interested in. You may indicate a second preference.
        </p>
      </div>

      <div>
        <Label htmlFor="primaryProject">Primary Project *</Label>
        <Select value={formData.primaryProject} onValueChange={(value) => setFormData({ ...formData, primaryProject: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select your primary project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="education">Education Support & Child Mentorship</SelectItem>
            <SelectItem value="agriculture">Sustainable Agriculture & Food Security</SelectItem>
            <SelectItem value="women">Women Empowerment & Livelihoods</SelectItem>
            <SelectItem value="srhr">Sexual & Reproductive Health & Rights Education</SelectItem>
            <SelectItem value="child-protection">Child Protection & Family Strengthening</SelectItem>
            <SelectItem value="mental-health">Mental Health, Wellness & Psychosocial Support</SelectItem>
            <SelectItem value="community">Community Outreach & Development</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="secondaryProject">Secondary Project (Optional)</Label>
        <Select value={formData.secondaryProject} onValueChange={(value) => setFormData({ ...formData, secondaryProject: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a secondary preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="education">Education Support & Child Mentorship</SelectItem>
            <SelectItem value="agriculture">Sustainable Agriculture & Food Security</SelectItem>
            <SelectItem value="women">Women Empowerment & Livelihoods</SelectItem>
            <SelectItem value="srhr">Sexual & Reproductive Health & Rights Education</SelectItem>
            <SelectItem value="child-protection">Child Protection & Family Strengthening</SelectItem>
            <SelectItem value="mental-health">Mental Health, Wellness & Psychosocial Support</SelectItem>
            <SelectItem value="community">Community Outreach & Development</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="preferredLocation">Preferred Location *</Label>
        <Select value={formData.preferredLocation} onValueChange={(value) => setFormData({ ...formData, preferredLocation: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select preferred location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nairobi">Nairobi</SelectItem>
            <SelectItem value="machakos">Machakos</SelectItem>
            <SelectItem value="busia">Busia</SelectItem>
            <SelectItem value="kilifi">Kilifi</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startDate">Preferred Start Date *</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="duration">Preferred Duration *</Label>
          <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-week">1 week</SelectItem>
              <SelectItem value="2-weeks">2 weeks</SelectItem>
              <SelectItem value="3-4-weeks">3–4 weeks</SelectItem>
              <SelectItem value="1-3-months">1–3 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

function Step3SkillsMotivation({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--earth-dark)] mb-2">
          Your Skills & Motivation
        </h2>
        <p className="text-[var(--warm-brown)]">
          We value presence, humility, and willingness to learn. Tell us why you want to volunteer and what you can contribute.
        </p>
      </div>

      <div>
        <Label htmlFor="motivation">Why do you want to volunteer with Impact Trails Africa? *</Label>
        <Textarea
          id="motivation"
          rows={5}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Share your motivation and what you hope to learn..."
          required
        />
      </div>

      <div>
        <Label htmlFor="skills">What relevant skills, education, or experience do you have? *</Label>
        <Textarea
          id="skills"
          rows={5}
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="Share any relevant skills, education, or experience..."
          required
        />
      </div>

      <div>
        <Label htmlFor="previousVolunteer">Have you volunteered before? *</Label>
        <Select value={formData.previousVolunteer} onValueChange={(value) => setFormData({ ...formData, previousVolunteer: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.previousVolunteer === 'yes' && (
        <div>
          <Label htmlFor="previousVolunteerDetails">Please explain your previous volunteer experience</Label>
          <Textarea
            id="previousVolunteerDetails"
            rows={4}
            value={formData.previousVolunteerDetails}
            onChange={(e) => setFormData({ ...formData, previousVolunteerDetails: e.target.value })}
          />
        </div>
      )}

      <div>
        <Label htmlFor="childExperience">Do you have experience working with children or vulnerable communities? *</Label>
        <Select value={formData.childExperience} onValueChange={(value) => setFormData({ ...formData, childExperience: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.childExperience === 'yes' && (
        <div>
          <Label htmlFor="childExperienceDetails">Please explain your experience</Label>
          <Textarea
            id="childExperienceDetails"
            rows={4}
            value={formData.childExperienceDetails}
            onChange={(e) => setFormData({ ...formData, childExperienceDetails: e.target.value })}
          />
        </div>
      )}

      <div>
        <Label htmlFor="certifications">Do you have any certifications? (Optional)</Label>
        <Textarea
          id="certifications"
          rows={3}
          value={formData.certifications}
          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
          placeholder="Teaching, health, coaching, etc."
        />
      </div>
    </div>
  );
}

function Step4HealthSafety({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--earth-dark)] mb-2">
          Health & Safety Information
        </h2>
        <p className="text-[var(--warm-brown)]">
          Your safety and wellbeing are important to us.
        </p>
      </div>

      <div>
        <Label htmlFor="medicalConditions">Do you have any medical conditions we should be aware of? (Optional)</Label>
        <Textarea
          id="medicalConditions"
          rows={3}
          value={formData.medicalConditions}
          onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="dietaryRequirements">Do you have any dietary requirements? (Optional)</Label>
        <Textarea
          id="dietaryRequirements"
          rows={2}
          value={formData.dietaryRequirements}
          onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="travelInsurance">Do you have travel insurance? *</Label>
        <Select value={formData.travelInsurance} onValueChange={(value) => setFormData({ ...formData, travelInsurance: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No, but will purchase</SelectItem>
            <SelectItem value="unsure">Unsure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="visaRequired">Do you require a visa to enter Kenya? *</Label>
        <Select value={formData.visaRequired} onValueChange={(value) => setFormData({ ...formData, visaRequired: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
            <SelectItem value="unsure">Unsure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-2 pt-4 border-t">
        <Checkbox
          id="agreement"
          checked={formData.agreementChecked}
          onCheckedChange={(checked) => setFormData({ ...formData, agreementChecked: checked })}
        />
        <label
          htmlFor="agreement"
          className="text-sm leading-relaxed text-[var(--warm-brown)] cursor-pointer"
        >
          I confirm that the information provided is accurate. *
        </label>
      </div>
    </div>
  );
}

function Step5Review({ formData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[var(--earth-dark)] mb-2">
          Review & Submit
        </h2>
        <p className="text-[var(--warm-brown)]">
          Please review your application before submitting.
        </p>
      </div>

      <div className="bg-[var(--cream)] p-6 rounded-lg space-y-4">
        <div>
          <h3 className="font-semibold text-[var(--earth-dark)] mb-2">Personal Information</h3>
          <p className="text-[var(--warm-brown)]">
            {formData.firstName} {formData.lastName}<br />
            {formData.email}<br />
            {formData.phone}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--earth-dark)] mb-2">Project Selection</h3>
          <p className="text-[var(--warm-brown)]">
            Primary: {formData.primaryProject}<br />
            Location: {formData.preferredLocation}<br />
            Duration: {formData.duration}<br />
            Start Date: {formData.startDate}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--earth-dark)] mb-2">Insurance & Visa</h3>
          <p className="text-[var(--warm-brown)]">
            Travel Insurance: {formData.travelInsurance}<br />
            Visa Required: {formData.visaRequired}
          </p>
        </div>
      </div>

      <div className="bg-[var(--sand)] p-6 rounded-lg">
        <p className="text-[var(--warm-brown)] text-sm">
          By submitting this application, you confirm that you understand this is a community-based volunteer placement. Acceptance is subject to review and availability.
        </p>
      </div>
    </div>
  );
}