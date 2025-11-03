import{j as r}from"./iframe-CXJD44gU.js";import{H as o}from"./Heading-BqJcdYMf.js";import{T as i}from"./Text-D7qfRA1L.js";import{L as t}from"./Link-DiqcoEP6.js";import{A as n,F as g,L as u}from"./LayoutCard-BQ5ezla0.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-C4fj5Uhb.js";import{I as x}from"./IconWarning-BGBHXtCn.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./index-CRJWytS4.js";import"./RSPContexts-DduoqfxZ.js";import"./utils-BNVflTSU.js";import"./browser-BB5suZC2.js";import"./EmulatedBoldText-BVX9n63_.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./context-FTDoYYrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./Action-3nbS0LG3.js";import"./context-CQFOhjaS.js";import"./useStatic-Dhs2fcV6.js";import"./getActionGroupSlot-B4xny-oM.js";import"./dynamic-By6FwFol.js";import"./Dialog-0oqd1mPP.js";import"./Button-BYCRTXMY.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./OverlayArrow-D2uhXVaI.js";import"./useControlledState-Bnjej2q1.js";import"./Collection-DYOHqOtc.js";import"./CollectionBuilder-D4Pa1_Ag.js";import"./SelectionIndicator-CQbg55hv.js";import"./Separator-FNjaa8bX.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
