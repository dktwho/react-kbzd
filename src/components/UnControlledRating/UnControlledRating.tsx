import React, {useState} from "react";

export function UnControlledRating() {
    const [rating, setRating] = useState(0)

    return (
        <div>
            <Star selected={rating > 0} setRating={setRating} value={1}  />
            <Star selected={rating > 1} setRating={setRating} value={2} />
            <Star selected={rating > 2} setRating={setRating} value={3} />
            <Star selected={rating > 3} setRating={setRating} value={4} />
            <Star selected={rating > 4} setRating={setRating} value={5} />
        </div>
    )
}

type StarPropTypes = {
    selected : boolean
    setRating: (rating: 1 | 2 | 3 | 4 | 5 ) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropTypes) {

    return (
        <span onClick={(value) => props.setRating(props.value)} > {props.selected ? <b>star</b> : 'star'}</span>
    )
}