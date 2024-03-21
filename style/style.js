import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 5,
    backgroundColor: '#b1de0e',
    flexDirection: 'row',
  },
  footer: {
    marginTop: 20,
    backgroundColor: '#b1de0e',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#73CED6",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20
  },
  TextInput: {
    backgroundColor: "#ceced1",
    borderColor: 'black',
    borderWidth: 3,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center'
  },
  Pressable: {
    backgroundColor: "#ceced1",
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3,
    textAlign: 'center',
    alignSelf: 'center', 
    padding: 10,
    margin: 10
    
  },
  Text: {
    textAlign: 'center',
    fontSize: 12
  },
  MaterialCommunityIcons: {
    textAlign: 'center'
  }
});