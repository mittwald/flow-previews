import{j as r}from"./iframe-CPpiztA9.js";import{a7 as C,V as T,a2 as A}from"./IconWarning-DGFg2xah.js";import{T as h}from"./Text-B9GDlRIl.js";import{L as e}from"./Link-Cwf-Yfzv.js";import{N as o,a}from"./NavigationGroup-Cg03FiFC.js";import{L as i}from"./Label-BGSD1rhi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgD2VZvZ.js";import"./mergeRefs-CY9oKSjb.js";import"./index-CXr5LMa8.js";import"./browser-CCSZxPxO.js";import"./EmulatedBoldText-49ZPQjyJ.js";import"./Text-D73bWKdR.js";import"./utils-DXg4ziAt.js";import"./useLocalizedStringFormatter-CcOUbIQp.js";import"./context-Dtd4A8DJ.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Bn1QFLmx.js";import"./useFocus-f0syXR1u.js";import"./useFocusRing-ryN7bem9.js";import"./useFocusable-BdzC7gBh.js";import"./Accordion-DqOQH0_n.js";import"./dynamic-DKDa4OpU.js";import"./Button-C-ub_lVB.js";import"./LoadingSpinner-CgYhtYh1.js";import"./Button-BpRzT99M.js";import"./ProgressBar-BJkoGjLL.js";import"./Label-DrzbYkyA.js";import"./Hidden-bVSOJLMB.js";import"./useLabel-CbuGYTDm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Activity-BMk_2rRy.js";import"./Content-DfYBXOgL.js";const cr={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},s={render:n=>r.jsxs(o,{"aria-label":"Companies",...n,children:[r.jsx(e,{href:"https://www.apple.com",children:"Apple"}),r.jsx(e,{href:"https://www.mittwald.de","aria-current":"page",children:"mittwald"}),r.jsx(e,{href:"https://www.adobe.com",children:"Adobe"}),r.jsx(e,{href:"https://www.google.com",children:"Google"})]})},t={render:n=>r.jsxs(o,{"aria-label":"Main menu",...n,children:[r.jsxs(e,{children:[r.jsx(C,{}),r.jsx(h,{children:"Customer"})]}),r.jsxs(e,{"aria-current":"page",children:[r.jsx(T,{}),r.jsx(h,{children:"Server"})]}),r.jsxs(e,{children:[r.jsx(A,{}),r.jsx(h,{children:"Project"})]})]})},p={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},l={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]})]})},c={render:n=>r.jsxs(o,{"aria-label":"Main navigation",...n,children:[r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Dashboard"}),r.jsx(e,{href:"#","aria-current":"page",children:"Performance"})]}),r.jsxs(a,{children:[r.jsx(i,{children:"General"}),r.jsx(e,{href:"#",children:"Apps"}),r.jsx(e,{href:"#",children:"Databases"}),r.jsx(e,{href:"#",children:"Domains"})]}),r.jsxs(a,{collapsable:!0,children:[r.jsx(i,{children:"Components"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"}),r.jsx(e,{href:"#",children:"Testsite"})]})]})};var m,d,L;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
