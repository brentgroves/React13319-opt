import React, { useEffect } from 'react';
// https://stackoverflow.com/questions/42914666/react-router-external-link
export default function ExtRedirect({value}) {
    useEffect(() => {
      window.location.href = value;
      return null;
    });
    return null;
  }