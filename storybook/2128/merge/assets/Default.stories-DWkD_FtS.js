import{j as e}from"./iframe-DvmgUBW7.js";import{L as o}from"./LabeledValue-D1U5uPmA.js";import{L as t}from"./Label-Ga4tjpL7.js";import{C as c}from"./Content-BTmNLdH3.js";import{C as m}from"./CopyButton-BrTvetk3.js";import{B as u}from"./Button-C1BHOQWK.js";import{I as h}from"./InlineCode-Bgeced_A.js";import{L as x}from"./Link-CycQML51.js";import{C as L,a as j}from"./ContextualHelpTrigger-CPwLcXd-.js";import{H as C}from"./Heading-CqrprVNa.js";import{T as d}from"./Text-Dbew3mLe.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-iNmw-pXL.js";import"./index-CaPeyytj.js";import"./index-BNqf21ov.js";import"./useLocalizedStringFormatter-xkNVf5KH.js";import"./context-DzqJJy5k.js";import"./ProgressBar-CrOV3NyN.js";import"./utils-BtCbht9n.js";import"./Hidden-9CBDywx2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Dv-oLMD9.js";import"./Tooltip-BCSx2I17.js";import"./ClearPropsContextView-DIwnN3mE.js";import"./OverlayArrow-DmicGHSR.js";import"./useFocusable-CKxgRqhR.js";import"./useControlledState-7pcPESrW.js";import"./useFocusRing-BavcHLfj.js";import"./react-children-utilities-CHnKhwA5.js";import"./Action-BYpc3qQh.js";import"./context-BiUxtsr9.js";import"./useStatic-Jt5HUTTZ.js";import"./browser-DnTWaRxE.js";import"./getActionGroupSlot-BfXlTAt-.js";import"./dynamic-BrPxZX7i.js";import"./LoadingSpinner-DLZner8z.js";import"./Button-mFUbi7ER.js";import"./Popover-CeOTq_Ov.js";import"./OverlayTrigger-BwLKLDhB.js";import"./Dialog-BHVsz8CY.js";import"./RSPContexts-DdvBd_E1.js";import"./Collection-BxeXiNok.js";import"./CollectionBuilder-DyXjZa--.js";import"./SelectionIndicator-C5hL4auF.js";import"./Separator-5Yj5luET.js";import"./ControlledNotification-Bo0kmDiq.js";import"./EmulatedBoldText-xJj6r1Ey.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
