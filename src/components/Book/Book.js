import React, {useContext, useState} from 'react';
import {UserContext} from "../../App";
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {Button} from "@material-ui/core";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Bookings from "../Bookings/Bookings";

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });

    const handleCheckInDate = (date) =>{
        const newDates = {...selectedDate}
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };
    const handleCheckOutDate = (date) =>{
        const newDates = {...selectedDate}
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };
    const handleBooking = () => {
        const newBooking  = {...loggedInUser,...selectedDate};
        fetch('http://localhost:5000/addBooking',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <h1>Hello, {loggedInUser?.name}</h1>
                <h5>This is booking</h5>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Check In"
                            inputFormat="dd/MM/yyyy"
                            defaultValue="dd/mm/yyyy"
                            value={selectedDate.checkIn}
                            onChange={handleCheckInDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                            label="Check Out"
                            inputFormat="dd/MM/yyyy"
                            defaultValue="dd/mm/yyyy"
                            value={selectedDate.checkOut}
                            onChange={handleCheckOutDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <Button onClick={handleBooking}>Book Now</Button>
            </div>
            <Bookings></Bookings>
        </div>
    );
};

export default Book;