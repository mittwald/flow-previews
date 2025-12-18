import{r as x,j as e}from"./iframe-Bqcpbrss.js";import{F as t}from"./FileDropZone-O2WukHDo.js";import{S as d}from"./Section-Bc1hD-fo.js";import{F as u}from"./FileCardList-D5iQ8u32.js";import{F}from"./FileCard-CFpRwQOV.js";import{u as S,F as C,t as D}from"./Form-BQQ7mOby.js";import{S as y}from"./ResetButton-YxixX2pb.js";import{B as f}from"./Button-Cnlerii9.js";import{A as b}from"./ActionGroup-6G6paD9M.js";import{Z as j,_ as B}from"./IconWarning-dEqiOsyE.js";import{H as g}from"./Heading-BG_QqVK-.js";import{F as h}from"./FileField-D3pkZf6w.js";import{T as O}from"./Text-BTcvwTq1.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cp_YPVN3.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBavSPU3.js";import"./index-s7Xlkd3C.js";import"./index-H5GW8qHY.js";import"./useFieldComponent-CI3p7oBW.js";import"./utils-BJedWkRC.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DG80-Tyy.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cn-M2zb9.js";import"./useFocus-BCtAPQqm.js";import"./useCollator-B8UItRx2.js";import"./context-BrwEoz3A.js";import"./useLocalizedStringFormatter-BO2YWtbk.js";import"./Button-DylF7GCR.js";import"./ProgressBar-BzgTVPtx.js";import"./Label-B1GY4ZIq.js";import"./Hidden-BSWGkYgd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CVO_DkHY.js";import"./useFocusRing-tPpareNh.js";import"./useFocusable-C3Q_jzXL.js";import"./VisuallyHidden-Bjfdz3a8.js";import"./ContextMenuSection-C08RkJTE.js";import"./Action-B2JQUsel.js";import"./context-ChzSVWNL.js";import"./useStatic-DxBp64zy.js";import"./browser-C4ue27yU.js";import"./getActionGroupSlot-BE7qaGeo.js";import"./dynamic-Dekqokaj.js";import"./Dialog-Dpg78GNT.js";import"./RSPContexts-DpyQuSVh.js";import"./OverlayArrow-BNJAVeF8.js";import"./useControlledState-BHyXOHwM.js";import"./Collection-tZi9qGtr.js";import"./CollectionBuilder-Doya1JT2.js";import"./SelectionIndicator-BkZCSZDU.js";import"./Separator-DULW3f4m.js";import"./SelectionManager-eAq13b4p.js";import"./useEvent-DW56id3t.js";import"./FocusScope-D6k82O5Z.js";import"./ColumnLayout-ByX9ZIMP.js";import"./Avatar-CYkIvhAm.js";import"./AlertIcon-glPdrYUy.js";import"./Image-Cp-kE0hE.js";import"./Link-CYGzniL6.js";import"./OptionsButton-IbuxJmmR.js";import"./ButtonView-D123ubsH.js";import"./ContextMenuTriggerView-C9N_Ebxu.js";import"./ContextMenuTrigger-BAwReSfr.js";import"./OverlayTrigger-BuPKGzUB.js";import"./OverlayContextProvider-BiPrc7hD.js";import"./FieldError-B_AiZFnH.js";import"./FieldError-DLGH1zeP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-DUppCNf-.js";import"./LoadingSpinner-CCDMAFHO.js";import"./remote-DG6VBXek.js";import"./Heading-BNK1YdHX.js";import"./useFormValidation-D7KvBPrT.js";import"./Input-RoH5kbBf.js";import"./EmulatedBoldText-CnuyczSs.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
