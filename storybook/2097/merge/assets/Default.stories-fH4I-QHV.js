import{j as r,r as F}from"./iframe-9LT5pwxo.js";import{L as l}from"./Label-Cy0HO6mF.js";import{F as o}from"./FileField-koLPjyUk.js";import{B as t}from"./Button-DgX4Ha9j.js";import{S as f}from"./Section-BblLzrvZ.js";import{F as h}from"./useFieldComponent-FBKhS2uw.js";import{F as x}from"./FieldDescription-BLZvXXGp.js";import{K as S,s as j}from"./IconWarning-BGmK8I3p.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./Label-B9A8CQ6N.js";import"./utils-C12iYS2x.js";import"./Hidden-Dc5yMvqI.js";import"./useFormValidation-gXwoIgM4.js";import"./useFocus-CGIGFm0L.js";import"./Input-CuGFAjVN.js";import"./useFocusRing-BpS4vJuf.js";import"./browser-Be7wxfSs.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./Text-FZjxGLxv.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocusable-6Pd0pdJi.js";import"./ContextMenuSection-BA7OrQRH.js";import"./Action-CxBB9EbS.js";import"./context-CNHQEL1v.js";import"./useStatic-C20s3RtG.js";import"./getActionGroupSlot-BSebOatG.js";import"./dynamic-Dp02ioFc.js";import"./Dialog-CLeuoHpB.js";import"./RSPContexts-D4jozd1E.js";import"./OverlayArrow-CBGQsLGC.js";import"./useControlledState-B0dx1ah2.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./VisuallyHidden-kbtTP9xl.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";/**
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
