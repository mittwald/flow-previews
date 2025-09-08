import{j as e,r as O}from"./iframe-CW4eA9k4.js";import{L as s}from"./Label-BmbUI49G.js";import{F as o}from"./FileField-DHdnv20g.js";import{B as t}from"./Button-BjlFMLDb.js";import{S as A}from"./Section-DZ628zs3.js";import{F as P}from"./FieldError-DDMeD0d0.js";import{F as R}from"./FieldDescription-DHRtWdZV.js";import{O as H,K as k}from"./IconWarning-D1jj5TJf.js";import{u as G,F as U,t as q}from"./Form-Bh3TNRhF.js";import{A as w}from"./ActionGroup-Y-QP267j.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bql0h4A2.js";import"./mergeRefs-BcYJB-lQ.js";import"./index-B6-53XGK.js";import"./useLocalizedStringFormatter-Cgh8agJ8.js";import"./context-DFsoEI_J.js";import"./Label-Bbcp5SCN.js";import"./utils-LQZW6rX9.js";import"./Hidden-DmXjFFnH.js";import"./FormField.module-CqWyJNQI.js";import"./Form-Carw_-CN.js";import"./useFocus-rpK25HP0.js";import"./useLabel-CsKDXT_H.js";import"./FieldError-DfDNH_Ov.js";import"./Text-CUI2zCQ5.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-dsIczUwA.js";import"./useFocusRing-O7qNIesH.js";import"./browser-CS0dj8Dh.js";import"./Text-Db3UCsEl.js";import"./EmulatedBoldText-Dbwzf73Y.js";import"./LoadingSpinner-BE9DZA1q.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-LSmOeJqu.js";import"./ProgressBar-CmNSRDCs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Du8ADkCR.js";import"./useFocusable-UDevydpZ.js";import"./ContextMenuSection-9hjVwN3o.js";import"./Action-Bf9Z-Hza.js";import"./context-D5N2lUOa.js";import"./useStatic-DUg3iw8_.js";import"./getActionGroupSlot-vBeuxSBi.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-WgwS_B3t.js";import"./RSPContexts--2BkcUf2.js";import"./OverlayArrow-92dvWqKB.js";import"./useControlledState-Dx2k1uzE.js";import"./Collection-BBOAX0bv.js";import"./CollectionBuilder-COr3RMXa.js";import"./Separator-DG994JLx.js";import"./SearchField-uV4xHJex.js";import"./useTextField-Cdkp1LGI.js";import"./useFormReset-C1QC8NQi.js";import"./TextField-B9ZB3AOz.js";import"./useEvent-g2bJgFQA.js";import"./SelectionManager-c5mN7BQ-.js";import"./useCollator-DeJ4YmOD.js";import"./FocusScope-DDrNwogJ.js";import"./VisuallyHidden-DAkOZO38.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],M=H("outline","paperclip","Paperclip",K),{action:N}=__STORYBOOK_MODULE_ACTIONS__,Ze={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},T=N("submit"),l={},c={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(R,{children:"Supported formats: .pem, .pfx"})]})},p={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(P,{children:"File too large"})]})},m={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(k,{children:e.jsx(M,{})})})})},d={render:r=>{const[n,a]=O.useState(null),i=n==null?void 0:n[0];return e.jsxs(A,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},u={render:()=>{var a,i;const r=G(),n=q();return e.jsx(U,{form:r,onSubmit:T,children:e.jsxs(A,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(w,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var F,f,h;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,S,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldDescription>Supported formats: .pem, .pfx</FieldDescription>
    </FileField>
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,B,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <FileField {...props} isInvalid>
      <Label>Certificate</Label>
      <Button variant="outline" color="secondary">
        Select
      </Button>
      <FieldError>File too large</FieldError>
    </FileField>
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var y,C,L;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <FileField {...props}>
      <Button variant="soft" aria-label="Select certificate">
        <Icon>
          <IconPaperclip />
        </Icon>
      </Button>
    </FileField>
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var I,g,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(g=d.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var E,D,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const $e=["Default","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,m as IconButton,c as WithDescription,p as WithError,d as WithHandler,u as WithReactHookForm,$e as __namedExportsOrder,Ze as default};
