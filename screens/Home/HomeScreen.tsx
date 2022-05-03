import * as React from "react";
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { View } from 'react-native';
import CustomText from "../../components/StyledText";
import ViewWithLoading from '../../components/ViewWithLoading';
import { Ionicons } from "@expo/vector-icons";
import { DefaultColor } from "../../constants/Colors";
import { Worker } from "../../models/Worker";
import { WorkerList } from "../../components/Worker";
import { Badge } from "react-native-elements";

export default function HomeScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <TouchableOpacity
                    onPress={() => { }}
                >
                    <View style={styles.headerContainer}>
                        <CustomText>Welcome</CustomText>

                    </View>
                </TouchableOpacity>
            ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'sans-semibold' },
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{ flex: 0 }}
                >
                    <Ionicons name={"menu"} color={DefaultColor.main} size={27} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                >
                </TouchableOpacity>
            ),
            headerStyle: { backgroundColor: '#fff', elevation: 1 },
        });

    }, []);

    const data = [
        new Worker(
            "1",
            "project1@gmail.com",
            "John Michael",
            "Bituin",
            "001",
            "Maraming Salamat Metro Manila sa mainit na pagtanggap ng Uniteam sa inyong mga puso Grand Rally Today at IBP ROAD , QUEZON CITY Follow Uniteam Bbm-Sara  for Updates",
            "+639064641048",
            "Taytay",
            true,
            "",
            "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png",
            "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
            4.5
        ),
        new Worker(
            "1",
            "project1@gmail.com",
            "Carlo",
            "Espejo",
            "001",
            "I witness the crowd coz i've been there Saturday April 23 pano naging 70k to 80k lang yan eh sobrang dami ng tao base on my estimation probably 500k plus from buendia to edsa.",
            "+639064641048",
            "Pantok",
            true,
            "",
            "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png",
            "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
            3
        ),
        new Worker(
            "1",
            "project1@gmail.com",
            "Carljohn",
            "Tacderas",
            "001",
            "Iba naman! Bigyan natin ng pagkakataon ang ating bayan magkaroon ng gobyernong tratrabahuhin ang kinabukasan mo. Walang awayan, walang higantihan, para sa inyong PEACE OF MIND ,samahan niyo po ako sa May 9, Isko Moreno Domagoso po, para pagkapangulo. Ang sabi ni Isko Moreno",
            "+639064641048",
            "PAg-Asa",
            true,
            "",
            "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png",
            "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
            5
        ),
    ]

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <View style={{
                        flex: 0,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <CustomText style={styles.title}>
                            Latest Post
                        </CustomText>


                    </View>
                    <WorkerList
                        workers={data}
                        isRow={true}
                    />

                    <View style={{
                        flex: 0,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 30
                    }}>
                        <CustomText style={styles.title}>
                            Posts 
                        </CustomText>

                    </View>

                    <WorkerList
                        workers={data}
                        isRow={false}
                    />
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    headerContainer: {
        flex: 0,
        width: '100%'
    },
    title: {
        fontSize: 25,
        fontFamily: 'sans-bold',
        color: DefaultColor.black
    }
});
