import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
import { useFilter } from "../../hooks/filter.hook";
import Spinner from "../Spinner/Spinner";
import "./Label.css";
import {UserItem} from "../UserItem/UserItem";
import {IUserData} from "../../interface/user.interface";

const Label = () => {
  const [userData, setUserData] = useState<IUserData[] | any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<IUserData[]>()
  const { filterElements } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios("https://rosttrukhum.github.io/Data/server.json");
        const resultUserData = await res.data.response.data;
        setUserData(resultUserData);
        setLoading(false);
        setFetchedData(resultUserData);

      }catch (e) {
        console.log(e);
      }
    })();
  }, []);

const searchData = (value: string) => {
  if (value.length) {
    filterElements(userData, value, setUserData);
  }else {
    setUserData(fetchedData);
  }
}



  return (
    <div className="label">
      <input
        className="search"
        placeholder="Search"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => searchData(e.currentTarget.value)}
      />
      {userData ? <UserItem userData = {userData}/> : loading ? <Spinner/> : null}
    </div>
  );
};

export default Label;
