import{r as h,j as e}from"./iframe-Djw2qN4N.js";import{F as t}from"./FileDropZone-ADX58S8T.js";import{S as c}from"./Section-DNxZKvB8.js";import{F as d}from"./FileCardList-C-O6J_qa.js";import{F as u}from"./FileCard-C_SCKiPY.js";import{u as T,F as Z,t as _}from"./Form-hrWuMNL-.js";import{B as s}from"./Button-DbUzlGPh.js";import{A as b}from"./ActionGroup-BtPM4DBw.js";import{$ as x,a0 as k}from"./IconWarning-CGeyKArL.js";import{H as F}from"./Heading-CEZ2AJaG.js";import{F as f}from"./FileField-BfuGnCt8.js";import{T as U}from"./Text-N2Xlqf-I.js";import"./IllustratedMessage-FXY7XN7d.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./utils-DHksHmrI.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-wW5QNV-A.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cdum_nIm.js";import"./useFocus-qvLuoihW.js";import"./useCollator-IeylOfPf.js";import"./context-SMG2uflK.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./Button-Cmn8DEd4.js";import"./ProgressBar-jq0-4j1i.js";import"./Label-BqIGEZIR.js";import"./Hidden-CQXH1kLj.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DmhdXdf4.js";import"./useFocusRing-zh24oNHk.js";import"./useFocusable-C2MDV8K7.js";import"./VisuallyHidden-DfkyRh3Z.js";import"./ContextMenuSection-BEABfHKC.js";import"./Action-U7vDxNUW.js";import"./context-D5-d9F9A.js";import"./useStatic-DLgn7tpr.js";import"./browser-CF3hFWtX.js";import"./getActionGroupSlot-jleWxawA.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-S7NRO65S.js";import"./RSPContexts-BWg1RNKY.js";import"./OverlayArrow-BC79QONy.js";import"./useControlledState-3RrKoOGV.js";import"./Collection-BBr6vmvw.js";import"./CollectionBuilder-nkz2VjEe.js";import"./Separator-_-XVNxdO.js";import"./Group-CPAHFVqL.js";import"./SearchField-3KlsKxhn.js";import"./FieldError-CaVGVfZY.js";import"./Form-fQWPP7Lo.js";import"./useTextField-YfVJ_Q8A.js";import"./useFormReset-Ciz8aHP_.js";import"./TextField-CI5mY1Ro.js";import"./useEvent-Dc_urDPd.js";import"./SelectionManager-VfQb8aC7.js";import"./FocusScope-xrFWyxY9.js";import"./ColumnLayout-BgsfOOfG.js";import"./Avatar-HPcrS7GU.js";import"./AlertIcon-Bh52D1Hu.js";import"./Image-BH97yIW-.js";import"./Link-C2b0Iizq.js";import"./ButtonView-C2C5B0ut.js";import"./ContextMenuContent-CGAiRdiA.js";import"./Popover-BxXe92TW.js";import"./DialogTriggerView-Cii_d7-u.js";import"./Switch-VDhugp-V.js";import"./Label-DW829cz7.js";import"./useToggleState-BGJWHeBD.js";import"./FieldError-Dy-AF12R.js";import"./LoadingSpinner-DRHSwImm.js";import"./Heading-B7P3iAP_.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-CB7N4Qe6.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,I,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
