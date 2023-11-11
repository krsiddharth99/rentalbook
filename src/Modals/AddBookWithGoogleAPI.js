import {
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField
} from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

import { useAuth } from '../context/DecodedToken'

function AddBookWithGoogleAPI() {

    const { decodedToken } = useAuth();

    const [searchValue, setSearchValue] = useState('');

    const [dataFromGoogle, setDataFromGoogle] = useState([]);

    function getBooksWithSearch() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`).then((res) => {
            setDataFromGoogle(res.data.items);
            console.log(res.data.items);

        }).catch((err) => console.log(err));
    }



    function addBookToDatabase(title, authors, description, imageurl, categories) {

        const rent_price = window.prompt("Please enter the rent price ");

        let bookData = {};
        console.log(`${title} ${authors} ${description} ${imageurl} ${categories}`);
        bookData = {
            "book": {
                "name": title,
                "author": authors.join(', '),
                "description": description,
                "imageurl": imageurl,
                "rent_price": parseFloat(rent_price)
            },
            "user_id":decodedToken.userId,
            "genres": categories
        }

        axios.post(`http://localhost:8080/books`, bookData)
            .then(res => {
                console.log(res.data);
                alert(`${title} has been added successfully!`);
                window.location.reload();
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div style={
                { display: "flex" }
            }>
                <TextField id='searchGoogleBooks' variant='outlined'
                    onChange={
                        (e) => (setSearchValue(e.target.value))
                    }
                    onKeyUp={(e) => (e.key === "Enter" ? getBooksWithSearch() : null)}

                    sx={
                        {
                            margin: "10px",
                            flex: "1"
                        }
                    } />

                <Button variant="contained"
                    onClick={getBooksWithSearch}
                    sx={
                        {
                            margin: "10px",
                            alignSelf: "center"
                        }
                    }>Search on Google Books</Button>
            </div>

            <List> {
                dataFromGoogle.map((item) => (
                    <ListItem key={
                        item.id
                    }
                        sx={
                            {
                                alignItems: "end",
                                justifyContent: "space-between"
                            }
                        }>
                        <ListItemText sx={
                            { flex: "0 0 auto" }
                        }>
                            {
                                item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail && (
                                    <img src={
                                        item.volumeInfo.imageLinks.thumbnail
                                    }
                                        alt={
                                            item.volumeInfo.title
                                        } />
                                )
                            } </ListItemText>
                        <ListItemText sx={
                            {
                                flex: "1",
                                marginLeft: "20px"
                            }
                        }>
                            <span style={
                                {
                                    fontSize: "1.5rem",
                                    fontWeight: "600"
                                }
                            }>
                                {
                                    item.volumeInfo.title
                                }</span>
                            <br />
                            <span>Author(s):&nbsp;
                            </span>
                            {
                                item.volumeInfo.authors && (
                                    <span>{
                                        item.volumeInfo.authors.join(', ')
                                    }</span>
                                )
                            } </ListItemText>
                        <div>
                            <ListItemButton onClick={() => addBookToDatabase(item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.description, item.volumeInfo.imageLinks.thumbnail, item.volumeInfo.categories)}>
                                Add this book
                            </ListItemButton>
                        </div>
                    </ListItem>
                ))
            } </List>

        </>
    )
}

export default AddBookWithGoogleAPI
