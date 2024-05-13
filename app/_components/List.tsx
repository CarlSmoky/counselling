import React from 'react'

type ListProps = {
  title: string | undefined;
  items: string[] | undefined;
  isTitleBold?: boolean | false;
  isItemsBold?: boolean | false;
  isBulletPoint?: boolean | false;
};



const List:React.FC<ListProps> = ({ title, items, isTitleBold, isItemsBold, isBulletPoint }) => {

  return (
    <div className={`${isTitleBold && "font-bold"} leading-loose my-4 px-4`}>
      {title && (
      <h3 className="my-4">{title}</h3>
      )}
      <ul>
        {items?.map((item, i) => (
          <li key={i} className={`${isItemsBold && "font-bold"} ${isBulletPoint && "list-disc list-inside"} py-1`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List