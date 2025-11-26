import{j as r}from"./iframe-Bdha8Dos.js";import{H as o}from"./Heading-D7df73UY.js";import{T as i}from"./Text-DoSb3lbH.js";import{L as t}from"./Link-Bw8zZtLF.js";import{A as n,F as g}from"./Flex-h-xfZw1g.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as p}from"./Section-Yfvm1zIN.js";import{I as x}from"./IconWarning-BYkVHlH3.js";import{L as u}from"./LayoutCard-CsMFtYY4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./index-Dy-GF6N8.js";import"./RSPContexts-CAeHzh3l.js";import"./utils-DRkQtTgN.js";import"./browser-Dc0PT9zF.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./context-3OjubdPM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./context-5Dj5ASGX.js";import"./Button-BzZ_Ef_b.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./useStatic-BN3Mf5gg.js";import"./dynamic-DRPW6Rpg.js";const V={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},d={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},m={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},l={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(p,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
