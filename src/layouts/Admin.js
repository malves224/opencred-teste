import { ChakraProvider, Flex, Portal, useDisclosure } from "@chakra-ui/react";
import FinancialStatement from "components/FinancialStatement/FinancialStatement";
import ContainerRisk from "components/InfoRisk/ContainerRisk";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import SerasaInfo from "components/SerasaInfo/SerasaInfo";
import Sidebar from "components/Sidebar";
import dataProducer from "context";
import React, { useContext, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import routes from "routes.js";
import theme from "theme/theme.js";
import requestApi from "utils/api";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";

export default function Dashboard(props) {
  const { ...rest } = props;
  const params = useParams();
  const idParamUrl = params.id ? params.id : "1";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setProducerInfo } = useContext(dataProducer);

  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };

  useEffect(() => {
    requestApi(`/producer/${idParamUrl}`, "GET")
      .then((res) => setProducerInfo(res));
  }, []);
  
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        logoText={"PURITY UI DASHBOARD"}
        display="none"
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
        paddingTop="320px"
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={"PURITY UI DASHBOARD"}
            brandText={"Dashboard"}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
            <Flex
              marginTop="75px"
              height="290px"
              justifyContent="space-between"
              flexDirection="row"
            >
              <ContainerRisk 
                css={{width: "35%"}}
              />
              <FinancialStatement 
                css={{width: "40%"}}
              />
              <SerasaInfo css={{width: "18%"}} />
            </Flex>
            </PanelContainer>
          </PanelContent>
        ) : null}
      </MainPanel>
    </ChakraProvider>
  );
}
