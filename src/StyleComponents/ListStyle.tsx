export const ListContainerDivStyle = (
  listWidth: string = '1100px',
  listHeight: string = '400px',
  direction: string = 'vertical',
  listBackgroundColor: string = '#FFF'
) => {
  return `
  width: ${listWidth};
  height: ${listHeight};
  background-color: ${listBackgroundColor};
  overflow: scroll;
  display: flex;
  flex-direction: ${
    direction === 'vertical'
      ? 'row'
      : direction === 'horizontal'
      ? 'column'
      : 'row'
  };
  flex-wrap: wrap;
  overflow-x: ${
    direction === 'none'
      ? 'hidden'
      : direction === 'vertical'
      ? 'hidden'
      : direction === 'horizontal'
      ? 'scroll'
      : 'scroll'
  };
  overflow-y: ${
    direction === 'none'
      ? 'hidden'
      : direction === 'vertical'
      ? 'scroll'
      : direction === 'horizontal'
      ? 'hidden'
      : 'scroll'
  };
  `
}
