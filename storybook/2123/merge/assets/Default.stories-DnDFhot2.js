import{j as r}from"./iframe-Bb2Dt4gO.js";import{H as o}from"./Heading-BwEM0wnm.js";import{T as i}from"./Text-DlHja6rG.js";import{L as t}from"./Link-BMpobd2R.js";import{A as n,F as g,L as u}from"./LayoutCard-YpKgl9nW.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-C0-TyT9T.js";import{I as x}from"./IconWarning-ncqjKY0i.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./index-P4MnPsl7.js";import"./RSPContexts-ScA0jBqq.js";import"./utils-BRWgyZeC.js";import"./browser-C45ETDbe.js";import"./EmulatedBoldText-BkxAkbDy.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./context-OBblbX9f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./Action-Bp0Zr2aj.js";import"./context-CWQK-DX0.js";import"./useStatic-CQaBBZXk.js";import"./getActionGroupSlot-BbHFGHkf.js";import"./dynamic-BQ6J2UuW.js";import"./Dialog-D5KTniQT.js";import"./Button-BSQSoIIB.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./OverlayArrow-BPrkRyf_.js";import"./useControlledState-C9bMDpWq.js";import"./Collection-By7hYb7j.js";import"./CollectionBuilder-DXrUA6kr.js";import"./SelectionIndicator-BSio2Upk.js";import"./Separator-BddUv5iq.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
