import{r as x,j as e}from"./iframe-C1IdntWq.js";import{F as t}from"./FileDropZone-sUfmNePg.js";import{S as d}from"./Section-AIy1dCAg.js";import{F as u}from"./FileCardList-MdAyAawZ.js";import{F}from"./FileCard-Ct_odarf.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-De-Psidt.js";import{B as f}from"./Button-mSWnhOmK.js";import{A as b}from"./ActionGroup-BahMWm8O.js";import{a0 as j,a1 as B}from"./IconWarning-BY-3yqWN.js";import{H as g}from"./Heading-CLkS-w3U.js";import{F as h}from"./FileField-5YqGxmDJ.js";import{T as O}from"./Text-W7h8_LNr.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CpAUDM0l.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./index-Coy6T-Pa.js";import"./useFieldComponent-o_u9PYdj.js";import"./utils-CNo0qaX0.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CkLpWhuM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./useFocus-HLQCbRtK.js";import"./useCollator-BHhXYjcX.js";import"./context-CuxmdylV.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./useFocusRing-DQuA22ZQ.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./useFocusable-Z0Y9nSjp.js";import"./VisuallyHidden-709t6SxP.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./ActionBatch-VQdQXkn7.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./browser-WXx3m9ky.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./dynamic-CUpn0zgH.js";import"./Dialog-DaGSiRkj.js";import"./RSPContexts-DcVP09I4.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./FocusScope-C2GkFJYp.js";import"./ColumnLayout-CAKeDK8G.js";import"./Avatar-RjhoB80e.js";import"./AlertIcon-CvmjcNLC.js";import"./Image-kYnAjVNm.js";import"./Link-BJ-FjQ2E.js";import"./OptionsButton-D-zytTy6.js";import"./ButtonView-UjagI0v2.js";import"./ContextMenuTriggerView-DtYysjAo.js";import"./ContextMenuTrigger-BD7zU6S1.js";import"./OverlayTrigger-B9t-MDtI.js";import"./OverlayContextProvider-Car-oabl.js";import"./FieldError-DsJ8c-ZE.js";import"./FieldError-DgBT4dcF.js";import"./AlertText-LATyc42T.js";import"./ActionGroupView-U73m2CoE.js";import"./Content-BSdmmpR7.js";import"./Modal-Cd8QIcZl.js";import"./Overlay-vUOl12kW.js";import"./LoadingSpinner-C4dBxxC2.js";import"./Flex-DyCVhYjZ.js";import"./useRef-m9duQCt_.js";import"./remote-DdxKfasm.js";import"./Heading-BVXFLwsq.js";import"./useFormValidation-CloSy7V5.js";import"./Input-Des9E_um.js";import"./EmulatedBoldText-COIRRGWk.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
