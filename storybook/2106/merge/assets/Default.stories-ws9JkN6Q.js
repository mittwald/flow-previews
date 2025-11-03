import{j as e}from"./iframe-DxwcgvDR.js";import{L as o}from"./LabeledValue-BxYfrfye.js";import{L as t}from"./Label-CnQsfVTv.js";import{C as c}from"./Content-CvN0_ss6.js";import{C as m}from"./CopyButton-CZhO6Nhd.js";import{B as u}from"./Button-DpmT-Qin.js";import{I as h}from"./InlineCode-BqeHYcPm.js";import{L as x}from"./Link-DogKVCCD.js";import{C as L,a as j}from"./ContextualHelpTrigger-vkCuzPHd.js";import{H as C}from"./Heading-DPk654Hf.js";import{T as d}from"./Text-0mdbe7by.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./index-BbnRfAJ3.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./context-CGBA4dD2.js";import"./ProgressBar-BcO4kXd3.js";import"./utils-n6_FFOiQ.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CXkzDcrG.js";import"./Tooltip-D_N9SR4J.js";import"./ClearPropsContextView-CAdlfc13.js";import"./OverlayArrow-SVlp-MsH.js";import"./useFocusable-CfD6tvJl.js";import"./useControlledState-6bl2dGVj.js";import"./useFocusRing-CNIgQMUD.js";import"./react-children-utilities-DOiAuRf4.js";import"./Action-BFncm_Jw.js";import"./context-Daw8U4Js.js";import"./useStatic-CjurL4ph.js";import"./browser-Cqe1LxfT.js";import"./getActionGroupSlot-DtMTeAyj.js";import"./dynamic-BXIRoUAY.js";import"./LoadingSpinner-BQdOHNHu.js";import"./Button-DnBmTQ11.js";import"./Popover-C115A6YY.js";import"./OverlayTrigger-DNeJhO1q.js";import"./Dialog-BIYJU2zM.js";import"./RSPContexts-C4NdBiWw.js";import"./Collection-DD9J8E7A.js";import"./CollectionBuilder-Du6oRztu.js";import"./SelectionIndicator-D_z5mUiE.js";import"./Separator-CYgXLQLG.js";import"./ControlledNotification-CDkn9KZJ.js";import"./EmulatedBoldText-Bkaq8qYh.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
