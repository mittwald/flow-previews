import{j as e}from"./iframe-BFddea_x.js";import{L as o}from"./LabeledValue-ZzEtTOb7.js";import{L as t}from"./Label-Cyz25dCh.js";import{C as u}from"./Content-CWzMlKrq.js";import{C as l}from"./CopyButton-C5Ia2Bto.js";import{B as d}from"./Button-DmFob37h.js";import{I as x}from"./InlineCode-CamsXvhn.js";import{L as c}from"./Link-DtC85Uv0.js";import{C as h,a as L}from"./ContextualHelpTrigger-DL49s42d.js";import{H as j}from"./Heading-C7vi7fKP.js";import{T as m}from"./Text-B70YymId.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Label-DEW42_UF.js";import"./utils-D-aZUMcZ.js";import"./Hidden-CWxwpwFD.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./Tooltip-Cx9YY_jk.js";import"./OverlayArrow-CVHTB2zR.js";import"./platform-UzmeURk8.js";import"./ProgressBar-GJhSB3Xp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocus-CQ-Kgrdg.js";import"./useControlledState-lfI_swTV.js";import"./useFocusable-D-17EkqH.js";import"./react-children-utilities-CNMVDZIW.js";import"./ActionBatch-BLAWmMpV.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./browser-PH3BUHM2.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./dynamic-C85Jl_PG.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-uqpwtIjO.js";import"./usePress-DZQSLH7U.js";import"./Popover-BbCf_utC.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./Text-DndMRLn5.js";import"./SelectionManager-BwPLSKUJ.js";import"./useCollator-CHE9npsz.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./Heading-CkECWlTX.js";import"./EmulatedBoldText-C15EfUg3.js";const Be={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ve=["Default","WithInlineCode","WithLink","WithButton","WithContextualHelp"];export{n as Default,s as WithButton,p as WithContextualHelp,i as WithInlineCode,a as WithLink,Ve as __namedExportsOrder,Be as default};
