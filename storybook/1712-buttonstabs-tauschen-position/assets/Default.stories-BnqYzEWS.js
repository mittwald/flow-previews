import{r as h,j as e}from"./iframe-DLPMA2Jy.js";import{F as t}from"./FileDropZone-plWmVEUh.js";import{S as c}from"./Section-_BKPgPPk.js";import{F as d}from"./FileCardList-D3r8ejY_.js";import{F as u}from"./FileCard-CiTbS_Kg.js";import{u as O,F as T,t as _}from"./Form-Br4WFxUW.js";import{B as s}from"./Button-Bg9EI6ke.js";import{A as b}from"./ActionGroup-Be0XQrwT.js";import{Y as x,Z as k}from"./IconWarning-BZNHqQOv.js";import{H as F}from"./Heading-aUvczpdy.js";import{F as f}from"./FileField-CEAltqDs.js";import{T as U}from"./Text-BHcv_RSt.js";import"./IllustratedMessage-C6vSSyjR.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./utils-b1QyYEgl.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DL4PvoSo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D3WVZ9yP.js";import"./useFocus-rX-PXuLl.js";import"./useCollator-DMUqz4RZ.js";import"./context-BFBvnlV1.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./Button-D9zXVRa2.js";import"./ProgressBar-DSj6SBtF.js";import"./Label-tqYGMXcy.js";import"./Hidden-Ba5oTT5z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DwtsQH2c.js";import"./useFocusRing-DFqScG39.js";import"./useFocusable-CToQXnw-.js";import"./VisuallyHidden-C4Kk4Esh.js";import"./ContextMenuSection-CfQ2STgX.js";import"./Action-BCWbF5ob.js";import"./context-DC5SRHlZ.js";import"./useStatic-m6uLMmhn.js";import"./browser-Bc43_gVJ.js";import"./getActionGroupSlot-C-GBSGDA.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-ClROTFho.js";import"./RSPContexts-ClqXx4oa.js";import"./OverlayArrow-3BLRTQic.js";import"./useControlledState-Btp8qCFq.js";import"./Collection-B7eLtKl3.js";import"./CollectionBuilder-CE08yFAM.js";import"./Separator-BudPJPnA.js";import"./Group-CGwZZGNH.js";import"./SearchField-CSx5BdQ3.js";import"./FieldError-Cgq9toxC.js";import"./Form-DfIg0xpy.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./TextField--NLdPxFk.js";import"./useEvent-PyKag1Em.js";import"./SelectionManager-D0ySastt.js";import"./FocusScope-DA4TfNEK.js";import"./ColumnLayout-B_UrqkwO.js";import"./Avatar-CtDt7tvF.js";import"./AlertIcon-DxN2Aj_q.js";import"./Image-CcTVsWix.js";import"./Link-D-l9kzT5.js";import"./OptionsButton-DHbstkWF.js";import"./ButtonView-B9Lv51Nt.js";import"./ContextMenuContent-CY2PN8MV.js";import"./Popover-BbAmJ5oq.js";import"./DialogTriggerView-DAw6tYdk.js";import"./Switch-CyR4zabA.js";import"./Label-njveXq1g.js";import"./useToggleState-CIU19LON.js";import"./FieldError-C4PtmRqe.js";import"./LoadingSpinner-BpI0Au67.js";import"./Heading-DVrRK9po.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BMpcVoTB.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
