import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        padding: "20px",
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#573391'
      },
      heading: {
        color: 'white',
      },
      image: {
        marginLeft: '15px',
      },
}));