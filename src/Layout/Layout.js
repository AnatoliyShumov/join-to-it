import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { useDarkMode } from "../custom-hooks/useDarkMode";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions/actions";
import connect from "react-redux/es/connect/connect";

const Layout = ({ toggleSidebarState, component: Component, ...rest }) => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
    if (!componentMounted) {
        return <div />;
    }

    return (
        <Route
            {...rest}
            render={matchProps => (

                <App>
                    <ThemeProvider theme={themeMode}>
                        <>
                            <GlobalStyles />
                            <Header {...matchProps} theme={theme} toggleTheme={toggleTheme} />
                            <ContentWrapper>
                                <Sidebar openState={toggleSidebarState} openTrigger={actions.ShowHideSidebar } {...matchProps} />
                                <Component {...matchProps} />
                            </ContentWrapper>
                            <Footer />
                        </>
                    </ThemeProvider>
                </App>
            )}
        />
    );
};


const App = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  position: relative;
`;

function mapStateToProps(state, props) {
    return {
        toggleSidebarState: state.dataUsers.toogle
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);


