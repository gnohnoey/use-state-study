import { useState } from 'react';

const ItemAdd = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `아이템 ${items.length + 1}`;

    setItems([...items, newItem]); //스프레드 문법은 비어있다고 쓸 수 없는 게 아님! 기존 값(여기서는 빈 배열)에 그냥 추가 됨
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={addItem} className="py-2 px-4 rounded-lg bg-red-300">
        아이템 추가
      </button>
      <ul className="mt-8 flex flex-col gap-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemAdd;
