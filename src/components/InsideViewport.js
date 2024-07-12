export const InsideViewport = ({ elementRef }) => {
    const element = elementRef
    if (!element) {
        return;
    }
    const component = element.getBoundingClientReact();
    const windowHeight = window.innerHeight || documentElement.clientHeight;

    const isInViewport = (
        (component.top >= 0 && component.top < windowHeight) ||
        (component.bottom > 0 && component.bottom <= windowHeight)
    );
    console.log(isInViewport)
    if (isInViewport) {
        return true
    } else {
        return false
    }
}