import{R as e}from"./index-uCp2LrAq.js";import"./IconApp-CtQ8LmC9.js";import{g as S,h as x,i as A}from"./IconWarning-Dmp0B6I3.js";import{T as c}from"./Text-DkXNa9lH.js";import{L as a}from"./Link-BliUQUeA.js";import{N as o,a as n}from"./NavigationGroup-Br8jYiFl.js";import{L as t}from"./Label-BJ0sAuzn.js";import{S as P}from"./Separator-hsl8joAo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CtgwYsrm.js";import"./index-CFQDndEx.js";import"./flowComponent-HAqgJ-qp.js";import"./index-BOkhicXD.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Wrap-DQq6jo70.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-dVD-xw.js";import"./useFocusable-rZ2Ly5zk.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Accordion-Ch6A_v-A.js";import"./dynamic-DKDa4OpU.js";import"./Button-D3ygk8x2.js";import"./LoadingSpinner-BFbWNd2Y.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-Dy16a6a4.js";import"./Activity-Ck-RMSDT.js";import"./Content-CQOYHwGu.js";import"./Label-BQk6lJ-q.js";import"./Separator-Di7DbCGl.js";import"./Collection-B_ssJImm.js";const ce={title:"Navigation/Navigation",component:o,parameters:{controls:{exclude:["className"]}}},i={render:r=>e.createElement(o,{"aria-label":"Companies",...r},e.createElement(a,{href:"https://www.apple.com"},"Apple"),e.createElement(a,{href:"https://www.mittwald.de","aria-current":"page"},"mittwald"),e.createElement(a,{href:"https://www.adobe.com"},"Adobe"),e.createElement(a,{href:"https://www.google.com"},"Google"))},l={render:r=>e.createElement(o,{"aria-label":"Main menu",...r},e.createElement(a,null,e.createElement(S,null),e.createElement(c,null,"Customer")),e.createElement(a,{"aria-current":"page"},e.createElement(x,null),e.createElement(c,null,"Server")),e.createElement(a,null,e.createElement(A,null),e.createElement(c,null,"Project")))},p={render:r=>e.createElement(o,{"aria-label":"Main navigation",...r},e.createElement(n,null,e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(n,null,e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},m={render:r=>e.createElement(o,{"aria-label":"Main navigation",...r},e.createElement(n,null,e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(P,null),e.createElement(n,null,e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))},s={render:r=>e.createElement(o,{"aria-label":"Main navigation",...r},e.createElement(n,{collapsable:!0},e.createElement(t,null,"General"),e.createElement(a,{href:"#"},"Dashboard"),e.createElement(a,{href:"#","aria-current":"page"},"Performance")),e.createElement(n,{collapsable:!0},e.createElement(t,null,"Components"),e.createElement(a,{href:"#"},"Apps"),e.createElement(a,{href:"#"},"Databases"),e.createElement(a,{href:"#"},"Domains")))};var u,h,L;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Companies" {...props}>
      <Link href="https://www.apple.com">Apple</Link>
      <Link href="https://www.mittwald.de" aria-current="page">
        mittwald
      </Link>
      <Link href="https://www.adobe.com">Adobe</Link>
      <Link href="https://www.google.com">Google</Link>
    </Navigation>
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,g,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var b,d,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(d=p.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var v,w,N;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => <Navigation aria-label="Main navigation" {...props}>
      <NavigationGroup>
        <Label>General</Label>
        <Link href="#">Dashboard</Link>
        <Link href="#" aria-current="page">
          Performance
        </Link>
      </NavigationGroup>

      <Separator />

      <NavigationGroup>
        <Label>Components</Label>
        <Link href="#">Apps</Link>
        <Link href="#">Databases</Link>
        <Link href="#">Domains</Link>
      </NavigationGroup>
    </Navigation>
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var G,D,C;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const ue=["Default","WithIcons","WithGroups","WithSeparator","WithCollapsableGroups"];export{i as Default,s as WithCollapsableGroups,p as WithGroups,l as WithIcons,m as WithSeparator,ue as __namedExportsOrder,ce as default};
