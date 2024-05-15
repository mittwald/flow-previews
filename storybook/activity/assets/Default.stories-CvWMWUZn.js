import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-BMlMz8UD.js";import{f as N,g as G,h as D}from"./IconWarning-BWQh0yHy.js";import"./index-ZGtVZsDz.js";import"./index-PtbUYvDx.js";import{N as n,a as p}from"./index-_vO6dkEJ.js";import"./index-CSewQKTb.js";import{L as r}from"./Link-M-HSzCRn.js";import{T as s}from"./Text-CRgtz34V.js";import{L as m}from"./Label-CfDHK9n-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvYijzQN.js";import"./index-BOkhicXD.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./index-D6GdUwU9.js";import"./dynamic-DKDa4OpU.js";import"./index-dN8z-uw3.js";import"./Button-t89z1yPQ.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BHiCCzsu.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./Button-r8qbaGYD.js";import"./utils-DWaAzItp.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DdMdjPK0.js";import"./usePress-GzZvjGFA.js";import"./index-C1tRuZrD.js";import"./index-DH_tWg_W.js";import"./Content-CEdcCKZN.js";import"./index-DePfloUh.js";import"./Text-5ecqfi7M.js";import"./Label-CTTMUmjq.js";const ie={title:"Navigation/Navigation",component:n,parameters:{controls:{exclude:["className"]}}},t={render:a=>e.createElement(n,{"aria-label":"Companies",...a},e.createElement(r,{href:"https://www.apple.com"},"Apple"),e.createElement(r,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(r,{href:"https://www.adobe.com"},"Adobe"),e.createElement(r,{href:"https://www.google.com"},"Google"))},o={render:a=>e.createElement(n,{"aria-label":"Main menu",...a},e.createElement(r,null,e.createElement(N,null),e.createElement(s,null,"Customer")),e.createElement(r,{"aria-current":"page"},e.createElement(G,null),e.createElement(s,null,"Server")),e.createElement(r,null,e.createElement(D,null),e.createElement(s,null,"Project")))},i={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,null,e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,null,e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))},l={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,{collapsable:!0},e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,{collapsable:!0},e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))};var c,u,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
