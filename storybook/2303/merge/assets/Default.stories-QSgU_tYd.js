import{r as x,j as e}from"./iframe-BTP_Z9Sf.js";import{F as t}from"./FileDropZone-JP2oha2i.js";import{S as d}from"./Section-Bql58_C6.js";import{F as u}from"./FileCardList-DVTvEx_2.js";import{F}from"./FileCard-CauimSbq.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-D_dyfali.js";import{B as f}from"./Button-er0RkDrE.js";import{A as b}from"./ActionGroup-Kh2CN0rv.js";import{_ as j,$ as B}from"./IconWarning-CwZb39At.js";import{H as g}from"./Heading-tBPre37B.js";import{F as h}from"./FileField-lZEcHZ6X.js";import{T as O}from"./Text-Cq5MQ8wu.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CBngBCyi.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./useFieldComponent-Da-vFXDP.js";import"./utils-DP1LA6WE.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CZ1YR4oj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./useFocus-BU1lOliM.js";import"./useCollator-BHL0tWyU.js";import"./context-BBaC2IfM.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./useFocusRing-CQvdF7rp.js";import"./Button-DgJw7YNb.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BnZLj0Nc.js";import"./useFocusable-Hlf8Yc9h.js";import"./VisuallyHidden-BWM4WxkJ.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./browser-eyJ8FPIK.js";import"./getActionGroupSlot-V7kcySO7.js";import"./dynamic-LcJrXyvC.js";import"./Dialog-DITwbnCq.js";import"./RSPContexts-Bn1hDyBd.js";import"./OverlayArrow-DzMljQ2A.js";import"./useControlledState-B5h2rUtG.js";import"./Collection-DSvrrKnp.js";import"./CollectionBuilder-By7qHrZF.js";import"./SelectionIndicator-Dze6faSJ.js";import"./Separator-DTcX24DQ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./FocusScope-B2nLTMyD.js";import"./ColumnLayout-i44GqQxi.js";import"./Avatar-BMyoTHcf.js";import"./AlertIcon-BLTDYNdz.js";import"./Image-D-QTl6CW.js";import"./Link-C9fmLDrA.js";import"./OptionsButton-CYfCDJnj.js";import"./ButtonView-B2TbsKhv.js";import"./ContextMenuTriggerView-BMqmwgnU.js";import"./ContextMenuTrigger-CpPTP_VY.js";import"./OverlayTrigger-B5XE0ce4.js";import"./OverlayContextProvider-qUQ07J32.js";import"./FieldError-DnUQcxCL.js";import"./FieldError-BvNBTK6b.js";import"./AlertText-CSpjF2dw.js";import"./useRef-Fcqlcr2u.js";import"./LoadingSpinner-Cv-igvht.js";import"./remote-BmAp8UvO.js";import"./Heading-CcadeVc2.js";import"./useFormValidation-HNZmieSP.js";import"./Input-Cgr_O3PE.js";import"./EmulatedBoldText-BkuV9i5t.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
