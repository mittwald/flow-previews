import{j as e}from"./iframe-BnYuPSwa.js";import{L as o}from"./LabeledValue-BHKpE3hG.js";import{L as t}from"./Label-BsOGPmFL.js";import{C as c}from"./Content-B8GWvRnh.js";import{C as m}from"./CopyButton-C-PHfocO.js";import{B as u}from"./Button-D7B2hjaJ.js";import{I as h}from"./InlineCode-CNZzcUkk.js";import{L as x}from"./Link-CQXfsiwR.js";import{C as L,a as j}from"./ContextualHelpTrigger-9AdY9RaJ.js";import{H as C}from"./Heading-4zkTqPYo.js";import{T as d}from"./Text-DmoS4eOG.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./index-CqvtBndu.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./context-DQlYt1c9.js";import"./ProgressBar-BRViR90l.js";import"./utils-DoWPBSSq.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BustMFuX.js";import"./Tooltip-bYhq-tOp.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useFocusable-bs-iuI5B.js";import"./useControlledState-Cpob7QcG.js";import"./useFocusRing-CPn0GoCO.js";import"./react-children-utilities-DSiaUIOe.js";import"./Action-DJ16dVnI.js";import"./context-CLEKsYXA.js";import"./useStatic-B3gZPUVa.js";import"./browser-Bkf_ja0R.js";import"./getActionGroupSlot-DLw-maV0.js";import"./dynamic-Dm-4Ig_M.js";import"./LoadingSpinner-14_SbsZZ.js";import"./Button-C47MeqAR.js";import"./Popover-CIQAqIV0.js";import"./OverlayTrigger-dzvMh6qS.js";import"./Dialog-BiHrEAWw.js";import"./RSPContexts-DdoqaBcc.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./ControlledNotification-DFyhdCgQ.js";import"./EmulatedBoldText-DyenmRAR.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
