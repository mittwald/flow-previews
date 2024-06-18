import{R as e}from"./index-uCp2LrAq.js";import{A as c}from"./Accordion-C6xOxqpE.js";import{H as h}from"./Heading-bIvg0v65.js";import{C as i}from"./Content-BR6ur-g8.js";import{L as S}from"./Label-D1_J_t9t.js";import{S as x}from"./Section-zZXJENq8.js";import{L as b}from"./Link-D11O8mXd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./dynamic-DKDa4OpU.js";import"./Button-DJPOOIVp.js";import"./IconApp-BsJtYAdy.js";import"./flowComponent-ClMeDTWi.js";import"./index-BOkhicXD.js";import"./IconWarning-DuBxq7yL.js";import"./Wrap-DQq6jo70.js";import"./Text-DFRbGu6E.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./utils-DZgOXw50.js";import"./LoadingSpinner-DwtRU-KV.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./Button-D4VcI4Uu.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DpEA8Hsr.js";import"./usePress-CaJD4Kpr.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./Label-BQk6lJ-q.js";const re={title:"Structure/Accordion",component:c,render:r=>e.createElement(c,{...r},e.createElement(h,null,"Heading"),e.createElement(i,null,"Accordion Content")),parameters:{controls:{exclude:["defaultExpanded"]}}},o={},t={args:{defaultExpanded:!0}},n={render:r=>e.createElement(c,{...r},e.createElement(S,null,"Label"),e.createElement(i,null,"Accordion Content"))},a={render:r=>e.createElement(x,null,e.createElement(c,{...r,id:"myAccordion"},e.createElement(h,null,"Heading"),e.createElement(i,null,"Accordion Content")),e.createElement(b,{href:"#myAccordion"},"Anchor link"))};var m,p,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(p=o.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var d,l,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var A,f,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <Accordion {...props}>
      <Label>Label</Label>
      <Content>Accordion Content</Content>
    </Accordion>
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var L,g,C;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => <Section>
      <Accordion {...props} id="myAccordion">
        <Heading>Heading</Heading>
        <Content>Accordion Content</Content>
      </Accordion>
      <Link href="#myAccordion">Anchor link</Link>
    </Section>
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const oe=["Default","DefaultExpanded","WithLabel","WithAnchorLink"];export{o as Default,t as DefaultExpanded,a as WithAnchorLink,n as WithLabel,oe as __namedExportsOrder,re as default};
