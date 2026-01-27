import{j as e}from"./iframe-BbrP11p-.js";import{A as t}from"./Alert-r1DgpYFd.js";import{H as s}from"./Heading-DRj7axTi.js";import{T as p}from"./Text-BLzGfhm5.js";import{C as m}from"./Content-BciwZ-cK.js";import{B as d}from"./Button-D_6ZCoU5.js";import{A as h}from"./ActionGroup-aeCzi1SV.js";import{L as u}from"./LayoutCard-xgXm51j4.js";import{S as c}from"./Section-OZiyRnMf.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-B3ByzjK4.js";import"./IconWarning-BeRGE0lU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./remote-BUE50-N_.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./dynamic-CazQQjW9.js";import"./Heading-qDkwaMZ2.js";import"./RSPContexts-D7TvdvVL.js";import"./utils-CfXF9mMB.js";import"./browser-CKsvW9Gw.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VHqnVNy0.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocusable-ssdBLHPa.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./useStatic-DG6eeeN5.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./Dialog-BH0tiGTi.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";const Ae={title:"Status/Alert",component:t,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},o={render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(d,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(d,{children:"Update"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},i={render:r=>e.jsxs(u,{children:[e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Email address"}),e.jsx(p,{children:l.long})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(p,{children:l.long})]})]}),globals:{backgrounds:"dark"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
