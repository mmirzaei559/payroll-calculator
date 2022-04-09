import React from 'react';
import { useDispatch } from 'react-redux';
import { callActions } from "../../redux/actions";
import { Container, SelectTag, Error} from './style';

export default function Select(props) {

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(callActions({
            category: props.data.category,
            value: e.currentTarget.value
        }));
    };
    return (
        <Container>
            <label>{props.data.label}:</label>
            <SelectTag onChange={handleChange} className={props.error[props.data.category] && 'error'}>
            <option value="" hidden>select your {props.data.label}</option>
            {props.data.items.map(item => (<option value={item.value} key={item.value}>{item.title}</option>))}
            </SelectTag>
            {props.error[props.data.category] && <Error>* {props.data.label} is required</Error>}
        </Container>
  )
}