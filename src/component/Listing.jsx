import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import BungalowIcon from '@mui/icons-material/Bungalow';
import RoomIcon from '@mui/icons-material/Room';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { axiosInstance } from '../axiosInstance';
import VillaIcon from '@mui/icons-material/Villa';
import CropDinIcon from '@mui/icons-material/CropDin';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import FoundationIcon from '@mui/icons-material/Foundation';
import CabinIcon from '@mui/icons-material/Cabin';
import FilterModel from './FilterModel';
import Cards from './Cards';
import NavBar from './NavBar';


export default function Listing() {
    const [listing, setListing] = useState([])
    const [selectedCat, setSelectedCat] = useState([])

    const fetchData = async () => {
        const response = await axiosInstance.get(`?limit=400`)
        setListing([...listing, ...response.data])
        setSelectedCat([...selectedCat, ...response.data])
    }

    function handleChange(event, newValue) {
        if (newValue === "Beachfront" || newValue === "Waterfront") {
            const newData = selectedCat.filter((item) => item.amenities.includes(newValue))
            if (newData) {
                setListing(newData)
            }
        }
        if (newValue === 'All') {
            setListing(selectedCat)
        }

        if (newValue === 'Entire home/apt' || newValue === 'Private room') {
            const newData = selectedCat.filter((item) => item.room_type === newValue)
            setListing(newData)
        }
        if (newValue === 'Villa' || newValue === 'Boat' || newValue === 'Condominium' || newValue === 'Cabin') {
            const newData = selectedCat.filter((item) => item.property_type === newValue)
            setListing(newData)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='filter-container'>
                <Tabs variant='scrollable' scrollButtons="auto" onChange={handleChange} aria-label="icon position tabs example"   >
                    <Tab icon={<CropDinIcon />} value='All'  label="All" />
                    <Tab icon={<BungalowIcon />} value='Entire home/apt' label="Entire home" />
                    <Tab icon={<RoomIcon />} value='Private room' label="Private room" />
                    <Tab icon={<BeachAccessIcon />} value='Beachfront' label="BeachFront" />
                    <Tab icon={<HouseboatIcon />} value='Waterfront'  label="Waterfront" />
                    <Tab icon={<VillaIcon />} value='Villa' label="Villa" />
                    <Tab icon={<DirectionsBoatIcon />} value='Boat' label="Boat" />
                    <Tab icon={<FoundationIcon />} value='Condominium' label="Condominium" />
                    <Tab icon={<CabinIcon />} value='Cabin' label="Cabin" />
                </Tabs>
                {/* <div style={{ position: 'absolute', right: '12px', top: '12px' }}>
                        <FilterModel />
                    </div> */}
            </div>
            <Cards listing={listing} />
        </>
    )
}
