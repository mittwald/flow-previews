import{r as x,j as e}from"./iframe-C2cGCWBO.js";import{F as t}from"./FileDropZone-poVTkaSn.js";import{S as d}from"./Section-Di6ob6Kp.js";import{F as u}from"./FileCardList-DnY4bsOX.js";import{F}from"./FileCard-_7n98qc2.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-No661t4l.js";import{B as f}from"./Button-B41LUuF3.js";import{A as b}from"./ActionGroup-CWoZwwxK.js";import{a0 as j,a1 as B}from"./IconWarning-C4LD0r9W.js";import{H as g}from"./Heading-BMwLGtkc.js";import{F as h}from"./FileField-CwMuTnac.js";import{T as O}from"./Text-D3xXIOyH.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CvDAjNe8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./index-Du1kNfMe.js";import"./useFieldComponent-D_KC3UxI.js";import"./utils-CPzpSZL2.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D1LgYL-c.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./useFocus-O4uYrVbU.js";import"./useCollator-CsE89UJT.js";import"./context-2EfdQWx2.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./useFocusRing-wtbg8X8X.js";import"./Button-BneP87GG.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./useFocusable-DwbuT13T.js";import"./VisuallyHidden-C7EnMW_k.js";import"./ContextMenuSection-DuK0dlwa.js";import"./ActionBatch-BZcBHaPT.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./browser-BGhQMCSV.js";import"./getActionGroupSlot-C9frEoU7.js";import"./dynamic-DhyEqTLI.js";import"./Dialog-BW6BpcVd.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./FocusScope-7k8F4i3d.js";import"./ColumnLayout-BEyytD2J.js";import"./Avatar-Ry328RJe.js";import"./AlertIcon-B9QySSBk.js";import"./Image-BNktgY0S.js";import"./Link-B5M7mNHz.js";import"./OptionsButton-CjPCvmcX.js";import"./ButtonView-Bho7TPlx.js";import"./ContextMenuTriggerView-BPGjEZ2l.js";import"./ContextMenuTrigger-C91aIj9h.js";import"./OverlayTrigger-C08PeZoT.js";import"./OverlayContextProvider-BBwaePGz.js";import"./FieldError-DDTF9njD.js";import"./FieldError-DA6JIYnG.js";import"./AlertText-DYOBaLM3.js";import"./ActionGroupView-BtuZ06wd.js";import"./Content-CCqXW7YM.js";import"./Modal-Dch_39m9.js";import"./Overlay-BChO2yc4.js";import"./LoadingSpinner-DIaaAh-V.js";import"./Flex-D4R0lKsm.js";import"./useRef-DXSgO37m.js";import"./remote-w8RrxnGT.js";import"./Heading-Dg4rLfib.js";import"./useFormValidation-DV5s_XV1.js";import"./Input-B5OLadjP.js";import"./EmulatedBoldText-CQEy9dVT.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
