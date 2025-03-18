import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{H as a}from"./Heading-BNmY3x36.js";import{T as c}from"./Text-CyHz7mQc.js";import{L as m}from"./Link-BcFjnb0O.js";import{A as e}from"./AccentBox-QNCmISdi.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{S as d}from"./Section-BwWVJ-3c.js";import{F as l}from"./Flex-CO6xmqZO.js";import"./IconApp-DCJnWfXR.js";import{I as y}from"./IconWarning-C5oUT_gq.js";import{L as A}from"./LayoutCard-DCqdOVxP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaA12yFO.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./Heading-gLVfuOEw.js";import"./RSPContexts-8O1fXkhd.js";import"./utils-DcjC1aig.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Wrap-DQq6jo70.js";import"./Text-UNZxgqCx.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CpMfsvjg.js";import"./useFocus-DDYx82Z-.js";import"./useFocusRing-Cr5iSysj.js";import"./useFocusable-OU46m6e2.js";import"./ContextMenuSection-DuUBxS7L.js";import"./Action-DufWMBOU.js";import"./context-gLf2glmD.js";import"./useStatic-OjKlncZ_.js";import"./getActionGroupSlot-Sw8Lj_V0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DEbGOM_C.js";import"./Button-BHqGe8AQ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./useLabel-DPCVhyCF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-CkOHZ0-t.js";import"./CollectionBuilder-D9aYqsG0.js";import"./Separator-N7XAafOV.js";import"./useOverlayTriggerState-1oMTpBbI.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BEAD03b4.js";import"./useEvent-KizPqgSt.js";import"./useCollator-Sm__dF4I.js";import"./FocusScope-CozWae-u.js";import"./VisuallyHidden-CSEvhSst.js";const Fr={title:"Structure/AccentBox",component:e,args:{color:"blue"},render:o=>r.jsx(e,{...o,children:r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.medium}),r.jsx(m,{children:"Link"})]})})},n={},t={args:{color:"gradient"},render:o=>r.jsx(e,{...o,children:r.jsxs(l,{align:"center",children:[r.jsxs(l,{direction:"column",grow:!0,children:[r.jsx(a,{size:"l",children:"Heading"}),r.jsx(c,{color:"dark",children:r.jsx("b",{children:p.short})})]}),r.jsx(m,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},i={args:{color:"blue"},render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{}),r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.long}),r.jsx(m,{children:"Link"})]})]})},s={args:{color:"blue"},render:o=>r.jsx(A,{children:r.jsxs(e,{...o,children:[r.jsx(y,{}),r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.long}),r.jsx(m,{children:"Link"})]})]})})};var x,g,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,j,L;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(L=(j=t.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var k,f,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(f=i.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,T,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Cr=["Default","Gradient","WithIcon","InLayoutCard"];export{n as Default,t as Gradient,s as InLayoutCard,i as WithIcon,Cr as __namedExportsOrder,Fr as default};
