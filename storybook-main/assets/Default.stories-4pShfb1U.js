import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BZISi7jw.js";import{F as t}from"./FileDropZone-D63Ngzdt.js";import{S as c}from"./Section-CkgEY5ZA.js";import{F as d}from"./FileCardList-CAVMCzj6.js";import{F as u}from"./FileCard-DoIYQ7vY.js";import{u as k,F as I,t as T}from"./Form-B4YozVTs.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-CnylmBwY.js";import{A as w}from"./ActionGroup-BYf0wJDm.js";import"./IconApp-W8-S6AAB.js";import{h as x,i as W}from"./IconWarning-BUA863Ku.js";import{H as F}from"./Heading-CnJT-hhq.js";import{F as f}from"./FileField-7qtfWtzF.js";import{T as E}from"./Text-CiS2CEB-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IllustratedMessage-MDd3vQQt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./utils-B8p6n-_S.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CUmgXOYU.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DjubqfyV.js";import"./useFocus-0lzzAyJ_.js";import"./useCollator-CB8NJtcR.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./Button-DlOLKXkK.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./VisuallyHidden-DCnFJsId.js";import"./ContextMenuSection-C2hykenk.js";import"./Action-Y9vUQ_E8.js";import"./context-Cn4G8t_B.js";import"./useStatic-Boalhu8h.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-CX7tjRC3.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-TWm-lwKH.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-BxXqfwgF.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-B-y1oEx2.js";import"./CollectionBuilder-cVXcHFND.js";import"./Separator-D0eYhWhZ.js";import"./SelectionManager-BB9PAfr3.js";import"./useEvent-BxpP-RFo.js";import"./FocusScope-2Ar0PVcM.js";import"./ColumnLayout-BrFPtSnl.js";import"./Avatar-CGOvanLK.js";import"./react-children-utilities-fm2cgFnI.js";import"./Image-C7SQT7VW.js";import"./Link-iCB64Jmn.js";import"./Wrap-DQq6jo70.js";import"./FieldError-DbNWEBso.js";import"./FieldError-CFxmzwuR.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./Heading-Cc6WIW0_.js";import"./Input-DtximQ_K.js";import"./EmulatedBoldText-BfYT5ZHF.js";const er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},l={args:{accept:"image/png"},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},m={args:{multiple:!0},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const i=k(),n=T();return e.jsxs(I,{form:i,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...i.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,H,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=m.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var A,Z,b;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const rr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Multiple,l as WithAcceptedTypes,p as WithReactHookForm,rr as __namedExportsOrder,er as default};
