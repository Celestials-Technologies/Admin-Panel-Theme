import Image from 'next/image';
import React from 'react';

import type { IHeader } from '@/app/interface/sidebar'; // Adjust the path based on your actual interface location

interface Props {
  header: IHeader;
  isCollapsed: boolean;
}

const SidebarSubHeader: React.FC<Props> = ({ header, isCollapsed }) => {
  return (
    <>
      {!!header.image && (
        <div
          className={` flex h-[72px] ${isCollapsed ? 'justify-center' : 'pl-[22px]'}  border-b border-borderGrey`}
        >
          {isCollapsed ? (
            <Image
              className="select-none object-contain"
              src={'svgs/mobileLogo.svg'}
              alt=""
              width={40}
              height={40}
            />
          ) : (
            <Image
              className="select-none object-contain"
              src={header.image}
              alt=""
              width={150}
              height={39}
            />
          )}
        </div>
      )}

      {!!header.heading && (
        <p className="font-poppins select-none self-center text-[15px] font-medium leading-[19px]">
          {header.heading}
        </p>
      )}
    </>
  );
};

export default SidebarSubHeader;
