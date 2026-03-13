import{r as h,j as e}from"./iframe-CtEjVB66.js";import{F as t}from"./FileDropZone-_eLfqr1d.js";import{S as p}from"./Section-B3QlijVL.js";import{F as c}from"./FileCardList-DoRVSsj8.js";import{F as d}from"./FileCard-DIqxA9Tm.js";import{u as g,F as j,S,t as C}from"./FormRootError-2xDo0dX3.js";import{B as u}from"./Button-BbnjmOHy.js";import{A as D}from"./ActionGroup-DvmIDtHK.js";import{a0 as x,a1 as B}from"./IconWarning-1CkAUSYF.js";import{H as F}from"./Heading-c1W7e3IT.js";import{F as f}from"./FileField-BlLRf3g6.js";import{T as L}from"./Text-QCKh6xRo.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-D17PvWrE.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./useFieldComponent-B7HNchXP.js";import"./utils-BuEQZICT.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-1qNOxJF7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useCollator-OQsKm26_.js";import"./useFocusRing-B5ekdd71.js";import"./context-DXMIHXTO.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Cre2k4PJ.js";import"./useFocusable-CocGrzXD.js";import"./VisuallyHidden-B96eA0GA.js";import"./ContextMenuSection-COxyh1Te.js";import"./ActionBatch-CDzJz977.js";import"./useOverlayController-BctbVInN.js";import"./useStatic-DVJZwH2g.js";import"./browser-CLHYf5YF.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./dynamic-BbkFIR2Q.js";import"./Dialog-vhqDwDKM.js";import"./RSPContexts-oGVR4C8S.js";import"./OverlayArrow-CZCYW2ow.js";import"./useControlledState-D0kLTbtR.js";import"./Collection-CxJJKT3U.js";import"./CollectionBuilder-DrURciPm.js";import"./SelectionIndicator-C1Ub3Y-f.js";import"./Separator-DZN-n_nE.js";import"./SelectionManager-CXnMaIVJ.js";import"./FocusScope-SeuSo2RO.js";import"./ColumnLayout-BJbm5gyv.js";import"./Avatar-CJ_n7NT3.js";import"./AlertIcon-BaGtIfyD.js";import"./Image-DEheCn3E.js";import"./Link-DMg6xFRD.js";import"./OptionsButton-B_K1qgCu.js";import"./ButtonView-Ci2JAKGf.js";import"./ContextMenuTriggerView-BH2Y4clJ.js";import"./ContextMenuTrigger-Dvm-yCzh.js";import"./OverlayTrigger-B8jwjQmG.js";import"./OverlayContextProvider-IvmWoi6C.js";import"./ActionGroupView-zAOXf7RN.js";import"./Content-BV9uIs25.js";import"./Modal-BLKh-L3K.js";import"./Overlay-BGmB2cy_.js";import"./LoadingSpinner-CJX4ksrz.js";import"./Flex-CBSP5RJa.js";import"./useRef-C8PAeYAN.js";import"./FieldError-BzQCv4a3.js";import"./FieldError-DJZxrTcD.js";import"./AlertText-DqjTg_vO.js";import"./remote-4O72-jdB.js";import"./Heading-DMz3CQ7g.js";import"./useFormValidation-ClIfwgLl.js";import"./Input-ByYkDHMz.js";import"./EmulatedBoldText-B5kV7YCs.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,rr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange","multiple"]}},args:{isDisabled:!1,isReadOnly:!1},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select file"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},H=y("submit"),s={},m={render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{accept:"image/png",...n,onChange:i,children:[e.jsx(B,{}),e.jsx(F,{children:"Drop image"}),e.jsx(L,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select image"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},a={args:{multiple:!0},render:n=>{const[o,i]=h.useState(null);return e.jsxs(p,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(u,{children:"Select files"})})]}),e.jsx(c,{children:[...o??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]})}},l={render:n=>{const o=g(),i=C();return e.jsxs(j,{form:o,onSubmit:H,children:[e.jsxs(p,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{children:e.jsx(u,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(c,{children:[...o.watch("file")??[]].map(r=>e.jsx(d,{name:r.name},r.name))})]}),e.jsx(D,{children:e.jsx(S,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone accept="image/png" {...props} onChange={setFiles}>
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ir=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Multiple,m as WithAcceptedTypes,l as WithReactHookForm,ir as __namedExportsOrder,rr as default};
