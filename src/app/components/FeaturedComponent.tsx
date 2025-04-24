import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Features Tailored for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Personalized Study Plans</h3>
            <p className="mt-2 text-gray-600">
              Get customized study guides based on your learning style and
              course requirements.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">
              AI-Powered Recommendations
            </h3>
            <p className="mt-2 text-gray-600">
              Receive intelligent suggestions for resources, articles, and study
              materials.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Progress Tracking</h3>
            <p className="mt-2 text-gray-600">
              Monitor your learning progress and adjust your study plans
              accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
