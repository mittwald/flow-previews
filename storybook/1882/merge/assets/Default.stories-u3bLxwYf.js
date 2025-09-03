import{r as g,j as e}from"./iframe-BPnb-8PC.js";import{F as t}from"./FileDropZone-BB7uDONZ.js";import{S as d}from"./Section-BdlMDPLS.js";import{F as u}from"./FileCardList-CGugn8Z5.js";import{F}from"./FileCard-rzi5usEj.js";import{u as k,F as U,t as w}from"./Form-B1foVCQX.js";import{B as s}from"./Button-chDOhf6m.js";import{A as E}from"./ActionGroup-DCIMc_j4.js";import{$ as x,a0 as R}from"./IconWarning-j0MoznR6.js";import{H as f}from"./Heading-DZGjjTVb.js";import{F as h}from"./FileField-CJyG8uoN.js";import{T as W}from"./Text-Ba-uZw6F.js";import"./IllustratedMessage-DPeKCvAS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./utils-BNZdeyCH.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-KWqvWgwT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Mae_nSQP.js";import"./useFocus-CQt3VlDx.js";import"./useCollator-bsozdqlF.js";import"./context-Cvzu1MDH.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./Button-DWahSmPc.js";import"./ProgressBar-C4vCg6TA.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DbV6qfru.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocusable-DW9GZi2B.js";import"./VisuallyHidden-BEucGg6b.js";import"./ContextMenuSection-D-7n8W_E.js";import"./Action-Bmubu_cL.js";import"./context-DmMltsbs.js";import"./useStatic-2pKXc1Kg.js";import"./browser-tQ-t1xxT.js";import"./getActionGroupSlot-DxqE-qL0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ChpM20JY.js";import"./RSPContexts-2Y1bGEeq.js";import"./OverlayArrow-DddHfoXR.js";import"./useControlledState-BZWp4i98.js";import"./Collection-FyZk2N5J.js";import"./CollectionBuilder-CoX_7NKP.js";import"./Separator-ACF8I6Sm.js";import"./Group-BfJL9-FJ.js";import"./SearchField-DgHP0CGL.js";import"./FieldError-Dg8qbhsB.js";import"./Form-CLKe_oCF.js";import"./useTextField-YbT0qQ_m.js";import"./useFormReset-BXLcPYzT.js";import"./TextField-DLL4ZGuM.js";import"./useEvent-C_P8io5N.js";import"./SelectionManager-BBZQaH8A.js";import"./FocusScope-CnAVXuaX.js";import"./ColumnLayout-DC01nIq1.js";import"./Avatar-CG8b4WBC.js";import"./AlertIcon-JrYwTJx8.js";import"./Image-C_NTgiNp.js";import"./Link-Dz5NnzvA.js";import"./ButtonView-B7_vWq61.js";import"./ContextMenuContent-CkNlJAKS.js";import"./Popover-CEK-D9_R.js";import"./DialogTriggerView-B5ULWNQB.js";import"./Switch-DDbZisdd.js";import"./Label-bLTq-ewh.js";import"./useToggleState-BaDXX3KU.js";import"./FieldError-hQRdtdq8.js";import"./LoadingSpinner-BUt2pcHy.js";import"./Heading-BpH7y_My.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-B7r9Z-1q.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var T,Z,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
