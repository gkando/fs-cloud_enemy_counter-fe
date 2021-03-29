import React from "react";
import Drawer from "@material-ui/core/Drawer";
import GameServer from "./GameServer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    background: "transparent",
  },
});

interface PropsInterface {
  visible: any;
  clickHandler: () => void;
  getKills: () => void;
}
const BottomDrawer: React.FC<PropsInterface> = (props) => {
  const anchor = "bottom";
  const styles = useStyles();

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer
          BackdropProps={{ invisible: true }}
          anchor={anchor}
          open={props.visible}
          onClose={props.clickHandler}
          classes={{ paper: styles.paper }}
        >
          <div className="drawer-list" role="presentation">
            <GameServer getKills={props.getKills} />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default BottomDrawer;
