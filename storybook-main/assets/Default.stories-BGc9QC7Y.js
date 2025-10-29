import{j as e}from"./iframe-Dpfie29P.js";import{L as o}from"./LabeledValue-BM1xg6ZM.js";import{L as t}from"./Label-DfaRysuH.js";import{C as c}from"./Content-DRVAYpwC.js";import{C as m}from"./CopyButton-DKsj3u1b.js";import{B as u}from"./Button-CP1CQ4aA.js";import{I as h}from"./InlineCode-DOpCWYG9.js";import{L as x}from"./Link-CNC8R4gB.js";import{C as L,a as j}from"./ContextualHelpTrigger-CnpzHhgF.js";import{H as C}from"./Heading-eNsITwkI.js";import{T as d}from"./Text-BxUYsUAw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cjzkqjb4.js";import"./index-__VJVmNO.js";import"./index-B8L1MmPw.js";import"./useLocalizedStringFormatter-DKCw3c-I.js";import"./context-CImZbjU9.js";import"./ProgressBar-DBQgu7rG.js";import"./utils-ByCVrYF8.js";import"./Hidden-X2etvrQI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DahfVj-v.js";import"./Tooltip-S93CBPGm.js";import"./ClearPropsContextView-xbn_SAqK.js";import"./OverlayArrow-tgf2ia9L.js";import"./useFocusable-MRbdgJr0.js";import"./useControlledState-B9oskcjG.js";import"./useFocusRing-B3ev5CsH.js";import"./react-children-utilities-BzUwYgAN.js";import"./Action-C_vTBufy.js";import"./context-D7kPYOyQ.js";import"./useStatic-_lGyJa-K.js";import"./browser-SX7l3t_S.js";import"./getActionGroupSlot-BIjlchTd.js";import"./dynamic-CxKv4_uB.js";import"./LoadingSpinner-BvFhoBs5.js";import"./Button-CE70VFoQ.js";import"./Popover-DPNrzN76.js";import"./OverlayTrigger-B5J3YKQv.js";import"./Dialog-D4TBWAAb.js";import"./RSPContexts-Dy6WsHjT.js";import"./Collection-DAHgHC5D.js";import"./CollectionBuilder-CVpE0_tX.js";import"./SelectionIndicator-DD22eJg1.js";import"./Separator-zYh5FghF.js";import"./ControlledNotification-4HAxUIZG.js";import"./EmulatedBoldText-DQbMaGdb.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
