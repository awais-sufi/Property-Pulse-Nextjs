import React from "react";
import PropertyCard from "@/app/properties/PropertyCard";
import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";
const HomeProperties = async () => {
  await connectDB();

  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
  return (
    <>
      <section className="px-4 py-8">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl mb-6 font-bold text-center text-blue-500">
            Featured Properties
          </h2>
          {recentProperties.length === 0 ? (
            <h1> No Properties found </h1>
          ) : (
            <div className="grid gird-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-6">
        <Link
          href="/properties"
          className="bg-black block text-center text-white rounded-xl px-6 py-4 hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
