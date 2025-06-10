import React from "react";
import cx from "classnames";
import Image from "next/image";
import fs from "fs";
import path from "path";

import styles from "./partnersmod.module.scss";

type PartnersModuleProps = {
  isLimited?: boolean;
};

export async function PartnersModule({
  isLimited = false,
}: PartnersModuleProps) {
  const sponsorsDirectory = path.join(process.cwd(), "public/images/sponsors");
  const filenames = fs.readdirSync(sponsorsDirectory);

  const partnersData = filenames.map((filename) => ({
    name: filename,
    logo: `/images/sponsors/${filename}`,
  }));

  const allPartners = [...partnersData].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const selectPartners = allPartners.filter((partner) =>
    partner.name.includes("featured_"),
  );

  const imagesToShow = isLimited ? selectPartners : allPartners;

  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.logoGroup)}>
        {imagesToShow.map((logo) => (
          <div key={logo.name}>
            <Image
              src={logo.logo}
              alt={logo.name.replace("featured_", "")}
              width={130}
              height={80} // placeholder height, fixed later
              style={{
                height: "auto",
                width: "auto",
                maxHeight: "80px",
                maxWidth: "130px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersModule;
