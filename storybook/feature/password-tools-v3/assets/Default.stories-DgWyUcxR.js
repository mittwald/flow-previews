import{r as h,j as e}from"./iframe-k40rl9C_.js";import{F as t}from"./FileDropZone-Q48vwpHC.js";import{S as c}from"./Section-BGzgGzSQ.js";import{F as d}from"./FileCardList-BBorySd5.js";import{F as u}from"./FileCard-BYouHOrX.js";import{u as O,F as T,t as _}from"./Form-BHidgBam.js";import{B as s}from"./Button-kvMweZlt.js";import{A as b}from"./ActionGroup-BCcrSe-K.js";import{Y as x,Z as k}from"./IconWarning-Cbv9M52D.js";import{H as F}from"./Heading-CD53dk9d.js";import{F as f}from"./FileField-BIew9MZf.js";import{T as U}from"./Text-B-gvPcDV.js";import"./IllustratedMessage-7-3nNII6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DHimXFH6.js";import"./mergeRefs-DeLnkq3n.js";import"./index-0ME5rF8X.js";import"./utils-KRUPT0lQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BHVi9XYC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D45A24Bq.js";import"./useFocus-CSVfmLbx.js";import"./useCollator-84Y8Mk4i.js";import"./context-B7pdk5J-.js";import"./useLocalizedStringFormatter-DKKzTgA5.js";import"./Button-BPg5w5qS.js";import"./ProgressBar-CLj2PpPD.js";import"./Label-DIzINetI.js";import"./Hidden-U9FjqIX0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdMS6zrp.js";import"./useFocusRing-xJVp1dT7.js";import"./useFocusable-Bkb1JWUQ.js";import"./VisuallyHidden-CgVp0Wt0.js";import"./ContextMenuSection-ccfdorOp.js";import"./Action-B7n1-Sy0.js";import"./context-D0ri2Dmb.js";import"./useStatic-DmhG0skw.js";import"./browser-CjSC5npA.js";import"./getActionGroupSlot-U4y_tPB5.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DFB0ODmg.js";import"./RSPContexts-D3A90Utg.js";import"./OverlayArrow-QTNcdBpj.js";import"./useControlledState-BJUCb_CR.js";import"./Collection-kWkb4Zd-.js";import"./CollectionBuilder-ByxuUit6.js";import"./Separator-8D9fucmC.js";import"./Group-chjP6waA.js";import"./SearchField-CwrX6gQO.js";import"./FieldError-rn1TZOfn.js";import"./Form-c2DgNPZJ.js";import"./useTextField-C_psbwqH.js";import"./useFormReset-CIlCc03R.js";import"./TextField-SZ2aXgcA.js";import"./useEvent-DRBB5MX_.js";import"./SelectionManager-BMLyIVh6.js";import"./FocusScope-D54ZyU14.js";import"./ColumnLayout-D1FYaUcR.js";import"./Avatar-CfCYCnxI.js";import"./AlertIcon-CBlevsH8.js";import"./Image-CVD3iaGz.js";import"./Link-DPs53mkj.js";import"./OptionsButton-Czq7jH-N.js";import"./ButtonView-BlClRxR_.js";import"./ContextMenuContent-iEyI1AVJ.js";import"./Popover-Dc3psDpE.js";import"./DialogTriggerView-BqkYAwTD.js";import"./Switch-DkJ_WS1n.js";import"./Label-f_MJI4Fh.js";import"./useToggleState-DK0QoDyv.js";import"./FieldError-CXDHQN9H.js";import"./LoadingSpinner-BP4NYh9i.js";import"./Heading-aFM3slTD.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-BNBH8DgQ.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
