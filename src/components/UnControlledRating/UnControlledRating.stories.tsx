import React from 'react';
import {UnControlledRating} from "./UnControlledRating";


export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
}

export const EmptyStars = () => <UnControlledRating defaultValue={0}/>
export const Rating1 = () => <UnControlledRating defaultValue={1}/>
export const Rating2 = () => <UnControlledRating defaultValue={2}/>
export const Rating3 = () => <UnControlledRating defaultValue={3}/>
export const Rating4 = () => <UnControlledRating defaultValue={4}/>
export const Rating5 = () => <UnControlledRating defaultValue={5}/>

