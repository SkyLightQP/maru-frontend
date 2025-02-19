import { FC } from 'react';
import Button from '@/components/Button';
import { API_HOST } from '@/api';
import NaverIcon from '@/assets/icons/naver.svg';
import GoogleIcon from '@/assets/icons/google.svg';

const Page: FC = () => {
  return (
    <div className="mt-48 flex flex-col items-center">
      <h1 className="mb-6 text-3xl font-bold">로그인</h1>

      <div className="flex flex-col space-y-2">
        <Button
          className="flex min-w-60 items-center border border-gray-300 bg-white text-black hover:bg-gray-200"
          as="a"
          href={`${API_HOST}/oauth/login/naver`}
        >
          <NaverIcon className="h-9 w-9" />
          <div className="w-full text-center">네이버 로그인</div>
        </Button>
        <Button
          className="flex min-w-60 items-center border border-gray-300 bg-white text-black hover:bg-gray-200"
          as="a"
          href={`${API_HOST}/oauth/login/google`}
        >
          <GoogleIcon className="h-9 w-9" />
          <div className="w-full text-center">Google 로그인</div>
        </Button>
        {/* <Button */}
        {/*  className="flex min-w-60 items-center border border-gray-300 bg-white text-black hover:bg-gray-100" */}
        {/*  as="a" */}
        {/*  href={`${API_HOST}/oauth/login/apple`} */}
        {/* > */}
        {/*  <AppleIcon className="h-8 w-8" /> */}
        {/*  <div className="w-full text-center">Apple 로그인</div> */}
        {/* </Button> */}
      </div>
    </div>
  );
};

export default Page;
