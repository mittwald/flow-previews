import{r as x,j as e}from"./iframe-BbrP11p-.js";import{F as t}from"./FileDropZone-Cfkm346q.js";import{S as d}from"./Section-OZiyRnMf.js";import{F as u}from"./FileCardList-BcFP4Y8q.js";import{F}from"./FileCard-DrvJONA4.js";import{u as S,F as C,t as D,S as y}from"./ResetButton-C3DIgWLZ.js";import{B as f}from"./Button-D_6ZCoU5.js";import{A as b}from"./ActionGroup-aeCzi1SV.js";import{$ as j,a0 as B}from"./IconWarning-BeRGE0lU.js";import{H as g}from"./Heading-DRj7axTi.js";import{F as h}from"./FileField-CGpDSjxm.js";import{T as O}from"./Text-BLzGfhm5.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-sjkHF-qt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./index-CvmJvI2t.js";import"./useFieldComponent-CnZp8uAU.js";import"./utils-CfXF9mMB.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BmgQOLJ4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./useFocus-DdYA68cd.js";import"./useCollator-BxU86O8r.js";import"./context-Cg0av1qu.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./useFocusRing-D-e5pHmS.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VHqnVNy0.js";import"./useFocusable-ssdBLHPa.js";import"./VisuallyHidden-BCVFUf4T.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Action-DGTK2X9F.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./browser-CKsvW9Gw.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./dynamic-CazQQjW9.js";import"./Dialog-BH0tiGTi.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./FocusScope-DtyxLM97.js";import"./ColumnLayout-DhtCYTyE.js";import"./Avatar-Ck8GdWsy.js";import"./AlertIcon-B3ByzjK4.js";import"./Image-BtqlApfi.js";import"./Link-BoxK4WzO.js";import"./OptionsButton-DVqt9kf9.js";import"./ButtonView-vY_sxMN2.js";import"./ContextMenuTriggerView-Bo3d1u0w.js";import"./ContextMenuTrigger-CoWqqTGt.js";import"./OverlayTrigger-BZQRt9cD.js";import"./OverlayContextProvider-CX8G0M5v.js";import"./FieldError-i_FUROXt.js";import"./FieldError-C0mMT85u.js";import"./AlertText-7tARt4Et.js";import"./useRef-Cn0hFIKG.js";import"./LoadingSpinner-CoKKKOJW.js";import"./remote-BUE50-N_.js";import"./Heading-qDkwaMZ2.js";import"./useFormValidation-dfDtwXtG.js";import"./Input-CrFs98bJ.js";import"./EmulatedBoldText-j9VeSllR.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Qe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=D();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
