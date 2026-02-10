import{j as e}from"./iframe--WfF81Kk.js";import{A as t}from"./Alert-BuK58xht.js";import{H as s}from"./Heading-CQM1gGXf.js";import{T as p}from"./Text-BQUBTPZI.js";import{C as m}from"./Content-C_KY6eof.js";import{B as d}from"./Button-Csb2zbZD.js";import{A as h}from"./ActionGroup-D33IDY3J.js";import{L as u}from"./LayoutCard-BORce8dE.js";import{S as c}from"./Section-CsSoxbiI.js";import{d as l}from"./dummyText-CX_I_Wpl.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Bc0kQsAW.js";import"./IconWarning-BCj0akvL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./index-C06vQZsJ.js";import"./remote-BYVMC2eP.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./context-BGH-DtkU.js";import"./dynamic-3udm1Ueo.js";import"./Heading-DpPfmaJp.js";import"./RSPContexts-D6CGk5en.js";import"./utils-DjCd38Rb.js";import"./browser-DaXQhhrD.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./LoadingSpinner-BoJLilDa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cdObnXIw.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuA8A2Wl.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocusable-CYWdX1lX.js";import"./getActionGroupSlot-DP_ddCf6.js";import"./useStatic-DJuRNbYT.js";import"./ContextMenuSection-BxJIjSzE.js";import"./Action-B7MToOoF.js";import"./context-BQE_egpR.js";import"./Dialog-C_VjyLol.js";import"./OverlayArrow-zU7WmGPw.js";import"./useControlledState-33z9BU53.js";import"./Collection-WxHe4g5S.js";import"./CollectionBuilder-D8350JFC.js";import"./SelectionIndicator-BGWzSObI.js";import"./Separator-C9zEzG3T.js";import"./SelectionManager-D0POi5wt.js";import"./useEvent-CGxaeV4J.js";import"./useCollator-lImoFu1C.js";import"./FocusScope-D57rWz_c.js";import"./VisuallyHidden-BWpEL0hX.js";const Ae={title:"Status/Alert",component:t,argTypes:{status:{control:"inline-radio",options:["info","success","warning","danger"]}},args:{status:"info"}},o={render:r=>e.jsx(t,{...r,children:e.jsx(s,{children:"Email address has been archived"})})},n={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsx(d,{children:"Update email address"})]})]})},a={render:r=>e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsxs(m,{children:["As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address.",e.jsxs(h,{children:[e.jsx(d,{children:"Update"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Delete"})]})]})]})},i={render:r=>e.jsxs(u,{children:[e.jsxs(t,{...r,children:[e.jsx(s,{children:"Email address has been archived"}),e.jsx(m,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Email address"}),e.jsx(p,{children:l.long})]}),e.jsxs(c,{children:[e.jsx(s,{children:"Spam protection"}),e.jsx(p,{children:l.long})]})]}),globals:{backgrounds:"dark"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
