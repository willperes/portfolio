export type RichText = RichText.DefaultText | RichText.UnorderedList;

export namespace RichText {
    export type _BaseRichText = {
        type: RichText.Type,
    }

    export interface DefaultText extends _BaseRichText {
        type: RichText.Type.Paragraph,
        content: string
    }

    export interface UnorderedList extends _BaseRichText {
        type: RichText.Type.UnorderedList,
        content: string[]
    }

    export enum Type {
        Paragraph = "paragraph",
        UnorderedList = "unordered-list",
    }
}
