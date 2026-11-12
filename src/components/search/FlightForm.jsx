"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { cities, searchFlights } from "@/data/mockResults";

export default function FlightForm({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (from === to) {
      alert("Departure aur destination alag hone chahiye.");
      return;
    }

    onSearch(searchFlights({ from, to }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-end"
    >
      <Field
        label="From"
        name="flight-from"
        options={cities}
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="Departure city"
      />
      <Field
        label="To"
        name="flight-to"
        options={cities}
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Destination city"
      />
      <Field
        label="Date"
        name="flight-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
      />
      <Field
        label="Passengers"
        name="flight-passengers"
        type="number"
        min={1}
        max={9}
        value={passengers}
        onChange={(e) => setPassengers(e.target.value)}
      />
      <Button type="submit" size="lg" className="w-full sm:col-span-2 lg:col-span-1">
        Search Flights
      </Button>
    </form>
  );
}