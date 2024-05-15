import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-FFx7s__U.js";import{f as N,g as G,h as D}from"./IconWarning-CZBb_lzG.js";import"./index-B_ou1i4R.js";import"./index-oG4M87Z8.js";import{N as n,a as p}from"./index-pNv095sW.js";import"./index-B__7BxyL.js";import{L as r}from"./Link-DRg7sHf1.js";import{T as s}from"./Text-Dp5UV4Su.js";import{L as m}from"./Label-hD4PBlz8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvmVviyC.js";import"./index-BOkhicXD.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./index-wQ4GIlsl.js";import"./dynamic-DKDa4OpU.js";import"./index-B9XJpLw1.js";import"./Button-aU2Eeeyj.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cqz6fh5v.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./Button-C6109VW8.js";import"./utils-BGsKKjDw.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Ci2wVYze.js";import"./usePress-CP78YWrE.js";import"./index-DhOmVTQT.js";import"./Content-BQ4ywcdk.js";import"./index-IVpWfQyc.js";import"./Text-Daiml_5e.js";import"./Label-tIxD_xLh.js";const oe={title:"Navigation/Navigation",component:n,parameters:{controls:{exclude:["className"]}}},t={render:a=>e.createElement(n,{"aria-label":"Companies",...a},e.createElement(r,{href:"https://www.apple.com"},"Apple"),e.createElement(r,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(r,{href:"https://www.adobe.com"},"Adobe"),e.createElement(r,{href:"https://www.google.com"},"Google"))},o={render:a=>e.createElement(n,{"aria-label":"Main menu",...a},e.createElement(r,null,e.createElement(N,null),e.createElement(s,null,"Customer")),e.createElement(r,{"aria-current":"page"},e.createElement(G,null),e.createElement(s,null,"Server")),e.createElement(r,null,e.createElement(D,null),e.createElement(s,null,"Project")))},i={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,null,e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,null,e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))},l={render:a=>e.createElement(n,{"aria-label":"Main navigation",...a},e.createElement(p,{collapsable:!0},e.createElement(m,null,"General"),e.createElement(r,{href:"#"},"Dashboard"),e.createElement(r,{href:"#","aria-current":"page"},"Performance")),e.createElement(p,{collapsable:!0},e.createElement(m,null,"Components"),e.createElement(r,{href:"#"},"Apps"),e.createElement(r,{href:"#"},"Databases"),e.createElement(r,{href:"#"},"Domains")))};var c,u,h;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const ie=["Default","WithIcons","WithGroups","WithCollapsableGroups"];export{t as Default,l as WithCollapsableGroups,i as WithGroups,o as WithIcons,ie as __namedExportsOrder,oe as default};
