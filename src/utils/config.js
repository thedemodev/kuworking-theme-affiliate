import React from 'react'

export const SeoText = {
  generic_keywords: ['kuworking', 'gatsby', 'javascript'],
  grid: {
    title: 'kuworking.com | ',
    description: 'learn frontend development',
  },
}

export const Config = {
  site_lang: `en`,
  url: 'https://www.kuworking.com',
  user: 'kuworking',
  social: {
    twitter: '@kuworking',
  },
  disqus: 'kuworking',
  disqus_url: 'https://www.kuworking.com',
  mail_chimp_action: 'https://gmail.us20.list-manage.com/subscribe/post?u=7679f6806268867998475ecb8&amp;id=d0543eb54f',
}

export const Text = {
  header: {
    site: 'kuworking THEME AFFILIATE',
    logo: 'KW',
  },
  cta: {
    title: 'Call To Action!',
    // prettier-ignore
    message: () => <>Drop here your <em>email</em> and I will keep you in the loop 🤠</>,
    suscribe: 'Join',
    error: 'mail address is wrong',
  },
  footer: {
    me: 'Who Am I',
    credits: 'by kuworking.com',
    credits_url: 'https://www.kuworking.com',
    // prettier-ignore
    date: () => <>[ 2018 - {new Date().getFullYear()} - kuworking ]</>,
    cookies: () => <>Notice that we use cookies to improve the usability of this site</>,
    cookies_agree: 'Ok',
  },
}
