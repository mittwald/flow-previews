import{j as e}from"./iframe-UywY67Bv.js";import{L as o}from"./LabeledValue-4mP07mAd.js";import{L as t}from"./Label-BdSCfiWt.js";import{C as c}from"./Content-CDtjT_Xe.js";import{C as m}from"./CopyButton-CPARqyj4.js";import{B as u}from"./Button-Gbk6h-JG.js";import{I as h}from"./InlineCode-IDIJw-r4.js";import{L as x}from"./Link-CLqTFJh1.js";import{C as L,a as j}from"./ContextualHelpTrigger-Nj7CEmIW.js";import{H as C}from"./Heading-DokAbZVz.js";import{T as d}from"./Text-ACfuEtxv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dm-blvsZ.js";import"./index-BgsjFh65.js";import"./index-BZZbJWsv.js";import"./useLocalizedStringFormatter-DQTCanVK.js";import"./context-DOa8wsuE.js";import"./ProgressBar-BT1yEvUw.js";import"./utils-Q3LyW17A.js";import"./Hidden-DHTrACZy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DwFhTB3p.js";import"./Tooltip-DhQmcZ0r.js";import"./ClearPropsContextView-Dm11ykOR.js";import"./OverlayArrow-B1W-06M-.js";import"./useFocusable-D_AejfVj.js";import"./useControlledState-YHruiK90.js";import"./useFocusRing-CEJ8z4sH.js";import"./react-children-utilities-cyw5EAJU.js";import"./Action-CUqRfkG0.js";import"./context-BigokEM3.js";import"./useStatic-CXquBJ6C.js";import"./browser-89HKgK6A.js";import"./getActionGroupSlot-BYkRiiTw.js";import"./dynamic-D6UsKhYE.js";import"./LoadingSpinner-DB5NhDK9.js";import"./Button-Dm7HkgNO.js";import"./Popover-D1J4MggM.js";import"./OverlayTrigger-CDX30Jbz.js";import"./Dialog-QZmtNN3w.js";import"./RSPContexts-DKA2ogYJ.js";import"./Collection-JD_tC5W8.js";import"./CollectionBuilder-DCs1Xm6c.js";import"./SelectionIndicator-XKCl6mR6.js";import"./Separator-hCT8I1RM.js";import"./ControlledNotification-D50j9sIR.js";import"./EmulatedBoldText-IS2YzD6-.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
