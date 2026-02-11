import{r as x,j as e}from"./iframe-DFKQ2QsC.js";import{F as t}from"./FileDropZone-DoXP8W-p.js";import{S as d}from"./Section-B7sZ2fly.js";import{F as u}from"./FileCardList-Db_hQmcw.js";import{F}from"./FileCard-BOCkOPRo.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-TRifYodf.js";import{B as f}from"./Button-CumhvKwr.js";import{A as b}from"./ActionGroup-SK2hDjUm.js";import{a0 as j,a1 as B}from"./IconWarning-BuA9AHid.js";import{H as g}from"./Heading-DbtDsfGc.js";import{F as h}from"./FileField-BYdBBKpv.js";import{T as O}from"./Text-BEPoPMFj.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-b5-8bdlu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./index-BLTW5Tcp.js";import"./useFieldComponent-R5E6D8Ic.js";import"./utils-BJXdD5he.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-D27_pVCF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./useFocus-BuPH9-PX.js";import"./useCollator-CO4w-iZj.js";import"./context-m8OE0ddO.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./useFocusRing-Dltr6KPm.js";import"./Button-DBkz1b5H.js";import"./ProgressBar-DQlWH-Q4.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CE-sEEB4.js";import"./useFocusable-C6PlbLtm.js";import"./VisuallyHidden-CKDTSDk1.js";import"./ContextMenuSection-DFA9uj7i.js";import"./Action-C10g_G2S.js";import"./context-DCw83PuI.js";import"./useStatic-BfD-d5xb.js";import"./browser-C3pjfYL0.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./dynamic-8YXtFeDo.js";import"./Dialog-BtwdVLzC.js";import"./RSPContexts-ta7dPUPH.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./FocusScope-B8-7lMpW.js";import"./ColumnLayout-D5Mqk4Dl.js";import"./Avatar-CaGa3_rW.js";import"./AlertIcon-D5_dS1m5.js";import"./Image-C3qvLo_W.js";import"./Link-D6w5LeM-.js";import"./OptionsButton-CWGO75e1.js";import"./ButtonView-AQo5jRtJ.js";import"./ContextMenuTriggerView-Bkmm4Xis.js";import"./ContextMenuTrigger-sBIsKvDl.js";import"./OverlayTrigger-BT52IZK9.js";import"./OverlayContextProvider-C7UAkNVd.js";import"./FieldError-DdERfCze.js";import"./FieldError-Bmf3SAas.js";import"./AlertText-BC9iPezU.js";import"./useRef-Bx3esIJs.js";import"./LoadingSpinner-DwolGT18.js";import"./remote-BP8uJVcU.js";import"./Heading-DOKJ2uYX.js";import"./useFormValidation-BX6OQ_jJ.js";import"./Input-9YEFu8mh.js";import"./EmulatedBoldText-CZthuZwX.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
