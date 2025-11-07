import{j as r}from"./iframe-C_rr3K7B.js";import{H as o}from"./Heading-zxknCt_n.js";import{T as i}from"./Text-BsSJXbbR.js";import{L as t}from"./Link-RtgN4cbU.js";import{A as n,F as g,L as u}from"./LayoutCard-8_hd1wkR.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-Bi-R-_iR.js";import{I as x}from"./IconWarning-DU_TTROa.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./RSPContexts-zcKIqYdj.js";import"./utils-C4h6fUQR.js";import"./browser-E0G6tvzo.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./Action-CIZ0694o.js";import"./context-D3P4luPW.js";import"./useStatic-BCUpaw5v.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./dynamic-BFlSKedW.js";import"./Dialog-YSlPVfGO.js";import"./Button-B3n1VqY_.js";import"./ProgressBar-BfFuAkhC.js";import"./Hidden-BRyX-IhD.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
