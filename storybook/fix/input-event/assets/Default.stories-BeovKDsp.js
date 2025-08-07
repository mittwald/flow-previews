import{r as h,j as e}from"./iframe-Bl4Z707A.js";import{F as t}from"./FileDropZone-DO0bbpss.js";import{S as c}from"./Section-XBpvj9Ol.js";import{F as d}from"./FileCardList-CNcCfkb2.js";import{F as u}from"./FileCard-BF5T-tLB.js";import{u as O,F as T,t as _}from"./Form-QL7RCKvX.js";import{B as s}from"./Button-CAeJc8Z4.js";import{A as b}from"./ActionGroup-C1Fczimo.js";import{Y as x,Z as k}from"./IconWarning-BzUaRhpv.js";import{H as F}from"./Heading-DE_gUSoO.js";import{F as f}from"./FileField-BNlZPQf1.js";import{T as U}from"./Text-NIRm_0Gu.js";import"./IllustratedMessage-CnJlRyMw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BOV7_qOz.js";import"./mergeRefs-Cl6DsAU2.js";import"./index-Ct7SW8Jp.js";import"./utils-B5rgjLnQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DhMTI7iw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CUTayXOd.js";import"./useFocus-CBM9z24y.js";import"./useCollator-BR3Iakvu.js";import"./context-DCYh_tbU.js";import"./useLocalizedStringFormatter-65RopkTU.js";import"./Button-H_Ok05n0.js";import"./ProgressBar-Cbl5iDEF.js";import"./Label-G_0fE9c9.js";import"./Hidden-CHUtH-RP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cab7A3iT.js";import"./useFocusRing-CE5kArcs.js";import"./useFocusable-D6HN1uNY.js";import"./VisuallyHidden-DoxRRjGn.js";import"./ContextMenuSection-NKfRt_X1.js";import"./Action-Xhvrngkc.js";import"./context-BTbq7RPj.js";import"./useStatic-CbeUAfqO.js";import"./browser-CQSXz4Vb.js";import"./getActionGroupSlot-CiRXGJlD.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DBqZXEFY.js";import"./RSPContexts-Cn8bYmaC.js";import"./OverlayArrow-BA0zDJHh.js";import"./useControlledState-CTldHWvB.js";import"./Collection-Ujk4Ju59.js";import"./CollectionBuilder-OReuuDhF.js";import"./Separator-CHUHKizG.js";import"./Group-C53hMQbG.js";import"./SearchField-C3XyOz-3.js";import"./FieldError-C8A_yU5e.js";import"./Form-Ch0FWOcT.js";import"./useTextField-B3Re73jf.js";import"./useFormReset-knu-9Cub.js";import"./TextField-BXBGjaTA.js";import"./useEvent-Bs-KGgDm.js";import"./SelectionManager-BhBrKG28.js";import"./FocusScope-DPadz4__.js";import"./ColumnLayout-BPiZD-53.js";import"./Avatar-2FzAVJXp.js";import"./AlertIcon-BcABl2qu.js";import"./Image-BXjQTYvi.js";import"./Link-BDB5MTLS.js";import"./OptionsButton-BwtRb7pz.js";import"./ButtonView-CXEWg-me.js";import"./ContextMenuContent-CQqdH7Xa.js";import"./Popover-Be4hLP5F.js";import"./DialogTriggerView-y27VTJXE.js";import"./Switch-BosdjKCc.js";import"./Label-CPCFvVkX.js";import"./useToggleState-CfuDefkJ.js";import"./FieldError-QhX9CBNs.js";import"./LoadingSpinner-RrbLYMgz.js";import"./Heading-Chi5TgUg.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BAGT2_Bu.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
