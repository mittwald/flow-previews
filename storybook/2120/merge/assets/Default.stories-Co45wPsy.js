import{j as e}from"./iframe-C_rr3K7B.js";import{L as o}from"./LabeledValue-CDQ_6OLg.js";import{L as t}from"./Label-vkrcFW64.js";import{C as c}from"./Content-RrSqeXWH.js";import{C as m}from"./CopyButton-ClrMNUuq.js";import{B as u}from"./Button-DCjyK8f2.js";import{I as h}from"./InlineCode-DkUomSPt.js";import{L as x}from"./Link-RtgN4cbU.js";import{C as L,a as j}from"./ContextualHelpTrigger-Cf4bGUz3.js";import{H as C}from"./Heading-zxknCt_n.js";import{T as d}from"./Text-BsSJXbbR.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./ProgressBar-BfFuAkhC.js";import"./utils-C4h6fUQR.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DU_TTROa.js";import"./Tooltip-GUcZ5Baq.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./OverlayArrow-RRaewUl9.js";import"./useFocusable-BgYFD5eH.js";import"./useControlledState-D5USuG2w.js";import"./useFocusRing-BdtY4hiP.js";import"./react-children-utilities-DT9uJVie.js";import"./Action-CIZ0694o.js";import"./context-D3P4luPW.js";import"./useStatic-BCUpaw5v.js";import"./browser-E0G6tvzo.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./dynamic-BFlSKedW.js";import"./LoadingSpinner-CRVrq6rR.js";import"./Button-B3n1VqY_.js";import"./Popover-C6S62YvO.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./Dialog-YSlPVfGO.js";import"./RSPContexts-zcKIqYdj.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./ControlledNotification-DUF7vXg5.js";import"./EmulatedBoldText-C3mdhbnh.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
