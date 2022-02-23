import React, { useEffect } from 'react';
import styles from "./article.module.css";
import data from '../allArticles/data';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Parallax } from 'react-parallax';
import useWindowDimensions from "../../utilities/ScreenDimensions";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import ScrollIntoView from 'react-scroll-into-view';

const Article=(props)=>{
    const {_id}=props;
    const {title}=props;
    const {image}=props;
    const {logo}=props;
    const {description}=props;
    const {nextitem}=props;
    console.log(nextitem);

    
    const { width } = useWindowDimensions();
    useEffect(()=>{},[width]);
    if(width<1200){
        return (
          <div className={styles.ImgContainer}>
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.logoContainer}>
              <img src={logo} className={styles.logo} />
            </div>

            <div className={styles.information}>
              <div className={styles.title}>{title}</div>
              <div className={styles.description}>{description}</div>
              <div className={styles.buttonStyle}>
                <ScrollIntoView selector={"#"+nextitem}>
                  <button className={styles.next}>
                    <FaAngleDoubleDown className={styles.icon} />
                  </button>
                </ScrollIntoView>
              </div>
            </div>
          </div>
        );}
    else return (
      <Parallax className={styles.image} bgImage={image} strength={400}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.information}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.buttonStyle}>

            <ScrollIntoView selector={"#"+nextitem}>
              <button className={styles.next}>
                <FaAngleDoubleDown className={styles.icon} />
              </button>
            </ScrollIntoView>

          </div>
        </div>
      </Parallax>
    );
}
export default Article;