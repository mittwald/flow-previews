import{j as r}from"./iframe-B0zV29Ol.js";import{H as o}from"./Heading-DWho-b1a.js";import{T as i}from"./Text-DNMpJh06.js";import{L as t}from"./Link-CXiCVjqZ.js";import{A as n,F as g,L as u}from"./LayoutCard-BpoFrQi6.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-c6k8H6l6.js";import{I as x}from"./IconWarning-DElUfIyP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BsAK2ls3.js";import"./index-BYMF1jLH.js";import"./index-Bap8DgrM.js";import"./RSPContexts-C-9bKQ2R.js";import"./utils-rMLWZEZ9.js";import"./browser-D-MgOzku.js";import"./EmulatedBoldText-Z1g7CMab.js";import"./useLocalizedStringFormatter-DAIqrt-k.js";import"./context-CJ74nGTM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BkkYWklx.js";import"./useFocusable-CfhrO7WS.js";import"./Action-D4O6uaws.js";import"./context-UMFNSY2K.js";import"./useStatic-CBy74o7G.js";import"./getActionGroupSlot-CT-ODnzp.js";import"./dynamic-BDcWjd3V.js";import"./Dialog-CW1wDwL9.js";import"./Button-B7c7aZAn.js";import"./ProgressBar-BR-tdA5k.js";import"./Hidden-CLtGdy91.js";import"./OverlayArrow-CvdWoYZq.js";import"./useControlledState-BMTFuSH8.js";import"./Collection-xKdqQ5gP.js";import"./CollectionBuilder-CGg5wqK9.js";import"./SelectionIndicator-BwpruQVu.js";import"./Separator-DZUrDISg.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const rr=["Default","Gradient","WithIcon","Green","InLayoutCard"];export{c as Default,a as Gradient,m as Green,p as InLayoutCard,d as WithIcon,rr as __namedExportsOrder,$ as default};
