import React, { FC, useState, useEffect, useRef } from "react";
import { setCurrentSortingOption } from "../../redux/actions/app";
import { useDispatch } from "react-redux";

interface Props {
  sortItems: {
    [key: string]: string;
  };
  currentSortingOption: string;
}

const Sorting: FC<Props> = ({ sortItems, currentSortingOption }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<Boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [title, setTitle] = useState(sortItems[currentSortingOption]);

  const onSelect = (index: number, item: string) => {
    setActive(index);
    setTitle(sortItems[item]);
    dispatch(setCurrentSortingOption(item));
    setVisible(false);
  };

  const displayPopup = () => {
    setVisible(!visible);
  };

  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(sortRef.current)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);

    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visible ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={displayPopup}>{title}</span>
      </div>
      {visible && (
        <>
          <div className="sort__popup">
            <ul>
              {Object.entries(sortItems).map(([key, value], index) => (
                <li
                  className={currentSortingOption === key ? "active" : ""}
                  onClick={() => onSelect(index, key)}
                  key={key}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Sorting;
