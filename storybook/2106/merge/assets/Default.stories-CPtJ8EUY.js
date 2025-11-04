import{j as e}from"./iframe-oci4ptrj.js";import{L as o}from"./LabeledValue-8alV3kb7.js";import{L as t}from"./Label-BAtgzmlj.js";import{C as c}from"./Content-Bcd3Dcbz.js";import{C as m}from"./CopyButton-BNX1PJqg.js";import{B as u}from"./Button-eO-ASnyK.js";import{I as h}from"./InlineCode-xz8RRo8y.js";import{L as x}from"./Link-CqXHSRvB.js";import{C as L,a as j}from"./ContextualHelpTrigger-DenoHM9c.js";import{H as C}from"./Heading-C66T-W7d.js";import{T as d}from"./Text-BC4L9_-c.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C2w89MO3.js";import"./index-DzNagtAD.js";import"./index-BOV_kcUj.js";import"./useLocalizedStringFormatter-d3uviZeO.js";import"./context-DcUd--Pd.js";import"./ProgressBar-BWGxJHnn.js";import"./utils-BqyPjKLh.js";import"./Hidden-BTg-KeYM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DHgEivld.js";import"./Tooltip-s-7knXV2.js";import"./ClearPropsContextView-Cq8Pr-2n.js";import"./OverlayArrow-DTr5Iaqo.js";import"./useFocusable-Dp9h7abG.js";import"./useControlledState-DDWL0DP8.js";import"./useFocusRing-GHPD41Xj.js";import"./react-children-utilities-DMJR_FXU.js";import"./Action-BqzVohHB.js";import"./context-CY6wUJcA.js";import"./useStatic-Dg5syQGi.js";import"./browser-CA-_dWQR.js";import"./getActionGroupSlot-DN_BwUZY.js";import"./dynamic-Bjr85D4p.js";import"./LoadingSpinner-Ce9YNblG.js";import"./Button-KMwH7pyb.js";import"./Popover-BgPcaCsv.js";import"./OverlayTrigger-XJjkijZP.js";import"./Dialog-BNJbCqlP.js";import"./RSPContexts-Ba4NKIWK.js";import"./Collection-BMK5V4Kq.js";import"./CollectionBuilder-v2B4mNBt.js";import"./SelectionIndicator-B29MN-WG.js";import"./Separator-BHmM9LBW.js";import"./ControlledNotification-CtEY5SML.js";import"./EmulatedBoldText-DLGY6dL5.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
