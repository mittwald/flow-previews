import{r as x,j as e}from"./iframe-BmKAGSU1.js";import{F as t}from"./FileDropZone-DlWYH_YO.js";import{S as d}from"./Section-Bl2UAmSX.js";import{F as u}from"./FileCardList-BHV8Tze_.js";import{F}from"./FileCard-Dp2-b3wr.js";import{u as S,F as C,t as D}from"./Form-BUFqVqMY.js";import{S as y}from"./ResetButton-AYS94spP.js";import{B as f}from"./Button-LvEI1uQm.js";import{A as b}from"./ActionGroup-C3uaClAH.js";import{Z as j,_ as B}from"./IconWarning-imbji-Kz.js";import{H as g}from"./Heading-DYtAXBUQ.js";import{F as h}from"./FileField-CIR0MEXm.js";import{T as O}from"./Text-C9Y-BRqi.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-F4A-7P1S.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./index-D3Sif_iZ.js";import"./useFieldComponent-DWe8fYc4.js";import"./utils-g5fx1pEf.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CWVum_CA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./useFocus-BW6_4Fc3.js";import"./useCollator-3U7lxjuh.js";import"./context-CxuOL-5x.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./Button-C5vvsijg.js";import"./ProgressBar-Cladi115.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-JhlebSO6.js";import"./useFocusRing-DBug8spT.js";import"./useFocusable-BP0ye7iu.js";import"./VisuallyHidden-Db2xRfqF.js";import"./ContextMenuSection-ChJFKHwG.js";import"./Action-DOyYDw1l.js";import"./context-B4Nnt3qw.js";import"./useStatic-7Dbn5SyA.js";import"./browser-SWtWUPW6.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./dynamic-4IbUBFl1.js";import"./Dialog-DjPgQ4DH.js";import"./RSPContexts-BuF39hXg.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useControlledState-TVCSEq66.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./FocusScope-ByKxlNca.js";import"./ColumnLayout-CvDCTckz.js";import"./Avatar-CWXxF6yE.js";import"./AlertIcon-C_ldaOZy.js";import"./Image-CBHdImMa.js";import"./Link-LBnBpt3Y.js";import"./OptionsButton-Bxp5QEsS.js";import"./ButtonView-BFGHLm5m.js";import"./ContextMenuTriggerView-BPS4cOrt.js";import"./ContextMenuTrigger-DS235DeN.js";import"./OverlayTrigger-CUUsPguv.js";import"./OverlayContextProvider-BxylxdNW.js";import"./FieldError-DTx5qYoC.js";import"./FieldError-DtXh5FLR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useRef-BPZx9XSF.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./remote-DfYMV5Tv.js";import"./Heading-Daf9Kt-W.js";import"./useFormValidation-BWMCHu6j.js";import"./Input-aV6cWdAR.js";import"./EmulatedBoldText-DkbId6Zn.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=D();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(y,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const er=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,er as __namedExportsOrder,$e as default};
