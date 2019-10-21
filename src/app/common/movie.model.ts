export interface IMovies {
        objectId: string ,
        image?: {
        __type: string,
        name: string
        url: string
        },
        createdAt?: string,
        updatedAt?: string,
        title: string,
        directedby?: string,
        written?: string[],
        actor?:string[],
        releaseYear: string,
        runtime?: string,
        genre:string[],
        rating: Number,
        description: string,
        shortdescription: string

}