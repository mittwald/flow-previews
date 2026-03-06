import{j as e}from"./iframe-DBOgS3cI.js";import{L as o}from"./LabeledValue-B1ZacUS9.js";import{L as t}from"./Label-DEbA9P8V.js";import{C as u}from"./Content-DrBXQyIN.js";import{C as l}from"./CopyButton-BXqbxScp.js";import{B as d}from"./Button-DeSyDtjE.js";import{I as x}from"./InlineCode-C_IWh5OQ.js";import{L as c}from"./Link-BnUIYtGA.js";import{C as h,a as L}from"./ContextualHelpTrigger-DIF0oG5T.js";import{H as j}from"./Heading-BbxqBEBp.js";import{T as m}from"./Text-V6WF8rgy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D2rRGmRJ.js";import"./index-Swo0Tmsl.js";import"./index-2oGrDlIx.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./context-BFw_9KSH.js";import"./Label-DiLXicnZ.js";import"./utils-BhJeINWq.js";import"./Hidden-DDnoFhwK.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./Tooltip-BMbUJuQE.js";import"./OverlayArrow-B-9JWNCe.js";import"./useFocus-C3U4okCI.js";import"./ProgressBar-CW3L6DbF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CgHq_nb-.js";import"./useControlledState-Pjvp5Vn-.js";import"./useFocusable-Jw6d-A2p.js";import"./react-children-utilities-BFfj2OK9.js";import"./ActionBatch-C1BOMxBF.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./browser-aVPMedyb.js";import"./getActionGroupSlot-BVP40Z09.js";import"./dynamic-Daa1kuSR.js";import"./LoadingSpinner-BMYl670W.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dkv5VJcx.js";import"./usePress-me2_PexI.js";import"./Popover-BfI_0-2O.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./Dialog-DyC1f_Bj.js";import"./RSPContexts-Dpo7G8Um.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./OverlayTrigger-B4nPvJJx.js";import"./Heading-BTHBDnxA.js";import"./EmulatedBoldText-DZYRdmWA.js";const Te={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
