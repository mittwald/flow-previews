import{r as x,j as e}from"./iframe-BYq2oLvG.js";import{F as t}from"./FileDropZone-Bv2lGby3.js";import{S as d}from"./Section-JjbD93jy.js";import{F as u}from"./FileCardList-B5w3Vzo6.js";import{F}from"./FileCard-DXdhGiKc.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-DzU46sAn.js";import{B as f}from"./Button-DnTJdD84.js";import{A as b}from"./ActionGroup-Dlb7N04a.js";import{a0 as j,a1 as B}from"./IconWarning-l8NPf1u4.js";import{H as g}from"./Heading-CpBZdPdX.js";import{F as h}from"./FileField-dVgRMw0e.js";import{T as O}from"./Text-Df3o0vPg.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-yxp3uU-a.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./useFieldComponent-C42pk4aC.js";import"./utils-Da-bhZeG.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BsD4qVoX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./useFocus-BosBzJqA.js";import"./useCollator-BntQ465Q.js";import"./context-WfyLsYOo.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./useFocusRing-DoNt3T3i.js";import"./Button-Bk2CF5qa.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CABccGP2.js";import"./useFocusable-eOfLyRoH.js";import"./VisuallyHidden-4k4K_3kv.js";import"./ContextMenuSection-7fn1Gt6w.js";import"./ActionBatch-Bd-ykVKX.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./browser-CRRI-wfh.js";import"./getActionGroupSlot-BbvszDVH.js";import"./dynamic-bmDFV0NR.js";import"./Dialog-DIAje18X.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./useControlledState-B-JkoIYX.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./FocusScope-CUVzpEcF.js";import"./ColumnLayout-HwzCr8jk.js";import"./Avatar-BYmM3Hnr.js";import"./AlertIcon-DHHmiMC7.js";import"./Image-HzjlkNP7.js";import"./Link-TWxwANrT.js";import"./OptionsButton-CjiOg4xS.js";import"./ButtonView-BKc5Ch31.js";import"./ContextMenuTriggerView-D-punWzO.js";import"./ContextMenuTrigger-hZ5SnPfM.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./OverlayContextProvider-BMISrNul.js";import"./FieldError-Cq2wz6X1.js";import"./FieldError-3pauqY5q.js";import"./AlertText-BLnni9j6.js";import"./useRef-BSskHlCs.js";import"./LoadingSpinner-DIcYbI07.js";import"./remote-SGC31yDV.js";import"./Heading-CuMsOcSF.js";import"./useFormValidation-DIPf7gSr.js";import"./Input-2WqTMUAU.js";import"./EmulatedBoldText-2hwPnQKV.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
