import{j as r,r as F}from"./iframe-BFuSR0CY.js";import{L as l}from"./Label-Bzfu9tdI.js";import{F as o}from"./FileField-jD2MQXVn.js";import{B as t}from"./Button-B8_RMB4T.js";import{S as f}from"./Section-D9YHwW4r.js";import{F as h}from"./useFieldComponent-DvAk7ROg.js";import{F as x}from"./FieldDescription-DReTe5UI.js";import{K as S,s as j}from"./IconWarning-BDLPxpKm.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./index-D8dET2XL.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./Label-Dl8lfN0K.js";import"./utils-CEuw8CkJ.js";import"./Hidden-BoaT9a_j.js";import"./useFormValidation-Dt4bKs4p.js";import"./useFocus-Dfi_0tQM.js";import"./Input-Dy1mfW1m.js";import"./useFocusRing-CdpePOyD.js";import"./browser-h3r-jBf1.js";import"./useMakeFocusable-Begosg92.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocusable-Or0L-1Mb.js";import"./ContextMenuSection-DOizDCjF.js";import"./Action-BBEtKGm4.js";import"./context-CFFRtyxF.js";import"./useStatic-BcQq_-tU.js";import"./getActionGroupSlot-C1e95e1F.js";import"./dynamic-BFfatATg.js";import"./Dialog-D9CJ_WbB.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./useControlledState-Y8_jrThy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],v=S("outline","paperclip","Paperclip",g),Ir={title:"Form Controls/FileField",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},i={},n={args:{isReadOnly:!0}},s={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(x,{children:"Supported formats: .pem, .pfx"})]})},a={render:e=>r.jsxs(o,{...e,isInvalid:!0,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(h,{children:"File too large"})]})},p={render:e=>r.jsx(o,{...e,children:r.jsx(t,{variant:"soft","aria-label":"Select certificate",children:r.jsx(j,{children:r.jsx(v,{})})})})},c={render:e=>{const[m,d]=F.useState(null),u=m?.[0];return r.jsxs(f,{children:[r.jsxs(o,{...e,onChange:d,children:[r.jsx(l,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),u?.name]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...c.parameters?.docs?.source}}};const Lr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler"];export{i as Default,p as IconButton,n as ReadOnly,s as WithDescription,a as WithError,c as WithHandler,Lr as __namedExportsOrder,Ir as default};
