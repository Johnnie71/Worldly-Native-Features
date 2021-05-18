import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {

    return (
        <View>
            <HeaderButton {...props} IconComponent={Ionicons} iconSize={23}/>
        </View>
    )

};

const styles = StyleSheet.create({

});

export default CustomHeaderButton;