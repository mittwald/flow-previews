import{j as r}from"./iframe-Cn_Uksv1.js";import{H as o}from"./Heading-BQmLpAQ1.js";import{T as i}from"./Text-D6EVKQHX.js";import{L as t}from"./Link-BSO-Q76I.js";import{A as n,F as g,L as u}from"./LayoutCard-CnUuE-1Z.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-Wl51SmLg.js";import{I as x}from"./IconWarning-ktzgJVul.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CoFR225t.js";import"./index-BOejRIbk.js";import"./index-C0zdnCAL.js";import"./RSPContexts-CKwSRM_H.js";import"./utils-B-f9gd93.js";import"./browser-BnRg_GS1.js";import"./EmulatedBoldText-CxLJaoXr.js";import"./useLocalizedStringFormatter-m-f5OqYO.js";import"./context-B2OLF-YE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DLygjq4p.js";import"./useFocusable-DAjGW8_c.js";import"./Action-Drtylt4n.js";import"./context-CovFRnRg.js";import"./useStatic-CJPRi5oj.js";import"./getActionGroupSlot-DY0CPGpV.js";import"./dynamic-DNsdEAu1.js";import"./Dialog-BecCL6sR.js";import"./Button-FEoS725w.js";import"./ProgressBar-DsWps5dj.js";import"./Hidden-BL9AL94n.js";import"./OverlayArrow-xQHCsek7.js";import"./useControlledState-CW1MTAna.js";import"./Collection-ClRJO0M5.js";import"./CollectionBuilder-Bhf_01Mr.js";import"./SelectionIndicator-BiXza4Fo.js";import"./Separator-Czf3nTWx.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
