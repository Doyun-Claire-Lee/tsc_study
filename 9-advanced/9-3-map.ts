type Video = {
    title: string;
    author: string;
}

// [1, 2].map(item => item * item); = [1, 4]

type Optional<T> = {
    [P in keyof T]?: T[P];  // Type 선언문 안의 []: for...in과 같은 역할
}
type OptionalVideo = Optional<Video>;


type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}
type ReadOnlyVideo = ReadOnly<Video>;


type Nullable<T> = {
    [P in keyof T]: T[P] | null;
}
type NullableVideo = Nullable<Video>;


type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}