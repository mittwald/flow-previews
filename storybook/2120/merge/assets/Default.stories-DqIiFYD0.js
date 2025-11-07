import{j as e}from"./iframe-DhEtuAZk.js";import{L as o}from"./LabeledValue-Q6uf6T0w.js";import{L as t}from"./Label-BGOtPgJY.js";import{C as c}from"./Content-B5pw8O7y.js";import{C as m}from"./CopyButton-Bc4gZ0dZ.js";import{B as u}from"./Button-BY9Kr7Ye.js";import{I as h}from"./InlineCode-BaTFar_i.js";import{L as x}from"./Link-CtepCC57.js";import{C as L,a as j}from"./ContextualHelpTrigger-_Yaxcn4v.js";import{H as C}from"./Heading-w8VDel3v.js";import{T as d}from"./Text-CrxTC35E.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./context-B4_4eL8K.js";import"./ProgressBar-CCRGuqks.js";import"./utils-DSKmOAaE.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CZNr6BH3.js";import"./Tooltip-OwQuKknw.js";import"./ClearPropsContextView-CacYGh9N.js";import"./OverlayArrow-D5AF8TQx.js";import"./useFocusable-GlgNOWPt.js";import"./useControlledState-Dj5UiPRe.js";import"./useFocusRing-CtGm1hSf.js";import"./react-children-utilities-goMvo_yH.js";import"./Action-BVtpAmgk.js";import"./context-D6NPEI3P.js";import"./useStatic-OTFolAlH.js";import"./browser-CRwqe8Ti.js";import"./getActionGroupSlot-B2enF2gG.js";import"./dynamic-CwxkBJO8.js";import"./LoadingSpinner-DZTinZ99.js";import"./Button-DH0rVXA4.js";import"./Popover-bxB2am_R.js";import"./OverlayTrigger-BYK82yFU.js";import"./Dialog-CGia85P_.js";import"./RSPContexts-CP8S-33J.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./ControlledNotification-B3y-_NHJ.js";import"./EmulatedBoldText-DZREZbVk.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
