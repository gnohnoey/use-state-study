import { useState } from 'react';

const InputText = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <input
        value={text} //값을 연결만 해주면 원본 값은 절대 바꿀 수가 없으므로 입력이 않됨 ==> setText로 값을 변경하게끔 설정해줘야 함!
        onChange={(e) => setText(e.target.value)}
        className="bg-white py-2 px-4 rounded-lg border-3 border-pink-500 focus:border-amber-200 focus:outline-none"
      />
      <p>입력값: {text}</p>
    </div>
  );
};

export default InputText;
