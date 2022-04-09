import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {callActions} from '../../redux/actions';
import {Container, Label, Input, SearchIcon, Ol, Li, Error} from './style';
import searchIcon from '../../assets/search.svg';

export default function DropDown(props) {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [showUl, setShowUl] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value === '') {
            dispatch(callActions({
                category: props.data.category,
                value: e.target?.value
            }));
        }
    };
    const handleLiChange = (e) => {
        if (e.target.value !== '') {
            setSearchTerm(e.currentTarget.innerText)
            setShowUl(false)
            dispatch(callActions({
                category: props.data.category,
                value: e.currentTarget?.dataset.value
            }));
        } else setSearchTerm('')
    };

    return (
        <Container>
            <Label>{props.data.label}:</Label>
            <Input
            className={props.error[props.data.category] && 'error'}
                role="search-box"
                   aria-label="Search options"
                   value={searchTerm}
                   onChange={handleInputChange}
                   onFocus={() => setShowUl(true)}
                   onBlur={() => setTimeout(() => {
                       setShowUl(false)
                   }, 200)}
            />
            <SearchIcon alt='search' src={searchIcon}/>
            {
                showUl ?
                    <Ol>
                        {props.data.items.filter((item) => {
                            if (searchTerm === '') {
                                return item
                            } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item
                            }
                        }).map((item) =>
                            <Li data-value={item.value} key={item.value} onClick={handleLiChange}>{item.title}</Li>)
                        }
                    </Ol>
                    :
                    null
            }
            {props.error[props.data.category] && <Error>* {props.data.label} is required</Error>}
        </Container>
    )
}