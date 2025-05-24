export type Chapter = {
    id: string;
    startTime: number | undefined;
    endTime: number | undefined;
    description?: string;
    isActive: boolean;
    isLoop: boolean;
};