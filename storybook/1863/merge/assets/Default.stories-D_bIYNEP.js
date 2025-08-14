import{r as h,j as e}from"./iframe-r2ISa6Vz.js";import{F as t}from"./FileDropZone-BIZD8lJq.js";import{S as c}from"./Section-BlibzvNJ.js";import{F as d}from"./FileCardList-DfQS3c7I.js";import{F as u}from"./FileCard-BNiUYO3x.js";import{u as O,F as T,t as _}from"./Form-BqQziiD9.js";import{B as s}from"./Button-MKxMP2k4.js";import{A as b}from"./ActionGroup-B6GN3Zlk.js";import{Y as x,Z as k}from"./IconWarning-DfNEkDa-.js";import{H as F}from"./Heading-m3kJy3BZ.js";import{F as f}from"./FileField-DDYTLfcx.js";import{T as U}from"./Text-DXIJD_mG.js";import"./IllustratedMessage-CnNNIBML.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./utils-DwHpNHaD.js";import"./intlStrings-ZMTSFH_M.js";import"./Text--yGrToJ3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C31-NaD3.js";import"./useFocus-De90M8h7.js";import"./useCollator-BnQV3F6v.js";import"./context-AXeZ-4C7.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./Button-B3sV0uoO.js";import"./ProgressBar-BIuQEpdf.js";import"./Label-D9vBeQ72.js";import"./Hidden-3Y5hF2-9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIA34O1p.js";import"./useFocusRing-Dm8SMHzX.js";import"./useFocusable-BHAsUzIM.js";import"./VisuallyHidden-DXZRkoBb.js";import"./ContextMenuSection-CV7sQIAK.js";import"./Action-D78VW4nY.js";import"./context-B0bSHq_C.js";import"./useStatic-TtOui2SW.js";import"./browser-vniJOv6A.js";import"./getActionGroupSlot-B_TikFXZ.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BtlI13OW.js";import"./RSPContexts-BxS850vN.js";import"./OverlayArrow-DAzMh1Ha.js";import"./useControlledState-DWYZHaxy.js";import"./Collection-C-bKGm-J.js";import"./CollectionBuilder-DCMEaYz9.js";import"./Separator-1SYB0Oyv.js";import"./Group-DmvaYMW3.js";import"./SearchField-Cl7GqbCS.js";import"./FieldError-h_DzRRQi.js";import"./Form-BGPVVXS4.js";import"./useTextField-N_W8v2lE.js";import"./useFormReset-Cehr99bh.js";import"./TextField-CeohDO7l.js";import"./useEvent-B23TrCpv.js";import"./SelectionManager-BzHF4j0O.js";import"./FocusScope-C4ChjLNl.js";import"./ColumnLayout-BIznnEPa.js";import"./Avatar-DWbZpB_h.js";import"./AlertIcon-j_JtrLPp.js";import"./Image-Cip8MuE7.js";import"./Link-DqPKixsc.js";import"./OptionsButton-Cdii9XEM.js";import"./ButtonView-CQw6_CKH.js";import"./ContextMenuContent-BmrbLNsp.js";import"./Popover-Dq68QE1x.js";import"./DialogTriggerView-PP0jMcbF.js";import"./Switch-CYp2TM6e.js";import"./Label-CqYrEG64.js";import"./useToggleState-BD-dggt1.js";import"./FieldError-CqMpihJO.js";import"./LoadingSpinner-BAfbRjK8.js";import"./Heading-C0VZeN9E.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-DORQB6U8.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
