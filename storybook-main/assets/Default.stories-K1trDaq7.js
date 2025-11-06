import{j as r}from"./iframe-CPn2ZlG8.js";import{H as o}from"./Heading-BzbKq0dK.js";import{T as i}from"./Text-6RCNpXVe.js";import{L as t}from"./Link-DVlBL-qV.js";import{A as n,F as g,L as u}from"./LayoutCard-C_hSjeDr.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-K5CfbtJu.js";import{I as x}from"./IconWarning-BTNOc1CF.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./index-B0eWxAoc.js";import"./RSPContexts-CJHyh8nT.js";import"./utils-DBul4rcK.js";import"./browser-Cl13ZrDl.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./context-BiAR75ic.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./Action-Dgdncsxu.js";import"./context-CgTN8SSG.js";import"./useStatic-BnTfOIpp.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./dynamic-CmzXv2ZH.js";import"./Dialog-CXw6CUzT.js";import"./Button-Di4iIPFk.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
