"use client";

import { useState } from "react";
import { X, Calendar, Users, Home, CheckCircle2, Phone, Mail, Sparkles, ArrowRight } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [suite, setSuite] = useState("mist-valley");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mealPlan, setMealPlan] = useState("breakfast");
  const [pickupRequired, setPickupRequired] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const suiteRates = {
    "mist-valley": { name: "The Mist Valley Suite", price: 5500 },
    "canopy-haven": { name: "The Canopy Haven Suite", price: 6800 },
    "estate-cottage": { name: "The Estate Family Sanctuary", price: 11500 },
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 2;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
    return isNaN(diff) ? 2 : diff;
  };

  const nights = calculateNights();
  const baseRate = suiteRates[suite].price * nights;
  const taxes = Math.round(baseRate * 0.12);
  const total = baseRate + taxes;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1b1c19]/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#fbf9f4] rounded-[4px] border border-[rgba(34,59,30,0.15)] shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#223b1e] text-[#fbf9f4]">
          <div>
            <span className="label-caps text-[9px] text-[#b1cfa7] block">
              Reservation Inquiries
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Book Your Sanctuary at SOLCASA
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#b1cfa7] hover:text-white hover:bg-[#334d2e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#d8e8c8] text-[#223b1e] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1b1c19] mb-3">
              Reservation Request Received
            </h4>
            <p className="text-sm text-[#434840] max-w-md mb-6 font-light leading-relaxed">
              Thank you, <strong>{name || "esteemed guest"}</strong>. Our estate concierge will contact you within 2 hours at <strong>{phone || email || "your contact details"}</strong> to confirm availability and coordinate your arrival in Wayanad.
            </p>

            <div className="p-4 rounded-[3px] bg-[#f5f3ee] border border-[rgba(34,59,30,0.08)] w-full max-w-md text-left text-xs mb-8 space-y-1.5 text-[#434840]">
              <p><strong>Suite:</strong> {suiteRates[suite].name}</p>
              <p><strong>Estimated Stay:</strong> {nights} Nights • {guests} Guests</p>
              <p><strong>Estimated Amount:</strong> ₹{total.toLocaleString()} (inclusive of taxes & morning tea)</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-[3px] bg-[#223b1e] text-[#fbf9f4] label-caps text-xs font-semibold"
              >
                Done
              </button>
              <a
                href={`https://wa.me/914936284100?text=Hi%20Solcasa%20Homestay%2C%20I%20requested%20a%20booking%20for%20${encodeURIComponent(suiteRates[suite].name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-[3px] border border-[#223b1e] text-[#223b1e] label-caps text-xs font-semibold hover:bg-[#f5f3ee]"
              >
                Connect on WhatsApp Concierge
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Select Suite */}
            <div>
              <label className="label-caps text-[#54634a] mb-2 block">
                Select Suite / Villa
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(suiteRates).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSuite(key)}
                    className={`p-3 text-left rounded-[3px] border transition-all text-xs ${
                      suite === key
                        ? "bg-[#223b1e] text-[#fbf9f4] border-[#223b1e] shadow-sm"
                        : "bg-[#ffffff] text-[#1b1c19] border-[rgba(34,59,30,0.15)] hover:border-[#223b1e]/40"
                    }`}
                  >
                    <p className="font-serif font-medium text-sm mb-1">{item.name}</p>
                    <p className={`font-mono text-[11px] ${suite === key ? "text-[#b1cfa7]" : "text-[#54634a]"}`}>
                      ₹{item.price.toLocaleString()} / night
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="label-caps text-[#54634a] mb-1.5 block">
                  Check-in Date
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                />
              </div>

              <div>
                <label className="label-caps text-[#54634a] mb-1.5 block">
                  Check-out Date
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                />
              </div>

              <div>
                <label className="label-caps text-[#54634a] mb-1.5 block">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                >
                  <option value="1">1 Solo Traveler</option>
                  <option value="2">2 Adults (Couple / Friends)</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests (Family)</option>
                  <option value="6">5-6 Guests (Sanctuary Villa)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Details */}
            <div className="space-y-3 pt-2 border-t border-[rgba(34,59,30,0.08)]">
              <label className="label-caps text-[#54634a] block">
                Your Contact Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-3 py-2 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3 py-2 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded-[2px] bg-[#ffffff] border border-[rgba(34,59,30,0.2)] text-xs text-[#1b1c19] focus:outline-none focus:border-[#223b1e]"
                />
              </div>
            </div>

            {/* Step 4: Special Preferences */}
            <div className="space-y-2 pt-2 border-t border-[rgba(34,59,30,0.08)]">
              <label className="label-caps text-[#54634a] block">
                Optional Sanctuary Preferences
              </label>
              <div className="flex flex-wrap gap-4 text-xs text-[#434840]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pickupRequired}
                    onChange={(e) => setPickupRequired(e.target.checked)}
                    className="rounded text-[#223b1e] focus:ring-0"
                  />
                  <span>Need Thalappuzha auto / vehicle pickup</span>
                </label>
              </div>
            </div>

            {/* Price Preview Card */}
            <div className="p-4 rounded-[3px] bg-[#f5f3ee] border border-[rgba(34,59,30,0.08)] flex items-center justify-between">
              <div>
                <span className="label-caps text-[9px] text-[#73796f] block">Estimated Total</span>
                <span className="font-serif text-xl text-[#223b1e] font-medium">
                  ₹{total.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#54634a] ml-2">({nights} Nights + 12% GST)</span>
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-[3px] bg-[#223b1e] text-[#fbf9f4] hover:bg-[#2e4e29] transition-all text-xs font-semibold label-caps shadow-md"
              >
                Send Inquiry →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
