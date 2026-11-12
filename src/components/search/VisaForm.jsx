"use client";

import { useState } from "react";
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";
import { visaCountries, visaTypes, searchVisa } from "@/data/mockResults";

export default function VisaForm({ onSearch }) {
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchVisa({ country, type }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-end"
    >
      <Field
        label="Destination Country"
        name="visa-country"
        options={visaCountries}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Select country"
      />
      <Field
        label="Visa Type"
        name="visa-type"
        options={visaTypes}
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Select type"
      />
      <Button type="submit" size="lg" className="w-full sm:col-span-2 lg:col-span-1">
        Search Visa
      </Button>
    </form>
  );
}