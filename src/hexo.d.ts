declare interface IHexoHelper {
    register: (naem: string, fn: Function) => string;
}

declare interface IHexoTagOptions {
    async?: boolean;
    ends?: boolean;
}

declare interface IHexoTag {
    register: (name: string, callback: (args: string[], content?: string) => string, options: IHexoTagOptions | boolean) => void;
}
declare interface IHexoExtend {
    tag: IHexoTag;
    helper: IHexoHelper;
}
declare interface IHexo {
    extend: IHexoExtend;
}

declare var hexo: IHexo;