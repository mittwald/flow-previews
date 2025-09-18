import{r as x,j as e}from"./iframe-DUtcAVii.js";import{F as t}from"./FileDropZone-D1M-7mgg.js";import{S as u}from"./Section-O2Vc0Edx.js";import{F}from"./FileCardList-DOffCPhf.js";import{F as f}from"./FileCard-DSAOzRWp.js";import{u as E,F as W,t as G}from"./Form-BhbXo5cm.js";import{B as s}from"./Button-DULuqu_l.js";import{A as M}from"./ActionGroup-DzQEgvAL.js";import{_ as j,$ as q}from"./IconWarning-BDc9REUs.js";import{H as g}from"./Heading-C0ULUb4N.js";import{F as h}from"./FileField-5Cc-msih.js";import{T as v}from"./Text-CIiZgPf0.js";import"./IllustratedMessage-DQZ3UiY5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./utils-BJK0bMVs.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DD2-gbIJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./useFocus-BBGclxaJ.js";import"./useCollator-BJahqQL5.js";import"./context-DAjKPHt4.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./Button-2XgEXCNC.js";import"./ProgressBar-DzueJvvV.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DbIX1hOn.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./VisuallyHidden-CsqdnZMW.js";import"./ContextMenuSection-BbIodJXW.js";import"./Action-DkcWlbm8.js";import"./context-DAzA1DTj.js";import"./useStatic-BRK6B1ib.js";import"./browser-TyqKNGpG.js";import"./getActionGroupSlot-CSj3Q-Jf.js";import"./dynamic-BPQY4zlZ.js";import"./Popover-Bm-rwUXe.js";import"./DialogTriggerView-D0BwiIeE.js";import"./RSPContexts-DD7I-zbI.js";import"./ClearPropsContextView-CAu383Hu.js";import"./useControlledState-G4tJUSCb.js";import"./FocusScope-Bx_BpPkG.js";import"./Collection-YnS658O_.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Separator-DNulUYCD.js";import"./Group-QAGn5nhU.js";import"./SearchField-6u-M9e2f.js";import"./FieldError-B_KU3Njk.js";import"./Form-pelauJUP.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./TextField-w7amMjDR.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";import"./Switch-Dw1iDizI.js";import"./Label-D2FAkV6T.js";import"./useToggleState-fIj2JyOG.js";import"./ColumnLayout-CJEd6N-A.js";import"./Avatar-D7-LncD8.js";import"./AlertIcon-BlDns-2P.js";import"./Image-DqM3wZIz.js";import"./Link-1hy0AqTX.js";import"./ButtonView-C3pXxpNT.js";import"./ContextMenuTriggerView-CPOlt8vH.js";import"./FieldError-CldLJigO.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-3c39ELf0.js";import"./Heading-B2YReqBz.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-DtNQdD50.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
