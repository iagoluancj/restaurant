import Router from "next/router";

export default function HomePage() {

    const toLogin = () => {
        Router.push('/Login');
    }

    return (
        <>
            Home page
            <button onClick={toLogin}>To login</button>
        </>
    )
}