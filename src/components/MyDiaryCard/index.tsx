import { FC } from 'react';

interface MyDiaryCardProps {
  readonly title: string;
  readonly date: Date;
}

const MyDiaryCard: FC<MyDiaryCardProps> = ({ title, date }) => {
  return (
    <div className="group mt-2 cursor-pointer rounded-md border border-gray-200 p-4 transition-all duration-200 ease-in-out hover:bg-gray-200">
      <p className="line-clamp-2 break-keep text-lg font-bold group-hover:underline">{title}</p>
      <p className="mt-1.5 text-lg">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 일기
      </p>
      <p />
    </div>
  );
};

export default MyDiaryCard;
