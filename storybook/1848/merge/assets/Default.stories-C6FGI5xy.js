import{r as h,j as e}from"./iframe-Czve8Ng1.js";import{F as t}from"./FileDropZone-bfLYHtxS.js";import{S as c}from"./Section-DEA4irc9.js";import{F as d}from"./FileCardList-Bb8mfHNT.js";import{F as u}from"./FileCard-ImrhMRRG.js";import{u as O,F as T,t as _}from"./Form-DPdhl0qo.js";import{B as s}from"./Button-D73APsNA.js";import{A as b}from"./ActionGroup-C0o4bhxw.js";import{Y as x,Z as k}from"./IconWarning-YJtY_uKm.js";import{H as F}from"./Heading-Dip8hB8T.js";import{F as f}from"./FileField-CD3B6UzH.js";import{T as U}from"./Text-CMgn7hJq.js";import"./IllustratedMessage-Cg-D4Hy1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./utils-C85tsJLi.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-xUaxq5aV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BFN45BzM.js";import"./useFocus-DLNoddQ5.js";import"./useCollator-Bl41TtO8.js";import"./context-D03EQw3p.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./Button-Cis11iQd.js";import"./ProgressBar-CQMCSPa7.js";import"./Label-BfVvFZj4.js";import"./Hidden-B3217TUg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocusable-DPi5-Rks.js";import"./VisuallyHidden-DTvv8wPC.js";import"./ContextMenuSection-BwsDvC0k.js";import"./Action-B4jn1mWw.js";import"./context-CNefDW5h.js";import"./useStatic-CzYWXmZ1.js";import"./browser-C659BIXC.js";import"./getActionGroupSlot-DCBGN5KI.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-DRA529j2.js";import"./RSPContexts-dpque2BF.js";import"./OverlayArrow-DAtBTKTJ.js";import"./useControlledState-BeXkP8kb.js";import"./Collection-CSylHNqr.js";import"./CollectionBuilder-Dt6aii9k.js";import"./Separator-C90j9JiE.js";import"./Group-D_IbuD73.js";import"./SearchField-C86J2fE8.js";import"./FieldError-CNai_82t.js";import"./Form-B2b0RBd7.js";import"./useTextField-l00Z-hVA.js";import"./useFormReset-BM4kigyU.js";import"./TextField-IalWcoDx.js";import"./useEvent-CJyM_iko.js";import"./SelectionManager-BrCB2ldz.js";import"./FocusScope-Cg_D6BEH.js";import"./ColumnLayout-eTrEY9Hp.js";import"./Avatar-DvptAv3_.js";import"./AlertIcon-CmNuaG4x.js";import"./Image-CXZUblZ2.js";import"./Link-1ZPcEWGT.js";import"./OptionsButton-BY3z3BXs.js";import"./ButtonView-DYb57vYx.js";import"./ContextMenuContent-ClrTuYGy.js";import"./Popover-DPRW9Y1r.js";import"./DialogTriggerView-7b1_XXj3.js";import"./Switch-DwlQZsGl.js";import"./Label-FUFGZTqe.js";import"./useToggleState-CNvQGslN.js";import"./FieldError-JfKFDbH2.js";import"./LoadingSpinner-B0jtDNpX.js";import"./Heading-DFvLozNS.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-CYlQsTFY.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
