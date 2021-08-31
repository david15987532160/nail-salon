import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import {
    About,
    Banner,
    Booking,
    Brand,
    FAQ,
    FeatureService,
    Footer,
    Gallery,
    GiftCard,
    Menu,
    Message,
    NavBar,
    Policy,
    Review,
    Reward
} from 'components';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Nails Kute & Spa of Fleming Island FL 32003 - Best Nail Salon Near Me</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
            </Head>

            {/* Nav bar section */ }
            <NavBar/>

            {/* Banner section */ }
            <Banner/>

            {/* About us section */ }
            <About/>

            {/* Reward */ }
            <Reward/>

            {/* Salon Menu section */ }
            <Menu/>

            {/* Feature products section */ }
            <FeatureService/>

            {/* Brand */ }
            <Brand/>

            {/* Gallery */ }
            <Gallery/>

            {/* GiftCard */ }
            <GiftCard/>

            {/* FAQ */ }
            <FAQ/>

            {/* Message */ }
            <Message/>

            {/* Review */ }
            <Review/>

            {/* Policy */ }
            <Policy/>

            {/* Footer */ }
            <Footer/>

            {/* Booking */ }
            <Booking/>
        </div>
    );
}

export default Home
