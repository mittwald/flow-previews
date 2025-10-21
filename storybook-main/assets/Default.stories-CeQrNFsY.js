import{j as r}from"./iframe-D_6zdLny.js";import{H as o}from"./Heading-DUx_7A94.js";import{T as i}from"./Text-BucMQu3s.js";import{L as t}from"./Link-Bzdw9Y1F.js";import{A as n}from"./AccentBox-hrO1W2sD.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-BOMWvKE6.js";import{F as g}from"./Flex-Drx9Xd0w.js";import{I as x}from"./IconWarning-L8yPVfI5.js";import{L as u}from"./LayoutCard--_85x9jL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./index-CT6ZSgMj.js";import"./Heading-CDoCnjT3.js";import"./RSPContexts-0i8aci_3.js";import"./utils-PQD-Pczy.js";import"./browser-D7xr6uHh.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./Text-YMXmaajA.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Action-CDIAK01E.js";import"./context-BfwnKq6d.js";import"./useStatic-MV172PRo.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./dynamic-fYYLqg_-.js";import"./Dialog-RcAnAvxk.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";const ur={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},m={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},d={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const hr=["Default","Gradient","WithIcon","Green","InLayoutCard"];export{c as Default,a as Gradient,d as Green,p as InLayoutCard,m as WithIcon,hr as __namedExportsOrder,ur as default};
