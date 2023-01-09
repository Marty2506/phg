var getCardLayout = Macy({
  container: '.get-card__main',
  trueOrder: false,
  waitForImages: false,
  columns: 2,
  mobileFirst: true,
  breakAt: {
    1707: {
      margin: {
        x: 20,
        y: 20
      },
      columns: 2
    }
  }
});
