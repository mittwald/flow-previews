import{j as r}from"./iframe-D5s8HkwO.js";import{a7 as C,V as T,a2 as A}from"./IconWarning-BXD0iv1k.js";import{T as h}from"./Text-Cmu5-2wY.js";import{L as e}from"./Link-CzJlPsWn.js";import{N as o,a}from"./NavigationGroup-CjLDwx2S.js";import{L as i}from"./Label-iSiMu1ip.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BCJdYZuQ.js";import"./mergeRefs-vd2X_irL.js";import"./index-DQy1KAPI.js";import"./browser-CypciHn-.js";import"./EmulatedBoldText-CCMYCjn2.js";import"./Text-BD_PegNR.js";import"./utils-CSEH-j9T.js";import"./useLocalizedStringFormatter-Dib9oUr8.js";import"./context-BRoJySMC.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CLLKaLvj.js";import"./useFocus-ChgCHlwF.js";import"./useFocusRing-0N6EWJVX.js";import"./useFocusable-aHoAMXnZ.js";import"./Accordion-B8vMROOO.js";import"./dynamic-DKDa4OpU.js";import"./Button-BqPne1ar.js";import"./LoadingSpinner-D7Ym_un6.js";import"./Button-DfwJ262K.js";import"./ProgressBar-D_TjSuLE.js";import"./Label-DFio2qHv.js";import"./Hidden-DtltZqKg.js";import"./useLabel-Bmfvdk3t.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-DS_wC8y4.js";import"./Content-oYPgyHUq.js";const cr={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>r.jsxs(o,{"aria-label":"Companies",...n,children:[r.jsx(e,{href:"https://www.apple.com",children:"Apple"}),r.jsx(e,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),r.jsx(e,{href:"https://www.adobe.com",children:"Adobe"}),r.jsx(e,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>r.jsxs(o,{"aria-label":"Main menu",...n,children:[r.jsxs(e,{children:[r.jsx(C,{}),r.jsx(h,{children:"Customer"})]}),r.jsxs(e,{"aria-current":"page",children:[r.jsx(T,{}),r.jsx(h,{children:"Server"})]}),r.jsxs(e,{children:[r.jsx(A,{}),r.jsx(h,{children:"Project"})]})]})},p={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},l={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},c={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"})]})]})};var m,d,L;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(L=(d=s.parameters)==null?void 0:d.docs)==null?void 0:L.source}}};var x,u,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var j,g,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(g=p.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,v,G;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(v=l.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var N,w,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup collapsable>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>

      <NavigationGroup collapsable>
        <Label>Components</Label>
        <Link href="#">Testsite</Link>
        <Link href="#">Testsite</Link>
        <Link href="#">Testsite</Link>
      </NavigationGroup>
    </Navigation>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const hr=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{s as Default,c as MixedGroups,l as WithCollapsableGroups,p as WithGroups,t as WithIcons,hr as __namedExportsOrder,cr as default};
