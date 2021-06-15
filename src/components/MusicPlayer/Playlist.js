// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Paper, Typography, Box, Container, Grid } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
// }));

// const Playlist = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <div className={classes.toolbar} />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default Playlist;
