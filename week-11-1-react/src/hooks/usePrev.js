import { useState, useEffect, useRef } from "react";

export function usePrev(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;

    }, [value])

    return ref.current;
}
// it returns first and useEffect get called later