import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Menu from './container/common/menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  var listMenus = [
    {id:1,menuName:'Home',parent:0,hasChildren:true,treeLevel:1,iconClassName:'faHome'},
    {id:2,menuName:'About',parent:0,hasChildren:true,treeLevel:1,iconClassName:''},
    {id:3,menuName:'Products',parent:0,hasChildren:true,treeLevel:1,iconClassName:''},
    {id:4,menuName:'Service',parent:0,hasChildren:true,treeLevel:1,iconClassName:''},
    {id:5,menuName:'Community',parent:0,hasChildren:true,treeLevel:1,iconClassName:''},
    {id:6,menuName:'Mision',parent:2,hasChildren:false,treeLevel:2},
    {id:7,menuName:'Process of Develoment',parent:2,hasChildren:false,treeLevel:2},
    {id:8,menuName:'Stuffed animal',parent:3,hasChildren:false,treeLevel:2},
    {id:9,menuName:'Sourvenir',parent:3,hasChildren:false,treeLevel:2},
    {id:10,menuName:'Toys',parent:3,hasChildren:false,treeLevel:2},
    {id:11,menuName:'H-tech Accessories',parent:3,hasChildren:false,treeLevel:2},
    {id:12,menuName:'Personal Accessories',parent:3,hasChildren:false,treeLevel:2},
    {id:13,menuName:'Fashion Accessories',parent:3,hasChildren:false,treeLevel:2},
    {id:14,menuName:'Flower',parent:3,hasChildren:false,treeLevel:2},
    {id:15,menuName:'Painting',parent:3,hasChildren:false,treeLevel:2},
    {id:16,menuName:'Setup party',parent:4,hasChildren:false,treeLevel:2},
    {id:17,menuName:'Decord',parent:4,hasChildren:false,treeLevel:2},
    {id:18,menuName:'News',parent:4,hasChildren:false,treeLevel:2},
  ]
  return (
    <div >
     <Menu {...{listMenus:listMenus}}></Menu>
     {/* <Test></Test> */}
    </div>
  );
}

export default App;
