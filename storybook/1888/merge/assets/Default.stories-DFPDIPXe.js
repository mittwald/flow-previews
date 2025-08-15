import{r as h,j as e}from"./iframe-CHDu_H0e.js";import{F as t}from"./FileDropZone-capvGpew.js";import{S as c}from"./Section-DCwwIVph.js";import{F as d}from"./FileCardList-D3P16zbx.js";import{F as u}from"./FileCard-BjYpk6Kk.js";import{u as O,F as T,t as _}from"./Form-J0Z5JjQu.js";import{B as s}from"./Button-Dmc7YjrG.js";import{A as b}from"./ActionGroup-DIURYoSw.js";import{Y as x,Z as k}from"./IconWarning-Cf1n4vGG.js";import{H as F}from"./Heading-BSC9400-.js";import{F as f}from"./FileField-CM725HlV.js";import{T as U}from"./Text-mNtFSOkr.js";import"./IllustratedMessage-C4Jmoy0X.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Z6o4UsMH.js";import"./mergeRefs-SbFyzkYd.js";import"./index-DtMG4pjF.js";import"./utils-DYZAD9ft.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-DpQKzoec.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-1w2C-Jw1.js";import"./useFocus-C89269kJ.js";import"./useCollator-P2wX32qN.js";import"./context-Bzaz4S39.js";import"./useLocalizedStringFormatter-B31V_hT3.js";import"./Button-Rg6_nSUL.js";import"./ProgressBar-C34PP_48.js";import"./Label-LmJ-o8gi.js";import"./Hidden-Crmdv3RK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-UC_sG4c4.js";import"./useFocusRing-BOwbbtAH.js";import"./useFocusable-vuFpOsuk.js";import"./VisuallyHidden-BP6BNrRi.js";import"./ContextMenuSection-D6Ep8e42.js";import"./Action-BkMFmAtx.js";import"./context-BsLhxCGe.js";import"./useStatic-ByFeMtaE.js";import"./browser-mouKiHlp.js";import"./getActionGroupSlot-DDu1koB4.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CCYlg5iI.js";import"./RSPContexts-CZTMu11O.js";import"./OverlayArrow-BpSuH-di.js";import"./useControlledState-DzyFh4kD.js";import"./Collection-BuIb3AWp.js";import"./CollectionBuilder-CF7zY--7.js";import"./Separator-_126g1b9.js";import"./Group-DC1YgkeM.js";import"./SearchField-DemnD7Hf.js";import"./FieldError-CKgwUKxI.js";import"./Form-BFPhVCnm.js";import"./useTextField-bDvKNILe.js";import"./useFormReset-Ct9qNa2Y.js";import"./TextField-DCfchb8N.js";import"./useEvent-CII2lm4p.js";import"./SelectionManager-C-zRxePL.js";import"./FocusScope-CpdigEHe.js";import"./ColumnLayout-CAP5Ax6Q.js";import"./Avatar-D29fRzeX.js";import"./AlertIcon-BN_TyFwo.js";import"./Image-JI17nYBo.js";import"./Link-ArvCoRaz.js";import"./ButtonView-CJmnRcD9.js";import"./ContextMenuContent-BUQpK_5q.js";import"./Popover-Cu5EZYnv.js";import"./DialogTriggerView-CT9wuhNv.js";import"./Switch-_RzCAzMz.js";import"./Label-C1IZgxKk.js";import"./useToggleState-Crkfud0d.js";import"./FieldError-CyvcfapH.js";import"./LoadingSpinner-BjRJkl53.js";import"./Heading-B1311qyI.js";import"./FormField.module-B9AzUSUD.js";import"./EmulatedBoldText-Bkss-Gur.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=O(),i=_();return e.jsxs(T,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ar=["Default","WithAcceptedTypes","Multiple","WithReactHookForm"];export{m as Default,l as Multiple,a as WithAcceptedTypes,p as WithReactHookForm,ar as __namedExportsOrder,mr as default};
