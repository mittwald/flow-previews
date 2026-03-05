import{j as e}from"./iframe-BcqfzoOA.js";import{L as o}from"./LabeledValue-B6_I_nS2.js";import{L as t}from"./Label-CQjtN3Gn.js";import{C as u}from"./Content-B5PlHrRz.js";import{C as l}from"./CopyButton-B89mvDcG.js";import{B as d}from"./Button-C2msjhlA.js";import{I as x}from"./InlineCode-B-7Gp4iK.js";import{L as c}from"./Link-YqMugRW6.js";import{C as h,a as L}from"./ContextualHelpTrigger-CZtZy0Ll.js";import{H as j}from"./Heading-CPq-dFYl.js";import{T as m}from"./Text-1XRmWCfn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Label-B-eADV2d.js";import"./utils-Bwp7PlhH.js";import"./Hidden-BSnUj9OE.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./Tooltip-Bm2yjacH.js";import"./OverlayArrow-BhCzySYR.js";import"./useFocus-BgTDZkkG.js";import"./ProgressBar-DUQd-49v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-QCIml9BE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CK0lr4fW.js";import"./useControlledState-DVjnE-U4.js";import"./useFocusable-B97W14wM.js";import"./react-children-utilities-BbAFwANO.js";import"./ActionBatch-D231mKj-.js";import"./useOverlayController-CrButM_3.js";import"./useStatic-feLAmThE.js";import"./browser-CFz57TUe.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./dynamic-CQVZMaTn.js";import"./LoadingSpinner-ULzpGe8L.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CG09EaR6.js";import"./usePress-Lauho74f.js";import"./Popover-lZTmTyt9.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./Dialog-Ce_unDUt.js";import"./RSPContexts-D9SkabFV.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./Separator-DguNVtge.js";import"./Text-CALsrB3x.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./FocusScope-CPNafWEX.js";import"./VisuallyHidden-0GKWPw_x.js";import"./OverlayTrigger-CxrHdMrt.js";import"./Heading-ZbAppe82.js";import"./EmulatedBoldText-ZgwGLRX1.js";const Te={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
