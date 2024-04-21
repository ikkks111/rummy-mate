import { Box, Text, Button, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <>
        <Box className='footer'>
            <Box className='fotinr_up'>
                <a href='/'>
                    <img src='/img/footer_logo.png' width="284px" height="108px" alt='' className='footer_logo' />
                </a>
                <Box className='two_p_in_fotr'>
                    <Text>
                        <span>Responsible Play:</span>{" "}
                        Participants must be 18 years or older to partake in real money rummy games. There is a risk of addiction and financial loss associated with 
                        this game. Players are urged to engage in gambling activities responsibly.
                    </Text>
                    <Text>
                        <span>Legality of Rummy:</span>{" "}
                        Rummy is officially classified as a game of skill. The Supreme Court of India affirmed in 1968 that playing rummy, irrespective of whether 
                        it is for monetary stakes or not, is lawful in many parts of India.
                    </Text>
                </Box>
            </Box>
            <Box className='foter-dwon'>
                <Button className='def_bg_btn' as="a" href='https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk' target='_blank'>
                    <img src='/img/def_btn_bg.png' alt='' className='def_btn_bg'/>
                    <Box className='txt_set'>
                        <span>Download App</span>
                        <img src='/img/dowlod_ic.svg' alt='' />
                    </Box>
                </Button>
                <Heading as="h6">100% SAFE Protected connection and encrypted data.</Heading>
                <Text>Copyright © 2024 RummyMate® All Rights Reserved</Text>
            </Box>
        </Box>
    </>
  )
}
