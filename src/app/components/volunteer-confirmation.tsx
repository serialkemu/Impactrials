import { Check, Plus, X } from 'lucide-react';

interface VolunteerConfirmationProps {
  onAddExperiences: () => void;
  onSkip: () => void;
  volunteerData: {
    name: string;
    email: string;
    project: string;
    location: string;
  };
}

export function VolunteerConfirmation({ onAddExperiences, onSkip, volunteerData }: VolunteerConfirmationProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-2xl w-full my-8">
        <div className="p-6 sm:p-8 space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-[#5A7D5C] rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>

          {/* Confirmation Message */}
          <div className="text-center">
            <h2 className="text-3xl text-[#2C2417] mb-3">Your Application is Approved!</h2>
            <p className="text-lg text-[#6B5D4F] mb-6">
              Congratulations, {volunteerData.name}! You've been accepted for the {volunteerData.project} project.
            </p>
          </div>

          {/* Project Details */}
          <div className="bg-[#F5EFE7] rounded-lg p-6 space-y-3">
            <h3 className="text-lg text-[#2C2417] mb-3">Your Placement Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Project:</span>
                <span className="text-[#2C2417]">{volunteerData.project}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Location:</span>
                <span className="text-[#2C2417]">{volunteerData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Status:</span>
                <span className="text-[#5A7D5C]">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="bg-white border border-[#8B5A3C]/10 rounded-lg p-6">
            <h3 className="text-lg text-[#2C2417] mb-4">Program Fee Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Program Fee:</span>
                <span className="text-[#2C2417]">$450</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Coordination & Support:</span>
                <span className="text-[#5A7D5C]">Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Orientation:</span>
                <span className="text-[#5A7D5C]">Included</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Emergency Support:</span>
                <span className="text-[#5A7D5C]">Included</span>
              </div>
              <div className="border-t border-[#8B5A3C]/20 pt-3 flex justify-between">
                <span className="text-lg text-[#2C2417]">Total Due:</span>
                <span className="text-2xl text-[#8B5A3C]">$450</span>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <button className="w-full px-6 py-4 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors text-lg">
            Proceed to Payment
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#8B5A3C]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#6B5D4F]">After Payment</span>
            </div>
          </div>

          {/* Enhance Journey Section */}
          <div className="bg-gradient-to-br from-[#F5EFE7] to-[#E8997C]/20 rounded-lg p-6 border-2 border-[#8B5A3C]/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-[#2C2417] mb-2">🌍 Enhance Your Journey</h3>
              <p className="text-[#6B5D4F]">
                Your volunteer placement is confirmed. Would you like to add a travel experience to your journey?
              </p>
            </div>

            {/* Suggested Experiences */}
            <div className="mb-6">
              <p className="text-sm text-[#6B5D4F] mb-3">
                ✨ Suggested experiences based on your volunteer location ({volunteerData.location}):
              </p>
              <div className="space-y-2">
                {volunteerData.location.toLowerCase().includes('machakos') ? (
                  <>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Nairobi National Park (1 day)</span>
                      <span className="text-[#8B5A3C] text-sm">$100</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Ngong Hills Hiking</span>
                      <span className="text-[#8B5A3C] text-sm">$80</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Local Market & Cooking</span>
                      <span className="text-[#8B5A3C] text-sm">$60</span>
                    </div>
                  </>
                ) : volunteerData.location.toLowerCase().includes('kilifi') ? (
                  <>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Diani Beach (2-3 days)</span>
                      <span className="text-[#8B5A3C] text-sm">$200</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Kilifi Coast Experience</span>
                      <span className="text-[#8B5A3C] text-sm">$180</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Masai Mara Safari</span>
                      <span className="text-[#8B5A3C] text-sm">$450</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Nairobi City Tour</span>
                      <span className="text-[#8B5A3C] text-sm">$100</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Nairobi National Park</span>
                      <span className="text-[#8B5A3C] text-sm">$100</span>
                    </div>
                    <div className="bg-white rounded-md p-3 flex items-center justify-between">
                      <span className="text-[#2C2417] text-sm">Ngong Hills Hiking</span>
                      <span className="text-[#8B5A3C] text-sm">$80</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onAddExperiences}
                className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Experiences
              </button>
              <button
                onClick={onSkip}
                className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
              >
                Skip for Now
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#F5EFE7] rounded-lg p-6">
            <h3 className="text-lg text-[#2C2417] mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-sm text-[#6B5D4F]">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" />
                <span>You'll receive a confirmation email with program details</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" />
                <span>Your local coordinator will contact you within 48 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" />
                <span>Pre-departure orientation materials will be shared</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" />
                <span>Emergency contact information will be provided</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
