let scrollYPosition: number = 0;
const body: (HTMLElement | null) = document.querySelector('body');
const header: (HTMLElement | null) = document.querySelector('.header');

class ScrollHelper {
  disableScroll() {
    const scrollBarWidth: number = window.innerWidth - document.documentElement.clientWidth;
    scrollYPosition = window.pageYOffset;
    if (body !== null) {
      body.style.overflowY = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollYPosition}px`;
      body.style.width = '100%';
      body.style.paddingRight = `${scrollBarWidth}px`;
    }
    if (header !== null) {
      header.style.paddingRight = `${scrollBarWidth}px`;
    }
    return true;
  }

  enableScroll() {
    if (body !== null) {
      body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
      body.style.removeProperty('padding-right');
    }
    if (header !== null) {
      header.style.removeProperty('padding-right');
    }
    window.scrollTo(0, scrollYPosition);
    return true;
  }
}

export default new ScrollHelper();
