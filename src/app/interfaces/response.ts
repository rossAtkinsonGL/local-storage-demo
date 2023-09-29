import { IQuestionResponse } from "./questionResponse";

export interface IResponse {
    userTestID: string;
    forename: string;
    surname: string;
    response: IQuestionResponse[];
}