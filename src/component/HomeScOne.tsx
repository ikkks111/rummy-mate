import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

export default function HomeScOne() {
    return (
        <>
            <Box className='sc-one'>
                <Box className='logo-pernt'>
                    <a href='/'>
                        <img src='/img/logo.svg' alt='' />
                    </a>
                </Box>
                <Box className='up-content-flx'>
                    <a href='https://youtu.be/YLt3IHXx_Rc' target='_blank' className='vd-link' /><img src='/img/sc_one_img01.png' alt='' className='sc_one_img01'/>
                    <Box className='scOne_right'>
                        <img src='/img/sc_one_img02.png' alt='' className='sc_one_img02'/>
                        <Text>
                            Are you ready? Join us and experience the endless excitement of rummy. Rummymate is a famous Indian online rummy game. Sports betting, pilots,
                            dragon-tiger fighting and many other real money games are waiting for you to explore! We have prepared a generous welcome bonus for new users!
                        </Text>
                        <Button className='def_bg_btn' as="a" href='https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk' target='_blank'>
                            <img src='/img/def_btn_bg.png' alt='' className='def_btn_bg'/>
                            <Box className='txt_set'>
                                <span>Start your Explore</span>
                                {/* <img src='/img/dowlod_ic.svg' alt='' /> */}
                            </Box>
                        </Button>
                    </Box>
                    <a href='https://youtu.be/YLt3IHXx_Rc' target='_blank'><img src='/img/sc_one_img01_v2.png' alt='' className='sc_one_img01_v2'/></a>
                </Box>
                {/* <SimpleGrid columns={12} columnGap={0} rowGap={4}>
                    <GridItem colSpan={[12, 12, 6, 6, 6]} className=' '>
                        <Box className=''>
                            
                        </Box>
                    </GridItem>
                    <GridItem colSpan={[12, 12, 6, 6, 6]} className='itam-center'>
                        
                    </GridItem>
                </SimpleGrid> */}
            </Box>
        </>
    )
}
