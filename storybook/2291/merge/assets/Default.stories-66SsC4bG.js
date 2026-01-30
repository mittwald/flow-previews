import{r as x,j as e}from"./iframe-BIoFjWpr.js";import{F as t}from"./FileDropZone-VOlSYux-.js";import{S as d}from"./Section-DckT0YJI.js";import{F as u}from"./FileCardList-DHrcF9ql.js";import{F}from"./FileCard-NFGUS0mm.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-MQWJL61W.js";import{B as f}from"./Button-60lZfz3H.js";import{A as b}from"./ActionGroup-BEBqOCwY.js";import{_ as j,$ as B}from"./IconWarning-EC1k16Yv.js";import{H as g}from"./Heading-CdczJAyy.js";import{F as h}from"./FileField-vvg59-xa.js";import{T as O}from"./Text-Dw86EjFX.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-ClgTsOAT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./useFieldComponent-DpF862rt.js";import"./utils-DZ7CVsEQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DporVAh2.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./useFocus-CQPopARV.js";import"./useCollator-2eiQlCLN.js";import"./context-CeBhVpDW.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./useFocusRing-C05eNqGk.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Uox4pFjd.js";import"./useFocusable-CwNae-cD.js";import"./VisuallyHidden-iLNm3MD9.js";import"./ContextMenuSection-D04Tf7Yh.js";import"./Action-CpJIOnVf.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./browser-BAGCYS_p.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./dynamic-BzebB2lX.js";import"./Dialog-khxuiED6.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./FocusScope-DZU3T--c.js";import"./ColumnLayout-kyzPOxUZ.js";import"./Avatar-BMJTp6ty.js";import"./AlertIcon-CufExgwJ.js";import"./Image-B9mk24SH.js";import"./Link-BGJm99bT.js";import"./OptionsButton-CFfxduPE.js";import"./ButtonView-D8SKXTBC.js";import"./ContextMenuTriggerView-CtNSCQkc.js";import"./ContextMenuTrigger-5cWzwjt3.js";import"./OverlayTrigger-DP9QTZiV.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./FieldError-CY5Rdgwt.js";import"./FieldError-3U-LgGLS.js";import"./AlertText-CqfZMgA0.js";import"./useRef-DU35bVT5.js";import"./LoadingSpinner-B_0T51TC.js";import"./remote-CdlQwHLV.js";import"./Heading-DvZsP83m.js";import"./useFormValidation-5Xewoqko.js";import"./Input-D2aCw11E.js";import"./EmulatedBoldText-Cp_-MpAq.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
