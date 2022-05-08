import { org, reference, article } from "./index";

export interface person {
    firstname: string;
    middlename?: string;
    lastname: string;
    politicalaffiliation?: "Democrat" | "Republcian" | "Independant";
    organization?: org[] | org;
    recievedMoneyFrom?: org[] | org | string;
    amountRecievedFrom?: org[] | org | number; 
    relations?: person[] | person;
    reference?: reference[] | reference 
}