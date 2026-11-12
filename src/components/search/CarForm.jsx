"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { cities, carTypes, searchCars } from "@/data/mockResults";

export default function CarForm({ onSearch }) {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dropoff < pickup) {
      alert("Drop-off date cannot be before the pick-up date.");
      return;
    }

    onSearch(searchCars({ city, type }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 items-end"
    >
      <Field
        label="Pick-up City"
        name="car-city"
        options={cities}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Select city"
      />
      <Field
        label="Car Type"
        name="car-type"
        options={carTypes}
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Select type"
      />
      <Field
        label="Pick-up Date"
        name="car-pickup"
        type="date"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        min={today}
      />
      <Field
        label="Drop-off Date"
        name="car-dropoff"
        type="date"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
        min={pickup || today}
      />
      <Button type="submit" size="lg" className="w-full sm:col-span-2 lg:col-span-1">
        Search Cars
      </Button>
    </form>
  );
}