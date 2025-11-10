import{j as e}from"./iframe-BFS0V-7K.js";import{L as o}from"./LabeledValue-m8r6nqGA.js";import{L as t}from"./Label-B5VHziHb.js";import{C as c}from"./Content-CWdQm9SB.js";import{C as m}from"./CopyButton-Dspux94x.js";import{B as u}from"./Button-C69BF7uv.js";import{I as h}from"./InlineCode-BwCrq_Tn.js";import{L as x}from"./Link-obEopwrC.js";import{C as L,a as j}from"./ContextualHelpTrigger-1bZdijhA.js";import{H as C}from"./Heading-DljESEje.js";import{T as d}from"./Text-Cg-PlNpB.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./index-Cd8SiJSJ.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./context-CL-MWO-e.js";import"./ProgressBar-DZnnPhpU.js";import"./utils-pBfQtTJP.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BzBGzmgt.js";import"./Tooltip-DdLAAoPW.js";import"./ClearPropsContextView-M-FcIVZm.js";import"./OverlayArrow-BWg220ZF.js";import"./useFocusable-DIP3xdGA.js";import"./useControlledState-CfZCIixa.js";import"./useFocusRing-CM3Y5p4v.js";import"./react-children-utilities-BhgYEgbL.js";import"./Action-BkvOgHYi.js";import"./context-B7YXRHOK.js";import"./useStatic-5zK4mpNm.js";import"./browser-DkyXecm8.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./dynamic-D6nHDIyd.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./Button-C0SUbguZ.js";import"./Popover-CRv5SMSH.js";import"./OverlayTrigger-DB1HvpAI.js";import"./Dialog-Cj7jIBKp.js";import"./RSPContexts-vmNR8Bdo.js";import"./Collection-BNdUYhId.js";import"./CollectionBuilder-oqPeank5.js";import"./SelectionIndicator-C95FoYBz.js";import"./Separator-DyL-chbW.js";import"./ControlledNotification-CqVYbY5l.js";import"./EmulatedBoldText-DZMpoDwy.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
