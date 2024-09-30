import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0D0D0D',
      paddingTop: '15%',
      alignItems: 'center',
    },
    header: {
      backgroundColor: '#0D0D0D',
      width: '100%',
      height: 173,
      paddingTop: 10,
      alignItems: 'center'
    },
    content: {
      height: '100%',
      backgroundColor: '#1A1A1A',
      width: '100%',
      alignItems: 'center'
    },
    containerInput: {
      backgroundColor: '#333333',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      top: -25,
      width: 327,
    },
    input: {
      width: 327,
      height: 54,
      backgroundColor: '#262626',
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      fontSize: 16,
      borderColor: '#5e60ce',
      borderWidth: 1,
    },
    addButton: {
      width: 52,
      height: 52,
      backgroundColor: '#1e6f9f',
      borderColor: '#1e6f9f',
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4
    }, 
    containerCount: {
      flexDirection: 'row',
      marginTop: 57,
      width: 383,
      justifyContent: 'space-between',
    },
    containerCountText: {
      flexDirection: 'row',
      gap: 4,
      fontWeight: 'bold',
      alignItems: 'center'
    },
    textCountCreated: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#4ea8de'
    },
    textCountFinished: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#8284FA'
    },
    textCount: {
      color: '#FFF',
      fontSize: 14,
    },
    containerTextCount: {
      backgroundColor: '#333333',
      borderRadius: 999,
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerList: {
      marginTop: 20,
    },
    listEmptyText: {
      color: '#808080',
      fontSize: 14,
      textAlign: 'center',
    },
    containerEmpty: {
      padding: 22,
      alignItems: 'center'
    }
  })