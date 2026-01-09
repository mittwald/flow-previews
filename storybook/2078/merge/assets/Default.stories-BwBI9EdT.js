import{j as e}from"./iframe-BoA7YzYm.js";import{A as t}from"./Alert-BO3QwbKo.js";import{H as s}from"./Heading-gW7z3NjW.js";import{T as p}from"./Text-Dcujjsgx.js";import{C as m}from"./Content-DmZtnxaN.js";import{B as d}from"./Button-BKFimoLG.js";import{A as h}from"./ActionGroup-CAgPe75f.js";import{L as u}from"./LayoutCard-4nqTAfN3.js";import{S as c}from"./Section-MYLyhPiL.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Cq_v5HPU.js";import"./IconWarning-Cm4x5FHH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./index-C8IfwtBf.js";import"./remote-W2BsjsJq.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./dynamic-DYpyzP7H.js";import"./Heading-BxB-LiTB.js";import"./RSPContexts-D0KJsdCX.js";import"./utils-CbCfmbCJ.js";import"./browser--2iaZute.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./useStatic-BAyQxveA.js";import"./ContextMenuSection-CVwpYLx9.js";import"./Action-DzFCrVY1.js";import"./context-Cs30ZfjP.js";import"./Dialog-BDOoN61w.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";const Ae={title:"Status/Alert",component:t,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},o={render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(d,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(d,{children:"Update"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},i={render:r=>e.jsxs(u,{children:[e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Email address"}),e.jsx(p,{children:l.long})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(p,{children:l.long})]})]}),globals:{backgrounds:"dark"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
    </Alert>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <Button>Update email address</Button>
      </Content>
    </Alert>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
        <ActionGroup>
          <Button>Update</Button>
          <Button variant="soft" color="secondary">
            Delete
          </Button>
        </ActionGroup>
      </Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <LayoutCard>
      <Alert {...props}>
        <Heading>Email address has been archived</Heading>
        <Content>
          As your domain has been deleted, this email address has been archived.
          To be able to send and receive emails, you must rename the address.
        </Content>
      </Alert>
      <Section>
        <Heading>Email address</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
      <Section>
        <Heading>Spam protection</Heading>
        <Text>{dummyText.long}</Text>
      </Section>
    </LayoutCard>,
  globals: {
    backgrounds: "dark"
  }
}`,...i.parameters?.docs?.source}}};const je=["Default","WithContent","WithActionGroup","AboveSections"];export{i as AboveSections,o as Default,a as WithActionGroup,n as WithContent,je as __namedExportsOrder,Ae as default};
