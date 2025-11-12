import{j as e}from"./iframe-DKDdzEg2.js";import{L as o}from"./LabeledValue-BwyMvv4-.js";import{L as t}from"./Label-RGDjpvHy.js";import{C as c}from"./Content-C0vcMxy5.js";import{C as m}from"./CopyButton-CpBG4-QY.js";import{B as u}from"./Button-IIDunxYf.js";import{I as h}from"./InlineCode-DJEF18pw.js";import{L as x}from"./Link-D6MGqqc4.js";import{C as L,a as j}from"./ContextualHelpTrigger-CVj6wYkq.js";import{H as C}from"./Heading-Dg8JptjO.js";import{T as d}from"./Text-CjflxeLx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./index-BpsioLCE.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./context-BHOWQ-F6.js";import"./ProgressBar-Wlqbg7O4.js";import"./utils-glgR2nbC.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CYZefWcZ.js";import"./Tooltip-DjRJxdw8.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./OverlayArrow-Dk7sPebR.js";import"./useFocusable-DFxE2EDX.js";import"./useControlledState-Fctu_HD9.js";import"./useFocusRing-C2RFcQ8k.js";import"./react-children-utilities-5wsaFL6D.js";import"./Action-Bo6ZQC_V.js";import"./context-CDCUS0mP.js";import"./useStatic-D7KAuRzE.js";import"./browser-CFpNIPwD.js";import"./getActionGroupSlot-CxXJdk8g.js";import"./dynamic-Bw-gnOjZ.js";import"./LoadingSpinner-Dty_8Gzu.js";import"./Button-CPtKzFV4.js";import"./Popover-FiU_odVZ.js";import"./OverlayTrigger-BFzT5tm9.js";import"./Dialog-B3clCL3D.js";import"./RSPContexts-CyAJ8woy.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./ControlledNotification-A-nlkOWl.js";import"./EmulatedBoldText-CD_LMSIk.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
