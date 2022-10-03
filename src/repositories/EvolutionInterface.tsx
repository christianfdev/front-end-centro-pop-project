import { AssistedInterface } from "./AssistedInterface";


export type EvolutionInterface = {
    id?: number;
    data: string;
    demand?: string;
    status?: string;
    description: string;
    quantity?: number
    assistedId?: number;
    userId?: number;
    assisted?: AssistedInterface;

}