import{j as e}from"./iframe-DGNlk_vV.js";import{L as o}from"./LabeledValue-C3kPJ1aU.js";import{L as t}from"./Label-C-LvYOEv.js";import{C as c}from"./Content-ol93GJzs.js";import{C as m}from"./CopyButton-Bm9lbUjF.js";import{B as u}from"./Button-DhezJY1m.js";import{I as h}from"./InlineCode-C_cjRttB.js";import{L as x}from"./Link-B-YmT7AY.js";import{C as L,a as j}from"./ContextualHelpTrigger-BP63Y_WB.js";import{H as C}from"./Heading-L3PTpp92.js";import{T as d}from"./Text-DsxTDDTq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DBkzNBu-.js";import"./index-C66SR6go.js";import"./index-Bbt_YQGl.js";import"./useLocalizedStringFormatter-B2N1wxuv.js";import"./context-BQuOJgUT.js";import"./ProgressBar-BoB3EqYI.js";import"./utils-DL8q1so0.js";import"./Hidden-HIIwl8Mf.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C6wJTaOd.js";import"./Tooltip-MnuGQmV-.js";import"./ClearPropsContextView-NN4EGP09.js";import"./OverlayArrow-DNNRAYvS.js";import"./useFocusable-CXOlwDl1.js";import"./useControlledState-UWLM0vlv.js";import"./useFocusRing-DxF43p1t.js";import"./react-children-utilities-C0bzJkZ7.js";import"./Action-rOePJQYP.js";import"./context-CfZGyFhp.js";import"./useStatic-D_bMrpdM.js";import"./browser-ec9CZx7q.js";import"./getActionGroupSlot-DqNd_pBE.js";import"./dynamic-CKWjdq05.js";import"./LoadingSpinner-Vfx511Qq.js";import"./Button-DpZIFY9G.js";import"./Popover-C8jQUmvs.js";import"./OverlayTrigger-Uz8qZ1np.js";import"./Dialog-btvz5H9Q.js";import"./RSPContexts-ClaGjYhr.js";import"./Collection-ChtRuM1d.js";import"./CollectionBuilder-BJ_Sw59I.js";import"./SelectionIndicator-B0PsrhoI.js";import"./Separator-BOOd5uBZ.js";import"./ControlledNotification-CLuRI8eV.js";import"./EmulatedBoldText-Bby43l11.js";const ue={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"})]})},n={},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(c,{children:"My proSpace"}),e.jsx(m,{text:"My proSpace"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(h,{children:"127.0.0.1"}),e.jsx(m,{text:"127.0.0.1"})]})},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(x,{children:"https://mittwald.de"}),e.jsx(m,{text:"https://mittwald.de"})]})},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(u,{variant:"soft",color:"secondary",children:"Generate"})]})},l={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(L,{children:[e.jsx(u,{}),e.jsxs(j,{...r,children:[e.jsx(C,{children:"Rights & roles"}),e.jsx(d,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(x,{children:"Learn more"})]})]})]}),e.jsx(d,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
