"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import "./teamcard.css"
import Image, { StaticImageData } from "next/image";

interface Card {
  img: StaticImageData;
  role: string;
  fullname: string;
}

export default function TeamCard({ img, role, fullname }: Card) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="teamcard bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border transition duration-200 ease-linear">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white capitalize"
        >
          {fullname}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 capitalize"
        >
          {role}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-12">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/ronit-ghosh"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Contact now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Portfolio
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
