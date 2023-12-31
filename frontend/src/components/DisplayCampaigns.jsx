import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import FundCard2 from './FundCard2';
import FundCard3 from './FundCard3';
import FundCard4 from './FundCard4';
import FundCard5 from './FundCard5';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }
  
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Sponsered</h1>
      <div className="flex flex-wrap my-[20px] gap-[26px]">
        <FundCard3 />
        <FundCard5 />
      </div>

      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">{title} ({5})</h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
        )}

        {/* {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campigns yet
          </p>
        )} */}

        {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
          key={uuidv4()}
          {...campaign}
          handleClick={() => handleNavigate(campaign)}
        />)}

        {!isLoading && <FundCard />}
        {!isLoading && <FundCard2 />}
        {!isLoading && <FundCard3 />}
        {!isLoading && <FundCard4 />}
        {!isLoading && <FundCard5 />}
      </div>
    </div>
  )
}

export default DisplayCampaigns