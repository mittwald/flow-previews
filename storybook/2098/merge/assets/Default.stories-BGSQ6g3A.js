import{j as e}from"./iframe-CUHqcL_I.js";import{L as o}from"./LabeledValue-vl-aQtEh.js";import{L as t}from"./Label-CftDOVkr.js";import{C as c}from"./Content-TYeYRqFP.js";import{C as m}from"./CopyButton-BJJJXXgW.js";import{B as u}from"./Button-DrygTKxs.js";import{I as h}from"./InlineCode-CJA2KdA8.js";import{L as x}from"./Link-DkZTrzTy.js";import{C as L,a as j}from"./ContextualHelpTrigger-D0Te7oiW.js";import{H as C}from"./Heading-Do04wJKe.js";import{T as d}from"./Text-9dBC56cL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BjSKuQCX.js";import"./index-CrtpoxY-.js";import"./index-CTAmePsE.js";import"./useLocalizedStringFormatter-CdK5FACb.js";import"./context-DsJ462Ut.js";import"./ProgressBar-CSMSR9VB.js";import"./utils-yOUeLBa9.js";import"./Hidden-DlQVfkRs.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C3AAIkW7.js";import"./Tooltip-Dn4txEtj.js";import"./ClearPropsContextView-BgTB1xWu.js";import"./OverlayArrow-BTviaJ6o.js";import"./useFocusable-BfYOI4CR.js";import"./useControlledState-CnBvEePG.js";import"./useFocusRing-DaG9LpkP.js";import"./react-children-utilities-CXfUQI5d.js";import"./Action-YrFh6m1g.js";import"./context-D0yqdMla.js";import"./useStatic-D0HQJKJl.js";import"./browser-Cw9CdHqj.js";import"./getActionGroupSlot-C3SbOV1Z.js";import"./dynamic-B87jRkTU.js";import"./LoadingSpinner-tg8gDUA6.js";import"./Button-Gx1b59X2.js";import"./Popover-BKsJ_j8S.js";import"./OverlayTrigger-CCqikpvI.js";import"./Dialog-CfYxSPof.js";import"./RSPContexts-CQETDyCZ.js";import"./Collection-BRy2AcbC.js";import"./CollectionBuilder-BO8DlF0S.js";import"./SelectionIndicator-Qn1nfVf2.js";import"./Separator-CNp-Wjum.js";import"./ControlledNotification-ZZQB_4VO.js";import"./EmulatedBoldText-3j1WcMoY.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
