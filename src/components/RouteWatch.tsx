import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserData } from '../hooks';

export default function RouteWatch() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { artist } = useUserData();
    const { isLoggedIn } = typeof artist !== 'undefined' ? artist as any : { isLoggedIn: false };

    useEffect(() => {
        if (!isLoggedIn && pathname === '/artist/dashboard/main') {
            navigate('/');
        } else if (isLoggedIn && pathname === '/') {
            navigate('/artist/dashboard/main');
        }
    }, [pathname]);

    return null;
}