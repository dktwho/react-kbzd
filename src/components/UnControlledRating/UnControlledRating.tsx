import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";


type RatingPropsType = {
    defaultValue?: RatingValueType
}
export function UnControlledRating(props: RatingPropsType) {
    const [rating, setRating] = useState<RatingValueType>(props.defaultValue ? props.defaultValue: 0 )

    return (
        <div>
            <Star selected={rating > 0} setRating={() => setRating(1)}/>
            <Star selected={rating > 1} setRating={() => setRating(2)}/>
            <Star selected={rating > 2} setRating={() => setRating(3)}/>
            <Star selected={rating > 3} setRating={() => setRating(4)}/>
            <Star selected={rating > 4} setRating={() => setRating(5)}/>
        </div>
    )
}

type StarPropTypes = {
    selected: boolean
    setRating: () => void

}

function Star(props: StarPropTypes) {

    return (
        <span onClick={props.setRating}> {props.selected ? <b>star</b> : 'star'}</span>
    )
}