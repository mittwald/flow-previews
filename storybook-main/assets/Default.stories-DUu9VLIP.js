import{r as x,j as e}from"./iframe-CwpToEZy.js";import{F as t}from"./FileDropZone-D_E5Idlv.js";import{S as d}from"./Section-C5Yt0rDG.js";import{F as u}from"./FileCardList-Bz1RT_9N.js";import{F}from"./FileCard-DZF-ZlSj.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-BvevyXvN.js";import{B as f}from"./Button-Cw2xgR_6.js";import{A as b}from"./ActionGroup-Cke5umNz.js";import{a0 as j,a1 as B}from"./IconWarning-BRui_VYo.js";import{H as g}from"./Heading-BXHG1LZb.js";import{F as h}from"./FileField-DsKvlnEW.js";import{T as O}from"./Text-DRk3V-Fm.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-B7VHkqdI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cp6ETj3c.js";import"./index-BxA-n0N3.js";import"./index-G1voh-81.js";import"./useFieldComponent-CneqxYGw.js";import"./utils-3nROwXn_.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Cb4d8n7F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-XdPLXI.js";import"./useFocus-BFSvAolX.js";import"./useCollator-BrcTEP8q.js";import"./context-DWVDZDUv.js";import"./useLocalizedStringFormatter-BTLJGA-d.js";import"./useFocusRing-CJeIxJct.js";import"./Button-CuwTmUjn.js";import"./ProgressBar-DhACqixk.js";import"./Label-CzzCYqTs.js";import"./Hidden-CMtZVdai.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kUL6l53_.js";import"./useFocusable-ixEZOImu.js";import"./VisuallyHidden-CnggHClH.js";import"./ContextMenuSection-vq3x4ZL9.js";import"./ActionBatch-DcvnwnMD.js";import"./useOverlayController-C-oxUxCp.js";import"./useStatic-CYuvZ5-t.js";import"./browser-DhIaf7O7.js";import"./getActionGroupSlot-DtR43x--.js";import"./dynamic-CfOleVAa.js";import"./Dialog-CQ_DXP4m.js";import"./RSPContexts-DAz7wbZz.js";import"./OverlayArrow-Df1wGHjd.js";import"./useControlledState-BvlK1ysl.js";import"./Collection-Dl7KIP8C.js";import"./CollectionBuilder-CJ-2mfaT.js";import"./SelectionIndicator-ByN8hOyY.js";import"./Separator-DijFhA23.js";import"./SelectionManager-H4qhMfG1.js";import"./useEvent-IGYK55GI.js";import"./FocusScope-CBNoFIyM.js";import"./ColumnLayout-CCCmpUtK.js";import"./Avatar-DMfxqN6s.js";import"./AlertIcon-DEQIepDy.js";import"./Image-G40l7j9A.js";import"./Link-UOTtvUV0.js";import"./OptionsButton-BehIteks.js";import"./ButtonView-EQ3fadJN.js";import"./ContextMenuTriggerView-BOlqwjMt.js";import"./ContextMenuTrigger-Ba9AK00Z.js";import"./OverlayTrigger-Dh_IH1hG.js";import"./OverlayContextProvider-CBORYkOm.js";import"./FieldError-P_YSxT2d.js";import"./FieldError-BoYVEB6S.js";import"./AlertText-B3iqZ-8C.js";import"./ActionGroupView-BEWtiWZf.js";import"./Content-04TsN1VN.js";import"./Modal-09gASXkd.js";import"./Overlay-B3hqAdST.js";import"./LoadingSpinner-CN3jmE_K.js";import"./Flex-DxGhnD35.js";import"./useRef-Oq-jnguU.js";import"./remote-DRomu556.js";import"./Heading-CAz3skDU.js";import"./useFormValidation-pFRcrJM7.js";import"./Input-Nsfgb7CY.js";import"./EmulatedBoldText-YNefbpnq.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,or={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:n=>{const[o,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...n,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...o??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:n=>{const o=S(),i=y();return e.jsxs(C,{form:o,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...n,onChange:r=>o.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...o.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{s as Default,a as Disabled,p as Multiple,m as ReadOnly,l as WithAcceptedTypes,c as WithReactHookForm,nr as __namedExportsOrder,or as default};
