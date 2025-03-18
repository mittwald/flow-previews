import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CtQTiInQ.js";import{F as t}from"./FileDropZone-CDghoeBN.js";import{S as c}from"./Section-BwWVJ-3c.js";import{F as d}from"./FileCardList-cGT3FUsf.js";import{F as u}from"./FileCard-DaO_xo4e.js";import{u as k,F as I,t as T}from"./Form-BWHNkWmC.js";import{a as U}from"./index-B-lxVbXh.js";import{B as s}from"./Button-DgvjV036.js";import{A as w}from"./ActionGroup-C_m_wk1f.js";import"./IconApp-DCJnWfXR.js";import{i as x,j as W}from"./IconWarning-C5oUT_gq.js";import{H as F}from"./Heading-BNmY3x36.js";import{F as f}from"./FileField-zJJpuzz7.js";import{T as E}from"./Text-CyHz7mQc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IllustratedMessage-DNPwlLZV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaA12yFO.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./utils-DcjC1aig.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-UNZxgqCx.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./useFocus-DDYx82Z-.js";import"./useCollator-Sm__dF4I.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./Button-BHqGe8AQ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CpMfsvjg.js";import"./useFocusRing-Cr5iSysj.js";import"./useFocusable-OU46m6e2.js";import"./VisuallyHidden-CSEvhSst.js";import"./ContextMenuSection-DuUBxS7L.js";import"./Action-DufWMBOU.js";import"./context-gLf2glmD.js";import"./useStatic-OjKlncZ_.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-Sw8Lj_V0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DEbGOM_C.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Dips9o2N.js";import"./Collection-CkOHZ0-t.js";import"./CollectionBuilder-D9aYqsG0.js";import"./Separator-N7XAafOV.js";import"./useOverlayTriggerState-1oMTpBbI.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BEAD03b4.js";import"./useEvent-KizPqgSt.js";import"./FocusScope-CozWae-u.js";import"./ColumnLayout-3ppzfDw8.js";import"./Avatar-ClSJDDde.js";import"./react-children-utilities-DxL90CBS.js";import"./Image-ufgPqhZZ.js";import"./Link-BcFjnb0O.js";import"./Wrap-DQq6jo70.js";import"./FieldError-D-28Cm1k.js";import"./FieldError-Dq1sS4RN.js";import"./v4-CtRu48qb.js";import"./LoadingSpinner--ApQP2yb.js";import"./Heading-gLVfuOEw.js";import"./Input-BDrdTaRK.js";import"./EmulatedBoldText-D1jUzRoU.js";const rr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},G=U("submit"),a={},l={args:{accept:"image/png"},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(W,{}),e.jsx(F,{children:"Drop image"}),e.jsx(E,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},m={args:{multiple:!0},render:o=>{const[i,n]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...i??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const i=k(),n=T();return e.jsxs(I,{form:i,onSubmit:G,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...i.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(w,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=a.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};const nr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Multiple,l as WithAcceptedTypes,p as WithReactHookForm,nr as __namedExportsOrder,rr as default};
