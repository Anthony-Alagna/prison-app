import { org } from "./organization";

export interface person {
    firstname: string;
    middlename?: string;
    lastname: string;
    politicalaffiliation?: "Democrat" | "Republcian" | "Independant";
    organization?: org[] | org;
    recievedMoneyFrom?: org[] | org | string;
    amountRecievedFrom?: org[] | org | number; 
}