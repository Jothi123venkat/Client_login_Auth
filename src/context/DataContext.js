import React, { createContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import $ from 'jquery';
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
    const navigator = useNavigate()

    const validateNumberWithSlash = (value) => {
        const regex = /^[0-9/]+$/;
        const isValid = regex.test(value);
        return isValid || 'Invalid input: Only numbers and forward slashes ("/") are allowed.';
    };

    const validateEmail = (value) => {
        if (value !== '') {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const isValid = emailRegex.test(value);
            return isValid || 'Invalid email address';
        }

    };
    const validatePhoneNumber = (value) => {
        if (value.length) {
            if (value.length !== 10) {
                return 'Phone number must be 10 digits';
            }
            const matches = value.match(
                /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
            );
            if (matches === null) {
                return "Only numbers allowed";
            }
        }
    };
    const validateAadharNumber = (value) => {
        if (value.length) {
            if (value.length !== 12) {
                return 'Aadhar number must be 12 digits';
            }
        }
    }
    const validateLicenceNumber = (value) => {
        if (value.length) {
            if (value.length !== 15) {
                return 'Licence number must be 15 digits';
            }
        }
    }
    const validatePincodeNumber = (value) => {
        if (value.length) {
            if (value.length !== 6) {
                return 'Pincode number must be 6 digits';
            }
        }
    }
    const validateIfscNumber = (value) => {
        const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
        const isValid = ifscRegex.test(value);
        return isValid || 'Please enter a valid IFSC number';
    }
    const validateNumberonly = (value) => {
        if (value > 0) {
            var data = value.toString()
            const matches = data.match(
                /^(?:0\.(?:0[0-9]|[0-9]\d?)|[0-9]\d*(?:\.\d{1,2})?)(?:e[+-]?\d+)?$/
            );
            if (matches === null) {
                return "Only numbers allowed";
            }
        } else {
            return "Min Value 1 is required";
        }

    };
    let month
    let date
    const CurrentDate = () => {
        var today = new Date()
        var monthSet = today.getMonth() + 1
        var dateSet = today.getDate()
        if (month < 9) {
            month = `0` + monthSet
        } else {
            month = monthSet
        }
        if (dateSet < 9) {
            date = `0` + dateSet
        } else {
            date = dateSet
        }
        return today.getFullYear() + '-' + month + '-' + date;
    }
    // language Change
    const { t, i18n } = useTranslation();
    let uselang = sessionStorage.getItem('lang')
    function changeLanguage(e) {
        i18n.changeLanguage(e.target.value);
        if (uselang == null) {
            $("html").attr("lang", 'en');
            sessionStorage.setItem('lang', 'en')
        } else {
            $("html").attr("lang", e.target.value);
            sessionStorage.setItem('lang', e.target.value)
        }
    }
    const checkLang = () => {
        i18n.changeLanguage(uselang);
        $("html").attr("lang", uselang);
    }
    // layout code 
    const drawerWidth = 240;
    const [open, setOpen] = useState(true);
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        color: 'black',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        background: '#3F6FDB',
        borderRadius: '0px 25px 25px 0px;'
    });

    const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        background: '#3F6FDB',
        borderRadius: '0px 25px 25px 0px;'
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
            background: 'none',
        }),
    );
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const screenSize = () => {
        if (window.innerWidth > 768) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }   
    const VisuallyHiddenInput = styled('input')`
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        width: 1px;
    `;
    const [pageLoading, setPageLoading] = useState(true);
    let rupee = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });
    return (
        <>
            <DataContext.Provider value={{
                pageLoading, setPageLoading, rupee,
                navigator, validateNumberWithSlash, validateEmail, validatePhoneNumber, validateAadharNumber, validateIfscNumber, validateNumberonly, validateLicenceNumber, validatePincodeNumber, CurrentDate,
                changeLanguage, t, i18n, checkLang,
                AppBar, openedMixin, closedMixin, DrawerHeader, Drawer, handleDrawerOpen, handleDrawerClose, open, screenSize,
                VisuallyHiddenInput,
            }}>
                {children}
            </DataContext.Provider>

        </>
    )
}
export default DataContext;