import React from 'react';

// Property Card Skeleton
export const PropertyCardSkeleton = () => {
  return (
    <div className="bg-white rounded-[18px] shadow-md border border-gray-200 overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-32 bg-gray-200 rounded-t-[18px]"></div>
      
      <div className="p-4">
        {/* Location and rating skeleton */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 rounded mr-1"></div>
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-12 h-3 bg-gray-200 rounded"></div>
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        </div>
        
        {/* Button and price skeleton */}
        <div className="flex items-center justify-between">
          <div className="w-20 h-8 bg-gray-200 rounded-lg"></div>
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

// Hero Section Skeleton
export const HeroSkeleton = () => {
  return (
    <div className="w-[90%] mx-auto mt-6 mb-16">
      <section className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gray-200 animate-pulse">
        {/* Hero content skeleton */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="w-96 h-12 bg-gray-300 rounded mb-4"></div>
          <div className="w-80 h-6 bg-gray-300 rounded"></div>
        </div>
      </section>
      
      {/* Search filters skeleton */}
      <div className="relative -mt-8 flex justify-center z-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-wrap items-center gap-4 justify-between max-w-4xl w-full">
          <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-28 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="w-36 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Featured Property Section Skeleton
export const FeaturedPropertySkeleton = () => {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-8">
        <div className="w-64 h-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-48 h-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
      
      <div className="flex gap-6">
        {/* Main large property skeleton */}
        <div className="relative flex-1 rounded-3xl overflow-hidden shadow-lg bg-gray-200 animate-pulse">
          <div className="w-full h-96"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 py-6 rounded-b-3xl">
            <div className="w-32 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-48 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Right side skeletons */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <div className="w-72 h-96 rounded-3xl bg-gray-200 animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-80 h-44 rounded-3xl bg-gray-200 animate-pulse"></div>
            <div className="w-80 h-44 rounded-3xl bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Property Grid Skeleton
export const PropertyGridSkeleton = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-7">
      {Array.from({ length: count }).map((_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </div>
  );
};
