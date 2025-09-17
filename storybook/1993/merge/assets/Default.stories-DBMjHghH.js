import{j as e,r as k}from"./iframe-BKOyO0tU.js";import{L as s}from"./Label-DvNp2qob.js";import{F as o}from"./FileField-C9LFTacx.js";import{B as t}from"./Button-BRmnXyIg.js";import{S as H}from"./Section-DcBOfrzF.js";import{F as G}from"./FieldError-Da4EtItW.js";import{F as U}from"./FieldDescription-hDtyIPHR.js";import{O as q,K as w}from"./IconWarning-WHLX57m9.js";import{u as K,F as M,t as N}from"./Form-DlZgNljl.js";import{A as T}from"./ActionGroup-DEeYD_cT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./context-wvutwpZE.js";import"./Label-Vv3VD8Wn.js";import"./utils-B2BekvYW.js";import"./Hidden-DB9d8bX3.js";import"./FormField.module-CqWyJNQI.js";import"./Form-D-YH0smr.js";import"./useFocus-dHggTvNn.js";import"./useLabel-kfVNblq3.js";import"./FieldError-D2kmkBqC.js";import"./Text-ACnzImZy.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-iIjIB8eM.js";import"./useFocusRing-D97-YwB6.js";import"./browser-8Kbc9Tso.js";import"./Text-ExzQZ1Qc.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./LoadingSpinner-B8cx3qaz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DqwKzt0W.js";import"./ProgressBar-w7N8Fjyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CfgifMFV.js";import"./useFocusable-C3wI1ws-.js";import"./ContextMenuSection-DnHutdVr.js";import"./Action-C_4EL_0e.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";import"./getActionGroupSlot-mCG5t0cx.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BbUqm1un.js";import"./RSPContexts-BmPvawj4.js";import"./OverlayArrow-CigCDiMF.js";import"./useControlledState-B16HJi6R.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./SearchField-BqOdnuK_.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./TextField-tmvkgR0S.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";import"./chunk-PULGOXDA-8tYzn7uh.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5",key:"svg-0"}]],z=q("outline","paperclip","Paperclip",Y),{action:J}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/FileField",component:o,render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})},Q=J("submit"),l={},c={args:{isReadOnly:!0}},p={render:r=>e.jsxs(o,{...r,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(U,{children:"Supported formats: .pem, .pfx"})]})},m={render:r=>e.jsxs(o,{...r,isInvalid:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),e.jsx(G,{children:"File too large"})]})},d={render:r=>e.jsx(o,{...r,children:e.jsx(t,{variant:"soft","aria-label":"Select certificate",children:e.jsx(w,{children:e.jsx(z,{})})})})},u={render:r=>{const[n,a]=k.useState(null),i=n==null?void 0:n[0];return e.jsxs(H,{children:[e.jsxs(o,{...r,isInvalid:!0,onChange:a,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]}),i==null?void 0:i.name]})}},F={render:()=>{var a,i;const r=K(),n=N();return e.jsx(M,{form:r,onSubmit:Q,children:e.jsxs(H,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(o,{multiple:!0,children:[e.jsx(s,{children:"Certificate"}),e.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),(i=(a=r.watch("file"))==null?void 0:a[0])==null?void 0:i.name,e.jsx(T,{children:e.jsx(t,{type:"submit",children:"Upload"})})]})})}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,j,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(A=F.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const ir=["Default","ReadOnly","WithDescription","WithError","IconButton","WithHandler","WithReactHookForm"];export{l as Default,d as IconButton,c as ReadOnly,p as WithDescription,m as WithError,u as WithHandler,F as WithReactHookForm,ir as __namedExportsOrder,tr as default};
