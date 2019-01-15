import Link from "next/link";
const Index99 = (props) => {

    return (
        <div>
            Hello From index.js (Index99 function)....{" "}
            <div>
                isServer: {props.isServer === true ? "true" : "false"}
            </div>
            <div>
                {JSON.stringify(props.user)}
            </div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    );
};

Index99.getInitialProps = async ({ req }) => {
    const isServer = !!req;
    console.log(`About.getInitialProps:isServer:${isServer}`);
    return {
        isServer
    };
};



export default Index99;
