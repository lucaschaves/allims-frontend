import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  TextareaAutosize,
  Button,
  IconButton
} from "@material-ui/core";

import { Cancel } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 400,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const Studio = () => {
  // const [scontent, setContent] = useState({ content: "" });
  // const [stemplate, setTemplate] = useState({ template: "" });
  // const [ssql, setSql] = useState({ sql: "" });
  // const [data, setData] = useState([]);
  // const [urlTemplate, setUrlTemplate] = useState("");

  // const classes = useStyles();
  // const dispatch = useDispatch();
  // let carrega = true;
  // let activeTemplate = false;

  // useEffect(() => {
  //   dispatch(fetchJsreportTemplateTypes());
  // }, [carrega]);

  // const dados = useSelector(state => state.network.queries.FETCH_JSRTT);

  // if (dados !== undefined && dados.data !== null && data.length === 0) {
  //   setData(dados.data.allJsreportTemplateTypes.nodes);
  // }

  // const CarregaTemplate = i => {
  //   setContent({ content: data[i].content.replace(`"`, `'`) });
  //   setTemplate({ template: data[i].jsreportLbQueriesByIdTemplate.nodes[0] });
  //   setSql({ sql: data[i].jsreportLbQueriesByIdTemplate.nodes[0].sql });
  //   // setUrlTemplate('http://allimsbackenddev-env.djvjwdvgfg.sa-east-1.elasticbeanstalk.com/reporting/templates/' + data[i].jsreportLbQueriesByIdTemplate.nodes[0].jsreportTemplateTypeByIdTemplate.shortid)
  //   setUrlTemplate(
  //     "http://localhost:4000/reporting/templates/" +
  //       data[i].jsreportLbQueriesByIdTemplate.nodes[0]
  //         .jsreportTemplateTypeByIdTemplate.shortid
  //   );
  // };

  // const handleChangeHtml = e => {
  //   setContent({ content: e.target.value });
  // };

  // const handleChangeSQL = e => {
  //   setSql({ sql: e.target.value });
  // };
  // const OnSave = () => {
  //   console.log("after", activeTemplate);
  //   // dispatch(MutationJsreportTemplateTypes(stemplate.idTemplate, scontent))
  // };

  const OnView = () => {};

  return (
    <div style={{ padding: "10px 5px 0px 10px" }}>
      <Grid container spacing={1}>
        {/* <Grid item xs={2}>
          <div className={classes.root}>
            <h3>Lista de Relatórios</h3>
            <List component="nav" aria-label="main mailbox folders">
              {data.map((v, i) => {
                return (
                  <ListItem
                    button
                    key={v.id}
                    onClick={() => CarregaTemplate(i)}
                  >
                    <ListItemText primary={v.name} id={v.id} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>

        <Grid item xs={5}>
          <Grid item xs={12}>
            <h3>HTML estrutural</h3>
            <TextareaAutosize
              onChange={e => handleChangeHtml(e)}
              value={scontent.content}
              style={{ width: "100%" }}
              rows={25}
              wrap={"true"}
              className="texthtml"
            />
          </Grid>
          <Grid item xs={12}>
            <h3>SQL estrutural</h3>
            <TextareaAutosize
              onChange={e => handleChangeSQL(e)}
              value={ssql.sql}
              style={{ width: "100%" }}
              rows={16}
              wrap={"true"}
              className="texthtml"
            />
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={() => OnView()}>
              Visualizar
            </Button>
            <Button variant="outlined" color="primary" onClick={() => OnSave()}>
              Salvar
            </Button>
            <Button variant="outlined" color="primary" onClick={() => OnSave()}>
              Importar
            </Button>
            <Button variant="outlined" color="primary" onClick={() => OnSave()}>
              Exportar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div style={{ paddingTop: "23px" }}>
              <iframe src={urlTemplate} width="90%" height="692">
                {" "}
              </iframe>
            </div>
          </Grid>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Studio;
