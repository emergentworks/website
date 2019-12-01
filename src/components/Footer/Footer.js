import React from 'react'

const getYear = new Date().getFullYear()

export const Footer = () => (
  <footer>
    <div> © {getYear}, Code Cooperative Inc.</div>
    <div> hello@codecooperative.org</div>
    <div> Twitter Instgram</div>
  </footer>
)
