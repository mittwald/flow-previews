import{j as e}from"./iframe-BD-_0iQW.js";import{L as o}from"./LabeledValue-BJ2qJMnJ.js";import{L as t}from"./Label-BHkQ1Mdn.js";import{C as c}from"./Content-D_2aIVNk.js";import{C as m}from"./CopyButton-DNanLKd-.js";import{B as u}from"./Button-Daqq-bhO.js";import{I as h}from"./InlineCode-DOqa4S9W.js";import{L as x}from"./Link--c0KgJdM.js";import{C as L,a as j}from"./ContextualHelpTrigger-ChW-2k3k.js";import{H as C}from"./Heading-CKSpOG-B.js";import{T as d}from"./Text-BiRW2WuP.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./context-CVtdtufW.js";import"./ProgressBar-DRtXHYQ6.js";import"./utils-DC-uQ7gt.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-COe6pc-P.js";import"./Tooltip-CQSPANHc.js";import"./ClearPropsContextView-C6q86AoL.js";import"./OverlayArrow-Roh2YmoW.js";import"./useFocusable-DN1gz0ZC.js";import"./useControlledState-B9_9qNA0.js";import"./useFocusRing-ohgATb1P.js";import"./react-children-utilities-CYfepbhx.js";import"./Action-DGkp9jQR.js";import"./context-9lnVgACy.js";import"./useStatic-7iZUYjuS.js";import"./browser-CsfwbWLp.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./dynamic-Bn8R82lj.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./Popover-CLHMqo5N.js";import"./OverlayTrigger-CEYU_-ng.js";import"./Dialog-B7aUPBh_.js";import"./RSPContexts-CSfMLF9v.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";import"./ControlledNotification-B9B4fBZF.js";import"./EmulatedBoldText-C35HxZ7Y.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
