import { article } from "./article"

export interface reference {
    textSumamry?: string
    URL? : string | string[] | article
    filePath?: string
    picture?: string
    article?: article | article[]
}