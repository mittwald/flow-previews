import{j as r}from"./iframe-DxjJvypA.js";import{H as o}from"./Heading-BRsOw7TR.js";import{T as i}from"./Text-CGLUa4sd.js";import{L as t}from"./Link-DMUApF-a.js";import{A as n,F as g,L as u}from"./LayoutCard-aWGkBZVt.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as p}from"./Section-B6nN9o_0.js";import{I as x}from"./IconWarning-BlszW1tj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./index-12LB0401.js";import"./RSPContexts-BduYfYam.js";import"./utils-6KDkR0i-.js";import"./browser-CB6HLjfz.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./context-CTfXc2Zo.js";import"./Button-nEfrx5gJ.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./Collection-_X54BM7-.js";import"./CollectionBuilder-Bm_NDCjy.js";import"./SelectionIndicator-CSBpDXmM.js";import"./Separator-DoMs1cQk.js";import"./useStatic-iE5J9zsV.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./dynamic-BdL6WG8t.js";const V={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},l={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
