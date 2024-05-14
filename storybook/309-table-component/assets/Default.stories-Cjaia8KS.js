import{R as e}from"./index-BwDkhjyp.js";import"./IconApp-RPV2UACM.js";import{f as N,g as G,h as D}from"./IconWarning-D1gyLIYa.js";import"./index-C0raSsgL.js";import"./index-J4v5nkYG.js";import{N as n,a as p}from"./index-CzhDQgxN.js";import"./index-Bxd6nhvt.js";import{L as r}from"./Link-DJG4UIfV.js";import{T as s}from"./Text-phIOO8u9.js";import{L as m}from"./Label-wWG0xxvc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./index-CoJk2QQB.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./index-BOABjvTR.js";import"./dynamic-DKDa4OpU.js";import"./index-ajPlF_if.js";import"./Button-D8pmMIBp.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-JGHWlUAu.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./Button-D5gdTRso.js";import"./utils-bTb4N6hy.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-C08EbcBh.js";import"./usePress-18_TO7Wj.js";import"./index-ZSW3VHiY.js";import"./Content-DL78Mf50.js";import"./index-dhKWstfL.js";import"./Text-fvXBaVCt.js";import"./Label-gkOQ74H0.js";const ie={title:"Navigation/Navigation",component:n,parameters:{controls:{exclude:["className"]}}},t={render:a=>e.createElement(n,{"aria-label":"Companies",...a},e.createElement(r,{href:"https://www.apple.com"},"Apple"),e.createElement(r,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(r,{href:"https://www.adobe.com"},"Adobe"),e.createElement(r,{href:"https://www.google.com"},"Google"))},o={render:a=>e.createElement(n,{"aria-label":"Main menu",...a},e.createElement(r,null,e.createElement(N,null),e.createElement(s,null,"Customer")),e.createElement(r,{"aria-current":"page"},e.createElement(G,null),e.createElement(s,null,"Server")),e.createElement(r,null,e.createElement(D,null),e.createElement(s,null,"Project")))},i={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,null,e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,null,e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))},l={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,{collapsable:!0},e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,{collapsable:!0},e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))};var c,u,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,g,f;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var d,E,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var k,v,w;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup collapsable>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup collapsable>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const le=["Default","WithIcons","WithGroups","WithCollapsableGroups"];export{t as Default,l as WithCollapsableGroups,i as WithGroups,o as WithIcons,le as __namedExportsOrder,ie as default};
