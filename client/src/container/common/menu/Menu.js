import React, {useState,useEffect,Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../../../css/menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
const useStyle = makeStyles({
    root: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
      },
})
const Menu  = props =>{
    
    const renderParentMenu = (menu)=>{
        let resultSubMenu = renderSubmenu(menu);
        return(
            <Fragment>
                <div className={`dropdown dropdown-id-${menu.id}`}>
                    <li className={`droplink droplink-level-${menu.treeLevel} droplink-id`}><a href="#" >{menu.menuName}</a></li>
                    {resultSubMenu}
                </div>
            </Fragment>
        )
    }
    const renderSubmenu = (menu)=>{
        let listSubMenu = props.listMenus?.filter((e,index)=>{
            return e.parent !=0 && e.parent == menu.id
        })
        if(listSubMenu != null && listSubMenu.length > 0){
            return (
               <Fragment>
                    <div className={`dropdown-content dropdown-content-id-${menu.id}`}>
                        <div>
                            <ul className="list-inline">
                                {listSubMenu?.map((k)=>{
                                    return(
                                    <li className={`droplink droplink-level-${k.treeLevel} droplink-item-id-${k.id}`}>
                                        <div>
                                            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                                            <a href="#">{k.menuName}</a>
                                        </div>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    </div>
               </Fragment>
            )
        }
    }

    return(
     <Fragment>
         <div className="top-menu-wrapper">
            <div className="top-menu-content">
                <ul>
                    {props.listMenus?.map((e,index)=>{
                        if(e.hasChildren && e.treeLevel == 1){
                            return (
                                <Fragment>
                                        {renderParentMenu(e)}
                                </Fragment>
                            )
                        }
                    }
                    )}
                </ul>
            </div>
         </div>
     </Fragment>
    )
}
export default Menu;