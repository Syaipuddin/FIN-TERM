import { ViewIcon } from '@chakra-ui/icons'
import { Box, Flex, GridItem, Text, SimpleGrid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePrevious, fetcher } from '../customHooks';


export default function Videos(){
    const [videos, setVideos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const prevVideos = usePrevious({videos});


    useEffect(() => { 

        const dataFetch = async() => {
            const response = await fetcher('/api/videos');
                if(prevVideos !== response)
                setVideos(response.data);
        }
            dataFetch();

        console.log(isLoading)
        return(() => {
            setIsLoading(false);
        })

    }, [])


    let videoList = '';

    if(videos !== null){
        videoList = videos.map(e => {
            return(
                <Link 
                    key={e._id}
                    to={`/video-detail/${e._id}`}>
                    <GridItem 
                        as='button' 
                        height={['79vw','55vw', '40vw', '30vw']}
                        width={['45vw','30vw', '23vw', '15.5vw']}
                        borderRadius='10px'
                        display='flex'
                        flexDir='column'
                        justifyContent='space-between'
                        bgImage={e.thumb}>
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
                                height={['17%','15%']}
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
                </Link>
            )
            }
        )
    }

    return(
        <Flex my='3vh' width='100vw' display='flex' justify='center'>
            <SimpleGrid columns={[2, 3, 4, 6]} spacing={2}>
                {isLoading? <h1>Loading</h1> : videoList}
            </SimpleGrid>
        </Flex>
    )
}