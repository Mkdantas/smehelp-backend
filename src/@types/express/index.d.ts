declare namespace Express{
    export interface Request {
        case_number: string;
        agent: string;
        problem_description: string;
        problem_solution: string;
        status: string;
    }
}