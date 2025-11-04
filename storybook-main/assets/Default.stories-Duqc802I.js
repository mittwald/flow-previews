import{j as e}from"./iframe-BxshUsxH.js";import{L as o}from"./LabeledValue-Bj8_T89u.js";import{L as t}from"./Label-Cai8LRw4.js";import{C as c}from"./Content-BWTtEus_.js";import{C as m}from"./CopyButton-BkqTb8K1.js";import{B as u}from"./Button-HRLIFp2S.js";import{I as h}from"./InlineCode-DjaHKjIt.js";import{L as x}from"./Link-C-_Opw-i.js";import{C as L,a as j}from"./ContextualHelpTrigger-p7RfMObQ.js";import{H as C}from"./Heading-DdZYTwhD.js";import{T as d}from"./Text-18K6QUAV.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./index-DKGU8PvL.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./context-jrbRSF4x.js";import"./ProgressBar-BPkB7WeA.js";import"./utils-CVs5O02N.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B98y0Q8s.js";import"./Tooltip-Bg81ta88.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./OverlayArrow-DTdsHQge.js";import"./useFocusable-BZtorROf.js";import"./useControlledState-DZ1PCkag.js";import"./useFocusRing-DAO3A_Iq.js";import"./react-children-utilities-C2vFZTwt.js";import"./Action-CuTPfi8I.js";import"./context-Dpzgqk2_.js";import"./useStatic-B3TheZVH.js";import"./browser-CjJK-aFI.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./dynamic-DbpBUg3_.js";import"./LoadingSpinner-CLA14IJX.js";import"./Button-BSW16sZi.js";import"./Popover-D8mPu2R9.js";import"./OverlayTrigger-DqSMwG9L.js";import"./Dialog-g1S8F0Mk.js";import"./RSPContexts-B9j1N_uk.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./ControlledNotification-BKvhz06W.js";import"./EmulatedBoldText-DJOIRjYG.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
