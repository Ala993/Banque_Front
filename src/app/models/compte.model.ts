export class Compte {
    constructor(
        public codeCompte?: string,
        public dateCreation?: any,
        public solde?: number,
        public client?: any,
        public employe?: any,
        public operations?: any[],
        public type?: string,
        public decouvert?: number,
        public taux?: number
    ){}
}