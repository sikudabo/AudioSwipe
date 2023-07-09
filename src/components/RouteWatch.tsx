import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserData } from '../hooks';

export default function RouteWatch() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { artist } = useUserData();
    const { isLoggedIn } = typeof artist !== 'undefined' ? artist as any : { isLoggedIn: false };

    useEffect(() => {
        console.log('The path name is:', pathname);
        if (!isLoggedIn && pathname === '/artist/dashboard') {
            navigate('/');
        }
    }, [pathname]);

    return null;
}