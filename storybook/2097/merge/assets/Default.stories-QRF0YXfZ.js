import{r as x,j as e}from"./iframe-9LT5pwxo.js";import{F as t}from"./FileDropZone-DHHGmHWV.js";import{S as u}from"./Section-BblLzrvZ.js";import{F}from"./FileCardList-_7LRsEf8.js";import{F as f}from"./FileCard-B3RJgown.js";import{u as S,F as C,t as D}from"./Form-CeOANQlL.js";import{B as s}from"./Button-DgX4Ha9j.js";import{A as y}from"./ActionGroup-DkE81dC5.js";import{_ as j,$ as O}from"./IconWarning-BGmK8I3p.js";import{H as g}from"./Heading-CsMeNISd.js";import{F as h}from"./FileField-koLPjyUk.js";import{T as b}from"./Text-FZjxGLxv.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-VbSIxnY0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useFieldComponent-FBKhS2uw.js";import"./utils-C12iYS2x.js";import"./Text-cT0V7Crl.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-D0_ysNiP.js";import"./useFocus-CGIGFm0L.js";import"./useCollator-D0xJkZLY.js";import"./context-CZZdPtMN.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CYkWbbQS.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./VisuallyHidden-kbtTP9xl.js";import"./ContextMenuSection-BA7OrQRH.js";import"./Action-CxBB9EbS.js";import"./context-CNHQEL1v.js";import"./useStatic-C20s3RtG.js";import"./browser-Be7wxfSs.js";import"./getActionGroupSlot-BSebOatG.js";import"./dynamic-Dp02ioFc.js";import"./Dialog-CLeuoHpB.js";import"./RSPContexts-D4jozd1E.js";import"./OverlayArrow-CBGQsLGC.js";import"./useControlledState-B0dx1ah2.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./FocusScope-ahtwD87J.js";import"./ColumnLayout-D148nTfF.js";import"./Avatar-BJgFzfQe.js";import"./AlertIcon-B-xh6-5s.js";import"./Image-C0hPpKAn.js";import"./Link-BPWcwyuw.js";import"./ContextMenuTriggerView-qAgrCiQX.js";import"./ContextMenuTrigger-CCBCzJhv.js";import"./OverlayTrigger-CKLv7_gg.js";import"./ControlledNotification-Dj9ZPYyt.js";import"./OverlayContextProvider-BxKLYzMZ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-7jpPXpdG.js";import"./Heading-BdTxNxt3.js";import"./useFormValidation-gXwoIgM4.js";import"./Input-CuGFAjVN.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./EmulatedBoldText-z8AdBhol.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
