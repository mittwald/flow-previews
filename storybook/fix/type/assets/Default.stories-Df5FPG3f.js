import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CXcpQZ5J.js";import{A as C,g as T,s as A}from"./IconWarning-B9HL9CFH.js";import{T as h}from"./Text-ilWQSh2o.js";import{L as e}from"./Link-D0qlutni.js";import{N as o,a}from"./NavigationGroup--Nyqdfns.js";import{L as i}from"./Label-Ccht5eDB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./index-_FZDHFZo.js";import"./index-DJQWtO6Q.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Text-WoclspSc.js";import"./utils-Df1au6pS.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./Accordion-BWxjxw1s.js";import"./dynamic-DKDa4OpU.js";import"./Button-DwgkhfFv.js";import"./LoadingSpinner-GJE4fldi.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./useLabel-DrVJGper.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-cPXF_S46.js";import"./Content-BSOPJRCf.js";const mr={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>r.jsxs(o,{"aria-label":"Companies",...n,children:[r.jsx(e,{href:"https://www.apple.com",children:"Apple"}),r.jsx(e,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),r.jsx(e,{href:"https://www.adobe.com",children:"Adobe"}),r.jsx(e,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>r.jsxs(o,{"aria-label":"Main menu",...n,children:[r.jsxs(e,{children:[r.jsx(C,{}),r.jsx(h,{children:"Customer"})]}),r.jsxs(e,{"aria-current":"page",children:[r.jsx(T,{}),r.jsx(h,{children:"Server"})]}),r.jsxs(e,{children:[r.jsx(A,{}),r.jsx(h,{children:"Project"})]})]})},p={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},l={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},c={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"})]})]})};var m,d,L;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,j,b;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var k,v,G;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const dr=["Default","WithIcons","WithGroups","WithCollapsableGroups","MixedGroups"];export{s as Default,c as MixedGroups,l as WithCollapsableGroups,p as WithGroups,t as WithIcons,dr as __namedExportsOrder,mr as default};
