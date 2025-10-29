import{r as x,j as e}from"./iframe-fd4MG1i8.js";import{F as t}from"./FileDropZone-ClTvjf3d.js";import{S as u}from"./Section-BCuosQzF.js";import{F}from"./FileCardList-B7gFmEFO.js";import{F as f}from"./FileCard-DPipnmK9.js";import{u as S,F as C,t as D}from"./Form-DdKBNKRS.js";import{B as s}from"./Button-VeSKQaWX.js";import{A as y}from"./ActionGroup-CZpdRo9u.js";import{_ as j,$ as O}from"./IconWarning-9sqw3U7E.js";import{H as g}from"./Heading-FU4sLZaF.js";import{F as h}from"./FileField-b_4xihvB.js";import{T as b}from"./Text-Dcd0JdvI.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-ZIX5DkVo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./useFieldComponent-CTpQ-XZg.js";import"./utils-Cwcb_ph1.js";import"./Text-Ct_tO_6D.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CIQCctRB.js";import"./ClearPropsContext-BW7itMIx.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DjhpIeNr.js";import"./useFocus-BWTUKGe5.js";import"./useCollator-DNAEXkDs.js";import"./context-Dbob8nST.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-P37V2JO8.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./VisuallyHidden-CO0qVHJy.js";import"./ContextMenuSection-Blc2hqiU.js";import"./Action-b6bvpWZ7.js";import"./context-BDEE0OGh.js";import"./useStatic-Dbv9nI-W.js";import"./browser-Dh_0Zrut.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./dynamic-BVBQ4rgw.js";import"./Dialog-CY6RGe7i.js";import"./RSPContexts-GsdtxIJ1.js";import"./OverlayArrow-CL_DkMYI.js";import"./useControlledState-oGGPnlEt.js";import"./Collection-Di6dMgr3.js";import"./CollectionBuilder-BBm98ofW.js";import"./SelectionIndicator-CThd_G6x.js";import"./Separator-BBkfumaa.js";import"./SelectionManager--Q9mVMbg.js";import"./useEvent-5AoaQB1j.js";import"./FocusScope-29AKamG2.js";import"./ColumnLayout-BD_c0O62.js";import"./Avatar-Bgj-MOnF.js";import"./AlertIcon-I_P5oCVA.js";import"./Image-BROTGKHd.js";import"./Link-5nNE-CCP.js";import"./ContextMenuTriggerView-DtJKZGI3.js";import"./ContextMenuTrigger-ZKbPFlOe.js";import"./OverlayTrigger-DGIX4Xyz.js";import"./ControlledNotification-C0H0ICA9.js";import"./OverlayContextProvider-DW6y0HIP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-BL8icCZR.js";import"./Heading--2_wnKY5.js";import"./useFormValidation-C8R7XiMh.js";import"./Input-CYK177a4.js";import"./useMakeFocusable-DLeuMSJI.js";import"./EmulatedBoldText-BOq1lZio.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
