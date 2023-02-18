export interface Task{
    // question makes the id optional
    id?: number;
    text: string;
    day: string;
    reminder: boolean;

}