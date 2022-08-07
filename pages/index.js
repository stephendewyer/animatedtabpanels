import Head from 'next/head';
import React, { Fragment } from 'react';
import Tabs from '../components/tabs/Tabs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import { v4 as uuidv4 } from 'uuid';
import AfterDream from '../public/images/tab_01_image.jpg';
import TumblingBlocksQuilt from '../public/images/tab_02_image.jpg';
import Buffet from '../public/images/tab_03_image.jpg';
import OliveTrees from '../public/images/tab_04_image.jpg';

export default function Index() {

  const tabPanels = [
    {
        id: uuidv4(),
        label: "tab 1",
        content:
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerImage}>
                <Image src={AfterDream} layout="responsive" alt="photograph of After Dream, 1997/2009, by Pierre Huyghe"/>
              </div>
              <div className={styles.bannerParagraph}>
                Pierre Huyghe<br />
                <span className={styles.italic}>After Dream</span><br />
                1997/2009<br />
                Minneeapolis Sculpture Garden + Walker Art Center
              </div>
            </div>
            <p className={styles.panelParagraphs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>,
        },
    {
        id: uuidv4(),
        label: "tab 2",
        content:
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerImage}>
                <Image src={TumblingBlocksQuilt} layout="responsive" alt="photograph of Tumbling Blocks quilt, c. 1881-1916, by Irene Nestell Hart"/>
              </div>
              <div className={styles.bannerParagraph}>
                Irene Nestell Hart<br />
                <span className={styles.italic}>Tumbling Blocks quilt</span><br />
                c. 1881-1916<br />
                Minneapolis Institute of Art
              </div>
            </div>
            <p className={styles.panelParagraphs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida neque convallis a cras. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Ut placerat orci nulla pellentesque dignissim enim sit amet. Quis blandit turpis cursus in hac. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Vitae justo eget magna fermentum. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Eget arcu dictum varius duis at consectetur lorem donec. Molestie ac feugiat sed lectus vestibulum mattis. Mattis rhoncus urna neque viverra justo nec ultrices. Tempor orci eu lobortis elementum nibh. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Amet mauris commodo quis imperdiet massa tincidunt nunc. Mi quis hendrerit dolor magna eget. Et tortor at risus viverra adipiscing at in.
            </p>
          </div>,
    },
    {
        id: uuidv4(),
        label: "tab 3",
        content: 
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerImage}>
                <Image src={Buffet} layout="responsive" alt='photograph of Chicor&eacute;e style buffet, c. 1902, Louis Majorelle'/>
              </div>
              <div className={styles.bannerParagraph}>
                Louis Majorelle<br />
                `&quot;`Chicor&eacute;e`&quot;` style buffet<br />
                c. 1902<br />
                Minneapolis Institute of Art
              </div>
            </div>
            <p className={styles.panelParagraphs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In aliquam sem fringilla ut morbi. Enim diam vulputate ut pharetra sit amet aliquam. Non diam phasellus vestibulum lorem sed risus ultricies tristique. 
            </p>
          </div>,
    },
    {
        id: uuidv4(),
        label: "tab 4",
        content: 
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerImage}>
                <Image src={OliveTrees} layout="responsive" alt="photograph of Olive Trees, 1889, by Vincent Van Gogh"/>
              </div>
              <div className={styles.bannerParagraph}>
                Vincent Van Gogh<br />
                <span className={styles.italic}>Olive Trees</span><br />
                1889<br />
                Minneapolis Institute of Art
              </div>
            </div>
            <p className={styles.panelParagraphs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Fames ac turpis egestas maecenas pharetra convallis posuere. Augue mauris augue neque gravida in. Vel pretium lectus quam id. Turpis cursus in hac habitasse platea. Duis convallis convallis tellus id interdum velit laoreet id. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Libero enim sed faucibus turpis in eu mi bibendum. Nisl nisi scelerisque eu ultrices. Blandit massa enim nec dui nunc mattis enim ut. Sit amet luctus venenatis lectus.
            </p>
          </div>,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>animated tab panels</title>
        <meta name="description" content="accessible, dynamic, responsive and variable height animated tab panels by stephen garrett dewyer" />
        <meta property="og:image" content="/images/tab_02_image.jpg" />
        <meta property="og:url" content="https://animatedtabpanels.vercel.app/" />
      </Head>
      <div className={styles.container} role="main">
          <h1 className={styles.heading_01}>
            animated tab panels
          </h1>
          <h2 className={styles.heading_02} >
            features:
          </h2>
          <div className={styles.bullet_list}>
            <ul className={styles.heading_03}>
              <li>
                responsive
              </li>
              <li>
                variable height
              </li>
              <li>
                accessible following WCAG 2.1 standards
              </li>
              <li>
                dynamic
              </li>
              <li>
                animated
              </li>
            </ul>  
          </div>
        <Tabs tabPanels={tabPanels} />
        <h2 className={styles.heading_02} >
            designed and developed by <Link href="https://www.stephendewyerwebwork.com" passHref={true} target="_blank" aria-label="link to portfolio website of stephen garrett dewyer">stephen garrett dewyer</Link>
        </h2>
      </div>
    </Fragment>
    
      
  )
}
