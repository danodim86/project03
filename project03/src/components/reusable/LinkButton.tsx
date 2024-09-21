import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { LinkButtonProps } from "@/interfaces/types";

const LinkButton: React.FC<LinkButtonProps> = ({title, image, href, content}) => {
  return (
    <div className="buyTicketContainer">
      <Link href={href}>
        <Image src={image} alt="Chain icon" width={50} height={50} />
        <div className="buyTicketText">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
