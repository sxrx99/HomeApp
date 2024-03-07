
import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

export default function HomeIcon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={25}
    height={25}
    fill="none"
   
  >
    <Path fill="url(#a)" d="M0 0h25v25H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABYlJREFUeAHtXVuo3EQYTi/etcfMZFstRRTriwheQLz7IAgKPghS8QK+CEWKRTP/bI8oSkCEIihVUKkPFovtw8yfrVUQQeSAKFQEQQTxRRAR0YMiFbyf9shsWXeTsyeXPZNJNvsvhE02k5l/vu///kkmszOeRx9CgBAgBAgBQoAQIAQIAUKAECAECIFSCPgKbuYoXzWb2S91MSW2iIDasYHHYi/XcJIjLA82hrDf27/zNIslUVZ5CJx3GAKu4IMBCelvhuKjjupekJcPnbeAQBB3r+FafJsmYczx9ywW11sokrJYDQGuxUMM4Y8x4P8fshLnNPzFEB5bLT/6fUIEtr+3+wyG4vUE2CPtRt7vPoYHt6nwrAmLp8tGEWDxnm0cw2N5oBc4//mckpeM5k37JRHoxHAr0/BjAbDHh6y0ijT8zHpwe0kzKLm37K0zsZ8j/GONjCE5S4GWkSmDkC6AQEftOjeIpaqAiISKfA1HfTU/V8Ck2U3Swe5lXIkvqyZjkD9D+JopuHx2Ec+oeaDFXVzDrwOwXH0zLX5jKO7JMG3GTi1767iW8xzFCVckrCjHdL/EYq+ndmyYMfST1d2kQsYVvL8CoGEDnIj7VafzMVzY0pObk1bOyFFHda9iGr6pGuQJ8v+Ox3DtjNBwqpqBhgeZFr9PAJYTxTAUf7JYPtx+Uhaijf0u85pCUlkH6Hflq+j0VhITHN2zlSN8UhaUutMzlJ/5av6iVpHix92bmIYf6gZ38vLlIu/J21pBShDDTo7i78nBGL4NrDUPLf41t+dTS8rFB6IzeQxv1ApiBW0VQzi85aA8Z6qIMTHXxN62kTGoT4DhF5uPdC+dClJ8DXdyhF8Gxrf4+zhHuLu5pDShC6SCEJXpUIMulyha3yhitr4bne0rOJJpvGuwHJbno3jbYNAIUsw7BR7Dp7NKxrDe4TH21u5NtZJiBh+YDrmhUQ25RXWojtG6Mx1+6NX5ZB+gfGHUINqHZYbwfC0qYUreUOs7jJpUkO904kQtA/SmsV8qH0w7ITdQ4mOnKuno7i2uKjet5TAtbnRGCo/lm9MKlEO7D7ghJIrWMy1+clgxJy+l7NdHLnouHhj9nrzCvvF2YnfT7HIyxCjQ8r6mVbyp9jCU91YethhC2FQAmmaXk79CMC2eblrFm2qPwapyhZiByk0FoGl29Qd1V80IEVL8BoQIaVh3ChFChBSXb9Piuwt7SCGkEFJIltJIIaQQUggppGEqIEKIkOSzv2mosryCzg3DODXqDVMPEUKEDOVJoWolFqQQUshKr6hYKUtmjhKG8Ex/sgEz4cAqWz+NgnfqHMzXaoX0R7pM8P9xjvI6jnKxYkcZOzKm3YSsYZ4r1gvvIEKsxnP5VfJpqPyRmfnHNSmtVYj5M1B5CpJXmD/VECGWVGImNEvCW/7IxaRoacJbqxAiJMMBDetpT6j6mAghQsbexpZ1PApZWY7kYGLNNGFECBHipuuE2pAsT6NGvXD7QiEry5GoDbEXzihkZXkahSwKWaQQUkhhFaSfPUaPqVHPciRq1KlRJ4WQQuypYDT2pvepUc/yNLrtLdzgOwlZHMVTaQ+u/lgcyvCRQqfMfLvV25mKGBqeLGTcWhIFsXyghoo9uxabzbU8hudc2x0g3L9Wu3OvN4uwmGWCnFVOw8nze+LKXMNyEnRQXJ1eyLjiOhyfO/SEn2OWndMc5aMVV2YYpzW8Ysdqz+MIrzm0e5ctuwvlYyahKbUubfkRKEsBhi96C9HGQgYVSWTWL0HxEkdYqooYs1CNk0lnxtU3iB+/MEB4hCPsM4uf2Ni4hpcZCtFR4fZxZdr4zSzPZ8o4VZYluxH2GSxo2XAbDFEehAAhQAgQAoQAIUAIEAKEACFACBAChEBTEPgPbXW35Lg1rWYAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
  )
}