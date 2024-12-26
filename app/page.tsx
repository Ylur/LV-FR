'use client'

import Link from 'next/link';
import DishPreview from './components/DishPreview';

const HomePage = () => {
  return (
    <>


      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: 'url("/photos/lb.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to LiL Bits</h1>
            <p className="mt-4 text-lg">Where LiL Food Meets LiL Companyy.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 grid grid-cols-2 grid-rows-2 gap-4">
        {/* Top Left: Carousel */}
        <div className="col-span-1 row-span-1">
          <DishPreview />
        </div>

        {/* Top Right: Popular Dishes */}
        <div className="col-span-1 row-span-1">
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Popular Dishes
            </h2>
            <DishPreview />
            <div className="text-center mt-8">
              <Link
                href="/menu"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Full Menu
              </Link>
            </div>
          </section>
        </div>

        {/* Bottom Left: Placeholder for future content */}
        <div className="col-span-1 row-span-1">
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">
              Placeholder Content
            </h2>
            <p className="text-center">This is a placeholder for future content.</p>
          </section>
        </div>

        {/* Bottom Right: Placeholder for future content */}
        <div className="col-span-1 row-span-1">
          <section>
            <h2 className="text-3xl font-bold text-center mb-6">
              Placeholder Content
            </h2>
            <p className="text-center">This is a placeholder for future content.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;




