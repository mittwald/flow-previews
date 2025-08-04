import{r as h,j as e}from"./iframe-CuW8Z7cC.js";import{F as t}from"./FileDropZone-Bs6-dgQd.js";import{S as c}from"./Section-bYWIsQL_.js";import{F as d}from"./FileCardList-Bus1MNdY.js";import{F as u}from"./FileCard-B8NHCUbj.js";import{u as O,F as T,t as _}from"./Form-8TUpIfT1.js";import{B as s}from"./Button-D9Fw6D0O.js";import{A as b}from"./ActionGroup-CByS4--H.js";import{Y as x,Z as k}from"./IconWarning-zrofpdfr.js";import{H as F}from"./Heading-BwmXbbPu.js";import{F as f}from"./FileField-BtDlZ0wg.js";import{T as U}from"./Text-BVSFkmOJ.js";import"./IllustratedMessage-C_0WfpjI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./utils-CgS8DRaE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DWn8KR_S.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C7dUje6t.js";import"./useFocus-D7WquFnz.js";import"./useCollator-B1wFiJa6.js";import"./context-BYWbGN2W.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./Button-XBmqNEFP.js";import"./ProgressBar-BpIwFtNJ.js";import"./Label-CGUx7qQt.js";import"./Hidden-Cabgeqjz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChUiq42t.js";import"./useFocusRing-DouDeddi.js";import"./useFocusable-GYH2Xp93.js";import"./VisuallyHidden-DEeOB75f.js";import"./ContextMenuSection-BYleIbQp.js";import"./Action-BEJscuVN.js";import"./context-DcAOWEDn.js";import"./useStatic-MQhSGK4y.js";import"./browser-DxBOFXa_.js";import"./getActionGroupSlot-DTumxqx2.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D1kraT3B.js";import"./RSPContexts-Cf0WAJYH.js";import"./OverlayArrow-CyeHV5yR.js";import"./useControlledState-BloqaAdM.js";import"./Collection-DVSzmKrY.js";import"./CollectionBuilder-B5oNNMRo.js";import"./Separator-BVlyHbVt.js";import"./Group-Dq-TZzFP.js";import"./SearchField-BtIhQoeP.js";import"./FieldError-C4CBNnNe.js";import"./Form-CVKq_8tp.js";import"./useTextField-D2_5QzKr.js";import"./useFormReset-BUJ4pXgh.js";import"./TextField-z_7EUq5A.js";import"./useEvent-CYDGvwkU.js";import"./SelectionManager-C2yhE_X5.js";import"./FocusScope-C5C0qsLJ.js";import"./ColumnLayout-DMFClxun.js";import"./Avatar-D8aG16fd.js";import"./AlertIcon-Chn9d8lE.js";import"./Image-DdNqJFSL.js";import"./Link-D18CS-kn.js";import"./OptionsButton-CtkUpLIP.js";import"./ButtonView-BwakS-na.js";import"./ContextMenuContent-i4fF1btG.js";import"./Popover-D_vujyJZ.js";import"./DialogTriggerView-C2lPzY4b.js";import"./Switch-BOsWjesr.js";import"./Label-BtRITTXP.js";import"./useToggleState-BbgH5JnB.js";import"./FieldError-B4QQkVwM.js";import"./LoadingSpinner-Cg9hyS_b.js";import"./Heading-CwPuVFMm.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CK46MGsP.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
