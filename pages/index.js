import Head from 'next/head';
import React, { Fragment } from 'react';
import Tabs from '../components/tabs/Tabs';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import { v4 as uuidv4 } from 'uuid';
import ExternalLinkButton from '../components/external_link_button/ButtonExternalLink';
import ExternalLinkIcon from '../public/images/icons/external_link_icon.svg';
import AfterDream from '../public/images/tab_01_image.JPG';
import TumblingBlocksQuilt from '../public/images/tab_02_image.JPG';
import Buffet from '../public/images/tab_03_image.JPG';
import OliveTrees from '../public/images/tab_04_image.JPG';

export default function Index() {

  const tabPanels = [
    {
        id: uuidv4(),
        label: "tab 1",
        content:
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerLeft}></div>
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
            <div className={styles.bannerLeft}></div>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis nulla nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>,
    },
    {
        id: uuidv4(),
        label: "tab 3",
        content: 
          <div className={styles.panelContent}>
            <div className={styles.banner}>
              <div className={styles.bannerLeft}></div>
              <div className={styles.bannerImage}>
                <Image src={Buffet} layout="responsive" alt='photograph of Chicor&eacute;e style buffet, c. 1902, Louis Majorelle'/>
              </div>
              <div className={styles.bannerParagraph}>
                Louis Majorelle<br />
                &quot;Chicor&eacute;e&quot; style buffet<br />
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
            <div className={styles.bannerLeft}></div>
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
              Lorem ipsum dolor sit amet.
            </p>
          </div>,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>animated tab panels</title>
        <meta name="description" content="accessible, dynamic, responsive and variable height animated tab panels by stephen garrett dewyer" />
        <meta property="og:image" content="/images/tab_02_image.JPG" />
        <meta property="og:url" content="https://animatedtabpanels.vercel.app/" />
      </Head>
      <div className={styles.container} role="main">
          <h1 className={styles.heading_01}>
            animated tab panels
          </h1>
          <div className={styles.about_section}>
            <div className={styles.features}>
              <h2 className={styles.heading_02} >
                features:
              </h2>
              <ul className={styles.heading_03}>
                <li>
                  responsive including:
                  <ul>
                    <li>
                      synchronous rendering of the panel height on window size changes
                    </li>
                    <li>
                      asynchronous rendering of the panel height on tab changes
                    </li>
                  </ul>
                </li>
                <li>
                  accessible following WCAG 2.1 standards
                </li>
                <li>
                  dynamic, allowing for possible data fetching from a database in panels
                </li>
                <li>
                  animated
                </li>
              </ul>  
            </div>
            <div className={styles.link_to_code}>
              <h2 className={styles.heading_02} >
                code:
              </h2>
              <Link 
                href="https://github.com/stephendewyer/animatedtabpanels/" 
                passHref={true} 
                aria-label="link to animated tab panels on GitHub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLinkButton>
                  <div>
                    GitHub
                  </div> 
                  <div className={styles.external_link_icon} >
                    <Image src={ExternalLinkIcon} layout="responsive" alt="external link icon"/>
                  </div>
                </ExternalLinkButton>
              </Link>
            </div>
          </div>
          
        <Tabs tabPanels={tabPanels} />
        <h2 className={styles.credits} >
            designed and developed by <Link href="https://www.stephendewyerwebwork.com" passHref={true} target="_blank" aria-label="link to portfolio website of stephen garrett dewyer">stephen garrett dewyer</Link>
        </h2>
      </div>
    </Fragment>
    
      
  )
}
