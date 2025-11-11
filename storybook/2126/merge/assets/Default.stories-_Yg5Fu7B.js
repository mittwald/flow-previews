import{j as e}from"./iframe-sw6YBGs2.js";import{L as o}from"./LabeledValue-vT0Jzwlv.js";import{L as t}from"./Label-CmtT7DCN.js";import{C as c}from"./Content-B9ARa_I0.js";import{C as m}from"./CopyButton-lHl1l64h.js";import{B as u}from"./Button-C3vsBXq_.js";import{I as h}from"./InlineCode-Dk1HCl3v.js";import{L as x}from"./Link-CMSh3a4Z.js";import{C as L,a as j}from"./ContextualHelpTrigger-DwcqWH2n.js";import{H as C}from"./Heading-BjeBhvap.js";import{T as d}from"./Text-BcvoGUvL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-9kUQeyVn.js";import"./index-CQ8O5V0p.js";import"./index-DXtHeKIw.js";import"./useLocalizedStringFormatter-D1DdJ7gx.js";import"./context-C55dwVSC.js";import"./ProgressBar-LVLLuOf0.js";import"./utils-DUnEZ_OM.js";import"./Hidden-CsbjM4Ab.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Mo4x9W3y.js";import"./Tooltip-DVn6jUem.js";import"./ClearPropsContextView-DJhzMu7H.js";import"./OverlayArrow-BmDyVYWZ.js";import"./useFocusable-D0OMOiNw.js";import"./useControlledState-PLdRfTwy.js";import"./useFocusRing-CuXwNFI9.js";import"./react-children-utilities-kN0pvQuw.js";import"./Action-_btOP2lG.js";import"./context-D0JPrgtB.js";import"./useStatic-3-oc9s-0.js";import"./browser-CM4mIXp1.js";import"./getActionGroupSlot-xCaZiuyA.js";import"./dynamic-DI3ra1Po.js";import"./LoadingSpinner-Bc_cKoW-.js";import"./Button-C9KiGU0p.js";import"./Popover-CTuN8o_O.js";import"./OverlayTrigger-C_lKypBz.js";import"./Dialog-vQ1BmT5h.js";import"./RSPContexts-DsElqAB8.js";import"./Collection-DRfKzRSF.js";import"./CollectionBuilder-CLa01cON.js";import"./SelectionIndicator-BR2LstrO.js";import"./Separator-DJH-J0YQ.js";import"./ControlledNotification-BkuRpHzl.js";import"./EmulatedBoldText-2hgsjV1R.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
