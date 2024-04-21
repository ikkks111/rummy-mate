import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function HomeScSix() {
    const settings = {
        // className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        cssEase: 'linear',
        dots: true,
        arrows: false,

    };
    return (
        <>
            <Box className='sc-six'>
                <Box className='slidTwo_hed'>
                    <Heading as="h3">What our users say</Heading>
                    <Text>Listen to what users have to say​</Text>
                </Box>
                <Box className='slidr-main'>
                    <Slider {...settings}>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                <img src='/img/up_coma.svg' alt='' className='up_coma' />
                                <Text className='pera_graf'>
                                    At RummyMate, not only is the game itself exciting, but the rewards you win are also very generous. The platform often offers various activities
                                    with generous rewards, making every victory feel sweeter. These rewards not only add to the fun of the game, but also make my gaming time more valuable.
                                </Text>
                                <img src='/img/down_coma.svg' alt='' className='down_coma' />
                                <Box className='user_box'>
                                    <img src='/img/user_photo.svg' alt='' className='user_photo' />
                                    <Box>
                                        <Heading as="h6">Neha Sharm</Heading>
                                        <Text>Freelancer</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                <img src='/img/up_coma.svg' alt='' className='up_coma' />
                                <Text className='pera_graf'>
                                    At RummyMate, not only is the game itself exciting, but the rewards you win are also very generous. The platform often offers various activities
                                    with generous rewards, making every victory feel sweeter. These rewards not only add to the fun of the game, but also make my gaming time more valuable.
                                </Text>
                                <img src='/img/down_coma.svg' alt='' className='down_coma' />
                                <Box className='user_box'>
                                    <img src='/img/user_photo.svg' alt='' className='user_photo' />
                                    <Box>
                                        <Heading as="h6">Neha Sharm</Heading>
                                        <Text>Freelancer</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                <img src='/img/up_coma.svg' alt='' className='up_coma' />
                                <Text className='pera_graf'>
                                    At RummyMate, not only is the game itself exciting, but the rewards you win are also very generous. The platform often offers various activities
                                    with generous rewards, making every victory feel sweeter. These rewards not only add to the fun of the game, but also make my gaming time more valuable.
                                </Text>
                                <img src='/img/down_coma.svg' alt='' className='down_coma' />
                                <Box className='user_box'>
                                    <img src='/img/user_photo.svg' alt='' className='user_photo' />
                                    <Box>
                                        <Heading as="h6">Neha Sharm</Heading>
                                        <Text>Freelancer</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Slider>
                </Box>
                <Box className='faq_sc'>
                    <Box className='slidTwo_hed'>
                        <Heading as="h3">Frequent ask qustions</Heading>
                        <Text>Even if these answers don't help you, it doesn't matter, our game has 24/7 customer service</Text>
                    </Box>
                    <Accordion allowToggle className='accodn_main'>
                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    <img src='/img/plus_ic.svg' alt='' className='plus_ic' />
                                    <img src='/img/minus_ic.svg' alt='' className='minus_ic' />
                                    <span>Is it legal to play RummyMate in India?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                    Your safety is our priority at RummyMate. We utilize state-of-the-art encryption
                                    technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    <img src='/img/plus_ic.svg' alt='' className='plus_ic' />
                                    <img src='/img/minus_ic.svg' alt='' className='minus_ic' />
                                    <span>How does RummyMate ensure game fairness?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                    Your safety is our priority at RummyMate. We utilize state-of-the-art encryption
                                    technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    <img src='/img/plus_ic.svg' alt='' className='plus_ic' />
                                    <img src='/img/minus_ic.svg' alt='' className='minus_ic' />
                                    <span>What should I do if I have a problem with the game?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                    Your safety is our priority at RummyMate. We utilize state-of-the-art encryption
                                    technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    <img src='/img/plus_ic.svg' alt='' className='plus_ic' />
                                    <img src='/img/minus_ic.svg' alt='' className='minus_ic' />
                                    <span>Is my personal information safe?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                    Your safety is our priority at RummyMate. We utilize state-of-the-art encryption
                                    technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className='bodr_non'>
                            <div>
                                <AccordionButton>
                                    <img src='/img/plus_ic.svg' alt='' className='plus_ic' />
                                    <img src='/img/minus_ic.svg' alt='' className='minus_ic' />
                                    <span>Can you really make money playing RummyMate?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                    Your safety is our priority at RummyMate. We utilize state-of-the-art encryption
                                    technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </>
    )
}
