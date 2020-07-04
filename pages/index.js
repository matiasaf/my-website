import Head from 'next/head';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => (
    <div className="text-sans">
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className="w-full text-gray-900">
            <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-center font-bold">
                My personal web page
            </h1>
            <br />
            <div className="mx-auto">
                <Card />
            </div>
        </div>
    </div>
);

export default Home;
