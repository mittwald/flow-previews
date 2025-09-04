import{j as e,r as O}from"./iframe-Coh3lrZj.js";import{L as s}from"./Label-K_XjE_tx.js";import{F as o}from"./FileField-BIbYJh-2.js";import{B as t}from"./Button-D5EdJ83A.js";import{S as A}from"./Section-BDCUJAoe.js";import{F as P}from"./FieldError-BUIbxk7v.js";import{F as R}from"./FieldDescription-C5sbRWI1.js";import{O as H,K as k}from"./IconWarning-B1v1dgwn.js";import{u as G,F as U,t as q}from"./Form-DkJKFIVl.js";import{A as w}from"./ActionGroup-CrLJ68kJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./context-BpLwYJWu.js";import"./Label-YsAq_uoV.js";import"./utils-CN3w8kPq.js";import"./Hidden-DOaFp58p.js";import"./FormField.module-CqWyJNQI.js";import"./Form-C7dJ7ChK.js";import"./useFocus-DOmsUoiU.js";import"./useLabel-BKRPYz_q.js";import"./FieldError-CZajLekn.js";import"./Text-C-iBrm51.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-O8MFP4r0.js";import"./useFocusRing-Bz5xuAjx.js";import"./browser-8tAA8o9s.js";import"./Text-CXTmOKkL.js";import"./EmulatedBoldText-CrQvx5NB.js";import"./LoadingSpinner-CX_uswsf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-cLSaMy5d.js";import"./ProgressBar-CHLkYv72.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BU16hmOe.js";import"./useFocusable-D2foM-gB.js";import"./ContextMenuSection-BRIEUOwp.js";import"./Action-BPx-Vljf.js";import"./context-B447f_pA.js";import"./useStatic-BT-23i_z.js";import"./getActionGroupSlot-BtRAHx2-.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DCw7F88C.js";import"./RSPContexts-C359HXMi.js";import"./OverlayArrow-qlVhoYin.js";import"./useControlledState-C1ksr8rK.js";import"./Collection-cAnrSkK1.js";import"./CollectionBuilder-CwtIJ2gd.js";import"./Separator-CwGjgvWm.js";import"./SearchField-BwCTywRo.js";import"./useTextField-DgBLYHiF.js";import"./useFormReset-0zxdLi8h.js";import"./TextField-DmB3C__1.js";import"./useEvent-D6JeCAIh.js";import"./SelectionManager-DNWvZwOK.js";import"./useCollator-DMqrDDl2.js";import"./FocusScope-Cb054v9_.js";import"./VisuallyHidden-BFztPoj4.js";/**
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
