"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { cities, searchHotels } from "@/data/mockResults";

export default function HotelForm({ onSearch }) {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkOut <= checkIn) {
      alert("Check-out date must be after the check-in date.");
      return;
    }

    onSearch(searchHotels({ city }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-end"
    >
      <Field
        label="City"
        name="hotel-city"
        options={cities}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Where to?"
      />
      <Field
        label="Check-in"
        name="hotel-checkin"
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        min={today}
      />
      <Field
        label="Check-out"
        name="hotel-checkout"
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        min={checkIn || today}
      />
      <Field
        label="Guests"
        name="hotel-guests"
        type="number"
        min={1}
        max={10}
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <Button type="submit" size="lg" className="w-full sm:col-span-2 lg:col-span-1">
        Search Hotels
      </Button>
    </form>
  );
}