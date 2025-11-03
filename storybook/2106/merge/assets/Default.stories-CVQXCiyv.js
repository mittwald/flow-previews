import{j as r}from"./iframe-9u6Ufs56.js";import{H as o}from"./Heading-3nkwrjYk.js";import{T as i}from"./Text-DBIGrc3m.js";import{L as t}from"./Link-Brltyk4S.js";import{A as n,F as g,L as u}from"./LayoutCard-rFftX_5x.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-Czu0clYN.js";import{I as x}from"./IconWarning-e2U-5o25.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./index-B3MDoUBn.js";import"./RSPContexts-CT2QL-I8.js";import"./utils-8ZPSUmH_.js";import"./browser-BeFavaxk.js";import"./EmulatedBoldText-DTSNQZDs.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Dcst_k34.js";import"./useFocusable-1HLi2XCg.js";import"./Action-M6Kgfb_M.js";import"./context-C-QTHw1p.js";import"./useStatic-DAyA5uHy.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./dynamic-CQrWC-Om.js";import"./Dialog-BeTHWiir.js";import"./Button-BhX9jjPy.js";import"./ProgressBar-x9yI0Gbi.js";import"./Hidden-BVK4GKwb.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useControlledState-BzuGU0N9.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
