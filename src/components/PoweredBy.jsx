import React from "react";
import PoweredByCard from "./PoweredByCard";

export default function PoweredBy() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-background to-transparent py-10">
      <ul className="no-scrollbar flex flex-shrink-0 gap-4 overflow-x-scroll px-4">
        <PoweredByCard
          imgSource="/src/assets/images/asset 3.png"
          companyName="Unbounce1"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 4.png"
          companyName="LifeAt"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 5.png"
          companyName="Convy"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 6.png"
          companyName="Morgen"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 7.png"
          companyName="Campsite"
        />
        <PoweredByCard imgSource="/src/assets/images/asset 8.png" companyName="Rise" />
        <PoweredByCard
          imgSource="/src/assets/images/asset 9.png"
          companyName="Clickup"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 10.png"
          companyName="Notion"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 11.png"
          companyName="Sunsama"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 12.png"
          companyName="Beeper"
        />
        <PoweredByCard imgSource="/src/assets/images/asset 13.png" companyName="Cal" />
        <PoweredByCard
          imgSource="/src/assets/images/asset 14.png"
          companyName="Webstudio"
        />
      </ul>

      <ul className="no-scrollbar flex gap-4 overflow-x-scroll">
        <PoweredByCard
          imgSource="/src/assets/images/asset 15.png"
          companyName="Flink"
        />
        <PoweredByCard imgSource="/src/assets/images/asset 16.png" companyName="Zap" />
        <PoweredByCard
          imgSource="/src/assets/images/asset 17.png"
          companyName="Beeds"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 18.png"
          companyName="Feather"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 19.png"
          companyName="Blackhole"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 20.png"
          companyName="Moises"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 21.png"
          companyName="Basedash"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 22.png"
          companyName="Cursor"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 23.png"
          companyName="Linear"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 24.png"
          companyName="Voiceflow"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 25.png"
          companyName="Kitemaker"
        />
        <PoweredByCard
          imgSource="/src/assets/images/asset 26.png"
          companyName="Cron"
        />
      </ul>
    </div>
  );
}