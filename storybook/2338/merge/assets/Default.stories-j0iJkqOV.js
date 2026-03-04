import{j as e}from"./iframe-CBpAxFwW.js";import{L as o}from"./LabeledValue-B1iVs4SQ.js";import{L as t}from"./Label-D9Ki8i5H.js";import{C as u}from"./Content-D1nnPCvX.js";import{C as l}from"./CopyButton-f6PRftDm.js";import{B as d}from"./Button-DJILh_tx.js";import{I as x}from"./InlineCode-C_1Swvd9.js";import{L as c}from"./Link-CA-d3tjp.js";import{C as h,a as L}from"./ContextualHelpTrigger-g0pIlB5n.js";import{H as j}from"./Heading-MOWZhQDK.js";import{T as m}from"./Text-DmIlada7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./Label-D79gfyvC.js";import"./utils-DlBHsIHw.js";import"./Hidden-CJdIoNgI.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./Tooltip-BXJ36UFn.js";import"./OverlayArrow-B4tyB_eB.js";import"./useFocus-DWD5MHlE.js";import"./ProgressBar-82eG7dwm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DhcP44Or.js";import"./useControlledState-cot2auG7.js";import"./useFocusable-YEU6YEqR.js";import"./react-children-utilities-DjVz-y6X.js";import"./ActionBatch-BgON7N4c.js";import"./useOverlayController-lEjhNgxt.js";import"./useStatic-CDkGs2jt.js";import"./browser-Bc0l3UGu.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./dynamic-CE4App5Z.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B6LJ-bNf.js";import"./usePress-IARhWfJB.js";import"./Popover-CbjXFr2h.js";import"./OverlayContextProvider-Djk0FNiv.js";import"./Dialog-r9nlMSfh.js";import"./RSPContexts-C97_Ku7o.js";import"./Collection-CNOjz3d8.js";import"./CollectionBuilder-s21Em_Eq.js";import"./SelectionIndicator-DmDMXkvM.js";import"./Separator-BGJ98pV4.js";import"./Text-CVgfjhJb.js";import"./SelectionManager-D9wpoI9v.js";import"./useCollator-bX69lL-k.js";import"./FocusScope-cF8Pb5h6.js";import"./VisuallyHidden-BLMNvyRL.js";import"./OverlayTrigger-BoEnaKfv.js";import"./Heading-CaCePfIe.js";import"./EmulatedBoldText-CvSlY-lg.js";const Te={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Be=["Default","WithInlineCode","WithLink","WithButton","WithContextualHelp"];export{n as Default,s as WithButton,p as WithContextualHelp,i as WithInlineCode,a as WithLink,Be as __namedExportsOrder,Te as default};
