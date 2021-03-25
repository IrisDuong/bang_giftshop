import React,{useState,useEffect,useRef} from 'react';
const Test  = props =>{
    const [count,setCount] = useState(0);
    const lastestCount = useRef(count);
    useEffect(()=>{
    //    document.title = `You clicked ${count} times`;
    lastestCount.current = count;
    setTimeout(()=>{
        console.log(`Mày đã bấm ${lastestCount.current} lần rồi nha. tao quạo àk 1111111`);
        },3000)
    });
    return(
        <div>
            <p>Mày đã bấm {count} lần rồi nha. tao quạo àk 2222</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
export default Test;