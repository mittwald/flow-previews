import{r as x,j as e}from"./iframe-CTX0Bv2_.js";import{F as t}from"./FileDropZone-D9hifl2S.js";import{S as d}from"./Section-BB_XqpVc.js";import{F as u}from"./FileCardList-CYlYerJw.js";import{F}from"./FileCard-Y1rKvYgb.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-BBbbRB2z.js";import{B as f}from"./Button--JyduJMj.js";import{A as b}from"./ActionGroup-C6Lmv597.js";import{_ as j,$ as B}from"./IconWarning-nHMyX661.js";import{H as g}from"./Heading-Dk_R5Gok.js";import{F as h}from"./FileField-BaQZO7WT.js";import{T as O}from"./Text-DLhfgo2a.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-DlEw1Zkf.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./index-Cuy-twEi.js";import"./useFieldComponent-mADlv6K1.js";import"./utils-DEP6wxfF.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CfE4Vxx5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./useFocus-Brpf5vcF.js";import"./useCollator-Ac6OChDz.js";import"./context-BlMA_qTH.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./useFocusRing-jdOUMH5T.js";import"./Button-C6E7IXzn.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BBVfaVqb.js";import"./useFocusable-C46UWCUq.js";import"./VisuallyHidden-DBqpLolF.js";import"./ContextMenuSection-B5km2Fq1.js";import"./Action-IRtc2zB7.js";import"./context-DDqdITge.js";import"./useStatic-CPXlsR2u.js";import"./browser-NwcAgtgI.js";import"./getActionGroupSlot-CcrxUumb.js";import"./dynamic-izZr6sj3.js";import"./Dialog-B47KQ7WD.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./FocusScope-Dney2d0V.js";import"./ColumnLayout-DXtVry1g.js";import"./Avatar-BO_eDNXJ.js";import"./AlertIcon-CvLHNETq.js";import"./Image-ukiDRfPM.js";import"./Link-C4PXsJDi.js";import"./OptionsButton-DZh8y49X.js";import"./ButtonView-Dt-QAv61.js";import"./ContextMenuTriggerView-DiFC2uDs.js";import"./ContextMenuTrigger-C788Are4.js";import"./OverlayTrigger-DD_Axl8O.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./FieldError-BCaKsj_Z.js";import"./FieldError-DPNf_GCP.js";import"./AlertText-CzATBvzT.js";import"./useRef-CPlhEGUf.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./remote-Dp_KpE6s.js";import"./Heading-BWaAz6go.js";import"./useFormValidation-CLweFpah.js";import"./Input-Bb-wn0Gj.js";import"./EmulatedBoldText-EuanT-4h.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <Field name="file" rules={{
          required: "Please choose a file"
        }}>
            <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
              <IconUpload />
              <Heading>Drop file</Heading>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </FileDropZone>
          </Field>
          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <SubmitButton>Upload</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Xe=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,Xe as __namedExportsOrder,Qe as default};
