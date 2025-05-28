import React from "react";
import microsoft from "../../assets/microsoft.png";
import walmart from "../../assets/walmart.png";
import accenture from "../../assets/accenture.png";
import adobe from "../../assets/adobe.png";
import paypal from "../../assets/paypal.png";

const TrustedCompanies = () => {
  return (
    <section className="py-10 bg-white text-center gap-3">
      <p className="text-green-500 text-xl mb-8">Trusted by learners from</p>
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6">
        <img src={microsoft} alt="Microsoft" className="h-10 object-contain" />
        <img src={walmart} alt="Walmart" className="h-10 object-contain" />
        <img src={accenture} alt="Accenture" className="h-10 object-contain" />
        <img src={adobe} alt="Adobe" className="h-10 object-contain" />
        <img src={paypal} alt="PayPal" className="h-10 object-contain" />
      </div>
    </section>
  );
};

export default TrustedCompanies;
