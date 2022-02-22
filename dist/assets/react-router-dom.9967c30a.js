import{r as e}from"./react.ba0b032d.js";import{c as l}from"./history.a3e4623f.js";import{R as u}from"./react-router.fb709887.js";/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(a){let{basename:n,children:i,window:s}=a,r=e.exports.useRef();r.current==null&&(r.current=l({window:s}));let t=r.current,[o,c]=e.exports.useState({action:t.action,location:t.location});return e.exports.useLayoutEffect(()=>t.listen(c),[t]),e.exports.createElement(u,{basename:n,children:i,location:o.location,navigationType:o.action,navigator:t})}export{x as B};
