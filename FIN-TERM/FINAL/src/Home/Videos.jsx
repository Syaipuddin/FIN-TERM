import { ViewIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, GridItem, Text, SimpleGrid } from '@chakra-ui/react'

const array = [
    {
        id : 1,
        title : 'Diskon Besar - besaran',
        store : 'Udin Store',
        view : '2312'
    },
    {
        id : 2,
        title : 'Flash Sale Akhir Periode GIGIH',
        store : 'Udin Store',
        view : '1231'
    },
    {
        id : 3,
        title : 'Flash Sale Akhir Periode GIGIH',
        store : 'Udin Store',
        view : '1231'
    },
    {
        id : 4,
        title : 'Flash Sale Akhir Periode GIGIH',
        store : 'Udin Store',
        view : '1231'
    },
    {
        id : 5,
        title : 'Flash Sale Akhir Periode GIGIH',
        store : 'Udin Store',
        view : '1231'
    },
    {
        id : 6,
        title : 'Flash Sale Akhir Periode GIGIH',
        store : 'Udin Store',
        view : '1231'
    },
]

export default function Videos(){
    
    const mockVideos = array.map(e => {
        return(
            <GridItem 
            key={e.id} 
            as='button' 
            height={['80vw','55vw', '40vw', '29vw']}
            width={['45vw','30vw', '23vw', '19vw']}
            borderRadius='10px'
            display='flex'
            flexDir='column'
            justifyContent='space-between'
            bgImage={`https://picsum.photos/id/${e.id}/500`}>
                <Box
                display='flex'
                alignSelf='end'
                m='5px'
                >
                    {/* VIEW */}
                    <Text
                    color='white'
                    fontSize='12px' 
                    textAlign='center'>
                        <ViewIcon 
                            boxSize={3}
                            mx='4px' />
                        {e.view}
                    </Text>
                </Box>
                <Box 
                bgGradient='linear(360deg, #000 0%, rgba(0, 0, 0, 0.03) 100%)'
                height='20%'
                width='100%'
                padding='0% 4%'
                borderBottomRadius='10px' >
                    {/* TITLE */}
                    <Text
                    textColor='white'
                    textAlign='start'
                    fontSize='14px'
                    noOfLines='1'
                    >
                        {e.title}
                    </Text>
                    {/* STORE */}
                    <Text
                    textColor='white'
                    textAlign='start'
                    fontSize='12px'
                    fontWeight='light'
                    >
                        {e.store}
                    </Text>
                </Box>

            </GridItem> 
        )
    })

    return(
        <Flex my='3vh' width='100vw' display='flex' justify='center'>
            <SimpleGrid columns={[2, 3, 4, 5]} spacing={2}>
                {mockVideos}
            </SimpleGrid>
        </Flex>
    )
}