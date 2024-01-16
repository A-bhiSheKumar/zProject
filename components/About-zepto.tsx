// components/Zepto.js
import React from "react";
import Image from "next/image";

const Zepto = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: 1 }}>
        <Image
          src="data:image/png;base64,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"
          alt="Zepto Image"
          width={150}
          height={100}
        />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <h2 className="font-bold text-xl">All About Zepto</h2>
        <ul>
          <li className="orange_gradient">
            Zepto is the fastest-growing grocery delivery platform in India.
          </li>
          <li className="orange_gradient">Dilivered in 10min</li>
        </ul>
        <button className="rounded-full lg:mt-2 border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
            <a href="https://retail.economictimes.indiatimes.com/news/e-commerce/e-tailing/from-startup-to-unicorn-a-look-back-at-zeptos-journey/103123801#:~:text=Founded%20in%202021%20by%20two,with%20ultra%2Dfast%20grocery%20delivery."> More info</a>
        </button>
      </div>
    </div>
  );
};

export default Zepto;
