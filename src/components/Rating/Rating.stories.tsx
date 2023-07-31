import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";


export default  {
    title: 'Rating stories',
    component: Rating
}


export const EmptyStars = () => <Rating value={0} setRatingValue={x=>x} />
export const Rating1 = () => <Rating value={1} setRatingValue={() => {}} />
export const Rating2 = () => <Rating value={2} setRatingValue={() => {}}/>
export const Rating3 = () => <Rating value={3} setRatingValue={() => {}}/>
export const Rating4 = () => <Rating value={4}  setRatingValue={() => {}}/>
export const Rating5 = () => <Rating value={5} setRatingValue={() => {}}/>

export const ChangeRating = () => {
    const [rating, setRatingValue] = useState<RatingValueType>(3)
    return  <Rating value={rating} setRatingValue={setRatingValue} />

}
