import{j as e}from"./iframe-BZLAsPNC.js";import{A as t}from"./Alert-BCr_8q75.js";import{H as s}from"./Heading-CmA86V_y.js";import{T as p}from"./Text-oqqebshB.js";import{C as m}from"./Content-D_E52p9K.js";import{B as d}from"./Button-CSRJ_rM3.js";import{A as h}from"./ActionGroup-Co14a4VD.js";import{L as u}from"./LayoutCard-9e-gP-8o.js";import{S as c}from"./Section-CMyrzkHY.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-wpFTQr76.js";import"./IconWarning-BRgKnpuG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./remote-DD9qKW4I.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./context-B1QKiSyt.js";import"./dynamic-DRBl70hS.js";import"./Heading-Bg25gZBW.js";import"./RSPContexts-DRyX1L5k.js";import"./utils-GBJhPEt0.js";import"./browser-D75BLayN.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./useStatic-CJRmLxnl.js";import"./ContextMenuSection-B5_hjl5E.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./Dialog-BHTl5ZpY.js";import"./OverlayArrow-D53qTIEL.js";import"./useControlledState-BdOl-nfx.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";const Ae={title:"Status/Alert",component:t,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},o={render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(d,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(d,{children:"Update"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},i={render:r=>e.jsxs(u,{children:[e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Email address"}),e.jsx(p,{children:l.long})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(p,{children:l.long})]})]}),globals:{backgrounds:"dark"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
