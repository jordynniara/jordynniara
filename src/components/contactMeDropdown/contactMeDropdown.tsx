import { Dropdown, Option, makeStyles, mergeClasses } from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";
import { useState } from "react";

interface IContactMeDropDownProps extends Partial<DropdownProps> {
  dark?: boolean
}

const useStyles = makeStyles({
  root:{
    justifyContent:"center",
  },
  contactMe : {
    justifyItems:"center",
    paddingLeft: "5px",
  },
  option : {
    backgroundColor:"white",
    paddingLeft: "5px",
    border:'1px solid var(--soil)',
    '&:hover': {
      border:'3px dashed var(--soil)',
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
    const contactOptions = ['Email', 'LinkedIn', 'GitHub', 'Resume [PDF]']
    const accordionHeaderColors = ['strawberry', 'sky', 'inchworm'];
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);
    const classes = useStyles();

    return (
        <Dropdown {...props} value='Contact Me' aria-label='Contact Options Dropdown' 
          className={mergeClasses(classes.root, classes.contactMe, props.dark ? classes.dark:"")}>
            {contactOptions.map((option: string, index:number) => (
              <Option key={option} checkIcon={null} 
                className={classes.option} 
                style={{backgroundColor:hoveredOption === option ? `var(--${accordionHeaderColors[index % accordionHeaderColors.length]})` : 'white'}}
                onMouseEnter={()=>setHoveredOption(option)}
                onMouseLeave={()=>setHoveredOption(null)}
              >
                {option}
              </Option>
            ))}
        </Dropdown>
    )
}
export default ContactMeDropDown