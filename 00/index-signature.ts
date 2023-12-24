interface Status {
    [parameter: string]: number;
}

const myStatus: Status = {
    level: 22,
    experience: 3058,
    // job: 'maze', // Type 'string' is not assignable to type 'number'.
}