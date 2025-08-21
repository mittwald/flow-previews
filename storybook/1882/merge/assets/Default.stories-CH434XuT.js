import{r as h,j as e}from"./iframe-sBvqvo7_.js";import{F as t}from"./FileDropZone-CeO2ufmn.js";import{S as c}from"./Section-DCCkLpli.js";import{F as d}from"./FileCardList-BuNMJtjP.js";import{F as u}from"./FileCard-Pvb7x0cM.js";import{u as T,F as Z,t as _}from"./Form-BZahs9im.js";import{B as s}from"./Button-J4OQPVw4.js";import{A as b}from"./ActionGroup-CYkj3HcD.js";import{$ as x,a0 as k}from"./IconWarning-BMngykPL.js";import{H as F}from"./Heading-DL2JXIVD.js";import{F as f}from"./FileField-RO8yV9v0.js";import{T as U}from"./Text-C6wVel0M.js";import"./IllustratedMessage-DCqfsipA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./utils-B2LriU5l.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-CAc83Hwb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAWuGzS8.js";import"./useFocus-CVs-BOzj.js";import"./useCollator-B6u88yWd.js";import"./context-C3R-osbZ.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./Button-C8-y5amo.js";import"./ProgressBar-BAnWuAWU.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-seZ0T8mb.js";import"./useFocusRing-B1VapAs-.js";import"./useFocusable-DA4OWrdg.js";import"./VisuallyHidden-DUx1qTAb.js";import"./ContextMenuSection-DTqupSqy.js";import"./Action-DhYbBupW.js";import"./context-DwGzY_iF.js";import"./useStatic-Mefs6JzB.js";import"./browser-DLpa1UK_.js";import"./getActionGroupSlot-ZeckI-n0.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BQE4o9PA.js";import"./RSPContexts-E7RieiUt.js";import"./OverlayArrow-CI59sRmD.js";import"./useControlledState-B_tC48lN.js";import"./Collection-Cp6lnTRm.js";import"./CollectionBuilder-D_PhybFO.js";import"./Separator-CaNgrCXh.js";import"./Group-DK1ZbmQa.js";import"./SearchField-B2Einoci.js";import"./FieldError-D_EBRzZI.js";import"./Form-DRweiQ4m.js";import"./useTextField-D2S0T5Ek.js";import"./useFormReset-CzZ7gXc_.js";import"./TextField-Dg3JsHEK.js";import"./useEvent-vEElTzYQ.js";import"./SelectionManager-D2TfpwIm.js";import"./FocusScope-Emgqt3PD.js";import"./ColumnLayout-CwhiAala.js";import"./Avatar-HF2uaBDv.js";import"./AlertIcon-CC6BbgD1.js";import"./Image-CNw-ZVrq.js";import"./Link-CxjEWmHh.js";import"./ButtonView-DOuxtewh.js";import"./ContextMenuContent-De87WFZs.js";import"./Popover-Bl_o42lY.js";import"./DialogTriggerView-EBaL5yq6.js";import"./Switch-C_AUKnUD.js";import"./Label-DV1oDC-Q.js";import"./useToggleState-CFd5fbNo.js";import"./FieldError-BOIuciEr.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./Heading-BmYY4TiC.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-MyVSeX0t.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},E=w("submit"),m={},a={args:{accept:"image/png"},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(k,{}),e.jsx(F,{children:"Drop image"}),e.jsx(U,{children:"Only image/png images are allowed."}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},l={args:{multiple:!0},render:o=>{const[n,i]=h.useState(null);return e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:i,children:[e.jsx(x,{}),e.jsx(F,{children:"Drop files"}),e.jsx(f,{name:"file",onChange:i,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(d,{children:[...n??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]})}},p={render:o=>{const n=T(),i=_();return e.jsxs(Z,{form:n,onSubmit:E,children:[e.jsxs(c,{children:[e.jsxs(t,{...o,onChange:r=>n.setValue("file",r),children:[e.jsx(x,{}),e.jsx(F,{children:"Drop file"}),e.jsx(i,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(f,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(d,{children:[...n.watch("file")??[]].map(r=>e.jsx(u,{name:r.name},r.name))})]}),e.jsx(b,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var g,j,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,D,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
