'use client'
import Card from '@/components/Card'
import { useReducer } from 'react'
import { List, ListItem, ListItemText, Divider } from '@mui/material'
import Link from 'next/link'
export default function CardPanel() {
    const ratingReducer = (ratingMap:Map<string,number> , action:{type:string, hospital:{name:string, stars:number}}) => {
        switch(action.type) {
            case 'change': {
                const newRatingMap = new Map(ratingMap)
                newRatingMap.set(action.hospital.name, action.hospital.stars??0)
                return newRatingMap
            }
            case 'delete': {
                const newRatingMap = new Map(ratingMap)
                newRatingMap.delete(action.hospital.name)
                return newRatingMap
            }
            default: return ratingMap
        }
    }
    const [ratingMap, dispatchRatings] = useReducer(ratingReducer, new Map<string, number>())

    const mockHospital = [
        {hid:"001", name:'Chulalongkorn Hospital', imgSrc:'/img/chula.jpg'},
        {hid:"002", name:'Rajavithi Hospital', imgSrc:'/img/rajavithi.jpg'},
        {hid:"003", name:'Thammasat University Hospital', imgSrc:'/img/thammasat.jpg'},
    ]

    return (
        <div className='mb-5'>
            <div className='my-[15px] flex justify-around content-around flex-wrap'>
                {mockHospital.map((hospital)=>{
                    return (
                        <Link key={hospital.hid} href={`/hospital/${hospital.hid}`} className='w-1/5'>
                            <Card hospitalName={hospital.name} imgSrc={hospital.imgSrc}
                            onRating={(hospitalName:string, stars:number)=>dispatchRatings({type:'change', hospital:{name: hospitalName, stars:stars}})} 
                            currentRating={ratingMap.get(hospital.name)??0}
                            />
                        </Link>
                    )
                })}
            </div>

            <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper', marginLeft:"30px"}} component="nav" aria-label="mailbox folders">
                <ListItem>
                    <ListItemText primary={`Ratings of ${ratingMap.size} hospital`} 
                    primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        letterSpacing: 0,
                    }}/>
                </ListItem>
                <Divider />
                { Array.from(ratingMap).map( (x) => 
                    <ListItem key={x[0]} onClick={()=>dispatchRatings({type:'delete', hospital:{name:x[0], stars:0}})} button> 
                        <ListItemText primary={`${x[0]}: ${x[1]} star${x[1]>1?'s':''}`} /> 
                    </ListItem> ) 
                }
            </List>
        </div>
    )
}