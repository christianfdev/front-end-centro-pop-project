import { DemandInterface } from "./DemandInterface";


export type EvolutionInterface = {
    id?: number;
    data: string;
    description: string;
    demand?: DemandInterface;
    assistedId?: number;
    userId?: number;
}