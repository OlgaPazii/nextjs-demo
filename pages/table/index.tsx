import classes from './table.module.css';
import Navigator from '../../components/navigator';
import { Hand } from 'react-deck-o-cards';
import { SUIT, RANK } from '../../src/enums';
import { NextPageContext } from 'next';
import tableService from '../../src/services/tableService';
import { useEffect, useState } from 'react';

const defHandStyle = {
  maxHeight: "15vh",
  minHeight: "15vh",

  maxWidth: "100vw",
  padding: 0,
};

export default function TablePage(props) {
  const [hand, updateHand] = useState(props.hand);

  useEffect(function() {
    fetch('/api/getTableUpdate')
      .then(res => res.json())
      .then(newHand => updateHand(newHand))
      .catch(() => {
        // retry request
      });
  }, [hand]);

  return (
    <Navigator>
      <div className={classes.table}>
        <Hand cards={hand} hidden={false} style={defHandStyle} />
      </div>
    </Navigator>
  );
}

export const getServerSideProps = (context: NextPageContext) => {
  const hand = tableService.deck;
  return {
    props: {
      hand,
    }
  }
}

