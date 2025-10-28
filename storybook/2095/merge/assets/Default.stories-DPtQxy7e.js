import{r as x,j as e}from"./iframe-DGdLAJHm.js";import{F as t}from"./FileDropZone-Ch7TTgu8.js";import{S as u}from"./Section-sBOUh03h.js";import{F}from"./FileCardList-BjHUupSq.js";import{F as f}from"./FileCard--fWdmnUE.js";import{u as S,F as C,t as D}from"./Form-C59BQnOt.js";import{B as s}from"./Button-B6Mqr-fI.js";import{A as y}from"./ActionGroup-CQD4NXmL.js";import{_ as j,$ as O}from"./IconWarning-BY1Q-g8P.js";import{H as g}from"./Heading-CRDqmGt0.js";import{F as h}from"./FileField-P2usiIao.js";import{T as b}from"./Text-DFxon6If.js";import"./index-nuYtCEEu.js";import"./IllustratedMessage-D-DAYBiu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D7HGs2AA.js";import"./index-JbK8SDWv.js";import"./index-BZginMRh.js";import"./useFieldComponent-sq1ZsD9O.js";import"./utils-DMxNMt2r.js";import"./Text-C5DwW8tZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-bPIN5y_s.js";import"./ClearPropsContext-DfqGN335.js";import"./intlStrings-ZMTSFH_M.js";import"./useLabel-DLeCNjtK.js";import"./useFocus-Cj45nHC3.js";import"./useCollator--gwTay33.js";import"./context-CokKTPHD.js";import"./useLocalizedStringFormatter-CSQJExWC.js";import"./Button-De2YyQVb.js";import"./ProgressBar-NfwVy8TS.js";import"./Label-DCzhvZl0.js";import"./Hidden-DDvTcAlv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B2gRAimw.js";import"./useFocusRing-Caix2y0_.js";import"./useFocusable-DBd_8M_L.js";import"./VisuallyHidden-Cu1Uufsu.js";import"./ContextMenuSection-DZLT8qvO.js";import"./Action-6ocxia9j.js";import"./context-B3SgFMfx.js";import"./useStatic-BT4grvBi.js";import"./browser-DtJMxQoE.js";import"./getActionGroupSlot-Dv56ESHT.js";import"./dynamic-DckDcmFh.js";import"./Dialog-CzLVI3sy.js";import"./RSPContexts-4eF2sDK2.js";import"./OverlayArrow-DsaarUgr.js";import"./useControlledState-C-kX1e6O.js";import"./Collection-BVDIRVc_.js";import"./CollectionBuilder--BI9tvyg.js";import"./SelectionIndicator-vtyMezuP.js";import"./Separator-C_iWvMGV.js";import"./SelectionManager-Bowb6aZq.js";import"./useEvent-CSYpBGU5.js";import"./FocusScope-Bl39wWwG.js";import"./ColumnLayout-BIg2_9re.js";import"./Avatar-DbymEK6N.js";import"./AlertIcon-DxCavQbn.js";import"./Image-DodqOn5E.js";import"./Link-7RMwdF8f.js";import"./ContextMenuTriggerView-nCfATmG9.js";import"./ContextMenuTrigger-8-eSY0GA.js";import"./OverlayTrigger-DmNswj_n.js";import"./ControlledNotification-CkQKgv8a.js";import"./OverlayContextProvider-BFOV3Eqf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./LoadingSpinner-Cx_Ae53U.js";import"./Heading-DVxPUCYC.js";import"./useFormValidation-LOSvoqzJ.js";import"./Input-BpAc-meC.js";import"./useMakeFocusable-Cph4dqrb.js";import"./EmulatedBoldText-l3o70VD0.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,$e={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},L=B("submit"),a={},l={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(O,{}),e.jsx(g,{children:"Drop image"}),e.jsx(b,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=S(),n=D();return e.jsxs(C,{form:i,onSubmit:L,children:[e.jsxs(u,{children:[e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(y,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
