import{r as x,j as e}from"./iframe-PPscN4tr.js";import{F as t}from"./FileDropZone-wr_oIA_w.js";import{S as u}from"./Section-ByzE7qdy.js";import{F}from"./FileCardList-CUsXPsRq.js";import{F as f}from"./FileCard-DmGSXYBU.js";import{u as E,F as W,t as G}from"./Form-BeMUT1Qa.js";import{B as s}from"./Button-DOt7fXGF.js";import{A as M}from"./ActionGroup-BmY62BYn.js";import{_ as j,$ as q}from"./IconWarning-DCjExedU.js";import{H as g}from"./Heading-BOw_RV8p.js";import{F as h}from"./FileField-3CNysQ7_.js";import{T as v}from"./Text-Cr4g403k.js";import"./IllustratedMessage-WSuz5ixm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./utils-DsPiQVUE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DOZF1D9Q.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./useFocus-C4zNlByO.js";import"./useCollator-DgDjDGmg.js";import"./context-BC4DP49M.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./Button-Dq2iCs8C.js";import"./ProgressBar-jJ6XsPfz.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BKGHEFGx.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";import"./VisuallyHidden-DdPky-fR.js";import"./ContextMenuSection-CrLKntAn.js";import"./Action-Cx_qZqiS.js";import"./context-DPnYEMwE.js";import"./useStatic-BImXXSW3.js";import"./browser-BBEx8dXu.js";import"./getActionGroupSlot-CEref5CZ.js";import"./dynamic-DLKBnFH6.js";import"./Popover-B4Thu_Ca.js";import"./DialogTriggerView-B2ubRe0W.js";import"./RSPContexts-CmKI408-.js";import"./ClearPropsContextView-CiAwXYC8.js";import"./useControlledState-Bj7Ci1Bi.js";import"./FocusScope-DT8YcIVm.js";import"./Collection-C__y2sy-.js";import"./CollectionBuilder-BAD3bxW3.js";import"./Separator-CQECSlkM.js";import"./Group-Bw_Vhw_L.js";import"./SearchField-BPbBm38f.js";import"./FieldError-Ccwwr1FD.js";import"./Form-D8YNg8fo.js";import"./useTextField-DGdrajZE.js";import"./useFormReset-CpR4G9FH.js";import"./TextField-C9dqtDV6.js";import"./useEvent-Dso9VxuL.js";import"./SelectionManager-D_TAE1Vs.js";import"./Switch-CpzuIrtB.js";import"./Label-Bf1duK2q.js";import"./useToggleState-BumZJUjk.js";import"./ColumnLayout-CnLUtUMP.js";import"./Avatar-C29JKBWw.js";import"./AlertIcon-DscLT5-Z.js";import"./Image-C2g7UDzU.js";import"./Link-CzUGCU7X.js";import"./ButtonView-DrLg5FKF.js";import"./ContextMenuTriggerView-DQl0Lhyv.js";import"./FieldError-_wKjORAk.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BmIM-aij.js";import"./Heading-__tDMM6f.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-2c05oBpj.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
