import{j as e,r as k}from"./iframe-BJ0F67WV.js";import{L as s}from"./Label-DdDrAhKV.js";import{F as o}from"./FileField-sn1lvkuk.js";import{B as t}from"./Button-CnQZL08m.js";import{S as H}from"./Section-DYjzF64I.js";import{F as G}from"./FieldError-B5pU0GHC.js";import{F as U}from"./FieldDescription-COCDalyM.js";import{P as q,L as w}from"./IconWarning-D8lhACCL.js";import{u as M,F as N,t as T}from"./Form-CphuCCBx.js";import{A as K}from"./ActionGroup-BQ0PFHwd.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./context-DDk-RgEI.js";import"./Label-BZcf1Nsx.js";import"./utils-CfdyWDg2.js";import"./Hidden-iBx55YDK.js";import"./FormField.module-CqWyJNQI.js";import"./Form-aW46NXWl.js";import"./useFocus-N8Qk0gvU.js";import"./useLabel-CE1zHuYM.js";import"./FieldError-zuZgMzEa.js";import"./Text-DUTh34WN.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CRkQVq-1.js";import"./useFocusRing-CZqmVUZk.js";import"./browser-ENr42WFT.js";import"./Text-DvcA_djt.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0-WYOlY.js";import"./useFocusable-k7wU8KZy.js";import"./ContextMenuSection-Dlp4NHpV.js";import"./Action-DQsKkgIU.js";import"./context-DqfxRtzM.js";import"./useStatic-BcjnPkg-.js";import"./getActionGroupSlot-DrYIE0ib.js";import"./dynamic-D4EbkcOt.js";import"./Dialog-CcAHYHw-.js";import"./RSPContexts-BTU5SObx.js";import"./OverlayArrow--hlAjm0f.js";import"./useControlledState-g4NJV7ij.js";import"./Collection-B8sxr2FE.js";import"./CollectionBuilder-L5ZDKpRe.js";import"./Separator-CMNt12Nc.js";import"./SearchField-K6WJ8JUX.js";import"./useTextField-DGpbu28C.js";import"./useFormReset-5M8XX6CH.js";import"./TextField-CsP4pSiS.js";import"./useEvent-BEGbzF0p.js";import"./SelectionManager-aRuCxMGp.js";import"./useCollator-ueFTVoBb.js";import"./FocusScope-own16ieq.js";import"./VisuallyHidden-CST8zJDR.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=M(),n=T();return e.jsx(N,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(K,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,B,v;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var g,C,L;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,O,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,R,D;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    const file = files?.[0];
    return <Section>
        <FileField {...props} isInvalid onChange={setFiles}>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
        </FileField>
        {file?.name}
      </Section>;
  }
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,A,P;F.parameters={...F.parameters,docs:{...(W=F.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileField multiple>
              <Label>Certificate</Label>
              <Button variant="outline" color="secondary">
                Select
              </Button>
            </FileField>
          </Field>
          {form.watch("file")?.[0]?.name}
          <ActionGroup>
            <Button type="submit">Upload</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const tr=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,tr as __namedExportsOrder,or as default};
