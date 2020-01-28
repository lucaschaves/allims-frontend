import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from 'react-apollo-hooks';
import {GET_WEB_PAGE_COMPONENTS, GET_CUSTOM, ADD_CUSTOM} from 'data/graphql'
import {Loading, RenderForm, TableIcons} from 'components'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Modal, AppBar, Toolbar } from "@material-ui/core";
import { Delete, Save, Cancel, Search } from "@material-ui/icons";
import MaterialTable from "material-table";
import { withTranslation } from 'react-i18next';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const MaterialB = props => {
  const { data, loading } = useQuery(GET_CUSTOM({dados: 'allCmNations{ nodes{ pkNation nation abbrev }}'}));
  // const { data, loading } = useQuery(GET_CUSTOM({dados: 'allCmPeople { nodes { fkCity eMail pkPerson person fantasyName }}'}));
  
  if(loading) {return <Loading />}

  // const col = [
  //   { title: "ID", field: "pkNation", type: "numeric" },
  //   { title: "Abre.", field: "abbrev"},
  //   { title: "Nação", field: "nation"}
  // ]; 

  // if(data !== null && data.allCmNations !== null) {
  //   return (
  //     <MaterialTable
  //       icons={TableIcons}
  //       title={props.title}
  //       columns={col}
  //       data={data.allCmNations.nodes.map(pep => (
  //         { 
  //           pkNation: pep.pkNation,
  //           abbrev: pep.abbrev,
  //           nation: pep.nation
  //         }
  //       ))}
  //       options={{
  //         search: true
  //       }}
  //     />
  //   )
  // }

  const col = [
    { title: "ID", field: "pkPerson", type: "numeric" },
    { title: "fantasyName", field: "fantasyName"},
    { title: "Person", field: "person"}    
  ];

  if(data !== null && data.allCmPeople !== null) {
    return (
      <MaterialTable
        icons={TableIcons}
        title={props.title}
        columns={col}
        data={data.allCmPeople.nodes.map(pep => (
          { 
            pkPerson: pep.pkPerson,
            fantasyName: pep.fantasyName,
            person: pep.person
          }
        ))}
        options={{
          search: true
        }}
      />
    )
  }
}

const EntriesAdd = ({ t }) => {
  let pat = 'nations'
  // if(window.location.pathname === '/entries') {
  //   pat = 'person'
  // }
  console.log('pat', pat)
  const { data, loading } = useQuery(GET_WEB_PAGE_COMPONENTS, {
    variables:{
      nome: pat
    }
  });
  // const { data, loading } = useQuery(GET_WEB_PAGE_COMPONENTS);
  const [createCustom, {error}] = useMutation(ADD_CUSTOM, 
    {
      variables: {
        nation: "Colombia", 
        erpCode: "",
        clearNation: "Colombia",
        abbrev: "CO"

        // nation: "Argentina", 
        // erpCode: "",
        // clearNation: "Argentina",
        // abbrev: "AR"
      }
    });

  const handleSubmit = () => {
    createCustom()
    clearInput()
  }

  const [form, setForm] = useState([]);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if(loading) return <Loading />;
  if(error) return <div>{error}</div>;
  
  const clearInput = () => {
    document.querySelectorAll("input").forEach(i => (i.value = ""));
    document.querySelectorAll("select").forEach(i => (i.selectedIndex = 0));
  };

  if(data !== undefined && data !== null ){
  return (
    <form>
      <Grid container spacing={2}>
        <Grid xs={10}>
          <h3>Cadastro</h3> 
        </Grid>
        <Grid xs={2}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<Search />}
            onClick={() => handleOpen()}
          >
            {t('entries.search')}
          </Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
            className={classes.modal}
          >
            <div className={classes.paper}>
              <MaterialB 
                title={"Buscar..."}
              />
            </div>
          </Modal>
        </Grid>
      </Grid>
      {RenderForm( data.allSysTypes.nodes[0].sysPagesByIdType.nodes[0].sysComponentsByIdPage.nodes, form )} 
      <footer className="footer">
        <Grid container spacing={2}>
          <Grid xs={2}>
            <div className="controls">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<Cancel />}
                onClick={() => clearInput()}
              >
                {t('entries.clear')}
              </Button>
            </div>
          </Grid>
          <Grid xs={8} />
          <Grid xs={2}>
            <div className="controls">
            {/* <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Save />}
              >
                Salvar e Criar
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleSubmit()}
                startIcon={<Save />}          
              >
                {t('entries.save')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </footer>
    </form>
  )
  }  
};

export default withTranslation('common')(EntriesAdd)
