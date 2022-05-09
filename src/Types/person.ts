import { org, reference, article } from "./index";

export interface person {
    firstname: string;
    middlename?: string;
    lastname: string;
    title?: string;
    politicalaffiliation?: "Democrat" | "Republican" | "Independent";
    organization?: org[] | org;
    recievedMoneyFrom?: org[] | org | string;
    amountRecievedFrom?: org[] | org | number; 
    relations?: person[] | person;
    reference?: reference[] | reference 
}