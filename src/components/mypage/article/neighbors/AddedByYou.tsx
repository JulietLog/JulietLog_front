import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import MyNeightborProfile from "./profile/MyNeighborProfile";

const AddByYou = () => {
  const { data } = useQuery({
    queryKey: ["neighborlist"],
    queryFn: async () => await axios.get("/api/neighbors/other"),
  });
  const neighborList: neighborItem[] = data?.data;

  return (
    <React.Fragment>
      {neighborList?.map((item: neighborItem) => {
        const { nickname, profileImage, userId } = item;
        return (
          <MyNeightborProfile
            key={`myneighborProfile${item.userId}`}
            nickname={nickname}
            profileImage={profileImage}
            userId={userId}
          />
        );
      })}
    </React.Fragment>
  );
};

export default AddByYou;
