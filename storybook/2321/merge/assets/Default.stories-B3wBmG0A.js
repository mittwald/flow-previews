import{r as x,j as e}from"./iframe-BfVXcSwu.js";import{F as t}from"./FileDropZone-3bsF2h0C.js";import{S as d}from"./Section-D8BWSJOo.js";import{F as u}from"./FileCardList-f1dThZlg.js";import{F}from"./FileCard-DX1JY0lt.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-CMcHrOvU.js";import{B as f}from"./Button-BWaSf0b-.js";import{A as b}from"./ActionGroup-BhAYVJgP.js";import{a0 as j,a1 as B}from"./IconWarning-DP3Jd3bc.js";import{H as g}from"./Heading-gqF52g1x.js";import{F as h}from"./FileField-CmvUbP1x.js";import{T as O}from"./Text-DuT5OHtj.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-CzKIAJkb.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./index-CeMFBQ52.js";import"./useFieldComponent-CiLN9FTD.js";import"./utils-fXq1spu5.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DLMHe2l_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./useFocus-YiRiyJqJ.js";import"./useCollator-BH_ZCLE4.js";import"./context-BIORzbvt.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./useFocusRing-2MdBuBce.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CZJvw_K-.js";import"./useFocusable-Ct-dNppG.js";import"./VisuallyHidden-CW_0epyS.js";import"./ContextMenuSection-CkxzJqxG.js";import"./ActionBatch-CJiux6Y0.js";import"./context-C_1OFCCp.js";import"./useStatic-DbJ3Jck6.js";import"./browser-6PMbihrp.js";import"./getActionGroupSlot-DFXtDzme.js";import"./dynamic-BmLDKJfM.js";import"./Dialog-DclKvE_W.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./FocusScope-DYj4AULV.js";import"./ColumnLayout-BSe_43hE.js";import"./Avatar-CG1tod06.js";import"./AlertIcon-DMbcP_TF.js";import"./Image-CTJ8ZeMx.js";import"./Link-l8-PKUJy.js";import"./OptionsButton-aCqmdDRX.js";import"./ButtonView-ZDfm5U5H.js";import"./ContextMenuTriggerView-Bg3lai-I.js";import"./ContextMenuTrigger-CliJsYln.js";import"./OverlayTrigger-DRzwAl-J.js";import"./OverlayContextProvider-BGRrPnlE.js";import"./FieldError-DHMqnFf9.js";import"./FieldError-DwfvyaXU.js";import"./AlertText-DCHQhIzQ.js";import"./useRef-sZPdMa_K.js";import"./LoadingSpinner-uBvx8mS0.js";import"./remote-cx7SRDrO.js";import"./Heading-OAdJfP_j.js";import"./useFormValidation-BRgTVkeU.js";import"./Input-B7Gmgprj.js";import"./EmulatedBoldText-D7Dqf59X.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const $e=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,$e as __namedExportsOrder,Xe as default};
