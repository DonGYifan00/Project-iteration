import { withRouter} from 'react-router-dom'

export default withRouter(Form.create({
  mapPropsToFields(props) {
    return {
      username: { value: '1' },
      password: { value: '1' },
      autologin: { value: '1' }
    }  
  }
})(LoginForm))