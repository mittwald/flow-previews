import{j as e}from"./iframe-BZ1p44Xs.js";import{L as o}from"./LabeledValue-RdkGefbL.js";import{L as t}from"./Label-HK0aVnMe.js";import{C as u}from"./Content-DuDYFNBO.js";import{C as l}from"./CopyButton-BO_Mru-0.js";import{B as d}from"./Button-BXzJaHaH.js";import{I as x}from"./InlineCode-Bajm32mt.js";import{L as c}from"./Link-CnlokJZe.js";import{C as h,a as L}from"./ContextualHelpTrigger-Dzsj7OvC.js";import{H as j}from"./Heading-DAuGI7Cj.js";import{T as m}from"./Text-CplKG2wk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./Label-9zEXlfwO.js";import"./utils-Cc2PUaBi.js";import"./Hidden-VD2bsukW.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Tooltip-CqH1Sb2R.js";import"./OverlayArrow-DcvNa8Le.js";import"./useFocus-O4gnqY9s.js";import"./ProgressBar-B4598OFN.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-vNPEpCai.js";import"./useControlledState-CZ5q_fud.js";import"./useFocusable-BXiUGBNe.js";import"./react-children-utilities-DditKibI.js";import"./ActionBatch-kp--iEDz.js";import"./useOverlayController-Dfa0MUCA.js";import"./useStatic-BVYP0IGX.js";import"./browser-N7XS9wRL.js";import"./getActionGroupSlot-D6uph6L1.js";import"./dynamic-BvoZFGdS.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOqybSdu.js";import"./usePress-CQ2PTrK5.js";import"./Popover-CWPz-1RW.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./Dialog-DlxSrM7S.js";import"./RSPContexts-C2tYRgOg.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./VisuallyHidden-7tUyfyiG.js";import"./OverlayTrigger-DzQUlxLA.js";import"./Heading-acaQddxn.js";import"./EmulatedBoldText-VgOMGZVr.js";const Te={title:"Content/LabeledValue",component:o,parameters:{controls:{exclude:["className"]}},render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Project"}),e.jsx(u,{children:"My Webhosting"})]})},n={},i={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"IP address"}),e.jsx(x,{children:"127.0.0.1"}),e.jsx(l,{text:"127.0.0.1"})]})},a={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Domain"}),e.jsx(c,{children:"https://mittwald.de"}),e.jsx(l,{text:"https://mittwald.de"})]})},s={render:r=>e.jsxs(o,{...r,children:[e.jsx(t,{children:"Support pin"}),e.jsx(d,{variant:"soft",color:"secondary",children:"Generate"})]})},p={render:r=>e.jsxs(o,{children:[e.jsxs(t,{children:["Role",e.jsxs(h,{children:[e.jsx(d,{}),e.jsxs(L,{...r,children:[e.jsx(j,{children:"Rights & roles"}),e.jsx(m,{children:"Each user profile is assigned a role in mStudio for each project and/or organization. This allows you to work in a completely new and modern way."}),e.jsx(c,{children:"Learn more"})]})]})]}),e.jsx(m,{children:"Admin"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
