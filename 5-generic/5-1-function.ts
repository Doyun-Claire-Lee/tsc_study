{
    // 💩 숫자만 검사가능
    function checkNotNullNumber(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    // 💩 타입이 보장되지 않음
    function checkNotNullAny(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    // ✨ 타입이 보장됨
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    const number = checkNotNull(123);
    const bool: boolean = checkNotNull(true);
}