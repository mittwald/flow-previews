import{r as x,j as e}from"./iframe-DzjGvN4s.js";import{F as t}from"./FileDropZone-pomMkcaO.js";import{S as d}from"./Section-BM-LoTUP.js";import{F as u}from"./FileCardList-ksMWjhwM.js";import{F}from"./FileCard-v_UnjHPk.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BC1zJie2.js";import{B as f}from"./Button-BJ_Dg9g5.js";import{A as b}from"./ActionGroup-7GnL-udW.js";import{a0 as j,a1 as B}from"./IconWarning-s7NSVc-U.js";import{H as g}from"./Heading-J6woGLR_.js";import{F as h}from"./FileField-DLdaoqrs.js";import{T as O}from"./Text--QhKw61r.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Bq5Q0BYK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./useFieldComponent-BsZ1NoTf.js";import"./utils-CaY6-C_T.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CsTzsUsp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./useFocus-DFbK7vZ5.js";import"./useCollator-BxOUjI0N.js";import"./context-kL1uqGsw.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./useFocusRing-wMvVuuCP.js";import"./Button-BzmY1str.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D3so-j8A.js";import"./useFocusable-CvI9gOnC.js";import"./VisuallyHidden-SzhNhvGP.js";import"./ContextMenuSection-ehzNPOBV.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./useStatic-CvNWVJY5.js";import"./browser-DnRnaS9W.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./dynamic-D8j0vgwF.js";import"./Dialog-BxRkHkZu.js";import"./RSPContexts-D4WEG-B8.js";import"./OverlayArrow-k_B_Hrky.js";import"./useControlledState-DSekeTPZ.js";import"./Collection-BYckC4CV.js";import"./CollectionBuilder-60Hh4eJv.js";import"./SelectionIndicator-BO4ZIlru.js";import"./Separator-w2v2LtVY.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./FocusScope-D_QyZTFZ.js";import"./ColumnLayout-BqdcPCFc.js";import"./Avatar-DhxBI8_s.js";import"./AlertIcon-C0w0dGgz.js";import"./Image-Cis1BPLW.js";import"./Link-Bj886ruI.js";import"./OptionsButton-Dv6hGmHV.js";import"./ButtonView-BBrehocd.js";import"./ContextMenuTriggerView-0hd_K6i-.js";import"./ContextMenuTrigger-CCB6d4ip.js";import"./OverlayTrigger-tWzhZuXD.js";import"./OverlayContextProvider-kVoSIEPW.js";import"./FieldError-wOx9kOaR.js";import"./FieldError-Cm2eS0Qx.js";import"./AlertText-cLdL_XpT.js";import"./useRef-DhpslEjl.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./remote-cWDQ0h3n.js";import"./Heading-DMPfqJKh.js";import"./useFormValidation-CCaCqHBd.js";import"./Input-BbhuOsE_.js";import"./EmulatedBoldText-DBPO29Lf.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
