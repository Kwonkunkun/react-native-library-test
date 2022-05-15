import { useStatusBar } from "hooks";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { CollapsibleTabBar } from "react-native-collapsible-component-with-tab-view";
import styled from "styled-components/native";

const SearchScreen = () => {
  const { setStatusBarStyle } = useStatusBar();
  useEffect(() => {
    setStatusBarStyle("light-content");
  }, [setStatusBarStyle]);

  return (
    <Container>
      <CollapsibleTabBar
        collasibleComponent={
          <View
            style={{
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 200, 1)",
            }}
          >
            <Text>Collapse Section</Text>
          </View>
        }
        tabBarItemList={[
          {
            titleComponent: (
              <View style={{ padding: 20 }}>
                <Text>tab1</Text>
              </View>
            ),
            component: (
              <View>
                <Text>haha</Text>
              </View>
            ),
          },
          {
            titleComponent: (
              <View style={{ padding: 20 }}>
                <Text>tab2</Text>
              </View>
            ),
            component: (
              <View>
                <Text>haha</Text>
              </View>
            ),
          },
        ]}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView({});

export default SearchScreen;
