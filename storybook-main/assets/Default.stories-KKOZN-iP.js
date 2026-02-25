import{r as x,j as e}from"./iframe-CAK8FS83.js";import{F as t}from"./FileDropZone-Dc8VqxBc.js";import{S as d}from"./Section-CvIAO9t7.js";import{F as u}from"./FileCardList-qzy5MEWs.js";import{F}from"./FileCard-dLgh6CCC.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BkxxWY5H.js";import{B as f}from"./Button-itgufTCs.js";import{A as b}from"./ActionGroup-DOh7AJi0.js";import{a0 as j,a1 as B}from"./IconWarning-EFpx-Gs1.js";import{H as g}from"./Heading-C00t5x9z.js";import{F as h}from"./FileField-CWqaQwXU.js";import{T as O}from"./Text-DLuRhlhH.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-QRPOq9bA.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./index-CbMMdC0j.js";import"./useFieldComponent-DkAI1nDB.js";import"./utils-th26LVD6.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BoinRLOA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./useFocus-CUz8YQ_V.js";import"./useCollator-BmCOWQts.js";import"./context-Cva5eEgc.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./useFocusRing-Dri4WoMi.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYhFSapw.js";import"./useFocusable-wkYmEvUK.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./ContextMenuSection-gHmxmSmE.js";import"./ActionBatch-BT7PEprG.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./browser-Bqr1AXz8.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./dynamic-D8OXR4zz.js";import"./Dialog-Bg78UE4C.js";import"./RSPContexts-B_v10Iug.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./FocusScope-B2Hz6ms7.js";import"./ColumnLayout-CWMxmaJ_.js";import"./Avatar-BSGxcrTC.js";import"./AlertIcon-DLSo9NlW.js";import"./Image-BdrX5oKW.js";import"./Link-N8TmWUUa.js";import"./OptionsButton-C2Qj591S.js";import"./ButtonView-LoZK7xQ_.js";import"./ContextMenuTriggerView-Cp57dw4N.js";import"./ContextMenuTrigger-DHcLaObj.js";import"./OverlayTrigger-YvJHasJp.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./FieldError-Ijqs7ZUi.js";import"./FieldError-W7aOon2A.js";import"./AlertText-B2BWCbW6.js";import"./ActionGroupView-CCGUgUS0.js";import"./Content-DIxZ35M2.js";import"./Modal-C0YYyFVW.js";import"./Overlay-oKaaxmZR.js";import"./LoadingSpinner-BC7xHqe0.js";import"./Flex-CRH3-b1R.js";import"./useRef-CHg-rbUQ.js";import"./remote-BiZ00o_J.js";import"./Heading-CCBwW_g2.js";import"./useFormValidation-CCAHF_BW.js";import"./Input-G799xohA.js";import"./EmulatedBoldText-C97iA6m9.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
