import{j as e}from"./iframe-CtEjVB66.js";import{L as o}from"./LabeledValue-COrnk-sL.js";import{L as t}from"./Label-CvAjEv-1.js";import{C as u}from"./Content-BV9uIs25.js";import{C as l}from"./CopyButton-vnoKuuVp.js";import{B as d}from"./Button-BbnjmOHy.js";import{I as x}from"./InlineCode-Unf9hZNX.js";import{L as c}from"./Link-DMg6xFRD.js";import{C as h,a as L}from"./ContextualHelpTrigger-CG8ysDtI.js";import{H as j}from"./Heading-c1W7e3IT.js";import{T as m}from"./Text-QCKh6xRo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Label-XCLRl25L.js";import"./utils-BuEQZICT.js";import"./Hidden-BjEfMFZ5.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./Tooltip-DP4Z_4Qw.js";import"./OverlayArrow-CZCYW2ow.js";import"./platform-UzmeURk8.js";import"./ProgressBar-l1h_jwKt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-B5ekdd71.js";import"./useFocus-CAMT_X1e.js";import"./useControlledState-D0kLTbtR.js";import"./useFocusable-CocGrzXD.js";import"./react-children-utilities-CyJ6DAwB.js";import"./ActionBatch-CDzJz977.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk9_EddI.js";import"./usePress-Cre2k4PJ.js";import"./Popover-fmzRw_jU.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./Text-1qNOxJF7.js";import"./SelectionManager-CXnMaIVJ.js";import"./useCollator-OQsKm26_.js";import"./FocusScope-SeuSo2RO.js";import"./VisuallyHidden-B96eA0GA.js";import"./OverlayTrigger-B8jwjQmG.js";import"./Heading-DMz3CQ7g.js";import"./EmulatedBoldText-B5kV7YCs.js";const Be={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>IP address</Label>
      <InlineCode>127.0.0.1</InlineCode>
      <CopyButton text="127.0.0.1" />
    </LabeledValue>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>Domain</Label>
      <Link>https://mittwald.de</Link>
      <CopyButton text="https://mittwald.de" />
    </LabeledValue>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <LabeledValue {...props}>
      <Label>Support pin</Label>
      <Button variant="soft" color="secondary">
        Generate
      </Button>
    </LabeledValue>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ve=["Default","WithInlineCode","WithLink","WithButton","WithContextualHelp"];export{n as Default,s as WithButton,p as WithContextualHelp,i as WithInlineCode,a as WithLink,Ve as __namedExportsOrder,Be as default};
