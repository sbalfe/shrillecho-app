'use client'
import React, { useEffect, useState } from 'react';
import { Button, IconButton, Text, Image, Flex, Box } from '@chakra-ui/react';
import { usePlaylistQuery } from '../gql/generated';
import Link from 'next/link'
import { ErrorComponent, NoDataCompoent, LoadingComponent } from '../components/general';
import axios from 'axios';
import fast_origin from '../env';

const url = 'https://img.freepik.com/premium-vector/login-icon-button-blue-glossy-with-shadow_514344-159.jpg?w=2000'


interface app {

    searchParams:any
}

export const App: React.FC<app>= ({ searchParams }) => {


    // const { data, error, loading } = usePlaylistQuery()
    const [user, setUser] = useState()
    const [authed, setAuthed] = useState<boolean>()

    // if (loading) return <LoadingComponent />;
    // if (error) return <ErrorComponent error={error}/>;
    // if (!data || !data.playlist) return <NoDataCompoent/>

    const loginWithSpotify = async () => {
        if (!authed){
            console.log(`${fast_origin}`)
            console.log(`${fast_origin}/spotipy-auth`)
            let response = await axios.get(`${fast_origin}/spotipy-auth`, {
                withCredentials: true
            })
            window.location.href = response['data']['url']
        }
        else {
            console.log("you are already logged in")
        }
    }

    useEffect(() => {
        const func = async() => {
            let resp = await axios.get(`${fast_origin}/me`, {
                withCredentials: true
            })
            setUser(resp['data']['email'])
        }
        if (authed) {
            func()
        }
        else {
            console.log('not authed')
        }
    },[authed])

    useEffect(() => {
        console.log(fast_origin)
        console.log("using effect 2")
        if (searchParams.authed == 'yes') {
          
            setAuthed(true)
        }else{
            console.log(searchParams)
        }

    
    }, [])

    return (
        <>
            <Flex justify="center" align="center">
              
            <Box>
                <Text color={'red'}>{user}</Text>
            </Box>
            <Box>
            <IconButton
                    icon={<Image src={url} boxSize="100px" alt="Logo" />}
                    onClick={loginWithSpotify}
                    background="transparent"
                    _hover={{ background: "transparent" }}
                    aria-label={''}
                />
            </Box>
            </Flex >
        </>
    )
};