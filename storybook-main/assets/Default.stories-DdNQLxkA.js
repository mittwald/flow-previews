import{j as e}from"./iframe-Ye-9ROja.js";import{L as o}from"./LabeledValue-xGe-YROA.js";import{L as t}from"./Label-BvzLFnRt.js";import{C as c}from"./Content-J12nk9kF.js";import{C as m}from"./CopyButton-B5KxU-BY.js";import{B as u}from"./Button-CSXrQkPS.js";import{I as h}from"./InlineCode-C6TTos-N.js";import{L as x}from"./Link-IU6OuunG.js";import{C as L,a as j}from"./ContextualHelpTrigger-qqmLNRdq.js";import{H as C}from"./Heading-ETrbJF6H.js";import{T as d}from"./Text-Bsxj-TZS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVMSJKid.js";import"./index-BD2FLLtY.js";import"./index-MGNRFzGq.js";import"./useLocalizedStringFormatter-8EdZld9N.js";import"./context-BMOJ7e9i.js";import"./ProgressBar-Dc-dQlrj.js";import"./utils-CF6YsxS1.js";import"./Hidden-CYSIeRK5.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C5ScV98r.js";import"./Tooltip-C4AwSevr.js";import"./ClearPropsContextView-P5ekssIx.js";import"./OverlayArrow-D0NjRXEq.js";import"./useFocusable-CkKnxemF.js";import"./useControlledState-DL7WEOig.js";import"./useFocusRing-CJrPyvnd.js";import"./react-children-utilities-Cr04RBVg.js";import"./Action-qygqR_UC.js";import"./context-CZJE5_Px.js";import"./useStatic-BBGAeEE_.js";import"./browser-BcPcK0wn.js";import"./getActionGroupSlot-Dd6c_7lB.js";import"./dynamic-1eLzqo0n.js";import"./LoadingSpinner-BKm3aKU7.js";import"./Button-COBj9UNQ.js";import"./Popover-01hMVctL.js";import"./OverlayTrigger-7A3ebmst.js";import"./Dialog-DBZH8ijj.js";import"./RSPContexts-CFmCNefB.js";import"./Collection-iSYWZ0WM.js";import"./CollectionBuilder-CD94NaG6.js";import"./SelectionIndicator--h8__Bgl.js";import"./Separator-BZhvxbZo.js";import"./ControlledNotification-D1ICvP0t.js";import"./EmulatedBoldText-Bx43jLQW.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
