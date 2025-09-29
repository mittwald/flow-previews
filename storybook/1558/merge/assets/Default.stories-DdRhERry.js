import{r as x,j as e}from"./iframe-QjFTiyQe.js";import{F as t}from"./FileDropZone-B_LghHwO.js";import{S as u}from"./Section-dZwQFsPG.js";import{F}from"./FileCardList-UDCP5ELS.js";import{F as f}from"./FileCard-CjfCbORN.js";import{u as E,F as W,t as G}from"./Form-BYecuvpb.js";import{B as s}from"./Button-DswPXoPV.js";import{A as M}from"./ActionGroup-DajdHlfJ.js";import{_ as j,$ as q}from"./IconWarning-I1gVfg4d.js";import{H as g}from"./Heading-B7tG6tmq.js";import{F as h}from"./FileField-hp280LM5.js";import{T as v}from"./Text-BZfLsL9o.js";import"./index-Cun1SEai.js";import"./IllustratedMessage-CQ9qEsdk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./utils-r8e_N1jc.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C66hVS57.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BzcwXIx3.js";import"./useFocus-CRsfU1Oq.js";import"./useCollator-CVr4ya_1.js";import"./context-CTF16ofK.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./Button-Czs8nreM.js";import"./ProgressBar-gZUBqeyg.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnoQHIlJ.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocusable-D3z6GPZp.js";import"./VisuallyHidden-YhvwkWEW.js";import"./ContextMenuSection-JoLTQJFC.js";import"./Action-qyNGi_Md.js";import"./context-Be1upz9q.js";import"./useStatic-Dq12R2u8.js";import"./browser-CetGLHjc.js";import"./getActionGroupSlot-BezXTqeU.js";import"./dynamic-BXiQW-1E.js";import"./Popover-B3H4bpbb.js";import"./DialogTriggerView-nOYLeOX3.js";import"./RSPContexts-D-dV82T_.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./useControlledState-Dx1OInf3.js";import"./FocusScope-zGp-W5qB.js";import"./Collection-CqUJc8bm.js";import"./CollectionBuilder-D_prnUUR.js";import"./context-BV634MuB.js";import"./Separator-C2SfW9_n.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";import"./Switch-DhT8Adyz.js";import"./Label-poB2Yhtj.js";import"./useToggleState-DlGoB95j.js";import"./useFormReset-BGTclNvs.js";import"./ColumnLayout-DXCwxwUT.js";import"./Avatar-BzsD7_vU.js";import"./AlertIcon-C4_np_LO.js";import"./Image-Cr48Q4uz.js";import"./Link-D-LDFCDO.js";import"./ButtonView-BbPG4M9r.js";import"./ContextMenuTriggerView-Cya7zpEQ.js";import"./FieldError-UwL51K-0.js";import"./FieldError-BdyL5myA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-DWbOqfQP.js";import"./Heading-CKgYV3oq.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-0HUXiHYd.js";import"./Input-BiYwJspv.js";import"./EmulatedBoldText-B1qs5w8y.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,Fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const fr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,fr as __namedExportsOrder,Fr as default};
