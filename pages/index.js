import Head from 'next/head'
import React from 'react';
import Layout from '../components/components/Layout';
import Body from '../components/components/Body';
import "swiper/css/bundle";



export default function Home() {
  return (
    <div>
      <Layout>
        <Body/>
      </Layout>
    </div>
  )
}
