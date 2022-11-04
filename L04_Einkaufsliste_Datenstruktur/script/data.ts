namespace L04_Einkaufsliste_Datenstruktur {
    export interface Item {
        product: string;
        amount: number;
        finished: boolean;
        comment: string;
        purchaseDate: string;
    }

    export let inputs: Item[] = [
        {
            product: "Carbonara",
            amount: 2,
            finished: false,
            comment: "one",
            purchaseDate: "01.01.2022"
        }
    ];

}