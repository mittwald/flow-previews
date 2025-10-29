import{r as x,j as e}from"./iframe-B8r8XrPb.js";import{F as t}from"./FileDropZone-4h9MQZI3.js";import{S as u}from"./Section-DbQ-wmnj.js";import{F}from"./FileCardList-B2ocX_KH.js";import{F as f}from"./FileCard-CxyUXcGq.js";import{u as S,F as C,t as D}from"./Form-DuDUSxCv.js";import{B as s}from"./Button-x8S8uZ_3.js";import{A as y}from"./ActionGroup-COWTQNIi.js";import{_ as j,$ as O}from"./IconWarning-BnpSGPSL.js";import{H as g}from"./Heading-1GMm3hB8.js";import{F as h}from"./FileField-DQqzhJCO.js";import{T as b}from"./Text-CxxNxEUo.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-Cp2exh9C.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./index-ChMccDi0.js";import"./useFieldComponent-DByhNd_z.js";import"./utils-B2sHMxfy.js";import"./Text-DsIbOJYe.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-BX2g1WFh.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-Bn_yI2FK.js";import"./useFocus-Co_XlsN_.js";import"./useCollator-CG3LD3jQ.js";import"./context-d7knuPTA.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BPC_OlSs.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./VisuallyHidden-DvNHrLSk.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Action-DHR-Mkls.js";import"./context-tqHfsDuk.js";import"./useStatic-Qi3p0Ena.js";import"./browser-5JWtNQpe.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./dynamic-Bnt25vOJ.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./FocusScope-DHLNAyY7.js";import"./ColumnLayout-CKIo7WzD.js";import"./Avatar-5hMAy9hW.js";import"./AlertIcon-Dklw7WxY.js";import"./Image-2e8yuMBd.js";import"./Link-FGA3gtv3.js";import"./ContextMenuTriggerView-vdQkHKQU.js";import"./ContextMenuTrigger-DT_P0jYT.js";import"./OverlayTrigger-e3uC-u8g.js";import"./ControlledNotification-DGY7ssQ6.js";import"./OverlayContextProvider-C-xiKcZu.js";import"./FieldError-Cr-OeICt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-bZO-WOXG.js";import"./Heading-BM099qXJ.js";import"./useFormValidation-DuuScCCl.js";import"./Input-Cyh52Hgt.js";import"./useMakeFocusable-DmR7nfCv.js";import"./EmulatedBoldText-DH8-rljC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
