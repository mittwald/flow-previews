import{r as x,j as e}from"./iframe-DpNCYkDX.js";import{F as t}from"./FileDropZone-CnJGJGJI.js";import{S as d}from"./Section-Xx985Qwf.js";import{F as u}from"./FileCardList-Bgx9aODb.js";import{F}from"./FileCard-Ckta0rf5.js";import{u as S,F as C,t as D}from"./Form-y1whqzWu.js";import{S as y}from"./ResetButton-D3EbzuUq.js";import{B as f}from"./Button-CB8TQqfw.js";import{A as b}from"./ActionGroup-DQeeqJWq.js";import{$ as j,a0 as B}from"./IconWarning-CcmUiij-.js";import{H as g}from"./Heading-CdQ6Kdnh.js";import{F as h}from"./FileField-BwBtyKd7.js";import{T as O}from"./Text-Bp6u83O8.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-VNxbWNZz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./useFieldComponent-CtyBuaGz.js";import"./utils-YaT_C2bO.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-B4MgbG6f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./useFocus-CLy8_GQ0.js";import"./useCollator-BChcYNiy.js";import"./context-Df7wrknH.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-OMCV4DY8.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./VisuallyHidden-BhiVW_d3.js";import"./ContextMenuSection-BWIiCJCm.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./useStatic-C-pVfuV7.js";import"./browser-BfCz5g6M.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./dynamic-DOXkjdco.js";import"./Dialog-DtZU9YT9.js";import"./RSPContexts-_XCAh6rU.js";import"./OverlayArrow-DaAbsuct.js";import"./useControlledState-CFzFCELG.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./FocusScope-DPz7ONOW.js";import"./ColumnLayout-DGJJrAcK.js";import"./Avatar-CIZEvz05.js";import"./AlertIcon-CnmOZB_U.js";import"./Image-C00TlK2K.js";import"./Link-Cz3IrAwQ.js";import"./OptionsButton-CWXroDAw.js";import"./ButtonView-BetzdRmg.js";import"./ContextMenuTriggerView-DQzmPz4r.js";import"./ContextMenuTrigger-yAw9v6sT.js";import"./OverlayTrigger-BclobJ22.js";import"./OverlayContextProvider-Cg977AbI.js";import"./FieldError-CLVEK_uH.js";import"./FieldError-DsNqYoam.js";import"./AlertText-DNWtIllY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-Daxuqj_w.js";import"./LoadingSpinner-mT2tjpr6.js";import"./remote-FHZXAXl3.js";import"./Heading-Cba33pi1.js";import"./useFormValidation-Db_N1-Xt.js";import"./Input-BuBJ2CWK.js";import"./EmulatedBoldText-DU1S0mM2.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,er={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const rr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,rr as __namedExportsOrder,er as default};
