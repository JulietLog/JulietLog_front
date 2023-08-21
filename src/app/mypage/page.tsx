"use client";
import React from "react";

import Button from "@/components/designSystem/Button";
import MyInfo from "@/components/mypage/article/MyInfo";
import MySettings from "@/components/mypage/article/MySettings";
import MyWritten from "@/components/mypage/article/MyWritten";
import Mydiscussions from "@/components/mypage/article/Mydiscussions";
import { BG_COLOR, TEXT_COLOR } from "@/constants/global/colors";

const boxOption = `${BG_COLOR.general02} ${TEXT_COLOR.primary}`;

const mypageTab = [
  "내 정보",
  "내가 쓴 글",
  "내가 추가한 이웃",
  "참여중인 토의",
  "설정",
] as const;
const MyPagePage = () => {
  const [tab, setTab] = React.useState<(typeof mypageTab)[number]>("내 정보");
  const renderPage = () => {
    switch (tab) {
      case "내 정보":
        return <MyInfo />;
      case "내가 쓴 글":
        return <MyWritten />;
      case "내가 추가한 이웃":
        return <MyWritten />;
      case "참여중인 토의":
        return <Mydiscussions />;
      case "설정":
        return <MySettings />;
    }
  };
  const render = renderPage();
  return (
    <div className="w-[1632px] flex flex-col mt-[20px]">
      <div className="flex p-[10px]">
        {mypageTab.map((item) => (
          <div key={`${item}tab`} className="px-[40px] pb-[16px]">
            <Button
              size="subTab"
              color={tab === item ? "checkTab" : "cancelButton"}
              onClick={() => setTab(item)}
            >
              {item}
            </Button>
          </div>
        ))}
      </div>
      <div className={`flex items-center w-[1632px] h-[458px] ${boxOption}`}>
        {render}
      </div>
    </div>
  );
};

export default MyPagePage;
