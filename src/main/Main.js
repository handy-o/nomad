import { useRef } from 'react'

function Main() {
    const main = useRef(null);
    return (
        <main ref={main}>
            Main
        </main>
    )
}

export default Main