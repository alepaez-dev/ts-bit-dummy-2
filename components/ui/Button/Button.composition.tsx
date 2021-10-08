// Icons we are gonna use
import React from 'react';
import { Button } from './Button';




const userIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 mb-1" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>;

const googleIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0)">
  <path
    d="M19.9943 10.2236C19.9933 9.5899 19.9393 8.95733 19.8327 8.33228H10.2227V12.09H15.7251C15.6042 12.6951 15.3614 13.2705 15.0109 13.7826C14.6605 14.2948 14.2094 14.7334 13.684 15.0728V17.5724H16.9667C17.9672 16.6225 18.7534 15.4778 19.2749 14.2121C19.7963 12.9464 20.0414 11.5878 19.9943 10.2236Z"
    fill="#4285F4"
  />
  <path
    d="M10.2227 19.9973C12.7042 20.0624 15.1172 19.1949 16.9667 17.5727L13.684 15.0731C12.6542 15.7258 11.4489 16.0624 10.2227 16.0396C8.9428 16.0227 7.70092 15.6111 6.67346 14.8632C5.646 14.1153 4.88521 13.0693 4.49919 11.8737H1.09741V14.4482C1.94165 16.1127 3.24277 17.5137 4.85469 18.4939C6.46661 19.4741 8.3255 19.9947 10.2227 19.9973Z"
    fill="#34A853"
  />
  <path
    d="M4.49924 11.9075C4.06834 10.6706 4.06834 9.32851 4.49924 8.09153V5.51697H1.09746C0.376052 6.9055 0 8.44148 0 9.99954C0 11.5576 0.376052 13.0936 1.09746 14.4821L4.49924 11.9075Z"
    fill="#FBBC05"
  />
  <path
    d="M10.2227 3.95822C11.6772 3.93521 13.0825 4.47395 14.1347 5.45797L17.0433 2.60845C15.2059 0.908536 12.7668 -0.0264009 10.2397 0.000567624C8.34611 1.06999e-05 6.48969 0.515623 4.87812 1.48973C3.26656 2.46383 1.96341 3.858 1.11444 5.51629L4.51622 8.09085C4.90718 6.9041 5.66791 5.86723 6.69148 5.12596C7.71504 4.3847 8.94998 3.97632 10.2227 3.95822Z"
    fill="#EA4335"
  />
</g>
<defs>
  <clipPath id="clip0">
    <rect width="20" height="20" fill="white" />
  </clipPath>
</defs>
</svg>;


// Composition
export const Primary = () => (
  <Button primary={true}>Ingresar</Button>
);

export const Secondary = () => (
  <Button className="bg-white text-black-400 border">Cancelar</Button>
);

export const WithIcon = () => (
  <Button className="border">{googleIcon}</Button>
);

export const WithLeftIcon = () => (
  <Button icon={userIcon} className="border text-primary font-medium">Children</Button>
);