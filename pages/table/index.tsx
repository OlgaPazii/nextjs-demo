import classes from './table.module.css';
import Navigator from '../../components/navigator';
import { Hand } from 'react-deck-o-cards';
import { NextPageContext } from 'next';
import tableService, { TableData } from '../../src/services/tableService';
import { useEffect, useState } from 'react';
import { parseCookies } from '../../src/utils';

const defHandStyle = {
  maxHeight: "15vh",
  minHeight: "15vh",

  maxWidth: "100vw",
  padding: 0,
};

const getUpdate = async (updateDataCallback) => {
  fetch('/api/getTableUpdate')
  .then(res => res.json())
  .then(data => updateDataCallback(data))
  .catch(() => {
    setTimeout(() => {
      getUpdate(updateDataCallback);
    }, 500);
  });
}

interface TablePageProps {
  tableData: TableData;
}

export default function TablePage(props: TablePageProps) {
  const [data, updateData] = useState(props.tableData);


  useEffect(function() {
    getUpdate(updateData);
  }, [data]);

  return (
    <Navigator>
      <div className={classes.table}>
        <Hand cards={data.deck} hidden={false} style={defHandStyle} />

        <div className={classes.players}>
          {data.players.map(player => (
            <div className={classes.player} key={player.id}>
              <div className="player-name">{player.name}</div>
              <Hand cards={player.hand} hidden={false} style={defHandStyle} />
            </div>
          ))}
        </div>
      </div>
    </Navigator>
  );
}

export const getServerSideProps = (context: NextPageContext) => {
  const cookies = parseCookies(context.req.headers.cookie);

  const playerId = cookies.playerId;
  const tableData = tableService.getData();

  let player = tableData.players.find(player => player.id === playerId);

  if (!player) {
    player = tableService.addPlayer(`Player ${tableService.players.length + 1}`);
    player.hand.push(tableData.deck.pop());
    player.hand.push(tableData.deck.pop());
    context.res.setHeader('Set-Cookie', `playerId=${player.id}`);
  }

  return {
    props: {
      tableData: tableService.getData(),
    }
  }
}

