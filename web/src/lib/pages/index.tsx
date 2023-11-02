'use client'
import React from 'react';
import {Button, IconButton, Text, Image} from '@chakra-ui/react';
import { usePlaylistQuery } from '../gql/generated';
import Link from 'next/link'
import { ErrorComponent, NoDataCompoent, LoadingComponent } from '../components/general';
import axios from 'axios';

const url ='https://img.freepik.com/premium-vector/login-icon-button-blue-glossy-with-shadow_514344-159.jpg?w=2000'

export const App: React.FC = () => {

    // const { data, error, loading } = useGetPlaylistQuery({
    //     variables: {plID: {
    //         field1 : "test",
    //         field2: 1,
    //         field3: true
    //     }}
    // });

    const { data, error, loading } = usePlaylistQuery()

    if (loading) return <LoadingComponent />;
    // if (error) return <ErrorComponent error={error}/>;
    // if (!data || !data.playlist) return <NoDataCompoent/>
  
    const loginWithSpotify = async () => {
        let response = await axios.get('http://localhost:8000/spotipy-auth', {
            withCredentials: true
        })
        if (!response['data']["logged in"]) {
            window.location.href = response['data']['url']
        }
        else {
            console.log("You are authorized already")
        }
    }
    
    return (
        <> 
            <Text>Home Page</Text>
            
    
            <IconButton
                icon={<Image src={url} boxSize="100px" alt="Logo" />}
                onClick={loginWithSpotify}
                background="transparent"
                _hover={{ background: "transparent" }}
                aria-label={''}
            /> 
        </>   
    )
};
