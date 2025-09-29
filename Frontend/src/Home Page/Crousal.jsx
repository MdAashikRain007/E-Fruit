import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Crousal() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            style={{ height: '200px' }}
        >
            <SwiperSlide>
                <img src="https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=2048x2048&w=is&k=20&c=s1xjWXB7dFm4tv0acDHZ5btuyQdi5i6OlDuzeMhlr7s=" alt="Apple" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=2048x2048&w=is&k=20&c=oz3Xd4SKjKrMrc2JX0pqworegOshV9YMl2GUbpVI338=" alt="Banana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://media.istockphoto.com/id/618848774/photo/orange-isolated-on-wood-background.jpg?s=2048x2048&w=is&k=20&c=EQt111YMe8OeyzkUf1bjegeCU0tkPd6jvZHath8-nJw=" alt="Orange" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://media.istockphoto.com/id/1320601173/photo/mango-fruits-in-wooden-basket-with-leaf-after-harvest-from-farm-mango-fruits-with-leaf-on.jpg?s=2048x2048&w=is&k=20&c=vEt_VYmMGLnMrGJwc_9WCeiiG6uVqmrV7KUfwTVKAe0=" alt="Mango" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Crousal