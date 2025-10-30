import{j as e}from"./iframe-PDaUHho1.js";import{L as o}from"./LabeledValue-lvjpv348.js";import{L as t}from"./Label-BV0OGa_g.js";import{C as c}from"./Content-BBxZEkAS.js";import{C as m}from"./CopyButton-DGO3kvs8.js";import{B as u}from"./Button-C5eOeaT9.js";import{I as h}from"./InlineCode-xDBHCugB.js";import{L as x}from"./Link-DFMuHwQ1.js";import{C as L,a as j}from"./ContextualHelpTrigger-B-T84-qA.js";import{H as C}from"./Heading-CDhtmS_q.js";import{T as d}from"./Text-PjSitUb9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./index-B4HwJOZh.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./context-DBDDiU0I.js";import"./ProgressBar-m4wkDJ9q.js";import"./utils-WYXKBT_h.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B0hQIuUq.js";import"./Tooltip-B0d05Nt9.js";import"./ClearPropsContextView-DBaaVQ6i.js";import"./OverlayArrow-j70_eukt.js";import"./useFocusable-CU77Oyp_.js";import"./useControlledState-DpuOrhgy.js";import"./useFocusRing-msSK4oeu.js";import"./react-children-utilities-DeOMbJlb.js";import"./Action-BuqSGnOY.js";import"./context-BGWGXkWs.js";import"./useStatic-UwW6yb2T.js";import"./browser-Dn1Bftrm.js";import"./getActionGroupSlot-BbmM7byy.js";import"./dynamic-DqsoKxlb.js";import"./LoadingSpinner-bLHLQdUH.js";import"./Button-vCn3sloq.js";import"./Popover-CQRfq8Pn.js";import"./OverlayTrigger-D2bNYkcD.js";import"./Dialog-Bz5XATVl.js";import"./RSPContexts-DnH8q5jT.js";import"./Collection-CoTpEGUK.js";import"./CollectionBuilder-CiodENHi.js";import"./SelectionIndicator-B4sxL3Ui.js";import"./Separator-BOyasXxD.js";import"./ControlledNotification-BKShNQFf.js";import"./EmulatedBoldText-DeDAxtsF.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>Project</Label>
      <Content>My proSpace</Content>
      <CopyButton text="My proSpace" />
    </LabeledValue>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>IP address</Label>
      <InlineCode>127.0.0.1</InlineCode>
      <CopyButton text="127.0.0.1" />
    </LabeledValue>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>Domain</Label>
      <Link>https://mittwald.de</Link>
      <CopyButton text="https://mittwald.de" />
    </LabeledValue>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>Support pin</Label>
      <Button variant="soft" color="secondary">
        Generate
      </Button>
    </LabeledValue>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue>
      <Label>
        Role
        <ContextualHelpTrigger>
          <Button />
          <ContextualHelp {...props}>
            <Heading>Rights & roles</Heading>
            <Text>
              Each user profile is assigned a role in mStudio for each project
              and/or organization. This allows you to work in a completely new
              and modern way.
            </Text>
            <Link>Learn more</Link>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
      <Text>Admin</Text>
    </LabeledValue>
}`,...l.parameters?.docs?.source}}};const xe=["Default","WithCopyButton","WithInlineCode","WithLink","WithButton","WithContextualHelp"];export{n as Default,p as WithButton,l as WithContextualHelp,a as WithCopyButton,s as WithInlineCode,i as WithLink,xe as __namedExportsOrder,ue as default};
