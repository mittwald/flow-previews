import{j as r}from"./iframe-D6fHsxXv.js";import{H as o}from"./Heading-CN7gV4ri.js";import{T as i}from"./Text-BlUe4lOx.js";import{L as t}from"./Link-BXLnihOz.js";import{A as n,F as g}from"./Flex-Bnwwl7yh.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as p}from"./Section-DZa8lXDk.js";import{I as x}from"./IconWarning-BQPhDOnw.js";import{L as u}from"./LayoutCard-3KlgAbCz.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./RSPContexts-ot9YLsND.js";import"./utils-CX0v46bh.js";import"./browser-CwuXyXeK.js";import"./EmulatedBoldText-C3KADN9z.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./context-B25Uysh-.js";import"./Button-CGoM5cNA.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./useStatic-ZhhRmIwk.js";import"./dynamic-BLI65pIy.js";const V={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},l={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
