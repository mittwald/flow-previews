import{j as e}from"./iframe-CRkLAjqu.js";import{L as o}from"./LabeledValue-a7txHIua.js";import{L as t}from"./Label-CvxcI9N1.js";import{C as c}from"./Content-RElVSMrp.js";import{C as m}from"./CopyButton-BigcnsSL.js";import{B as u}from"./Button-iYH795Vf.js";import{I as h}from"./InlineCode-Tzhzu6PC.js";import{L as x}from"./Link-Bw_LfIEu.js";import{C as L,a as j}from"./ContextualHelpTrigger-Dp6H1ZMR.js";import{H as C}from"./Heading-y35Y4q5x.js";import{T as d}from"./Text-SnGLDLtK.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./index-CMjPCm5R.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./context-DLoU3qmJ.js";import"./ProgressBar-N5kov_o0.js";import"./utils-BtHHKbwG.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-4dYG6Emm.js";import"./Tooltip-BKVABRbd.js";import"./ClearPropsContextView-C5LrpGQW.js";import"./OverlayArrow-CxWIXwnM.js";import"./useFocusable-ybZYv2TC.js";import"./useControlledState-6rabR8D5.js";import"./useFocusRing-PsHB6P7A.js";import"./react-children-utilities-DrPwd9RA.js";import"./Action-BsqGwbaj.js";import"./context-B-s8oBfA.js";import"./useStatic-CAsZlBox.js";import"./browser-C4srWScu.js";import"./getActionGroupSlot-D4mouN9v.js";import"./dynamic-C-Z2ndaa.js";import"./LoadingSpinner-DRDb2q6e.js";import"./Button-CPrLpUny.js";import"./Popover-JmyjzJuR.js";import"./OverlayTrigger-8Ptq7Mev.js";import"./Dialog-aAfd-0c1.js";import"./RSPContexts-Bb59CEQZ.js";import"./Collection-B5dOcGsH.js";import"./CollectionBuilder-uHK_yZ9p.js";import"./SelectionIndicator-CTOSa6og.js";import"./Separator-ARlWDSvP.js";import"./ControlledNotification-D2TmofCz.js";import"./EmulatedBoldText-UBCiYBJN.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
