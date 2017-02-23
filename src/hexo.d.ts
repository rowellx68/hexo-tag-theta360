declare interface IHexoTagOptions {
    async: boolean;
    ends: boolean;
}

declare interface IHexoTag {
    register: (name: string, callback: (args: string[], content: string) => string, options: IHexoTagOptions) => void;
}
declare interface IHexoExtend {
    tag: IHexoTag;
}
declare interface IHexo {
    extend: IHexoExtend;
}

declare var hexo: IHexo;