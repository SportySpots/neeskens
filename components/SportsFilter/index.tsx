import useWindowSize from "../../effects/resize";
import SportsFilterWide from "components/SportsFilter/SportsFilterWide";
import SportsFilterSmall from "components/SportsFilter/SportsFilterSmall";

const SportsFilter = () => {
    const windowSize = useWindowSize();
    const isDesktop = windowSize.width > 768;
    return isDesktop ? <SportsFilterWide /> : <SportsFilterSmall/>;
}

export default SportsFilter;