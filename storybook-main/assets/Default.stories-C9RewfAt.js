import{r as h,j as e}from"./iframe-DHE-6oks.js";import{F as t}from"./FileDropZone-DshmdVej.js";import{S as c}from"./Section-hBJqb3I5.js";import{F as d}from"./FileCardList-yx-UgjHy.js";import{F as u}from"./FileCard-Cam_GKAn.js";import{u as O,F as T,t as _}from"./Form-Cv2JPUa-.js";import{B as s}from"./Button-DTmWymNY.js";import{A as b}from"./ActionGroup-BHyeeSSX.js";import{Y as x,Z as k}from"./IconWarning-Cic1MV-m.js";import{H as F}from"./Heading-jYuKOunx.js";import{F as f}from"./FileField-CSegoT2g.js";import{T as U}from"./Text-DvqkAO4K.js";import"./IllustratedMessage-Bwfum6OF.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./utils-x8BQYX4-.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-NjMLt3Ri.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DfuADmFb.js";import"./useFocus-DYGSM8hG.js";import"./useCollator-_wAd7c24.js";import"./context-DFltFWpJ.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./Button-Dx38wLWj.js";import"./ProgressBar-D7CY6Vap.js";import"./Label-CRHcOnwp.js";import"./Hidden-wM-8btK_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKLIgAwR.js";import"./useFocusRing-OVXrKScL.js";import"./useFocusable-BqyWOhG-.js";import"./VisuallyHidden-JQCaE509.js";import"./ContextMenuSection-rhbKwxLA.js";import"./Action-VI9cAUPd.js";import"./context-C7gD2f3O.js";import"./useStatic-RbPw01cN.js";import"./browser-DInQ8S6B.js";import"./getActionGroupSlot-BAwn8Ach.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CmbCeDcm.js";import"./RSPContexts-B_OykxZB.js";import"./OverlayArrow-BzBmdrc3.js";import"./useControlledState-DtNNEi2b.js";import"./Collection-DvDkMv-D.js";import"./CollectionBuilder-DOrrKo3i.js";import"./Separator-s586xCfF.js";import"./Input-DW8k9amG.js";import"./SearchField-B1O_97SX.js";import"./FieldError-B9K2-GIk.js";import"./Form-B4xkNDou.js";import"./Group-DF6Pci-D.js";import"./useTextField-C3m2uMQS.js";import"./useFormReset-BToKGHXS.js";import"./TextField-D2dBDnFN.js";import"./SelectionManager-jb_M3DhH.js";import"./useEvent-DAUMmEgK.js";import"./FocusScope-DduXebcv.js";import"./ColumnLayout-BYg4fSgI.js";import"./Avatar-B1REQ5W2.js";import"./AlertIcon-D7nJhHn9.js";import"./Image-BHBdD-o5.js";import"./Link-BMNsKwnm.js";import"./OptionsButton--oVVTr9R.js";import"./ButtonView-tNcZ1p3A.js";import"./ContextMenuContent-0OGraZPr.js";import"./Popover-CEn09y9m.js";import"./DialogTriggerView-B81Eu0Os.js";import"./Switch-103x_V2T.js";import"./Label-CsrQ8fuF.js";import"./useToggleState-BSceVarM.js";import"./FieldError-cJslzypo.js";import"./LoadingSpinner-CGq1_nld.js";import"./Heading-eFzWwoOT.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-h05YTKz1.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const pr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,pr as __namedExportsOrder,lr as default};
