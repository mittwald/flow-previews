import{r as g,j as e}from"./iframe-cK4MHKim.js";import{F as t}from"./FileDropZone-B7XO9Yk1.js";import{S as d}from"./Section-BzkOS2ta.js";import{F as u}from"./FileCardList-s5Mz85rw.js";import{F}from"./FileCard-CrZdztb9.js";import{u as k,F as U,t as w}from"./Form-BH0gpjFQ.js";import{B as s}from"./Button-tRyoiE64.js";import{A as E}from"./ActionGroup-R8BjU1ZZ.js";import{Y as x,Z as R}from"./IconWarning-DC4_CpRf.js";import{H as f}from"./Heading-CQuqsn-Y.js";import{F as h}from"./FileField-BQV8klNm.js";import{T as W}from"./Text-FUpRzF42.js";import"./IllustratedMessage-QUB3q72U.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-OWbcmO7Y.js";import"./mergeRefs-CbouoeLx.js";import"./index-C0FnYpIX.js";import"./utils-DNizpOE3.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CdSAgC2T.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CcxHXXo7.js";import"./useFocus-PfRPzZF9.js";import"./useCollator-CxGNCHfH.js";import"./context-BROjSY2y.js";import"./useLocalizedStringFormatter-yrbwHSL5.js";import"./Button-j0J6t_ue.js";import"./ProgressBar-D0PLg1H8.js";import"./Label-0KSLZDSS.js";import"./Hidden-DPS3aF7x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DxZYFGgJ.js";import"./useFocusRing-CfOQ7Cy2.js";import"./useFocusable-D26CMdgI.js";import"./VisuallyHidden-Bp326u91.js";import"./ContextMenuSection-DyxtMrK9.js";import"./Action-Bmtfn7OI.js";import"./context-BAX0bMt2.js";import"./useStatic-CeVBJjTX.js";import"./browser-DLRwst_8.js";import"./getActionGroupSlot-Dq1WdNDk.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BMNDou9L.js";import"./RSPContexts-DhgL2OGs.js";import"./OverlayArrow-Dw1wGyeW.js";import"./useControlledState-BIGan-OB.js";import"./Collection-DDFYkT_e.js";import"./CollectionBuilder-DWibNHzH.js";import"./Separator-C_60SsjZ.js";import"./Group-zgF9gzKV.js";import"./SearchField-BZKVt08V.js";import"./FieldError-DXq6AbFm.js";import"./Form-Bkh8JfAF.js";import"./useTextField-Bd94TOwc.js";import"./useFormReset-8LX1mmkH.js";import"./TextField-B4j1tk_1.js";import"./useEvent-BXCZp1cQ.js";import"./SelectionManager-D8Yp4yhw.js";import"./FocusScope-D00_KgQG.js";import"./ColumnLayout-DrUiSk4H.js";import"./Avatar-Bprf-dhf.js";import"./AlertIcon-B2W3qYXp.js";import"./Image-DbXOUfDC.js";import"./Link-C3LdGJhZ.js";import"./ButtonView-Bp72Dtx6.js";import"./ContextMenuContent-B_hYVcS3.js";import"./Popover-D8GRdqS8.js";import"./DialogTriggerView-Bd9C4EBH.js";import"./Switch-Ep9ywrpn.js";import"./Label-DBVrm7rf.js";import"./useToggleState-C2SMOq4C.js";import"./FieldError-lgMlex5D.js";import"./LoadingSpinner-Be0PLLzY.js";import"./Heading-Dng0M53p.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DX7VDiw5.js";const{action:G}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},M=G("submit"),a={},m={args:{isDisabled:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(R,{}),e.jsx(f,{children:"Drop image"}),e.jsx(W,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=g.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(f,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=k(),i=w();return e.jsxs(U,{form:n,onSubmit:M,children:[e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(f,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(E,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var j,S,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,b,y;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};var O,T,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const dr=["Default","Disabled","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,p as Multiple,l as WithAcceptedTypes,c as WithReactHookForm,dr as __namedExportsOrder,cr as default};
