import { article } from "./article"

export interface reference {
    text?: string
    URL? : string | article
    filePath?: string
    picture?: string
    article?: article | article[]
}