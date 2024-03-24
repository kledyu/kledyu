import React from 'react';
import SubHeading from '../SubHeading';
import Content from '../Content';
import { randomUUID } from 'crypto';

export default function Educations() {
  const EDUCATIONS = {
    fastcampus: {
      title: '패스트캠퍼스 프론트엔드 부트캠프',
      position: '수강생 & 리더',
      period: '2023.03. ~ 2023.10.',
      details: [
        '패스트캠퍼스 프론트엔드 개발자 양성과정 수강생 & 리더',
        '수강생 리더로서 50명 가량의 수강생들과 운영진 사이에서 꾸준히 의사소통하며 학습 환경 증진',
        '우수 수료생 선정',
      ],
    },
    inu: {
      title: '인천대학교',
      position: '전자공학과',
      period: '2015.03. ~ 2024.02.',
      details: ['전자공학 전공 & 학사'],
    },
  } as const;

  return (
    <div className='w-full'>
      <SubHeading heading='EDUCATIONS' />
      <div className='flex flex-col gap-10'>
        {Object.values(EDUCATIONS).map((project) => (
          <Content key={randomUUID()} {...project} />
        ))}
      </div>
    </div>
  );
}
