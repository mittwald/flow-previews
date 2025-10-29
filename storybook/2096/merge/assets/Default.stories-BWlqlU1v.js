import{r as x,j as e}from"./iframe-Tz0J7D4Y.js";import{F as t}from"./FileDropZone-C_Js12b5.js";import{S as u}from"./Section-weR_orzI.js";import{F}from"./FileCardList-Dpi0sMbn.js";import{F as f}from"./FileCard-CpCf6sXP.js";import{u as S,F as C,t as D}from"./Form-BgW8CYzp.js";import{B as s}from"./Button-DpdNCW8h.js";import{A as y}from"./ActionGroup-B5YBX1jR.js";import{_ as j,$ as O}from"./IconWarning-GPTcuJJ8.js";import{H as g}from"./Heading-BX6R3J-D.js";import{F as h}from"./FileField-DG0o0OWw.js";import{T as b}from"./Text-C3A_eB8w.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-Dfrb9XiY.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./index-DcQDRvJj.js";import"./useFieldComponent-C0OSANtm.js";import"./utils-ja91N2Nx.js";import"./Text-c129sBMT.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-Uehxuchb.js";import"./useFocus-rnV-N6wP.js";import"./useCollator-Sp-uU6d6.js";import"./context-B1lt5Uf-.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dhdcn6rN.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./VisuallyHidden-uhmmiNoS.js";import"./ContextMenuSection-8rmu86AD.js";import"./Action-DDvM_T4v.js";import"./context-CCjUHDCq.js";import"./useStatic-BDAMVNvv.js";import"./browser-D-jX3MAX.js";import"./getActionGroupSlot-DlZypVxI.js";import"./dynamic-CoftMrEe.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./FocusScope-DD4VjzQ6.js";import"./ColumnLayout-DHfroZpG.js";import"./Avatar-CnkccHcH.js";import"./AlertIcon-b1gPnXMX.js";import"./Image-BMpi83IW.js";import"./Link-DJC3bHvp.js";import"./ContextMenuTriggerView-BDuMxfJs.js";import"./ContextMenuTrigger-BQpcwVIy.js";import"./OverlayTrigger-CPl48xIm.js";import"./ControlledNotification-36h8tVEY.js";import"./OverlayContextProvider-0YowFgKZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./Heading-BOPXGrjC.js";import"./useFormValidation-BhAnQ22o.js";import"./Input-fTg0rFoa.js";import"./useMakeFocusable-DcsG0xi9.js";import"./EmulatedBoldText-BtDnNRTP.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,l as Disabled,c as Multiple,m as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,ze as __namedExportsOrder,$e as default};
