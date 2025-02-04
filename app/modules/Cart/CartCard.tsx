import { Heart, Trash2 } from "lucide-react";
import React from "react";
import { ISneaker } from "~/shared/interfaces";

interface Props {
  sneaker: ISneaker;
  size: number;
}

export const loader = () => {};

export const CartCard: React.FC<Props> = ({ sneaker, size }) => {
  return (
    <div className="flex lg:w-[540px] gap-4">
      <img
        src={`http://localhost:8090/api/files/${sneaker.collectionId}/${sneaker.id}/${sneaker.thumbnail}`}
        className="h-36 w-36"
      />
      <div className="flex flex-col max-w-64 gap-1">
        <h5 className="font-medium text-xs xs:text-base">{sneaker.title}</h5>
        <p className="text-[#757575] font-light">{sneaker.category}</p>
        {/* <p className="text-[#757575]">{0}</p> */}
        <div className="flex justify-between gap-4 text-sm text-nowrap text-[#757575] font-light">
          <p>Size {size}</p>
          <p>Quantity 1</p>
        </div>
        <div className="font-medium xs:hidden text-sm sm:text-base">
          $ {sneaker.price.toLocaleString()}
        </div>
        <div className="flex gap-4 mt-auto py-2">
          <Heart />
          <Trash2 />
        </div>
      </div>
      <div className="ml-auto hidden xs:block font-medium text-sm sm:text-base">
        $ {sneaker.price.toLocaleString()}
      </div>
    </div>
  );
};
