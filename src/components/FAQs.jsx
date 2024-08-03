import React from "react";
import FAQCard from "./FAQCard";

export default function FAQs() {
  return (
    <div>
      <h2 className="mb-5 mt-36 text-5xl font-bold text-gray-800">FAQs</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
        <FAQCard
          title="Is ToDesktop For Me?"
          answer="That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        />
      </ul>
    </div>
  );
}
