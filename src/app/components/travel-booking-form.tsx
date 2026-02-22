import { useState } from 'react';
import { ChevronRight, Calendar, Users, MapPin, Check } from 'lucide-react';

interface TravelBookingFormProps {
  onClose: () => void;
  prefilledData?: {
    name?: string;
    email?: string;
    nationality?: string;
    volunteerLocation?: string;
  };
}

export function TravelBookingForm({ onClose, prefilledData }: TravelBookingFormProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    category: '',
    experience: '',
    dates: '',
    duration: '',
    travelers: '1',
    fullName: prefilledData?.name || '',
    email: prefilledData?.email || '',
    phone: '',
    nationality: prefilledData?.nationality || '',
    passport: '',
    specialRequests: '',
    accommodationType: '',
    tourType: '',
    pickupLocation: '',
    roomType: '',
    airportTransfer: false,
    localGuide: true,
    traditionalMeal: false,
    fitnessLevel: '',
  });

  const experiences: { [key: string]: string[] } = {
    'Safari Adventures': ['Masai Mara Safari', 'Nairobi National Park', 'Olkaria / Naivasha'],
    'Coast Experiences': ['Diani', 'Kilifi', 'Mombasa', 'Lamu'],
    'Outdoor Adventures': ['Ngong Hills Hiking', 'Mount Kenya Hiking'],
    'Cultural Immersion': ['Busia Village Experience', 'Nairobi City Tour', 'Local Market & Cooking Experience'],
  };

  const getSuggestedExperiences = () => {
    if (!prefilledData?.volunteerLocation) return [];
    
    const location = prefilledData.volunteerLocation.toLowerCase();
    if (location.includes('machakos')) {
      return ['Nairobi National Park', 'Ngong Hills Hiking', 'Local Market & Cooking Experience'];
    } else if (location.includes('kilifi')) {
      return ['Diani', 'Kilifi', 'Masai Mara Safari'];
    } else if (location.includes('nairobi')) {
      return ['Nairobi City Tour', 'Nairobi National Park', 'Ngong Hills Hiking'];
    }
    return [];
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const calculateTotal = () => {
    let total = 0;
    
    // Base prices (mock)
    if (bookingData.experience.includes('Masai Mara')) total += 450;
    else if (bookingData.experience.includes('Mount Kenya')) total += 350;
    else if (bookingData.experience.includes('Nairobi')) total += 100;
    else if (bookingData.experience.includes('Diani')) total += 200;
    else total += 150;

    // Add-ons
    if (bookingData.airportTransfer) total += 50;
    if (bookingData.traditionalMeal) total += 30;
    if (bookingData.accommodationType === 'Premium') total += 150;
    else if (bookingData.accommodationType === 'Mid-range') total += 75;

    const travelers = parseInt(bookingData.travelers) || 1;
    return total * travelers;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-[#2C2417] mb-2">Select Your Travel Experience</h2>
        <p className="text-[#6B5D4F]">
          Choose the experience you'd like to book. You can travel before, during, or after your volunteer placement.
        </p>
      </div>

      {prefilledData?.volunteerLocation && getSuggestedExperiences().length > 0 && (
        <div className="bg-[#E8D5B9] rounded-lg p-4 border-l-4 border-[#086770]">
          <p className="text-sm text-[#2C2417] mb-2">
            ✨ Suggested based on your volunteer location:
          </p>
          <div className="flex flex-wrap gap-2">
            {getSuggestedExperiences().map((exp) => (
              <button
                key={exp}
                onClick={() => {
                  const category = Object.keys(experiences).find(cat => 
                    experiences[cat].includes(exp)
                  ) || '';
                  setBookingData({ ...bookingData, category, experience: exp });
                }}
                className="px-3 py-1 bg-white text-[#086770] rounded-md text-sm hover:bg-[#086770] hover:text-white transition-colors"
              >
                {exp}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm mb-2 text-[#2C2417]">Experience Category *</label>
        <select
          value={bookingData.category}
          onChange={(e) => setBookingData({ ...bookingData, category: e.target.value, experience: '' })}
          className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          required
        >
          <option value="">Select a category</option>
          {Object.keys(experiences).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {bookingData.category && (
        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Specific Experience *</label>
          <select
            value={bookingData.experience}
            onChange={(e) => setBookingData({ ...bookingData, experience: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            required
          >
            <option value="">Select an experience</option>
            {experiences[bookingData.category].map((exp) => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Preferred Travel Dates *</label>
          <input
            type="date"
            value={bookingData.dates}
            onChange={(e) => setBookingData({ ...bookingData, dates: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Duration</label>
          <input
            type="text"
            value={bookingData.duration}
            onChange={(e) => setBookingData({ ...bookingData, duration: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            placeholder="e.g., 3 days"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-[#2C2417]">Number of Travelers *</label>
        <input
          type="number"
          min="1"
          value={bookingData.travelers}
          onChange={(e) => setBookingData({ ...bookingData, travelers: e.target.value })}
          className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          required
        />
      </div>

      <button
        onClick={handleNext}
        disabled={!bookingData.category || !bookingData.experience || !bookingData.dates}
        className="w-full px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        Continue
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl text-[#2C2417] mb-2">Traveler Information</h2>
        {prefilledData?.name && (
          <p className="text-sm text-[#6B5D4F]">
            We've pre-filled your details from your volunteer application. Feel free to edit if needed.
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm mb-2 text-[#2C2417]">Full Name *</label>
        <input
          type="text"
          value={bookingData.fullName}
          onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
          className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Email Address *</label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Phone Number *</label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Nationality *</label>
          <input
            type="text"
            value={bookingData.nationality}
            onChange={(e) => setBookingData({ ...bookingData, nationality: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-[#2C2417]">Passport Number (Optional)</label>
          <input
            type="text"
            value={bookingData.passport}
            onChange={(e) => setBookingData({ ...bookingData, passport: e.target.value })}
            className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-2 text-[#2C2417]">Special Requests (Dietary, accessibility, etc.)</label>
        <textarea
          value={bookingData.specialRequests}
          onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
          placeholder="Any special requirements..."
        ></textarea>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={!bookingData.fullName || !bookingData.email || !bookingData.phone}
          className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const isSafari = bookingData.category === 'Safari Adventures';
    const isCoast = bookingData.category === 'Coast Experiences';
    const isCultural = bookingData.category === 'Cultural Immersion';
    const isOutdoor = bookingData.category === 'Outdoor Adventures';

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl text-[#2C2417] mb-2">Customize Your Trip</h2>
          <p className="text-[#6B5D4F]">Personalize your experience with these options</p>
        </div>

        {isSafari && (
          <>
            <div>
              <label className="block text-sm mb-2 text-[#2C2417]">Accommodation Type</label>
              <select
                value={bookingData.accommodationType}
                onChange={(e) => setBookingData({ ...bookingData, accommodationType: e.target.value })}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              >
                <option value="">Select accommodation</option>
                <option value="Budget">Budget (+$0)</option>
                <option value="Mid-range">Mid-range (+$75/person)</option>
                <option value="Premium">Premium (+$150/person)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#2C2417]">Tour Type</label>
              <select
                value={bookingData.tourType}
                onChange={(e) => setBookingData({ ...bookingData, tourType: e.target.value })}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              >
                <option value="">Select tour type</option>
                <option value="Group">Group Tour</option>
                <option value="Private">Private Tour</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#2C2417]">Pickup Location</label>
              <input
                type="text"
                value={bookingData.pickupLocation}
                onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                placeholder="e.g., Nairobi CBD, Hotel name"
              />
            </div>
          </>
        )}

        {isCoast && (
          <>
            <div>
              <label className="block text-sm mb-2 text-[#2C2417]">Room Type</label>
              <select
                value={bookingData.roomType}
                onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              >
                <option value="">Select room type</option>
                <option value="Shared">Shared Room</option>
                <option value="Private">Private Room</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="airportTransfer"
                checked={bookingData.airportTransfer}
                onChange={(e) => setBookingData({ ...bookingData, airportTransfer: e.target.checked })}
                className="w-5 h-5 text-[#8B5A3C] border-[#8B5A3C]/20 rounded focus:ring-[#8B5A3C]"
              />
              <label htmlFor="airportTransfer" className="text-[#2C2417]">
                Add Airport Transfer (+$50)
              </label>
            </div>
          </>
        )}

        {isCultural && (
          <>
            <div className="bg-[#F5EFE7] rounded-lg p-4 flex items-start gap-3">
              <Check className="w-5 h-5 text-[#5A7D5C] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#2C2417] mb-1">Local Guide Included</p>
                <p className="text-sm text-[#6B5D4F]">
                  All cultural experiences include an experienced local guide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="traditionalMeal"
                checked={bookingData.traditionalMeal}
                onChange={(e) => setBookingData({ ...bookingData, traditionalMeal: e.target.checked })}
                className="w-5 h-5 text-[#8B5A3C] border-[#8B5A3C]/20 rounded focus:ring-[#8B5A3C]"
              />
              <label htmlFor="traditionalMeal" className="text-[#2C2417]">
                Add Traditional Meal Upgrade (+$30)
              </label>
            </div>
          </>
        )}

        {isOutdoor && (
          <div>
            <label className="block text-sm mb-2 text-[#2C2417]">Fitness Level</label>
            <select
              value={bookingData.fitnessLevel}
              onChange={(e) => setBookingData({ ...bookingData, fitnessLevel: e.target.value })}
              className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            >
              <option value="">Select fitness level</option>
              <option value="Beginner">Beginner</option>
              <option value="Moderate">Moderate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors flex items-center justify-center gap-2"
          >
            Continue
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => {
    const total = calculateTotal();
    const basePrice = total - (bookingData.airportTransfer ? 50 : 0) - (bookingData.traditionalMeal ? 30 : 0);
    const addons = (bookingData.airportTransfer ? 50 : 0) + (bookingData.traditionalMeal ? 30 : 0);
    const serviceFee = Math.round(total * 0.05);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl text-[#2C2417] mb-2">Review Your Booking</h2>
          <p className="text-[#6B5D4F]">Please review your booking details before proceeding</p>
        </div>

        <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#086770] mt-1" />
            <div>
              <p className="text-sm text-[#6B5D4F]">Experience</p>
              <p className="text-[#2C2417]">{bookingData.experience}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#086770] mt-1" />
            <div>
              <p className="text-sm text-[#6B5D4F]">Date</p>
              <p className="text-[#2C2417]">{new Date(bookingData.dates).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#086770] mt-1" />
            <div>
              <p className="text-sm text-[#6B5D4F]">Travelers</p>
              <p className="text-[#2C2417]">{bookingData.travelers} {parseInt(bookingData.travelers) === 1 ? 'person' : 'people'}</p>
            </div>
          </div>

          {bookingData.duration && (
            <div>
              <p className="text-sm text-[#6B5D4F]">Duration</p>
              <p className="text-[#2C2417]">{bookingData.duration}</p>
            </div>
          )}
        </div>

        <div className="bg-[#F5EFE7] rounded-lg p-6">
          <h3 className="text-lg text-[#2C2417] mb-4">Pricing Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[#6B5D4F]">Experience Fee:</span>
              <span className="text-[#2C2417]">${basePrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B5D4F]">Local Guide Fee:</span>
              <span className="text-[#5A7D5C]">Included</span>
            </div>
            {addons > 0 && (
              <div className="flex justify-between">
                <span className="text-[#6B5D4F]">Add-ons:</span>
                <span className="text-[#2C2417]">${addons}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#6B5D4F]">Taxes / Service Fee:</span>
              <span className="text-[#2C2417]">${serviceFee}</span>
            </div>
            <div className="border-t border-[#086770]/20 pt-3 flex justify-between">
              <span className="text-[#4A6D3A]">Total:</span>
              <span className="text-2xl text-[#086770]">${total + serviceFee}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#F5EFE7] rounded-lg p-4 space-y-2 text-sm">
          <p className="text-[#2C2417]">✓ All safaris include a local guide</p>
          <p className="text-[#2C2417]">✓ Experiences support local hosts and businesses</p>
          <p className="text-[#2C2417]">✓ Women-led, community-rooted platform</p>
          <p className="text-[#2C2417]">✓ Emergency contact support included</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors"
          >
            Confirm & Proceed to Payment
          </button>
        </div>
      </div>
    );
  };

  const renderStep5 = () => {
    const total = calculateTotal() + Math.round(calculateTotal() * 0.05);

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl text-[#2C2417] mb-2">💳 Secure Your Booking</h2>
          <p className="text-[#6B5D4F]">To confirm your travel experience, please complete payment below.</p>
        </div>

        <div className="bg-white rounded-lg border border-[#8B5A3C]/10 p-6">
          <h3 className="text-lg text-[#2C2417] mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 border border-[#8B5A3C]/20 rounded-md hover:bg-[#F5EFE7] cursor-pointer">
              <input type="radio" name="payment" defaultChecked className="w-5 h-5" />
              <span className="text-[#2C2417]">Credit / Debit Card</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[#8B5A3C]/20 rounded-md hover:bg-[#F5EFE7] cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className="text-[#2C2417]">Mobile Money (M-Pesa)</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[#8B5A3C]/20 rounded-md hover:bg-[#F5EFE7] cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className="text-[#2C2417]">Bank Transfer</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[#8B5A3C]/20 rounded-md hover:bg-[#F5EFE7] cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5" />
              <span className="text-[#2C2417]">PayPal</span>
            </label>
          </div>
        </div>

        <div className="bg-[#F5EFE7] rounded-lg p-6">
          <h3 className="text-lg text-[#2C2417] mb-2">Total Amount Due</h3>
          <p className="text-4xl text-[#086770]">${total}</p>
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 mt-1" />
            <span className="text-sm text-[#2C2417]">I understand cancellation policies apply.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 mt-1" />
            <span className="text-sm text-[#2C2417]">I confirm my travel dates are correct.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" defaultChecked className="w-5 h-5 mt-1" />
            <span className="text-sm text-[#2C2417]">I agree to the travel terms and conditions.</span>
          </label>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>
    );
  };

  const renderStep6 = () => (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 bg-[#5A7D5C] rounded-full flex items-center justify-center mx-auto">
        <Check className="w-10 h-10 text-white" strokeWidth={3} />
      </div>
      
      <div>
        <h2 className="text-3xl text-[#2C2417] mb-3">🎉 Booking Confirmed!</h2>
        <p className="text-[#6B5D4F]">Your travel experience has been successfully booked.</p>
      </div>

      <div className="bg-[#F5EFE7] rounded-lg p-6 text-left">
        <h3 className="text-lg text-[#2C2417] mb-4">You'll receive:</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-[#2C2417]">
            <Check className="w-5 h-5 text-[#5A7D5C]" />
            Confirmation email
          </li>
          <li className="flex items-center gap-2 text-[#2C2417]">
            <Check className="w-5 h-5 text-[#5A7D5C]" />
            Itinerary details
          </li>
          <li className="flex items-center gap-2 text-[#2C2417]">
            <Check className="w-5 h-5 text-[#5A7D5C]" />
            Coordinator contact information
          </li>
        </ul>
      </div>

      <p className="text-lg text-[#086770]">We can't wait to explore with you.</p>

      <button
        onClick={onClose}
        className="px-8 py-3 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors"
      >
        Return to Homepage
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full my-8">
        {/* Progress Bar */}
        {step < 6 && (
          <div className="border-b border-[#086770]/10">
            <div className="flex items-center justify-between px-6 py-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      s === step
                        ? 'bg-[#086770] text-white'
                        : s < step
                        ? 'bg-[#5A7D5C] text-white'
                        : 'bg-[#F5EFE7] text-[#6B5D4F]'
                    }`}
                  >
                    {s < step ? <Check className="w-5 h-5" /> : s}
                  </div>
                  {s < 5 && (
                    <div
                      className={`w-8 sm:w-16 h-0.5 ${
                        s < step ? 'bg-[#5A7D5C]' : 'bg-[#F5EFE7]'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {step === 5 && renderStep5()}
          {step === 6 && renderStep6()}
        </div>
      </div>
    </div>
  );
}