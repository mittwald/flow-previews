import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-_FcSWQQl.js";import{f as E,g as k,h as v}from"./IconWarning-DWDcGR9n.js";import"./index-ClBBAz8G.js";import"./index-CqGwBh0V.js";import{N as i,a as l}from"./index-AbQfoS9Q.js";import"./index-CmXyXO_7.js";import{L as r}from"./Link-T4h5hqYr.js";import{T as m}from"./Text-CME0CjX1.js";import{L as p}from"./Label-C3TD0eFG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dglj5cqB.js";import"./index-B8XB3FuZ.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./utils-DDqfTkhb.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CJfWxQWU.js";import"./useFocusable-DLPCeG8s.js";import"./index-dhKWstfL.js";import"./Text-Ck09bxUA.js";import"./useLocalizedStringFormatter-m5PKJKvJ.js";import"./Label-C1MFjKOK.js";const K={title:"Navigation/Navigation",component:i,parameters:{controls:{exclude:["className"]}}},t={render:a=>e.createElement(i,{"aria-label":"Companies",...a},e.createElement(r,{href:"https://www.apple.com"},"Apple"),e.createElement(r,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(r,{href:"https://www.adobe.com"},"Adobe"),e.createElement(r,{href:"https://www.google.com"},"Google"))},n={render:a=>e.createElement(i,{"aria-label":"Main menu",...a},e.createElement(r,null,e.createElement(E,null),e.createElement(m,null,"Customer")),e.createElement(r,{"aria-current":"page"},e.createElement(k,null),e.createElement(m,null,"Server")),e.createElement(r,null,e.createElement(v,null),e.createElement(m,null,"Project")))},o={render:a=>e.createElement(i,{"aria-label":"Main navigation",...a},e.createElement(l,null,e.createElement(p,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(l,null,e.createElement(p,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))};var s,c,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,L;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main menu" {...props}>
      <Link>
        <IconCustomer />
        <Text>Customer</Text>
      </Link>
      <Link aria-current="page">
        <IconServer />
        <Text>Server</Text>
      </Link>
      <Link>
        <IconProject />
        <Text>Project</Text>
      </Link>
    </Navigation>
}`,...(L=(g=n.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var d,f,w;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const Q=["Default","WithIcons","WithGroups"];export{t as Default,o as WithGroups,n as WithIcons,Q as __namedExportsOrder,K as default};
