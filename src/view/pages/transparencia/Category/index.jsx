'use client'

import { useEffect, useState, useRef } from 'react'

import Skeleton from '@mui/material/Skeleton'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import { api } from '~/services/api'
import { FilesList } from '../FilesList'

const styleUI = {
  org_integrity_policy: {
    main_color: 'bg-[#F89045]',
    circle_color: 'bg-[#F9D9C1]',
    icon: `<svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2247 40.948C12.4626 39.7575 8.55085 36.9937 5.4895 32.6568C2.42814 28.3199 0.897461 23.5663 0.897461 18.396V6.2526L17.2247 0.129883L33.5519 6.2526V18.396C33.5519 23.5663 32.0213 28.3199 28.9599 32.6568C25.8985 36.9937 21.9868 39.7575 17.2247 40.948ZM17.2247 24.9779C18.4833 24.9779 19.5547 24.5442 20.4391 23.6768C21.3235 22.8094 21.7657 21.7465 21.7657 20.4879C21.7657 19.1953 21.3235 18.1069 20.4391 17.2225C19.5547 16.3381 18.4833 15.8959 17.2247 15.8959C15.9661 15.8959 14.8947 16.3381 14.0103 17.2225C13.1259 18.1069 12.6837 19.1953 12.6837 20.4879C12.6837 21.7465 13.1259 22.8094 14.0103 23.6768C14.8947 24.5442 15.9661 24.9779 17.2247 24.9779ZM17.2247 37.7846C18.9935 37.2063 20.6177 36.3645 22.0974 35.259C23.577 34.1535 24.8951 32.8524 26.0516 31.3557L21.4596 26.7637C20.8133 27.1379 20.133 27.444 19.4187 27.6821C18.7044 27.9202 17.973 28.0393 17.2247 28.0393C15.1158 28.0393 13.3215 27.3079 11.8418 25.8453C10.3622 24.3826 9.62233 22.5968 9.62233 20.4879C9.62233 18.345 10.3622 16.5337 11.8418 15.054C13.3215 13.5743 15.1158 12.8345 17.2247 12.8345C19.3336 12.8345 21.1279 13.5743 22.6076 15.054C24.0872 16.5337 24.8271 18.345 24.8271 20.4879C24.8271 21.2022 24.725 21.9165 24.5209 22.6309C24.3168 23.3452 23.9937 23.9915 23.5515 24.5697L27.7864 28.8046C28.6708 27.2739 29.3426 25.6242 29.8018 23.8554C30.261 22.0866 30.4906 20.2668 30.4906 18.396V8.39555L17.2247 3.39533L3.95882 8.39555V18.396C3.95882 22.852 5.19187 26.8742 7.65796 30.4628C10.1241 34.0514 13.313 36.492 17.2247 37.7846Z" fill="#F78330" /></svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#F89045]',
      item_border: 'border-[#FF7B51]',
      item_border_hover: 'hover:border-[#F89045]',
      item_btn_bg: 'bg-[#F89045]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#F89045]'
    }
  },
  general_info: {
    main_color: 'bg-[#4E83EB]',
    circle_color: 'bg-[#BCD3FF]',
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.65 30H21.65V18H18.65V30ZM19.9991 14.3C20.4664 14.3 20.8583 14.1467 21.175 13.84C21.4917 13.5333 21.65 13.1533 21.65 12.7C21.65 12.2183 21.492 11.8146 21.1759 11.4888C20.8598 11.1629 20.4681 11 20.0009 11C19.5336 11 19.1417 11.1629 18.825 11.4888C18.5083 11.8146 18.35 12.2183 18.35 12.7C18.35 13.1533 18.508 13.5333 18.8241 13.84C19.1402 14.1467 19.5319 14.3 19.9991 14.3ZM20.0133 40C17.2555 40 14.6638 39.475 12.2383 38.425C9.81277 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.186 1.575 27.7579C0.525 25.33 0 22.7356 0 19.975C0 17.2144 0.525 14.6201 1.575 12.192C2.625 9.76402 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81402 2.625 12.2421 1.575C14.6701 0.525 17.2644 0 20.025 0C22.7856 0 25.3799 0.525 27.808 1.575C30.236 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2289 40 19.9867C40 22.7445 39.475 25.3362 38.425 27.7617C37.375 30.1872 35.95 32.3053 34.15 34.1158C32.35 35.9263 30.2333 37.3597 27.8 38.4158C25.3667 39.4719 22.7711 40 20.0133 40ZM20.025 37C24.7417 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.6917 37 19.975C37 15.2583 35.3531 11.25 32.0594 7.95C28.7656 4.65 24.7458 3 20 3C15.3 3 11.2917 4.64687 7.975 7.9406C4.65833 11.2344 3 15.2542 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3083 37 20.025 37Z" fill="#4E83EB" />
    </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#4E83EB]',
      item_border: 'border-[#4E83EB]',
      item_border_hover: 'hover:border-[#4E83EB]',
      item_btn_bg: 'bg-[#4E83EB]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#4E83EB]'
    }
  },
  citizen_information_services: {
    main_color: 'bg-[#20A36C]',
    circle_color: 'bg-[#AAE6BB]',
    icon: `<svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 36V33H35V17.8C35 15.8667 34.5833 14.0083 33.75 12.225C32.9167 10.4417 31.8 8.86667 30.4 7.5C29 6.13333 27.4 5.04167 25.6 4.225C23.8 3.40833 21.9333 3 20 3C18.0667 3 16.2 3.40833 14.4 4.225C12.6 5.04167 11 6.13333 9.6 7.5C8.2 8.86667 7.08333 10.4417 6.25 12.225C5.41667 14.0083 5 15.8667 5 17.8V30H4C2.9 30 1.95833 29.6083 1.175 28.825C0.391667 28.0417 0 27.1 0 26V22C0 21.2333 0.183333 20.5583 0.55 19.975C0.916667 19.3917 1.4 18.9167 2 18.55L2.15 15.9C2.45 13.4667 3.14167 11.2667 4.225 9.3C5.30833 7.33333 6.65833 5.66667 8.275 4.3C9.89167 2.93333 11.7083 1.875 13.725 1.125C15.7417 0.375 17.8333 0 20 0C22.2 0 24.3083 0.375 26.325 1.125C28.3417 1.875 30.15 2.94167 31.75 4.325C33.35 5.70833 34.6917 7.375 35.775 9.325C36.8583 11.275 37.55 13.45 37.85 15.85L38 18.45C38.6 18.75 39.0833 19.1917 39.45 19.775C39.8167 20.3583 40 21 40 21.7V26.3C40 27.0333 39.8167 27.6833 39.45 28.25C39.0833 28.8167 38.6 29.25 38 29.55V33C38 33.825 37.7062 34.5312 37.1188 35.1188C36.5312 35.7062 35.825 36 35 36H18ZM14 21.5C13.6 21.5 13.25 21.35 12.95 21.05C12.65 20.75 12.5 20.3917 12.5 19.975C12.5 19.5583 12.65 19.2083 12.95 18.925C13.25 18.6417 13.6083 18.5 14.025 18.5C14.4417 18.5 14.7917 18.6438 15.075 18.9312C15.3583 19.2188 15.5 19.575 15.5 20C15.5 20.4 15.3562 20.75 15.0688 21.05C14.7812 21.35 14.425 21.5 14 21.5ZM26 21.5C25.6 21.5 25.25 21.35 24.95 21.05C24.65 20.75 24.5 20.3917 24.5 19.975C24.5 19.5583 24.65 19.2083 24.95 18.925C25.25 18.6417 25.6083 18.5 26.025 18.5C26.4417 18.5 26.7917 18.6438 27.075 18.9312C27.3583 19.2188 27.5 19.575 27.5 20C27.5 20.4 27.3563 20.75 27.0688 21.05C26.7812 21.35 26.425 21.5 26 21.5ZM8.05 18.9C7.91667 16.9333 8.19167 15.15 8.875 13.55C9.55833 11.95 10.475 10.5917 11.625 9.475C12.775 8.35833 14.1 7.5 15.6 6.9C17.1 6.3 18.6 6 20.1 6C23.1333 6 25.6833 6.95833 27.75 8.875C29.8167 10.7917 31.0833 13.1833 31.55 16.05C28.4167 16.0167 25.6583 15.175 23.275 13.525C20.8917 11.875 19.05 9.73333 17.75 7.1C17.2167 9.8 16.0917 12.1917 14.375 14.275C12.6583 16.3583 10.55 17.9 8.05 18.9Z" fill="#20A36C" />
    </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#20A36C]',
      item_border: 'border-[#20A36C]',
      item_border_hover: 'hover:border-[#20A36C]',
      item_btn_bg: 'bg-[#20A36C]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#20A36C]'
    }
  },
  society_frequently_asked_questions_answers: {
    main_color: 'bg-[#26A7CF]',
    circle_color: 'bg-[#AFD6F2]',
    icon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2 31.65C20.7333 31.65 21.1833 31.4667 21.55 31.1C21.9167 30.7333 22.1 30.2833 22.1 29.75C22.1 29.2167 21.9167 28.7667 21.55 28.4C21.1833 28.0333 20.7333 27.85 20.2 27.85C19.6667 27.85 19.2167 28.0333 18.85 28.4C18.4833 28.7667 18.3 29.2167 18.3 29.75C18.3 30.2833 18.4833 30.7333 18.85 31.1C19.2167 31.4667 19.6667 31.65 20.2 31.65ZM18.45 24.35H21.4C21.4 23.4833 21.5083 22.6917 21.725 21.975C21.9417 21.2583 22.6167 20.4333 23.75 19.5C24.7833 18.6333 25.5167 17.7833 25.95 16.95C26.3833 16.1167 26.6 15.2 26.6 14.2C26.6 12.4333 26.025 11.0167 24.875 9.95C23.725 8.88333 22.2 8.35 20.3 8.35C18.6667 8.35 17.225 8.75833 15.975 9.575C14.725 10.3917 13.8167 11.5167 13.25 12.95L15.9 13.95C16.2667 13.0167 16.8167 12.2917 17.55 11.775C18.2833 11.2583 19.15 11 20.15 11C21.2833 11 22.2 11.3083 22.9 11.925C23.6 12.5417 23.95 13.3333 23.95 14.3C23.95 15.0333 23.7333 15.725 23.3 16.375C22.8667 17.025 22.2333 17.7 21.4 18.4C20.4 19.2667 19.6583 20.125 19.175 20.975C18.6917 21.825 18.45 22.95 18.45 24.35ZM20 40C17.2667 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1833 1.575 27.75C0.525 25.3167 0 22.7333 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05833 7.65 5.875 5.85C7.69167 4.05 9.81667 2.625 12.25 1.575C14.6833 0.525 17.2667 0 20 0C22.7667 0 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7333 39.475 25.3167 38.425 27.75C37.375 30.1833 35.95 32.3083 34.15 34.125C32.35 35.9417 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM20 37C24.7333 37 28.75 35.3417 32.05 32.025C35.35 28.7083 37 24.7 37 20C37 15.2667 35.35 11.25 32.05 7.95C28.75 4.65 24.7333 3 20 3C15.3 3 11.2917 4.65 7.975 7.95C4.65833 11.25 3 15.2667 3 20C3 24.7 4.65833 28.7083 7.975 32.025C11.2917 35.3417 15.3 37 20 37Z" fill="#318FC5"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#26A7CF]',
      item_border: 'border-[#26A7CF]',
      item_border_hover: 'hover:border-[#26A7CF]',
      item_btn_bg: 'bg-[#26A7CF]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#26A7CF]'
    }
  },
  budget: {
    main_color: 'bg-[#F4D94D]',
    circle_color: 'bg-[#FFF3B6]',
    icon: `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 44C18.2667 44 14.6667 42.9 11.2 40.7C7.73333 38.5 5 35.9833 3 33.15V40H0V28H12V31H5.15C6.85 33.5667 9.275 35.875 12.425 37.925C15.575 39.975 18.7667 41 22 41C24.6 41 27.0583 40.5 29.375 39.5C31.6917 38.5 33.7083 37.1417 35.425 35.425C37.1417 33.7083 38.5 31.6917 39.5 29.375C40.5 27.0583 41 24.6 41 22H44C44 25.0333 43.425 27.8833 42.275 30.55C41.125 33.2167 39.55 35.55 37.55 37.55C35.55 39.55 33.2167 41.125 30.55 42.275C27.8833 43.425 25.0333 44 22 44ZM20.55 36.35V33.65C19.05 33.25 17.7917 32.6083 16.775 31.725C15.7583 30.8417 14.9 29.6333 14.2 28.1L16.75 27.25C17.15 28.5167 17.8583 29.5167 18.875 30.25C19.8917 30.9833 21.05 31.35 22.35 31.35C23.6833 31.35 24.7917 31.025 25.675 30.375C26.5583 29.725 27 28.8667 27 27.8C27 26.7 26.5833 25.775 25.75 25.025C24.9167 24.275 23.3833 23.4333 21.15 22.5C19.15 21.6667 17.65 20.7667 16.65 19.8C15.65 18.8333 15.15 17.5333 15.15 15.9C15.15 14.4333 15.65 13.1833 16.65 12.15C17.65 11.1167 18.9833 10.4833 20.65 10.25V7.7H23.4V10.25C24.6667 10.3833 25.7667 10.7833 26.7 11.45C27.6333 12.1167 28.3833 13.0333 28.95 14.2L26.55 15.35C26.05 14.4167 25.4333 13.7167 24.7 13.25C23.9667 12.7833 23.1 12.55 22.1 12.55C20.8 12.55 19.775 12.85 19.025 13.45C18.275 14.05 17.9 14.8667 17.9 15.9C17.9 16.9667 18.3333 17.8167 19.2 18.45C20.0667 19.0833 21.4667 19.8 23.4 20.6C25.7 21.5667 27.3333 22.5833 28.3 23.65C29.2667 24.7167 29.75 26.1 29.75 27.8C29.75 28.6333 29.6 29.4 29.3 30.1C29 30.8 28.575 31.4 28.025 31.9C27.475 32.4 26.8 32.8083 26 33.125C25.2 33.4417 24.3 33.65 23.3 33.75V36.35H20.55ZM0 22C0 18.9667 0.575 16.1167 1.725 13.45C2.875 10.7833 4.45 8.45 6.45 6.45C8.45 4.45 10.7833 2.875 13.45 1.725C16.1167 0.575 18.9667 0 22 0C25.7333 0 29.3333 1.1 32.8 3.3C36.2667 5.5 39 8.01667 41 10.85V4H44V16H32V13H38.85C37.15 10.4333 34.7333 8.125 31.6 6.075C28.4667 4.025 25.2667 3 22 3C19.4 3 16.9417 3.5 14.625 4.5C12.3083 5.5 10.2917 6.85833 8.575 8.575C6.85833 10.2917 5.5 12.3083 4.5 14.625C3.5 16.9417 3 19.4 3 22H0Z" fill="#C5AD29"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#F4D94D]',
      item_border: 'border-[#F4D94D]',
      item_border_hover: 'hover:border-[#F4D94D]',
      item_btn_bg: 'bg-[#F4D94D]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#F4D94D]'
    }
  },
  patrimony: {
    main_color: 'bg-[#88BE16]',
    circle_color: 'bg-[#DAF0AC]',
    icon: `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.6 34.9502V18.0002H9.6V34.9502H6.6ZM18.7 34.9502V18.0002H21.7V34.9502H18.7ZM0 40.9502V37.9502H40V40.9502H0ZM30.4 34.9502V18.0002H33.4V34.9502H30.4ZM0 15.0002V12.3502L20 0.950195L40 12.3502V15.0002H0ZM6.7 12.0002H33.3L20 4.4002L6.7 12.0002Z" fill="#7CA721"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#88BE16]',
      item_border: 'border-[#88BE16]',
      item_border_hover: 'hover:border-[#88BE16]',
      item_btn_bg: 'bg-[#88BE16]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#88BE16]'
    }
  },
  purchases_and_contracts: {
    main_color: 'bg-[#C860E1]',
    circle_color: 'bg-[#E5AEF2]',
    icon: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 33.95H17.5V31.95H20.5C20.925 31.95 21.2812 31.8062 21.5688 31.5188C21.8563 31.2313 22 30.875 22 30.45V23.95C22 23.525 21.8563 23.1688 21.5688 22.8813C21.2812 22.5938 20.925 22.45 20.5 22.45H13V18.95H22V15.95H17.5V13.95H14.5V15.95H11.5C11.075 15.95 10.7188 16.0938 10.4313 16.3813C10.1438 16.6688 10 17.025 10 17.45V23.95C10 24.375 10.1438 24.7313 10.4313 25.0188C10.7188 25.3062 11.075 25.45 11.5 25.45H19V28.95H10V31.95H14.5V33.95ZM3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H21.05L32 10.95V37C32 37.8 31.7 38.5 31.1 39.1C30.5 39.7 29.8 40 29 40H3ZM18.55 10.95V3H3V37H29V10.95H18.55Z" fill="#A832C5"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#C860E1]',
      item_border: 'border-[#C860E1]',
      item_border_hover: 'hover:border-[#C860E1]',
      item_btn_bg: 'bg-[#C860E1]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#C860E1]'
    }
  },
  terms_agreements_partnerships: {
    main_color: 'bg-[#9C4EEB]',
    circle_color: 'bg-[#D3BFFF]',
    icon: `<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.25 40C3.79167 40 2.55208 39.4896 1.53125 38.4688C0.510417 37.4479 0 36.2083 0 34.75V28H6V0H36V34.75C36 36.2083 35.4896 37.4479 34.4688 38.4688C33.4479 39.4896 32.2083 40 30.75 40H5.25ZM30.7456 37C31.3819 37 31.9167 36.7844 32.35 36.3531C32.7833 35.9219 33 35.3875 33 34.75V3H9V28H28.5V34.75C28.5 35.3875 28.7152 35.9219 29.1456 36.3531C29.576 36.7844 30.1094 37 30.7456 37ZM12 12V9H30V12H12ZM12 18V15H30V18H12ZM5.2 37H25.5V31H3V34.75C3 35.3875 3.21667 35.9219 3.65 36.3531C4.08333 36.7844 4.6 37 5.2 37ZM5.2 37H3H25.5H5.2Z" fill="#8C42D6"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#9C4EEB]',
      item_border: 'border-[#9C4EEB]',
      item_border_hover: 'hover:border-[#9C4EEB]',
      item_btn_bg: 'bg-[#9C4EEB]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#9C4EEB]'
    }
  },
  financial: {
    main_color: 'bg-[#415AB6]',
    circle_color: 'bg-[#AABCFF]',
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8ZM12 13C10.34 13 9 14.34 9 16C9 17.66 10.34 19 12 19C13.66 19 15 17.66 15 16C15 14.34 13.66 13 12 13Z" fill="currentColor"/>
      </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#415AB6]',
      item_border: 'border-[#415AB6]',
      item_border_hover: 'hover:border-[#415AB6]',
      item_btn_bg: 'bg-[#415AB6]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#415AB6]'
    }
  },
  guys: {
    main_color: 'bg-[#4EC6BF]',
    circle_color: 'bg-[#99E7E2]',
    icon: `<svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.7 15.6998C24.5667 14.6331 25.2083 13.5331 25.625 12.3998C26.0417 11.2665 26.25 9.9498 26.25 8.4498C26.25 6.9498 26.0417 5.63313 25.625 4.4998C25.2083 3.36646 24.5667 2.26646 23.7 1.1998C26.2333 0.633131 28.4583 1.01646 30.375 2.3498C32.2917 3.68313 33.25 5.71646 33.25 8.4498C33.25 11.1831 32.2917 13.2165 30.375 14.5498C28.4583 15.8831 26.2333 16.2665 23.7 15.6998ZM34.5 31.9998V27.2998C34.5 25.5998 34.0667 24.0165 33.2 22.5498C32.3333 21.0831 30.8333 19.8498 28.7 18.8498C34.4667 19.5831 38.4083 20.6498 40.525 22.0498C42.6417 23.4498 43.7 25.1998 43.7 27.2998V31.9998H34.5ZM40 17.5498V12.5498H35V9.5498H40V4.5498H43V9.5498H48V12.5498H43V17.5498H40ZM15.75 15.9498C13.55 15.9498 11.75 15.2498 10.35 13.8498C8.95 12.4498 8.25 10.6498 8.25 8.4498C8.25 6.2498 8.95 4.4498 10.35 3.0498C11.75 1.6498 13.55 0.949798 15.75 0.949798C17.95 0.949798 19.75 1.6498 21.15 3.0498C22.55 4.4498 23.25 6.2498 23.25 8.4498C23.25 10.6498 22.55 12.4498 21.15 13.8498C19.75 15.2498 17.95 15.9498 15.75 15.9498ZM0 31.9998V27.2998C0 26.1331 0.308333 25.0748 0.925 24.1248C1.54167 23.1748 2.36667 22.4665 3.4 21.9998C5.8 20.9331 7.94167 20.1665 9.825 19.6998C11.7083 19.2331 13.6833 18.9998 15.75 18.9998C17.8167 18.9998 19.7833 19.2331 21.65 19.6998C23.5167 20.1665 25.65 20.9331 28.05 21.9998C29.0833 22.4665 29.9167 23.1748 30.55 24.1248C31.1833 25.0748 31.5 26.1331 31.5 27.2998V31.9998H0ZM15.75 12.9498C17.05 12.9498 18.125 12.5248 18.975 11.6748C19.825 10.8248 20.25 9.7498 20.25 8.4498C20.25 7.1498 19.825 6.0748 18.975 5.2248C18.125 4.3748 17.05 3.9498 15.75 3.9498C14.45 3.9498 13.375 4.3748 12.525 5.2248C11.675 6.0748 11.25 7.1498 11.25 8.4498C11.25 9.7498 11.675 10.8248 12.525 11.6748C13.375 12.5248 14.45 12.9498 15.75 12.9498ZM3 28.9998H28.5V27.2998C28.5 26.7665 28.3667 26.2665 28.1 25.7998C27.8333 25.3331 27.4167 24.9665 26.85 24.6998C24.55 23.6331 22.6 22.9165 21 22.5498C19.4 22.1831 17.65 21.9998 15.75 21.9998C13.85 21.9998 12.1083 22.1831 10.525 22.5498C8.94167 22.9165 6.96667 23.6331 4.6 24.6998C4.1 24.9331 3.70833 25.2915 3.425 25.7748C3.14167 26.2581 3 26.7665 3 27.2998V28.9998Z" fill="#1F9089"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#4EC6BF]',
      item_border: 'border-[#4EC6BF]',
      item_border_hover: 'hover:border-[#4EC6BF]',
      item_btn_bg: 'bg-[#4EC6BF]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#4EC6BF]'
    }
  },
  accountability: {
    main_color: 'bg-[#ED5656]',
    circle_color: 'bg-[#FF9494]',
    icon: `<svg width="34" height="37" viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 24.8999V22.6499H0V19.6499H11V14.3999H1.55C1.15 14.3999 0.791667 14.2499 0.475 13.9499C0.158333 13.6499 0 13.2832 0 12.8499V4.6499C0 4.21657 0.15 3.85824 0.45 3.5749C0.75 3.29157 1.1 3.1499 1.5 3.1499H5.5V0.899902H8.5V3.1499H14V6.1499H3V11.3999H12.45C12.8833 11.3999 13.25 11.5416 13.55 11.8249C13.85 12.1082 14 12.4832 14 12.9499V21.1499C14 21.5499 13.8583 21.8999 13.575 22.1999C13.2917 22.4999 12.9333 22.6499 12.5 22.6499H8.5V24.8999H5.5ZM19.9 36.8999L11.4 28.3999L13.5 26.2999L19.9 32.6999L31.9 20.6999L34 22.7999L19.9 36.8999Z" fill="#C42727"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#ED5656]',
      item_border: 'border-[#ED5656]',
      item_border_hover: 'hover:border-[#ED5656]',
      item_btn_bg: 'bg-[#ED5656]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#ED5656]'
    }
  },
  ordinances: {
    main_color: 'bg-[#424242]',
    circle_color: 'bg-[#C8C8C8]',
    icon: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 19.5V16.5H24V19.5H8ZM8 11.5V8.5H24V11.5H8ZM3 24.5H19C19.881 24.5 20.7013 24.7 21.4608 25.1C22.2203 25.5 22.8667 26.0333 23.4 26.7L29 34V3H3V24.5ZM3 37H27.5L21.05 28.55C20.7978 28.2206 20.4931 27.9632 20.1358 27.7779C19.7786 27.5926 19.4 27.5 19 27.5H3V37ZM29 40H3C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H29C29.8 0 30.5 0.3 31.1 0.9C31.7 1.5 32 2.2 32 3V37C32 37.8 31.7 38.5 31.1 39.1C30.5 39.7 29.8 40 29 40Z" fill="#424242"/>
        </svg>`,
    topics_style: {
      item_bg: 'white',
      item_bg_hover: 'hover:bg-[#424242]',
      item_border: 'border-[#424242]',
      item_border_hover: 'hover:border-[#424242]',
      item_btn_bg: 'bg-[#424242]',
      item_btn_bg_hover: 'group-hover:bg-[#fff]',
      item_icon_bg: 'fill-[#fff]',
      item_icon_bg_hover: 'group-hover:fill-[#424242]'
    }
  }
}

export function Category() {
  const topListRef = useRef(null)
  const [idSelected, setIdSelected] = useState(null)
  const [list, setList] = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)
  const [labelSelected, setLabelSelected] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  async function onLoad() {
    try {
      const result = await api.get('/transparencia?limit=100')
      setList(result?.data?.list || [])
    } catch (err) {
      console.error('Erro ao carregar menu', err)
    }
  }

  useEffect(() => {
    onLoad()
  }, [])

  const handleSelectTopic = (id, label) => {
    setIdSelected(id)
    setLabelSelected(label)

    if (topListRef.current) {
      topListRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const toggleDropdown = id => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  return (
    <div className="container mx-auto mb-20 flex max-w-285 justify-between gap-10">
      <aside className="min-h-screen w-100 rounded-[26px] bg-white p-6">
        <nav className="flex flex-col gap-2">
          {list.map(category => {
            const isActive = openDropdown === category.id
            const colorClass = isActive ? 'text-[#FD0003]' : 'text-[#737373]'
            const iconColor = isActive ? '#FD0003' : '#737373'

            return (
              <div
                key={category.id}
                className="flex flex-col overflow-hidden rounded-xl"
              >
                <button
                  onClick={() => toggleDropdown(category.id)}
                  className={`flex items-center justify-between p-4 text-left transition-all duration-200 hover:bg-gray-50 ${isActive ? 'bg-[#fafafa]' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center">
                      <span
                        className="flex h-full w-full items-center justify-center"
                        style={{ color: iconColor }}
                        dangerouslySetInnerHTML={{
                          __html: (
                            styleUI[category.internal_code]?.icon || ''
                          ).replace(/fill="[^"]*"/g, 'fill="currentColor"')
                        }}
                      />
                    </div>
                    <span
                      className={`w-51.5 pl-1 text-sm font-medium transition-colors ${colorClass}`}
                    >
                      {category.title}
                    </span>
                  </div>

                  {isActive ? (
                    <GoChevronUp size={18} className="text-[#727070]" />
                  ) : (
                    <GoChevronDown size={18} className="text-[#727070]" />
                  )}
                </button>

                <div
                  className={`flex flex-col ${isActive ? 'bg-[#fafafa]' : ''} transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'max-h-[500px] py-2 opacity-100'
                      : 'pointer-events-none max-h-0 opacity-0'
                  }`}
                >
                  {category.topics?.map(topic => (
                    <button
                      key={topic.id}
                      onClick={() => handleSelectTopic(topic.id, topic.label)}
                      className="px-5 py-2 text-left text-sm transition-colors"
                      style={{
                        color: `${topic.id === idSelected ? '#FD0003' : '#737373'}`
                      }}
                    >
                      <span className="text-[14px] hover:text-[#FD0003]">
                        {topic.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </aside>
      <div ref={topListRef} className="flex-1 scroll-mt-10">
        <FilesList id={idSelected} categoryTitle={labelSelected} />
      </div>
    </div>
  )
}
