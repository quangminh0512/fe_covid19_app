import React from 'react';
import clsx from 'clsx';

const TotoCaseCard = ({
  title = "",
  data = "?",
  isRecovered = false,
  isConfirmed = false,
}: {
  title: string;
  data: any;
  isRecovered?: boolean;
  isConfirmed?: boolean;
}) => {

  return (
    <div className="w-full flex space-x-2">
      <div
        className={clsx(
          "w-2/12 flex flex-1 bg-slate-100 border-gray-300 rounded-lg",
          isRecovered && "bg-green-400",
          isConfirmed && "bg-red-400"
        )}
      >
        <div className="w-full text-md font-bold">
          <div className="flex flex-1 justify-center">{data}</div>
          <div className="flex flex-1 justify-center">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default TotoCaseCard;
