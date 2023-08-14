import { Text, Avatar, Flex, IconButton, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';


// const isLogin = false;

// function AvatarIcon() {

//     return(
//         <Avatar name='test' src='https://picsum.photos/64' />
//     )
// }

// function LoginBtn() {

//     return(
//         <Button 
//         bg='white' 
//         textColor='black'
//         size='sm'
//         fontSize='18px'
//         fontWeight='600'
//         _hover={{bg: 'black', textColor: 'white'}}
//         >Login</Button>
//     )
// }

export default function Header() {

    // const avatarSection = isLogin? <AvatarIcon /> : <LoginBtn />
    return(
            <Flex 
            // justify='space-between' 
            align='center' 
            // bg='#353333' 
            w='100%' 
            h='9vh' 
            px='2vw'
            // pos='fixed'
            top='0'
            left='0'
            gap='2vw'
            sx={{zIndex : 10}} >
                <IconButton 
                    colorScheme='#353333'
                    icon={<ArrowBackIcon boxSize={7}/>} />
                <Text
                fontSize={'xl'}
                textColor={'white'}
                fontWeight={600}
                >Play</Text>
                {/* {avatarSection} */}
            </Flex>
    )
}