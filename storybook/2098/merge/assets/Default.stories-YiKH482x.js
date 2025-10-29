import{j as r,r as F}from"./iframe-B8r8XrPb.js";import{L as l}from"./Label-PmVCxAho.js";import{F as o}from"./FileField-DQqzhJCO.js";import{B as t}from"./Button-x8S8uZ_3.js";import{S as f}from"./Section-DbQ-wmnj.js";import{F as h}from"./FieldError-Cr-OeICt.js";import{F as x}from"./FieldDescription-B6QY2e39.js";import{K as S,s as j}from"./IconWarning-BnpSGPSL.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./Label-DhvUjtv7.js";import"./utils-B2sHMxfy.js";import"./Hidden-C0uurl-T.js";import"./useFormValidation-DuuScCCl.js";import"./useFocus-Co_XlsN_.js";import"./useFieldComponent-DByhNd_z.js";import"./Text-DsIbOJYe.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./Input-Cyh52Hgt.js";import"./useFocusRing-DGaivw0f.js";import"./browser-5JWtNQpe.js";import"./useMakeFocusable-DmR7nfCv.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./LoadingSpinner-bZO-WOXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./useLabel-Bn_yI2FK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BPC_OlSs.js";import"./useFocusable-USAcjdfT.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Action-DHR-Mkls.js";import"./context-tqHfsDuk.js";import"./useStatic-Qi3p0Ena.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./dynamic-Bnt25vOJ.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";/**
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
