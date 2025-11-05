import{j as r}from"./iframe-BnYuPSwa.js";import{H as o}from"./Heading-4zkTqPYo.js";import{T as i}from"./Text-DmoS4eOG.js";import{L as t}from"./Link-CQXfsiwR.js";import{A as n,F as g,L as u}from"./LayoutCard-BqXQhFvn.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-DPXS4_zS.js";import{I as x}from"./IconWarning-BustMFuX.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./index-CqvtBndu.js";import"./RSPContexts-DdoqaBcc.js";import"./utils-DoWPBSSq.js";import"./browser-Bkf_ja0R.js";import"./EmulatedBoldText-DyenmRAR.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./context-DQlYt1c9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./Action-DJ16dVnI.js";import"./context-CLEKsYXA.js";import"./useStatic-B3gZPUVa.js";import"./getActionGroupSlot-DLw-maV0.js";import"./dynamic-Dm-4Ig_M.js";import"./Dialog-BiHrEAWw.js";import"./Button-C47MeqAR.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";const $={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
