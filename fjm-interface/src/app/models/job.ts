export class Job {
    ID: string;
    URI: string;
    name: string;
    state: string;
    timestamps: {
        ended: string;
        lastModified: string;
        started: string;
        submitted: string;
    }
}