type Check<T> = T extends string ? number : boolean;
type ChkType = Check<string>    // number

type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object'

type T0 = TypeName<string>  // string
type T1 = TypeName<'abc'>   // string
type T2 = TypeName<true>    // boolean
type T3 = TypeName<() => {}>// function