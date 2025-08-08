import{r as h,j as e}from"./iframe-BTcUxdaq.js";import{F as t}from"./FileDropZone-DRZYcfOw.js";import{S as c}from"./Section-C45a6-EC.js";import{F as d}from"./FileCardList-DEUk0qVd.js";import{F as u}from"./FileCard-B1E4rFsz.js";import{u as O,F as T,t as _}from"./Form-cnWxryyK.js";import{B as s}from"./Button-SMMW9b8C.js";import{A as b}from"./ActionGroup-BPYJCvNc.js";import{Y as x,Z as k}from"./IconWarning-DQhgAuti.js";import{H as F}from"./Heading-DyYm4rdv.js";import{F as f}from"./FileField-C-wYpZN1.js";import{T as U}from"./Text-Cyud7aU0.js";import"./IllustratedMessage-DWx360SC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./utils-QQf7G53U.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DQ5f9mUM.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-COrOgVB9.js";import"./useFocus-BGyfOFlp.js";import"./useCollator-BEdiRQuO.js";import"./context-DPBkKLSs.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./Button-R5yzYc06.js";import"./ProgressBar-DujcM5UT.js";import"./Label-N2lNAPH4.js";import"./Hidden-C0wGKKFL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CFIgJOpO.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocusable-BavwL0Gh.js";import"./VisuallyHidden-17OXXq4D.js";import"./ContextMenuSection-c8LljZuw.js";import"./Action-BD0CTwd4.js";import"./context-BOTu0wPK.js";import"./useStatic-D47W8BT_.js";import"./browser-B8OJoPhG.js";import"./getActionGroupSlot-CRqbjcra.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-Cp_7H9MS.js";import"./RSPContexts-BdDzjtbv.js";import"./OverlayArrow-BOe63Seg.js";import"./useControlledState-UFVvdmji.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./Group-Bij86ZzX.js";import"./SearchField-BjsA91o0.js";import"./FieldError-CZwoNVbm.js";import"./Form-BWd8hqS-.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./TextField-BAMKAOQn.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./FocusScope-_yP39RaH.js";import"./ColumnLayout-CxVGXlCX.js";import"./Avatar-Cdz-Wy1H.js";import"./AlertIcon-DqGtaRQX.js";import"./Image-B5JlVJeh.js";import"./Link-BFwgH6Cm.js";import"./OptionsButton-DMa1m94e.js";import"./ButtonView-DVLx5J0B.js";import"./ContextMenuContent-BED3D4Im.js";import"./Popover-cq_CoGS1.js";import"./DialogTriggerView-vV1bA8CD.js";import"./Switch-DTx9cjZv.js";import"./Label-Bgrifxv0.js";import"./useToggleState-C3oSUZJW.js";import"./FieldError-BsnxNcFL.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./Heading-BleUsbwQ.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CDVaFR1M.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,Z,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const lr=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,lr as __namedExportsOrder,ar as default};
