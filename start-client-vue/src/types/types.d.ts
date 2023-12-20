declare interface Values{
    project: any,
    language: '',
    boot: '',
    meta: {
        name: '',
        group: '',
        artifact: '',
        description: '',
        packaging: '',
        packageName: '',
        java: '',
    },
    dependencies: []
}

declare interface Metadata{
    project: any[],
    boot: any[],
    language: any[],
    meta: {
        java: any[],
        packaging: any[]
    },
    dependencies: any[]
}