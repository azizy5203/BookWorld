import React from "react";
import { Link } from "react-router-dom";
import Card from "@/components/shared/Cards/Card";

function BrowseStores() {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium">Browse by Stores</h3>
        <Link
          to="/books"
          className="bg-primary rounded text-white text-base font-medium p-2"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card theme="cold" />
      </div>
    </div>
  );
}

export default BrowseStores;
