import{r as h,j as e}from"./iframe-Drlrrc6u.js";import{F as t}from"./FileDropZone-BitDuRLL.js";import{S as c}from"./Section-RAbPynVG.js";import{F as d}from"./FileCardList-BKF4fU_1.js";import{F as u}from"./FileCard-CHCHHJgb.js";import{u as O,F as T,t as _}from"./Form-4_IeeoQr.js";import{B as s}from"./Button-BZh4lcUb.js";import{A as b}from"./ActionGroup-CXyVbJqh.js";import{Y as x,Z as k}from"./IconWarning-DFClu02m.js";import{H as F}from"./Heading-BNUsyeWI.js";import{F as f}from"./FileField-Brfb89xn.js";import{T as U}from"./Text-BpnYQtuA.js";import"./IllustratedMessage-CDO0f1-M.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-7APwv9TL.js";import"./mergeRefs-z-jxhhpD.js";import"./index-Cm4rxf6Y.js";import"./utils-44JLHIVv.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CC4u2Qzg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BHWpzQCP.js";import"./useFocus-CnY09QFt.js";import"./useCollator-DFRy-0H3.js";import"./context-DT5m7DRa.js";import"./useLocalizedStringFormatter-BDZHKril.js";import"./Button-BmpQ_XRw.js";import"./ProgressBar-BADn2VXC.js";import"./Label-DVK5kxKu.js";import"./Hidden-DD5LsL7x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dk26gxo5.js";import"./useFocusRing-CzFnztZj.js";import"./useFocusable-DohvcnRv.js";import"./VisuallyHidden-CSm48NDs.js";import"./ContextMenuSection-DPOvrehY.js";import"./Action-C167ofiw.js";import"./context-B6ETq0Vi.js";import"./useStatic-CAY7QlrT.js";import"./browser-BFksgo5g.js";import"./getActionGroupSlot-DLBNnVP5.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-D4Yh2V4Y.js";import"./RSPContexts-BD-SnrRU.js";import"./OverlayArrow-CassYJzw.js";import"./useControlledState-CdXpD3vz.js";import"./Collection-DU8MwyJ0.js";import"./CollectionBuilder-DAHNGdP0.js";import"./Separator-DU5iT2Hb.js";import"./Group-gluLjbwr.js";import"./SearchField-Do9rWkb6.js";import"./FieldError-C-dEABlD.js";import"./Form-C4Z2UYxX.js";import"./useTextField-CgGM2M3-.js";import"./useFormReset-DMyooaze.js";import"./TextField-5_ge-qCO.js";import"./useEvent-CTzW67zj.js";import"./SelectionManager-DSfIplwJ.js";import"./FocusScope-Bhoog2Cx.js";import"./ColumnLayout-CbzWeVmZ.js";import"./Avatar-ZfRvJ-L4.js";import"./AlertIcon-DncCKYQE.js";import"./Image-B0IvuGVn.js";import"./Link-Du07zNPB.js";import"./OptionsButton-EjDOEz8T.js";import"./ButtonView-BJQQ2_2L.js";import"./ContextMenuContent-DKaMIjnZ.js";import"./Popover-PSW42Ml5.js";import"./DialogTriggerView-CkmkgVup.js";import"./Switch-CLY-UBKF.js";import"./Label-B_vkKa-h.js";import"./useToggleState-DduW_QIn.js";import"./FieldError-CPYhddP5.js";import"./LoadingSpinner-Btgpjn0K.js";import"./Heading-DHv6Y5yQ.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Wx7CRY9w.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
