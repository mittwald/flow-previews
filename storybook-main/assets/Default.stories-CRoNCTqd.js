import{r as h,j as e}from"./iframe-BwuZESNl.js";import{F as t}from"./FileDropZone-DdA9Ta5A.js";import{S as c}from"./Section-C6GReaar.js";import{F as d}from"./FileCardList-DgMVwGrF.js";import{F as u}from"./FileCard-CLXUjOIs.js";import{u as O,F as T,t as _}from"./Form-CTspdJcC.js";import{B as s}from"./Button-C-_knNCH.js";import{A as b}from"./ActionGroup-m872quru.js";import{Y as x,Z as k}from"./IconWarning-WAZUP-Ct.js";import{H as F}from"./Heading-DHkvDNzw.js";import{F as f}from"./FileField-BEyECy02.js";import{T as U}from"./Text-DpTMi7Hm.js";import"./IllustratedMessage-CH152fp_.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BusDQUVZ.js";import"./mergeRefs-Dzw8-qaC.js";import"./index-BsghocK6.js";import"./utils-DwFj3dGQ.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-BwbgPKEG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cozlv_-X.js";import"./useFocus-Co7EWAzt.js";import"./useCollator-D-5CGuzZ.js";import"./context-Bl9z0-Ez.js";import"./useLocalizedStringFormatter-CzmxkLVc.js";import"./Button-DTlvpG2l.js";import"./ProgressBar-DWIeEB0n.js";import"./Label-Dt17YKxE.js";import"./Hidden-B4snL9ZX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CLzpZvIT.js";import"./useFocusRing-CS-U_0il.js";import"./useFocusable-CJY6BQME.js";import"./VisuallyHidden-H0mCENoD.js";import"./ContextMenuSection-DjFLgsAY.js";import"./Action-Bt7uXbM9.js";import"./context-X7aiLuFr.js";import"./useStatic-B6vMCsEx.js";import"./browser-BKpgmdP8.js";import"./getActionGroupSlot-D2B53nCF.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-C5G24GfN.js";import"./RSPContexts-B82SnKIX.js";import"./OverlayArrow-Ct_bakog.js";import"./useControlledState-DDCrWfj9.js";import"./Collection-BUR6CQUz.js";import"./CollectionBuilder-MbnL1jCD.js";import"./Separator-x7E6VMeq.js";import"./Group-DZ7V6HJS.js";import"./SearchField-Cldn6FRa.js";import"./FieldError-DYnYqKIj.js";import"./Form-DMd5Q7rx.js";import"./useTextField-DPMhYcJW.js";import"./useFormReset-BKxc7BR_.js";import"./TextField-CAE6yhWA.js";import"./useEvent-D4npkP0f.js";import"./SelectionManager-BpegylfK.js";import"./FocusScope-CjFTNvkQ.js";import"./ColumnLayout-DP1mjVRV.js";import"./Avatar-BT_3CYgS.js";import"./AlertIcon-DPN8k0Dn.js";import"./Image-By8O0UPK.js";import"./Link-B9hJkRqz.js";import"./OptionsButton-DgHEoBf4.js";import"./ButtonView-CRchzgOG.js";import"./ContextMenuContent-BIBsH3TR.js";import"./Popover-CDL__2cK.js";import"./DialogTriggerView-CDdW0IZG.js";import"./Switch-D4IL-p9U.js";import"./Label-Bp0IrURb.js";import"./useToggleState-DyiFsGWy.js";import"./FieldError-5tmL22mm.js";import"./LoadingSpinner-Cad6y9w3.js";import"./Heading-BH8n_JJv.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CFTp_0vf.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
