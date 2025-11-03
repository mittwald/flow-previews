import{j as e}from"./iframe-9u6Ufs56.js";import{L as o}from"./LabeledValue-B3MQdaw0.js";import{L as t}from"./Label-D88lgx7Z.js";import{C as c}from"./Content-De6yv-na.js";import{C as m}from"./CopyButton-B9mW4h-U.js";import{B as u}from"./Button-_dn7QVPB.js";import{I as h}from"./InlineCode-RQOLEMSt.js";import{L as x}from"./Link-Brltyk4S.js";import{C as L,a as j}from"./ContextualHelpTrigger-nxMOucmM.js";import{H as C}from"./Heading-3nkwrjYk.js";import{T as d}from"./Text-DBIGrc3m.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-nxXkTRC9.js";import"./index-CEi0nf7L.js";import"./index-B3MDoUBn.js";import"./useLocalizedStringFormatter-C-5xhnkm.js";import"./context-OI1cZ2Vi.js";import"./ProgressBar-x9yI0Gbi.js";import"./utils-8ZPSUmH_.js";import"./Hidden-BVK4GKwb.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-e2U-5o25.js";import"./Tooltip-BKgm2KH6.js";import"./ClearPropsContextView-BIm6NWsD.js";import"./OverlayArrow-Cy8_4GJ7.js";import"./useFocusable-1HLi2XCg.js";import"./useControlledState-BzuGU0N9.js";import"./useFocusRing-Dcst_k34.js";import"./react-children-utilities-B8hFFp2J.js";import"./Action-M6Kgfb_M.js";import"./context-C-QTHw1p.js";import"./useStatic-DAyA5uHy.js";import"./browser-BeFavaxk.js";import"./getActionGroupSlot-CNfG9i1s.js";import"./dynamic-CQrWC-Om.js";import"./LoadingSpinner-LJCsSZP_.js";import"./Button-BhX9jjPy.js";import"./Popover-U_HYlJek.js";import"./OverlayTrigger-CpPCP_ZX.js";import"./Dialog-BeTHWiir.js";import"./RSPContexts-CT2QL-I8.js";import"./Collection-XNBA-cfj.js";import"./CollectionBuilder-DGvEiEzg.js";import"./SelectionIndicator-Bijj2SQV.js";import"./Separator-DJNGhX6a.js";import"./ControlledNotification-irCIGaEl.js";import"./EmulatedBoldText-DTSNQZDs.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
