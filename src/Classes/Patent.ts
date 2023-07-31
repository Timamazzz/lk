// Classes/Patent.ts

export class Patent {
    patentId: number;
    number: string;
    issued: string;
    dateOfIssue: string;
    expirationDate: string;
    debt: number;
    payedToDate: string;
    price: number;
    messages: string[];

    constructor(
        patentId: number,
        number: string,
        issued: string,
        dateOfIssue: string,
        expirationDate: string,
        debt: number,
        payedToDate: string,
        price: number,
        messages: string[]
    ) {
        this.patentId = patentId;
        this.number = number;
        this.issued = issued;
        this.dateOfIssue = dateOfIssue;
        this.expirationDate = expirationDate;
        this.debt = debt;
        this.payedToDate = payedToDate;
        this.price = price;
        this.messages = messages;
    }
}
