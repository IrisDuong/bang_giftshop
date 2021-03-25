import React, {useState,useEffect,Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../../../css/menu.css';
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
                <div className={`dropdown dropdown-level-${menu.treeLevel} dropdown-menu-id-${menu.id}`}>
                    <li className={`droplink droplink-level-${menu.treeLevel} droplink-menu-id`}><a href="#" >{menu.menuName}</a></li>
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
                    <div className={`dropdown-content dropdown-content-level-${menu.treeLevel} dropdown-content-menu-id-${menu.id}`}>
                        <ul className="list-inline">
                            {listSubMenu?.map((k)=>{
                                return(<li className={`droplink drop-link-level-${k.treeLevel} droplink-menu-item-id-${k.id}`}><a href="#">{k.menuName}</a></li>)
                            })}
                        </ul>
                    </div>
               </Fragment>
            )
        }
    }

    return(
     <Fragment>
        <div className="main-menu-content">
            <ul>
                {props.listMenus?.map((e,index)=>{
                    if(e.hasChildren && e.treeLevel == 1){
                        return (
                            <Fragment>
                                    {/* <li><a href="#" className={`parent-dropdown-btn-${e.treeLevel}-id-${e.id}`}>{e.menuName}</a></li>
                                    <ul>
                                        {listChildren?.map((v)=>{
                                            return( <li><a href="#" className={`dropdown-btn-${v.id}`}>{v.menuName}</a></li>)
                                        })}
                                    </ul> */}
                                    {renderParentMenu(e)}
                            </Fragment>
                        )
                    }
                }
                )}
            </ul>
        </div>
     </Fragment>
    )
}
export default Menu;