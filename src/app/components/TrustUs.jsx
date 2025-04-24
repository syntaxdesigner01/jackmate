"use client";
import React, { useState, useEffect } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [registeredStudents, setRegisteredStudents] = useState(0);
  const [institutions, setInstitutions] = useState(0);
  const [rating, setRating] = useState(0);

  // Function to animate numbers
  const animateNumber = (target, setter, duration) => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      if (start < target) {
        start++;
        setter(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateNumber(1000, setRegisteredStudents, 2000); // 1000 for Registered Students
    animateNumber(10, setInstitutions, 2000); // 10 for Institutions
    animateNumber(4.8, setRating, 2000); // 4.8 for Rating
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div
        className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        role="tabpanel"
        aria-labelledby="stats-tab"
      >
        <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">
              {registeredStudents}+
            </dt>
            <dd className="text-gray-500 dark:text-gray-400">
              Registered Students
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">{institutions}+</dt>
            <dd className="text-gray-500 dark:text-gray-400">Institutions</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold">{rating}</dt>
            <dd className="text-gray-500 dark:text-gray-400">Rating</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TabComponent;
