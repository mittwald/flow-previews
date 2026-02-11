import{r as x,j as e}from"./iframe-BRGIT6aC.js";import{F as t}from"./FileDropZone-DTF-3TnR.js";import{S as d}from"./Section-DEfQkscU.js";import{F as u}from"./FileCardList-CwkUgFsu.js";import{F}from"./FileCard-ShfYtM7V.js";import{u as S,F as C,S as D,t as y}from"./ResetButton-Q24A8VNC.js";import{B as f}from"./Button-CQ_f9ZVl.js";import{A as b}from"./ActionGroup-DbWhQ292.js";import{a0 as j,a1 as B}from"./IconWarning-7xibGY50.js";import{H as g}from"./Heading-CNwpEC1p.js";import{F as h}from"./FileField-0oNTcqbh.js";import{T as O}from"./Text-RxDad6dn.js";import"./preload-helper-PPVm8Dsz.js";import"./IllustratedMessage-Cng2cMJP.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./index-CrtVPr5B.js";import"./useFieldComponent-CMRD4Pyo.js";import"./utils-D-ssFu49.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CBpyQBbE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./useFocus-Dz-IuM4k.js";import"./useCollator-B5DUtkng.js";import"./context-C5al0DRJ.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./useFocusRing-B_bORcJM.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CGLZGzkl.js";import"./useFocusable-Bmr3Drft.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./ContextMenuSection-a8sl_NQx.js";import"./Action-BloO9QUi.js";import"./context-Dnnfbmmg.js";import"./useStatic-3STTURCL.js";import"./browser-BYxlW31W.js";import"./dynamic-DJEA9S0A.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./FocusScope-D2KgIyLw.js";import"./ColumnLayout-CZ-n329w.js";import"./Avatar-DzpKHkA7.js";import"./AlertIcon-DeOHvzVA.js";import"./Image-BfX5pPp9.js";import"./Link-P7oQRvkg.js";import"./OptionsButton-3xLfxV3f.js";import"./ButtonView-Cu_PLq3T.js";import"./ContextMenuTriggerView-BkyO89KJ.js";import"./ContextMenuTrigger-B5OChGBh.js";import"./OverlayTrigger-DrqrLZow.js";import"./OverlayContextProvider-BehX_G0U.js";import"./FieldError-BPfKA2u4.js";import"./FieldError-f7o5-LTX.js";import"./AlertText-Ba5ab3-o.js";import"./useRef-BP6FbjN4.js";import"./LoadingSpinner-BjEAsOxv.js";import"./remote-B0Hk_38y.js";import"./Heading-er7MPh1O.js";import"./useFormValidation-D-IfNlYy.js";import"./Input-CEj_QPsV.js";import"./EmulatedBoldText-D5rj6KVU.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,Xe={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select file"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},H=L("submit"),s={},a={args:{isDisabled:!0}},m={args:{isReadOnly:!0}},l={args:{accept:"image/png"},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(B,{}),e.jsx(g,{children:"Drop image"}),e.jsx(O,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select image"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},p={args:{multiple:!0},render:o=>{const[n,i]=x.useState(null);return e.jsxs(d,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:i,children:e.jsx(f,{children:"Select files"})})]}),e.jsx(u,{children:[...n??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]})}},c={render:o=>{const n=S(),i=y();return e.jsxs(C,{form:n,onSubmit:H,children:[e.jsxs(d,{children:[e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{children:e.jsx(f,{variant:"outline",color:"dark",children:"Select file"})})]})}),e.jsx(u,{children:[...n.watch("file")??[]].map(r=>e.jsx(F,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(D,{children:"Upload"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
