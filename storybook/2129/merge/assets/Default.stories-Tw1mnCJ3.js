import{j as r}from"./iframe-DBT7gULD.js";import{H as o}from"./Heading-CxhJw16G.js";import{T as i}from"./Text-BcenBV84.js";import{L as t}from"./Link-hErBzw1I.js";import{A as n,F as g,L as u}from"./LayoutCard-yF4LQl2s.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as p}from"./Section-D6BoVeKj.js";import{I as x}from"./IconWarning-BUJnRJXc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./index-pYm4_kYT.js";import"./RSPContexts-Dom4UWqx.js";import"./utils-D0uB-Zwx.js";import"./browser-DvkhEBxs.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./context-D6D-GlPg.js";import"./Button-C-UpDsRO.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./useStatic-CqxwceTm.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./dynamic-DeRu_afx.js";const V={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},l={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "gradient"
  },
  render: props => <AccentBox {...props}>
      <Flex align="center">
        <Flex direction="column" grow>
          <Heading size="l">Heading</Heading>
          <Text color="dark">
            <b>{dummyText.short}</b>
          </Text>
        </Flex>
        <Link target="_blank" href="#" color="dark">
          Link
        </Link>
      </Flex>
    </AccentBox>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue"
  },
  render: props => <AccentBox {...props}>
      <IconStar />
      <Section>
        <Heading>Heading</Heading>
        <Text>{dummyText.long}</Text>
        <Link>Link</Link>
      </Section>
    </AccentBox>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: "green"
  },
  render: props => <AccentBox {...props}>
      <IconStar />
      <Section>
        <Heading>Heading</Heading>
        <Text>{dummyText.long}</Text>
        <Link>Link</Link>
      </Section>
    </AccentBox>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "blue"
  },
  render: props => <LayoutCard>
      <AccentBox {...props}>
        <IconStar />
        <Section>
          <Heading>Heading</Heading>
          <Text>{dummyText.long}</Text>
          <Link>Link</Link>
        </Section>
      </AccentBox>
    </LayoutCard>
}`,...l.parameters?.docs?.source}}};const X=["Default","Gradient","WithIcon","Green","InLayoutCard"];export{c as Default,a as Gradient,m as Green,l as InLayoutCard,d as WithIcon,X as __namedExportsOrder,V as default};
