import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";

import "swiper/css";
import "./Swiper.css";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
    const [isData, setIsData] = useState([]);

    useEffect(() => {
        setIsData(props.imgData);
    }, [props.imgData]);

    const onGetPageIdHandler = (e) => {
        props.onGetDetailId(e.currentTarget.id);
    };

    return (
        <div className={`${classes.gallery} mt-6`}>
            {isData.map((img) => (
                <div
                    className={classes["gallery-item"]}
                    id={img.id}
                    key={img.id}
                    onClick={onGetPageIdHandler}
                >
                    <Swiper
                        autoplay={{
                            delay: 3000 + img.id * 10,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                        key={img.id}
                    >
                        {img.Img.map((i, index) => (
                            <SwiperSlide key={index}>
                                <img src={`storage/` + i} alt="images" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="gallery-title">
                        <h2>{img.Name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
