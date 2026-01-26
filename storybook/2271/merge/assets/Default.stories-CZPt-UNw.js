import{r as x,j as e}from"./iframe-BZLAsPNC.js";import{F as t}from"./FileDropZone-0V0bq0_D.js";import{S as d}from"./Section-CMyrzkHY.js";import{F as u}from"./FileCardList-Dxv7Ybei.js";import{F}from"./FileCard-Dgc452rZ.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-Buihhz8x.js";import{B as f}from"./Button-CSRJ_rM3.js";import{A as b}from"./ActionGroup-Co14a4VD.js";import{$ as j,a0 as B}from"./IconWarning-BRgKnpuG.js";import{H as g}from"./Heading-CmA86V_y.js";import{F as h}from"./FileField-CC9yUsur.js";import{T as O}from"./Text-oqqebshB.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CNzw7z6E.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./useFieldComponent-C5gewvzz.js";import"./utils-GBJhPEt0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-C0MYo1gI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./useFocus-BAbXgSuO.js";import"./useCollator-CueQXTCK.js";import"./context-B1QKiSyt.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3AJe8l0.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./VisuallyHidden-B55KrhOv.js";import"./ContextMenuSection-B5_hjl5E.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./browser-D75BLayN.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./dynamic-DRBl70hS.js";import"./Dialog-BHTl5ZpY.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./useControlledState-BdOl-nfx.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./FocusScope-BleEWu6g.js";import"./ColumnLayout-C-LSdX6O.js";import"./Avatar-Ck8xQEJR.js";import"./AlertIcon-wpFTQr76.js";import"./Image-Chfs7QIE.js";import"./Link-DGFdzo1Q.js";import"./OptionsButton-BwLMV3tQ.js";import"./ButtonView-DfyaGCHA.js";import"./ContextMenuTriggerView-C0cAweoW.js";import"./ContextMenuTrigger-DwSq8C9_.js";import"./OverlayTrigger-CosWzk9C.js";import"./OverlayContextProvider-BlSJPydV.js";import"./FieldError-D2O_dT2D.js";import"./FieldError-B9G53mk8.js";import"./AlertText-DgwQ_4kg.js";import"./useRef-CZJNdnDd.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./remote-DD9qKW4I.js";import"./Heading-Bg25gZBW.js";import"./useFormValidation-BLPWS9Vb.js";import"./Input-av1t-akK.js";import"./EmulatedBoldText-i2HM1out.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
