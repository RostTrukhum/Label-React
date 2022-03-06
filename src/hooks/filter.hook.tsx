import {IUserData} from "../interface/user.interface";

export const useFilter = () => {
    const filterElements = (userData: IUserData[], searchValue: string, setUserData?: any ): void => {
        const filteredItems = userData.filter((item: any) => item?.description.toLowerCase().includes(searchValue.toLowerCase()));
        setUserData(filteredItems);
    }

    return {filterElements}
}
