import { useMediaQuery } from 'react-responsive'

export class ScreenSizeResponse{
    //const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    public static readonly IsTabletOrMobile = () => useMediaQuery({ query: '(max-width: 1224px)' })
    public static readonly IsDesktopOrLaptop = () => useMediaQuery({query: '(min-width: 1224px)'})
}
