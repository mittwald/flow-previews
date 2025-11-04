import{j as e}from"./iframe-DO9N3msj.js";import{L as o}from"./LabeledValue-DKTcLtzE.js";import{L as t}from"./Label-DMT-VAeC.js";import{C as c}from"./Content-o-E4J5v4.js";import{C as m}from"./CopyButton-D3R6S7E2.js";import{B as u}from"./Button-DK3gLuJ3.js";import{I as h}from"./InlineCode-CitufoKJ.js";import{L as x}from"./Link-CUTcgav-.js";import{C as L,a as j}from"./ContextualHelpTrigger-DSsVPekU.js";import{H as C}from"./Heading-DFXUXxT1.js";import{T as d}from"./Text-D7GNIHqq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./index-BKd7rs_c.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./context-BjTRJu3f.js";import"./ProgressBar-DB2HZm0N.js";import"./utils-Cu-DyEOs.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BWr56wBK.js";import"./Tooltip-CV32lKRB.js";import"./ClearPropsContextView-ClFJoQqW.js";import"./OverlayArrow-01aTrBGz.js";import"./useFocusable-ahyCDO6Q.js";import"./useControlledState-1ES4-sD1.js";import"./useFocusRing-8nZAdgRB.js";import"./react-children-utilities-CCLuUO2m.js";import"./Action-DxmtjQUu.js";import"./context-CvI_nrYK.js";import"./useStatic-KZCckyWk.js";import"./browser-hD6iDIbH.js";import"./getActionGroupSlot-B34s0y1B.js";import"./dynamic-DUGX_GEz.js";import"./LoadingSpinner-k8RqOHze.js";import"./Button-CwTEoZMR.js";import"./Popover-CJ5gJoTU.js";import"./OverlayTrigger-Cc6aFNNE.js";import"./Dialog-D3dWmtLO.js";import"./RSPContexts-dbdihzDr.js";import"./Collection-BqBfIbeS.js";import"./CollectionBuilder-DBX3bBv7.js";import"./SelectionIndicator-BhMymJwE.js";import"./Separator-BF-SYlg1.js";import"./ControlledNotification-ChKUqlSP.js";import"./EmulatedBoldText-CL2lsqyO.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
