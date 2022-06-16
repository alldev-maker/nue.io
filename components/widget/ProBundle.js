import {CheckIcon} from "@/components/icons/Check";
import {RightArrowIcon} from "@/components/icons/RightArrow";

const Feature = ({text}) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <span>{text}</span>
      <span className="flex-shrink-0">
        <CheckIcon />
      </span>
    </div>
  );
};

const TrailButton = () => {
  return (
    <div className="flex justify-between items-center bg-[#6239EB] rounded-md px-5 py-3 w-[180px]">
      <span className="text-white text-xs">Start Free Trial</span>
      <RightArrowIcon />
    </div>
  );
};

const ProBundle = () => {
  return (
    <div className="w-full md:max-w-[500px] rounded-md p-8 pb-4 bg-white md:ml-auto">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src={`/images/widget/cube.png`}
            alt={`Cube`}
            width={40}
            height={40}
          />
          <p className="text-2xl font-anMedium ml-4">Pro Bundle</p>
        </div>
        <div>
          <div className="text-xl font-anMedium">
            <sup>$</sup>
            <span>89.99</span>
          </div>
          <div className="text-xs font-anMedium opacity-20">
            <span>/ per month</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4">
        <div className="w-[32px] h-[18px] rounded-[9px] bg-[#6239EB] flex justify-end items-center p-[3px]">
          <div className="h-3 w-3 rounded-md bg-white"></div>
        </div>
        <div className="font-anMedium text-xs pl-3">
          <span>Yearly (Save 10%)</span>
        </div>
      </div>
      <div className="mt-8">
        <Feature text="1000 users" />
        <Feature text="Recording transcripts" />
        <Feature text="1 GB Cloud storage" />
        <Feature text="Up to 250 Webinar Participants" />
        <Feature text="Optional Professional Services Add-on " />
      </div>
      <div className="flex justify-end mt-4">
        <TrailButton />
      </div>
    </div>
  );
};

export default ProBundle;