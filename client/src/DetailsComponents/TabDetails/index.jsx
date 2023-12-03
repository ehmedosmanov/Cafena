import React, { useState } from "react";
import "./index.scss"
const TabDetails = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
    <div className="tabs-details">
      <div className="tab-buttons">
        <button onClick={() => handleTabClick("tab1")} className={` detail-pr {activeTab === "tab1" ? "active" : ""}`}>
          Product details
        </button>
        <button onClick={() => handleTabClick("tab2")} className={` detail-pr  {activeTab === "tab2" ? "active" : ""}`}>
          Additional information
        </button>
        <button onClick={() => handleTabClick("tab3")} className={` detail-pr {activeTab === "tab3" ? "active" : ""}`}>
          (04) review
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <div className="text-inf">
            <p>Rrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,</p>
            </div>}
        {activeTab === "tab2" && <div className="table-info">
            <ul className="info-ul">
                <li>weight</li>
                <li>1.4 oz</li>
                <li>Dimensions</li>
                <li>62 × 56 × 12 in</li>
                <li>Size</li>
                <li>XL, XXL, LG, SM, MD</li>
                <li>Fabric</li>
                <li>Cotton, Silk & Synthetic</li>
                <li>Warranty</li>
                <li>3 Months</li>
            </ul>
            </div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
      </div>
    </div>
    </div>
  );
};

export default TabDetails;
