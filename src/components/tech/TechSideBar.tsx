import React from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";

import SideBar from "../commonUI/SideBar";
import Button from "../designSystem/Button";
import { LoggedSideBar } from "../commonUI/LoggedSideBar";
import { NeighborArticleList } from "../commonUI/NeighborArticleList";
import { isLoggedInAtom } from "../provider/SettingsProvider";

const TechSideBar = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  return (
    <div className="sticky top-[114px] h-[500px]">
      {isLoggedIn ? (
        <div className="flex flex-col gap-[16px]">
          <Link href="/post/tech">
            <Button
              size="middleCreate"
              color="white"
              border
              className="rounded-[3px] w-[380px]"
            >
              + Create Article
            </Button>
          </Link>
          <LoggedSideBar type="tech" position="top" />
          <NeighborArticleList />
        </div>
      ) : (
        <SideBar />
      )}
    </div>
  );
};

export default TechSideBar;
