import{j as r}from"./iframe-BQyHcTNh.js";import{H as o}from"./Heading-BZf-WkCq.js";import{T as i}from"./Text-_hc15B6K.js";import{L as t}from"./Link-DkKvAa58.js";import{A as n,F as g}from"./Flex-Ci6jEKx7.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{S as l}from"./Section-D4fUAwGu.js";import{I as x}from"./IconWarning-D8COeLpG.js";import{L as u}from"./LayoutCard-D0Isrcq-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./Heading-C-OseSB1.js";import"./RSPContexts-BtdGc8q9.js";import"./utils-CdCPWCHO.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./ContextMenuSection-ZyWidMUH.js";import"./Action-Bi6tM7BN.js";import"./context-B5Yt5ZbD.js";import"./useStatic-CIMbf_kn.js";import"./getActionGroupSlot-DtqoduiB.js";import"./dynamic-V8J33Kah.js";import"./Dialog-CTkyeFiO.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";const gr={title:"Structure/AccentBox",component:n,args:{color:"blue"},render:e=>r.jsx(n,{...e,children:r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.medium}),r.jsx(t,{children:"Link"})]})})},c={},a={args:{color:"gradient"},render:e=>r.jsx(n,{...e,children:r.jsxs(g,{align:"center",children:[r.jsxs(g,{direction:"column",grow:!0,children:[r.jsx(o,{size:"l",children:"Heading"}),r.jsx(i,{color:"dark",children:r.jsx("b",{children:s.short})})]}),r.jsx(t,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},m={args:{color:"blue"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},d={args:{color:"green"},render:e=>r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})},p={args:{color:"blue"},render:e=>r.jsx(u,{children:r.jsxs(n,{...e,children:[r.jsx(x,{}),r.jsxs(l,{children:[r.jsx(o,{children:"Heading"}),r.jsx(i,{children:s.long}),r.jsx(t,{children:"Link"})]})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ur=["Default","Gradient","WithIcon","Green","InLayoutCard"];export{c as Default,a as Gradient,d as Green,p as InLayoutCard,m as WithIcon,ur as __namedExportsOrder,gr as default};
