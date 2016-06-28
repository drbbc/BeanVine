import React,{Component} from 'react';
import {
  View,Text,
  requireNativeComponent,
} from 'react-native';
import Global from '../../Utils/Global';

import mainView from '../../Components/TabBar';

var Properties = requireNativeComponent("Properties",null);

export default class LoginView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount(){
        this.state.pkCode = Global.pkCode;
    }



}
