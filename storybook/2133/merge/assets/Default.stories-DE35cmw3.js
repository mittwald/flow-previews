import{j as r}from"./iframe-C60aMdie.js";import{H as o}from"./Heading-DAaBZvd2.js";import{T as i}from"./Text-SUPQTMUT.js";import{L as t}from"./Link-lNOdoot_.js";import{A as n,F as g,L as u}from"./LayoutCard-BHGne7SD.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as p}from"./Section-BTXSJ-5X.js";import{I as x}from"./IconWarning-B5fkZC-l.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./index-CLR1PkMI.js";import"./RSPContexts-DTGtZjZs.js";import"./utils-BQFwVYY5.js";import"./browser-CNA-G9XW.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./context-DSrUG3BE.js";import"./Button-CvbHAn2i.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./useStatic-vNm-dgAB.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./dynamic-CVq1BkmJ.js";const V={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},l={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
