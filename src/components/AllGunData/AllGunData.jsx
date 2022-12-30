import React, { useEffect, useState } from "react";
import AllGunCard from "../AllGunCard/AllGunCard";
import "./AllGunData";
const AllGunData = ({ handleClick }) => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold mt-10">Gun Store</h1>
        <p className="text-justify px-20">
          A gun (also called a firearm) is a weapon used to shoot one or more
          metal projectiles called bullets. Guns made of wood or bamboo are
          thought to have been made in China around 1000 AD. In the next few
          centuries they spread to other parts of Asia and to Europe where they
          were made of metal. Guns largely replaced catapults and bows and
          arrows when they became strong enough to reach out over longer
          distances to reliably hit a target.
        </p>
      </div>

      <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {guns.map((gun) => (
          <AllGunCard
            key={gun.id}
            gun={gun}
            handleClick={handleClick}
          ></AllGunCard>
        ))}
      </div>
    </div>
  );
};

export default AllGunData;
