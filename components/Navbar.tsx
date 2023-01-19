'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string
  href: string
  image: JSX.Element
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
    image: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 28.0368V16.442C31.0001 15.6353 30.8334 14.8371 30.5103 14.0963C30.1871 13.3554 29.7142 12.6876 29.1205 12.1336L18.061 1.80996C17.504 1.28982 16.7665 1 16 1C15.2335 1 14.496 1.28982 13.939 1.80996L2.8795 12.1336C2.28584 12.6876 1.81293 13.3554 1.48975 14.0963C1.16656 14.8371 0.999913 15.6353 1 16.442V28.0368C1 28.8227 1.31607 29.5764 1.87868 30.1321C2.44129 30.6878 3.20435 31 4 31H28C28.7956 31 29.5587 30.6878 30.1213 30.1321C30.6839 29.5764 31 28.8227 31 28.0368Z"
          stroke="#626262"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'About',
    href: '#about',
    image: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 15C16.9891 15 18.8968 14.2098 20.3033 12.8033C21.7098 11.3968 22.5 9.48912 22.5 7.5C22.5 5.51088 21.7098 3.60322 20.3033 2.1967C18.8968 0.790177 16.9891 0 15 0C13.0109 0 11.1032 0.790177 9.6967 2.1967C8.29018 3.60322 7.5 5.51088 7.5 7.5C7.5 9.48912 8.29018 11.3968 9.6967 12.8033C11.1032 14.2098 13.0109 15 15 15V15ZM20 7.5C20 8.82608 19.4732 10.0979 18.5355 11.0355C17.5979 11.9732 16.3261 12.5 15 12.5C13.6739 12.5 12.4021 11.9732 11.4645 11.0355C10.5268 10.0979 10 8.82608 10 7.5C10 6.17392 10.5268 4.90215 11.4645 3.96447C12.4021 3.02678 13.6739 2.5 15 2.5C16.3261 2.5 17.5979 3.02678 18.5355 3.96447C19.4732 4.90215 20 6.17392 20 7.5V7.5ZM30 27.5C30 30 27.5 30 27.5 30H2.5C2.5 30 0 30 0 27.5C0 25 2.5 17.5 15 17.5C27.5 17.5 30 25 30 27.5ZM27.5 27.49C27.4975 26.875 27.115 25.025 25.42 23.33C23.79 21.7 20.7225 20 15 20C9.275 20 6.21 21.7 4.58 23.33C2.885 25.025 2.505 26.875 2.5 27.49H27.5Z"
          fill="#626262"
        />
      </svg>
    ),
  },
  {
    name: 'Skills',
    href: '#expertise',
    image: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.83 20.43C30.8403 20.1931 30.7778 19.9588 30.6508 19.7585C30.5239 19.5583 30.3386 19.4018 30.12 19.31L28.44 18.81C28.35 18.57 28.26 18.33 28.15 18.1L28.93 16.66C29.0471 16.4395 29.0899 16.187 29.0521 15.9402C29.0143 15.6934 28.8978 15.4653 28.72 15.29L27.3 13.88C27.1235 13.7038 26.8949 13.5892 26.6481 13.5532C26.4013 13.5172 26.1495 13.5616 25.93 13.68L24.48 14.44C24.2325 14.3201 23.9788 14.2133 23.72 14.12L23.24 12.54C23.1599 12.311 23.0094 12.1131 22.81 11.9748C22.6106 11.8365 22.3726 11.7648 22.13 11.77H20.13C19.8816 11.7698 19.6396 11.8494 19.4398 11.997C19.24 12.1446 19.0928 12.3525 19.02 12.59L18.55 14.13C18.2878 14.2228 18.0307 14.3296 17.78 14.45L16.36 13.69C16.1416 13.574 15.8918 13.5309 15.6472 13.5669C15.4025 13.6028 15.1758 13.7161 15 13.89L13.55 15.29C13.3699 15.4661 13.2521 15.6959 13.2142 15.9449C13.1763 16.1938 13.2205 16.4484 13.34 16.67L14.08 18C13.9638 18.2411 13.8603 18.4881 13.77 18.74L12.19 19.21C11.9498 19.2796 11.7388 19.4256 11.589 19.6259C11.4392 19.8262 11.3588 20.0699 11.36 20.32V22.32C11.361 22.5684 11.4424 22.8098 11.592 23.0081C11.7416 23.2064 11.9514 23.3509 12.19 23.42L13.78 23.89C13.8708 24.1352 13.9742 24.3756 14.09 24.61L13.31 26.07C13.1929 26.2905 13.1501 26.543 13.1879 26.7898C13.2257 27.0366 13.3422 27.2647 13.52 27.44L14.94 28.84C15.1153 29.0178 15.3434 29.1343 15.5902 29.1721C15.837 29.2099 16.0895 29.1671 16.31 29.05L17.79 28.27C18.02 28.38 18.26 28.47 18.51 28.56L19 30.18C19.0746 30.4157 19.2225 30.6213 19.4222 30.767C19.6218 30.9128 19.8628 30.9909 20.11 30.99H22.11C22.3584 30.9902 22.6004 30.9106 22.8002 30.763C23 30.6154 23.1472 30.4075 23.22 30.17L23.69 28.59C23.93 28.51 24.16 28.41 24.39 28.3L25.89 29.09C26.1084 29.206 26.3582 29.2491 26.6028 29.2132C26.8475 29.1772 27.0742 29.064 27.25 28.89L28.67 27.49C28.85 27.3139 28.9679 27.0841 29.0058 26.8351C29.0437 26.5862 28.9995 26.3317 28.88 26.11L28.09 24.66C28.1967 24.4333 28.2933 24.2033 28.38 23.97L30 23.5C30.2402 23.4304 30.4512 23.2844 30.601 23.0841C30.7508 22.8838 30.8312 22.6401 30.83 22.39V20.43ZM29.23 22.06L27.12 22.68L27 23.1C26.8766 23.5135 26.709 23.9125 26.5 24.29L26.29 24.67L27.29 26.58L26.29 27.58L24.29 26.58L23.92 26.78C23.5382 26.9848 23.136 27.149 22.72 27.27L22.3 27.39L21.67 29.48H20.42L19.79 27.4L19.37 27.28C18.9506 27.1595 18.5451 26.9953 18.16 26.79L17.79 26.59L15.85 27.59L14.85 26.59L15.85 24.65L15.63 24.27C15.4294 23.8653 15.275 23.4393 15.17 23L15 22.63L13 22V20.69L15 20.08L15.13 19.67C15.2597 19.2413 15.4375 18.8287 15.66 18.44L15.9 18L14.9 16.15L15.9 15.21L17.79 16.21L18.17 16C18.5697 15.7811 18.9922 15.6067 19.43 15.48L19.84 15.36L20.47 13.36H21.85L22.47 15.36L22.88 15.48C23.3041 15.6093 23.7131 15.7836 24.1 16L24.48 16.21L26.4 15.21L27.4 16.21L26.4 18.1L26.61 18.48C26.8197 18.8642 26.9874 19.2699 27.11 19.69L27.23 20.11L29.29 20.72L29.23 22.06Z"
          fill="#626262"
        />
        <path
          d="M21.12 17.35C20.3325 17.3658 19.5671 17.6137 18.92 18.0627C18.2728 18.5117 17.7725 19.1417 17.482 19.8739C17.1915 20.606 17.1236 21.4077 17.2869 22.1782C17.4501 22.9488 17.8373 23.6541 18.3997 24.2055C18.9622 24.7569 19.6749 25.13 20.4486 25.278C21.2223 25.426 22.0224 25.3422 22.7487 25.0372C23.4749 24.7323 24.095 24.2197 24.5311 23.5637C24.9671 22.9078 25.1999 22.1377 25.2 21.35C25.1842 20.2802 24.7468 19.2598 23.9827 18.5108C23.2187 17.7618 22.1899 17.3446 21.12 17.35V17.35ZM21.12 23.81C20.6417 23.8002 20.1769 23.6493 19.7839 23.3764C19.3909 23.1035 19.0872 22.7206 18.911 22.2758C18.7347 21.831 18.6936 21.3441 18.793 20.876C18.8923 20.408 19.1276 19.9797 19.4693 19.6448C19.8111 19.31 20.2441 19.0835 20.714 18.9937C21.184 18.9039 21.67 18.9548 22.1111 19.1401C22.5522 19.3254 22.9288 19.6368 23.1937 20.0353C23.4586 20.4338 23.5999 20.9015 23.6 21.38C23.5974 21.7031 23.5312 22.0224 23.4051 22.3199C23.2791 22.6173 23.0957 22.8871 22.8654 23.1136C22.6351 23.3402 22.3624 23.5192 22.063 23.6404C21.7635 23.7616 21.4431 23.8226 21.12 23.82V23.81Z"
          fill="#626262"
        />
        <path
          d="M11.49 29H3V3H23V10.89C23.4365 11.0181 23.8406 11.2377 24.1855 11.5343C24.5303 11.8309 24.808 12.1976 25 12.61V3C25 2.46957 24.7893 1.96086 24.4142 1.58579C24.0391 1.21071 23.5304 1 23 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V29C1 29.5304 1.21071 30.0391 1.58579 30.4142C1.96086 30.7893 2.46957 31 3 31H13.23L12.13 29.92C11.8627 29.6546 11.6459 29.3429 11.49 29V29Z"
          fill="#626262"
        />
      </svg>
    ),
  },
  {
    name: 'Works',
    href: '#projects',
    image: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27Z"
          fill="#626262"
        />
      </svg>
    ),
  },
]

const navVariants = {
  hidden: {
    opacity: 0,
    x: '-50vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 2,
      duration: 4,

    }
  }
}

const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.nav
      variants={navVariants} initial='hidden' animate='visible'
      className="w-[4.4rem] pt-14 h-screen fixed left-0 top-0 flex flex-col justify-between overflow-hidden"
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="flex flex-col items-center gap-6">
        {navLinks.map((link, index) => (
          //* Using a tag instead of Link tag because of the anchor link
          <a
            href={pathname === '/uncertainty' ? link.href : `/uncertainty${link.href}`}
            key={index}
            className="w-full py-4 grid place-items-center"
          >
            <motion.div initial={{ x: '-60%' }} whileHover={{ x: 0 }} transition={{ type: 'spring', damping: 18 }} className={`h-full flex gap-8 items-center justify-end ${link.name === 'Skills' ? 'w-[7.8rem]' : 'w-32'}`}>
              <h1 className='text-fade text-lg'>{link.name}</h1>
              <div>{link.image}</div>
            </motion.div>
          </a>
        ))}
      </div>
      <div className='-rotate-90 mb-10'>
        <svg
          width="231"
          height="36"
          viewBox="0 0 231 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.08 1.4H6.024C6.44 1.4 6.648 1.592 6.648 1.976V28.904H20.088C20.28 28.904 20.408 28.984 20.472 29.144C20.568 29.304 20.568 29.448 20.472 29.576L16.872 34.232C16.456 34.744 15.944 35 15.336 35H1.08C0.92 35 0.776 34.952 0.648 34.856C0.552 34.728 0.504 34.584 0.504 34.424V1.976C0.504 1.816 0.552 1.688 0.648 1.592C0.776 1.464 0.92 1.4 1.08 1.4ZM56.7836 1.304H62.8796C63.5196 1.304 64.0476 1.56 64.4636 2.072L81.7436 24.536V1.88C81.7436 1.72 81.7916 1.592 81.8876 1.496C82.0156 1.368 82.1596 1.304 82.3196 1.304H86.8796C87.5196 1.304 88.0476 1.56 88.4636 2.072L105.696 24.536V1.88C105.696 1.72 105.76 1.592 105.888 1.496C106.016 1.368 106.16 1.304 106.32 1.304H111.264C111.424 1.304 111.552 1.368 111.648 1.496C111.776 1.592 111.84 1.72 111.84 1.88V34.328C111.84 34.712 111.648 34.904 111.264 34.904H106.704C106.064 34.904 105.536 34.648 105.12 34.136L87.8396 11.672V34.328C87.8396 34.712 87.6476 34.904 87.2636 34.904H82.7036C82.0636 34.904 81.5356 34.648 81.1196 34.136L56.4476 1.976C56.3196 1.848 56.3036 1.704 56.3996 1.544C56.4956 1.384 56.6236 1.304 56.7836 1.304ZM119.346 1.4H124.29C124.706 1.4 124.914 1.592 124.914 1.976V28.904H138.354C138.546 28.904 138.674 28.984 138.738 29.144C138.834 29.304 138.834 29.448 138.738 29.576L135.138 34.232C134.722 34.744 134.21 35 133.602 35H119.346C119.186 35 119.042 34.952 118.914 34.856C118.818 34.728 118.77 34.584 118.77 34.424V1.976C118.77 1.816 118.818 1.688 118.914 1.592C119.042 1.464 119.186 1.4 119.346 1.4ZM143.111 1.4H165.335C165.527 1.4 165.655 1.48 165.719 1.64C165.815 1.768 165.799 1.912 165.671 2.072L162.119 6.728C161.703 7.24 161.175 7.496 160.535 7.496H148.679V15.176H160.679C161.063 15.176 161.255 15.368 161.255 15.752V20.648C161.255 21.064 161.063 21.272 160.679 21.272H148.679V28.904H163.847C164.007 28.904 164.135 28.968 164.231 29.096C164.359 29.192 164.423 29.32 164.423 29.48V34.424C164.423 34.808 164.231 35 163.847 35H143.111C142.951 35 142.807 34.952 142.679 34.856C142.583 34.728 142.535 34.584 142.535 34.424V1.976C142.535 1.816 142.583 1.688 142.679 1.592C142.807 1.464 142.951 1.4 143.111 1.4ZM171.764 11.24C171.764 9.736 172.068 8.344 172.676 7.064C173.316 5.784 174.164 4.68 175.22 3.752C176.308 2.824 177.556 2.088 178.964 1.544C180.404 0.999998 181.924 0.727998 183.524 0.727998C186.02 0.727998 188.18 1.176 190.004 2.072C191.86 2.936 193.252 3.944 194.18 5.096C194.404 5.384 194.388 5.64 194.132 5.864L190.82 9.32C190.692 9.448 190.532 9.512 190.34 9.512C190.18 9.512 190.036 9.432 189.908 9.272C189.62 8.952 189.252 8.632 188.804 8.312C188.388 7.992 187.892 7.704 187.316 7.448C186.772 7.16 186.18 6.936 185.54 6.776C184.9 6.616 184.244 6.536 183.572 6.536C182.772 6.536 182.036 6.664 181.364 6.92C180.724 7.144 180.18 7.448 179.732 7.832C179.284 8.216 178.932 8.664 178.676 9.176C178.42 9.688 178.292 10.232 178.292 10.808C178.292 11.736 178.596 12.536 179.204 13.208C179.812 13.88 180.724 14.344 181.94 14.6L186.644 15.512C188.18 15.8 189.524 16.264 190.676 16.904C191.86 17.512 192.836 18.248 193.604 19.112C194.404 19.976 195.012 20.952 195.428 22.04C195.844 23.096 196.052 24.216 196.052 25.4C196.052 26.68 195.78 27.944 195.236 29.192C194.724 30.44 193.94 31.56 192.884 32.552C191.86 33.544 190.596 34.344 189.092 34.952C187.588 35.528 185.86 35.816 183.908 35.816C182.532 35.816 181.236 35.672 180.02 35.384C178.836 35.096 177.748 34.728 176.756 34.28C175.796 33.8 174.948 33.288 174.212 32.744C173.476 32.168 172.868 31.608 172.388 31.064C172.164 30.84 172.164 30.584 172.388 30.296L175.412 26.408C175.508 26.248 175.636 26.168 175.796 26.168C175.988 26.136 176.148 26.184 176.276 26.312C176.724 26.728 177.22 27.16 177.764 27.608C178.308 28.024 178.9 28.408 179.54 28.76C180.18 29.112 180.868 29.4 181.604 29.624C182.34 29.848 183.124 29.96 183.956 29.96C185.716 29.96 187.06 29.576 187.988 28.808C188.916 28.04 189.38 27.048 189.38 25.832C189.38 24.872 189.028 24.04 188.324 23.336C187.652 22.6 186.644 22.104 185.3 21.848L180.596 20.888C177.908 20.344 175.764 19.24 174.164 17.576C172.564 15.912 171.764 13.8 171.764 11.24Z"
            fill="#d3d3d3"
          />
          <path
            d="M21.1976 34.328L45.8696 2.168C46.2856 1.656 46.8136 1.4 47.4536 1.4H52.0136C52.3976 1.4 52.5896 1.592 52.5896 1.976V34.424C52.5896 34.808 52.3976 35 52.0136 35H47.4536C46.8136 35 46.2856 34.744 45.8696 34.232L37.5656 23.384L29.2136 34.232C28.7976 34.744 28.2696 35 27.6296 35H21.5336C21.3736 35 21.2456 34.936 21.1496 34.808C21.0536 34.648 21.0696 34.488 21.1976 34.328ZM41.5496 18.2L46.4936 24.632V11.768L41.5496 18.2Z"
            fill="#4CD964"
          />
          <path
            d="M197.87 34.232L210.254 18.104L197.87 1.976C197.742 1.848 197.726 1.704 197.822 1.544C197.918 1.384 198.046 1.304 198.206 1.304H204.302C204.942 1.304 205.47 1.56 205.886 2.072L214.238 12.92L222.542 2.072C222.958 1.56 223.486 1.304 224.126 1.304H230.222C230.414 1.304 230.542 1.384 230.606 1.544C230.702 1.704 230.686 1.848 230.558 1.976L218.174 18.104L230.558 34.232C230.686 34.392 230.702 34.552 230.606 34.712C230.542 34.84 230.414 34.904 230.222 34.904H224.126C223.486 34.904 222.958 34.648 222.542 34.136L214.238 23.288L205.886 34.136C205.47 34.648 204.942 34.904 204.302 34.904H198.206C198.046 34.904 197.918 34.84 197.822 34.712C197.726 34.552 197.742 34.392 197.87 34.232Z"
            fill="#FF4655"
          />
        </svg>
      </div>
    </motion.nav>
  )
}

export default Navbar
