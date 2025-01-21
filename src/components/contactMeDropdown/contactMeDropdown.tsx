import { Dropdown, Option, makeStyles, mergeClasses } from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

interface IContactMeDropDownProps extends Partial<DropdownProps> {
  dark?: boolean
}
const useStyles = makeStyles({
  root:{
    justifyContent:"center"
  },
  contactMe : {
    justifyItems:"center",
    paddingLeft: "5px"
  },
  option : {
    backgroundColor:"white",
    paddingLeft: "5px",
    border:'3px dashed var(--soil)',
    borderRadius:"20px",
    '&:hover': {
      backgroundColor:'white',
      border:'3px dashed var(--soil)',
      borderRadius:"20px"
    }
  },
  dark : {
    borderRadius: "20px",
    backgroundColor: "var(--soil)",
    color:"var(--sky)",
    border:"3px dashed white"
  }
})

const ContactMeDropDown = (props: IContactMeDropDownProps) => {
    const classes = useStyles();
    const contactOptions = ['Email', 'LinkedIn', 'GitHub', 'Resume [PDF]']

    return (
        <Dropdown {...props} value='Contact Me' aria-label='Contact Options Dropdown' 
          className={mergeClasses(classes.root, classes.contactMe, props.dark ? classes.dark:"")}>
            {contactOptions.map((option) => (
              <Option key={option} checkIcon={null} className={classes.option}>
                {option}
              </Option>
            ))}
        </Dropdown>
    )
}
export default ContactMeDropDown