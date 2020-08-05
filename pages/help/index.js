import classes from './help.module.css';
import Navigator from '../../components/navigator';

export default function HelpPage(props) {
  return (
    <Navigator>
      <h1 className={classes.help}>Help Page</h1>
      Help Text
    </Navigator>
  );
}
