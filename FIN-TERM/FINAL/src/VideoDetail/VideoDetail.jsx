import { Flex, Hide, Show, Grid, GridItem} from '@chakra-ui/react'
import {useState, useEffect } from 'react'
// import Header from '../Header/Header'
import Video from './Video'
import Products from './Products'
import Description from './Description'
import CommentsTab from './Comment'
import { useParams } from 'react-router-dom'
// import { usePrevious, fetcher} from '../customHooks'

export default function VideoDetail() {
    const [data, setData] = useState(null);
    const [description, setDescription] = useState({
        location : '0',
        desc : 'Empty Desc'
    });
    const { id } = useParams();


    useEffect(() => {
        const dataFetch = async() => {
            const response = await fetch(`/api/video/${id}`);
            const json = await response.json();   
            console.log(id);
                setData(json);
                setDescription({location : '0', desc : `${json.data.products[0]?.productId.description}`})
        }

            dataFetch();
            
    }, [])

    return(
        <Flex align='center' direction='column'>
                <Hide above='md'>
                    <Video data={data}/>
                    <Products 
                        data={data}
                        description={description}
                        setDescription={setDescription}/>
                    <Description description={description} />
                    <CommentsTab data={data} id={id}/>
                </Hide>
                <Show above='md'>
                    <Hide above='lg'>
                        <Hide below='md'>
                            <Grid
                                w='90vw'
                                h='60vw'
                                mt='2vh'
                                mb='1vw'
                                gap='1vw'
                                templateRows='repeat(2, 1fr)'
                                templateColumns='repeat(7, 1fr)'
                                >
                                <GridItem
                                    colSpan={5}
                                    rowSpan={2}
                                    >
                                        <Video data={data}/>
                                        <Products 
                                            data={data}
                                            description={description}
                                            setDescription={setDescription}/>
                                </GridItem>
                                <GridItem
                                    colSpan={2}
                                    rowSpan={2}
                                    >
                                    <CommentsTab data={data} id={id} />
                                </GridItem>
                            </Grid>
                            <Description description={description} />
                        </Hide>
                    </Hide>
                </Show>
                <Show above='lg'>
                    <Grid
                        w='90vw'
                        h='88vh'
                        mt='2vh'
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(10, 1fr)'
                        gap='0.5vw'
                        >
                            <GridItem
                                colSpan={2}
                                rowSpan={3}
                                >
                            <Products 
                                data={data}
                                description={description}
                                setDescription={setDescription}/>
                            </GridItem>
                            <GridItem
                                colSpan={6}
                                rowSpan={3}
                                >
                            <Video data={data}/>
                            </GridItem>
                            <GridItem
                                colSpan={2}
                                rowSpan={4}
                                >
                                <CommentsTab data={data} id={id}/>    
                            </GridItem>
                            <GridItem
                                colSpan={8}
                                rowSpan={1}
                                >
                                    <Description description={description} />
                            </GridItem>
                    </Grid>
                </Show>
        </Flex>
    )
}