// ---------- Common lists (forms ke dropdowns me use honge) ----------
export const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Dubai",
  "Istanbul",
  "London",
  "Paris",
  "Bangkok",
  "Kuala Lumpur",
  "Maldives",
];

export const visaCountries = [
  "Turkey",
  "United Arab Emirates",
  "Thailand",
  "Malaysia",
  "United Kingdom",
  "Schengen (Europe)",
];

export const visaTypes = ["Tourist", "Business", "Transit"];
export const carTypes = ["Economy", "SUV", "Luxury", "Van"];

// ---------- Helpers ----------
// Same input par hamesha same result aaye, is liye string se number banate hain
const seed = (str) =>
  [...str].reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) % 100000, 7);

const pick = (arr, n) => arr[n % arr.length];

// ---------- Visa ----------
export function searchVisa({ country, type }) {
  const s = seed(country + type);
  const base = type === "Business" ? 120 : type === "Transit" ? 40 : 70;

  return [
    {
      id: `visa-1-${s}`,
      title: `${country} ${type} Visa`,
      subtitle: "Standard processing",
      time: `${5 + (s % 5)} working days`,
      price: base + (s % 30),
    },
    {
      id: `visa-2-${s}`,
      title: `${country} ${type} Visa (Express)`,
      subtitle: "Priority processing",
      time: `${2 + (s % 2)} working days`,
      price: base + 60 + (s % 30),
    },
  ];
}

// ---------- Flights ----------
const airlines = ["Emirates", "Qatar Airways", "Turkish Airlines", "PIA", "Etihad"];
const departTimes = ["06:15", "09:40", "13:25", "18:10", "22:45"];

export function searchFlights({ from, to }) {
  const s = seed(from + to);

  return Array.from({ length: 4 }, (_, i) => ({
    id: `flight-${s}-${i}`,
    title: pick(airlines, s + i),
    subtitle: `${from} → ${to}`,
    time: `${pick(departTimes, s + i * 2)} • ${3 + ((s + i) % 6)}h ${(i * 15) % 60}m`,
    price: 180 + ((s + i * 37) % 420),
  }));
}

// ---------- Hotels ----------
const hotelNames = ["Grand Palace", "Skyline Suites", "Royal Orchid", "Azure Resort", "City Comfort Inn"];

export function searchHotels({ city }) {
  const s = seed(city);

  return Array.from({ length: 4 }, (_, i) => ({
    id: `hotel-${s}-${i}`,
    title: `${pick(hotelNames, s + i)} ${city}`,
    subtitle: `${3 + ((s + i) % 3)} star • Free breakfast`,
    time: "per night",
    price: 55 + ((s + i * 29) % 240),
  }));
}

// ---------- Cars ----------
const carModels = {
  Economy: ["Toyota Yaris", "Suzuki Cultus", "Honda City"],
  SUV: ["Toyota Fortuner", "Kia Sportage", "Hyundai Tucson"],
  Luxury: ["Mercedes E-Class", "BMW 5 Series", "Audi A6"],
  Van: ["Toyota Hiace", "Hyundai Staria", "Kia Carnival"],
};
const carPrices = { Economy: 30, SUV: 65, Luxury: 140, Van: 80 };

export function searchCars({ city, type }) {
  const s = seed(city + type);

  return carModels[type].map((model, i) => ({
    id: `car-${s}-${i}`,
    title: model,
    subtitle: `${type} • ${city}`,
    time: "per day",
    price: carPrices[type] + ((s + i * 11) % 20),
  }));
}