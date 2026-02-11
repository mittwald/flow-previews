import{r as x,j as e}from"./iframe-C_YE0yRE.js";import{F as t}from"./FileDropZone-BsFbKWSR.js";import{S as d}from"./Section-BWKpbhUe.js";import{F as u}from"./FileCardList-DC4tOsJZ.js";import{F}from"./FileCard-BelDMR-B.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-D2UrtdpI.js";import{B as f}from"./Button-D40FTP7t.js";import{A as b}from"./ActionGroup-BYxz3pVX.js";import{a0 as j,a1 as B}from"./IconWarning-Cxe6oNxX.js";import{H as g}from"./Heading-Bwe8YU0o.js";import{F as h}from"./FileField-BKTxhUJ4.js";import{T as O}from"./Text-DHPE0I2s.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-ZNSk74he.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./index-C1o6XGyU.js";import"./useFieldComponent-CWA258Fl.js";import"./utils-DHqPz2V6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BXWHLDC_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./useFocus-CNnZns0Y.js";import"./useCollator-Be000Qje.js";import"./context-BsGh4Cu8.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./useFocusRing-BwrpFxJK.js";import"./Button-DRed6E24.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNy1k_Tf.js";import"./useFocusable-CsoKnWSE.js";import"./VisuallyHidden-DZpEB13Q.js";import"./ContextMenuSection-DRxdJG8v.js";import"./Action-CzLuBWBI.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./browser-BLJ3u5oR.js";import"./dynamic-DNhRkZnt.js";import"./getActionGroupSlot-C_onwoh9.js";import"./Dialog-BXH836dM.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./FocusScope-DmUSx-ox.js";import"./ColumnLayout-BPX_plNf.js";import"./Avatar-BoYy0FvN.js";import"./AlertIcon-ClTjLU4k.js";import"./Image-C_-0Cxtg.js";import"./Link-DJvldIWm.js";import"./OptionsButton-BaSJRU2m.js";import"./ButtonView-U1F2-uB-.js";import"./ContextMenuTriggerView-BW2speD3.js";import"./ContextMenuTrigger-G_k9Jgni.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./FieldError-DnihSG5_.js";import"./FieldError-C56-tCSc.js";import"./AlertText-CldvHevT.js";import"./useRef-CyvHklD5.js";import"./LoadingSpinner-CWKEQFJy.js";import"./remote-C68UFTqR.js";import"./Heading-BsEG12w_.js";import"./useFormValidation-CAUZ7uHC.js";import"./Input-BXDRgPwO.js";import"./EmulatedBoldText-CeaRH1vH.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
